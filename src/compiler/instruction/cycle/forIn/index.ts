import DataType, { DataTypeEnum, TokenInfo } from '../../../utils/types'
import VectorPositionValue from '../../value/vector/value'
import ExpAssignment from '../../assignment/expression'
import { getBuiltInMethod } from '../../value/tools'
import Instruction, { TAC } from '../../abstract'
import { addError } from '../../../utils/tools'
import CharValue from '../../value/character'
import FunctionBlock from '../../functions'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import IntValue from '../../value/int'
import Value from '../../value'

class ForInLoop extends Instruction {
  private isOnLoopContinue = false
  private isOnLoopBreak = false

  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      iterVariable: string
      iterReference: Value
      body: Instruction[]
    },
  ) {
    super(token, 'Loop')
  }

  // AGREGAR FUNCION DE SALIDA
  private addLoopControlFunction(
    scope: Scope,
    name: 'return' | 'break' | 'continue',
  ) {
    scope.addFunction(
      name,
      { type: DataTypeEnum.VOID },
      new FunctionBlock(this.token, {
        id: name,
        type: { type: DataTypeEnum.VOID },
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
            to3AC: () => ({ label: '', code: '' }),
            execute: () => {
              if (name == 'continue') this.isOnLoopContinue = true
              else this.isOnLoopBreak = true
              return true
            },
          },
        ],
        params: [],
      }),
    )
  }

  // GENERAR 3D
  public to3AC(scope: Scope, type?: DataType): TAC {
    throw new Error('Method not implemented.')
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // ASIGNAR VARIABLES DE INICIO
    const refType: DataType = this.props.iterReference.getType(scope)
    if (
      refType.type === DataTypeEnum.STRING ||
      refType.type === DataTypeEnum.ARRAY
    ) {
      let globalIndex: number = 0
      const containerScope: Scope = new Scope('Loop', 'for-in-container', scope)

      // AGREGAR FUNCIONES DE SALIDA
      this.addLoopControlFunction(containerScope, 'continue')
      this.addLoopControlFunction(containerScope, 'return')
      this.addLoopControlFunction(containerScope, 'break')
      this.isOnLoopContinue = false
      this.isOnLoopBreak = false

      const assignIter = (localScope: Scope) => {
        const newAssignment = new ExpAssignment(this.token, {
          id: this.props.iterVariable,
          exp: new Expression(this.token, {
            value:
              refType.type === DataTypeEnum.STRING
                ? new CharValue(
                    this.token,
                    getBuiltInMethod(
                      scope,
                      'characterOfPosition',
                      this.props.iterReference,
                      [globalIndex],
                    ) ?? '',
                  )
                : new VectorPositionValue(this.token, {
                    index: new Expression(this.token, {
                      value: new IntValue(this.token, globalIndex),
                    }),
                    value: this.props.iterReference,
                  }),
          }),
        })

        // ASIGNAR A ENTORNO
        newAssignment.execute(
          localScope,
          refType.type === DataTypeEnum.STRING
            ? { type: DataTypeEnum.CHARACTER }
            : this.props.iterReference.getType(localScope).gen,
        )
      }

      // EJECUTAR INSTRUCCIONES
      while (
        globalIndex <
          (getBuiltInMethod(scope, 'length', this.props.iterReference, []) ??
            0) &&
        !this.isOnLoopBreak
      ) {
        // CREAR ENTORNO
        const localScope: Scope = new Scope(
          'Loop',
          'for-in-content',
          containerScope,
        )

        assignIter(localScope)

        // EJECUTAR CONTENIDO DE LOOP
        for (
          let instructionCount = 0, length = this.props.body.length;
          instructionCount < length;
          instructionCount++
        ) {
          const instruction = this.props.body[instructionCount]
          if (!this.isOnLoopBreak && !this.isOnLoopContinue)
            instruction.execute(localScope)
          else {
            // REINICIAR CONTINUAR
            if (this.isOnLoopContinue) this.isOnLoopContinue = false
            break
          }
        }

        // CONTINUAR CICLO
        globalIndex++
      }
    } else addError(this.token, `El tipo ${refType} no es iterable.`)
  }
}

export default ForInLoop

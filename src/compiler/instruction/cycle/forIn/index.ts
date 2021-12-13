import DataType, { TokenInfo } from '../../../utils/types'
import ExpAssignment from '../../assignment/expression'
import { addError } from '../../../utils/tools'
import CharValue from '../../value/character'
import StringValue from '../../value/string'
import FunctionBlock from '../../functions'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Instruction from '../../abstract'
import Value from '../../value'
import IdValue from '../../value/id'
import { getBuiltInMethod } from '../../value/tools'

class ForInLoop {
  private isOnLoopContinue = false
  private isOnLoopBreak = false

  // CONSTRUCTOR
  constructor(
    private token: TokenInfo,
    public props: {
      iterVariable: string
      iterReference: Value
      body: Instruction[]
    },
  ) {}

  // AGREGAR FUNCION DE SALIDA
  private addLoopControlFunction(
    scope: Scope,
    name: 'return' | 'break' | 'continue',
  ) {
    scope.addFunction(
      name,
      DataType.VOID,
      new FunctionBlock(this.token, {
        id: name,
        type: DataType.VOID,
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
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

  // COMPILAR
  public execute(scope: Scope): void {
    // ASIGNAR VARIABLES DE INICIO
    const refType: DataType = this.props.iterReference.getType(scope)
    if (refType === DataType.STRING || refType === DataType.ARRAY) {
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
              refType === DataType.STRING
                ? new CharValue(
                    this.token,
                    getBuiltInMethod(
                      scope,
                      'characterOfPosition',
                      this.props.iterReference,
                      [globalIndex],
                    ) ?? '',
                  )
                : null, // TODO: Agregar arreglos
          }),
        })

        // ASIGNAR A ENTORNO
        newAssignment.execute(
          localScope,
          refType === DataType.STRING
            ? DataType.CHARACTER
            : this.props.iterReference.getGenType(localScope),
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

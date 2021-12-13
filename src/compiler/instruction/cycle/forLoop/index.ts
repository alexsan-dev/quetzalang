import DataType, { TokenInfo } from '../../../utils/types'
import Declaration from '../../assignment/declaration'
import FunctionBlock from '../../functions'
import Scope from '../../../runtime/scope'
import Assignment from '../../assignment'
import Expression from '../../expression'
import Instruction from '../../abstract'
import CycleControl from '../'

class ForLoop extends CycleControl {
  private isOnLoopContinue = false
  private isOnLoopBreak = false

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      assignments: (Assignment | Declaration)[]
      withDeclarations?: boolean
      modifiers: Assignment
      condition: Expression
      body: Instruction[]
    },
  ) {
    super(token, { condition: props.condition, body: props.body })
  }

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
    const containerScope: Scope = new Scope('Loop', 'for-container', scope)

    // AGREGAR FUNCIONES DE SALIDA
    this.addLoopControlFunction(containerScope, 'continue')
    this.addLoopControlFunction(containerScope, 'return')
    this.addLoopControlFunction(containerScope, 'break')
    this.isOnLoopContinue = false
    this.isOnLoopBreak = false

    // ASIGNAR VARIABLES DE INICIO
    this.props.assignments.forEach((assignment) =>
      assignment.execute(this.props.withDeclarations ? containerScope : scope),
    )

    // EJECUTAR INSTRUCCIONES
    while (
      this.props.condition
        .getValue(containerScope)
        ?.getValue(containerScope) !== false &&
      this.props.condition
        .getValue(containerScope)
        ?.getValue(containerScope) !== undefined &&
      !this.isOnLoopBreak
    ) {
      // CREAR ENTORNO
      const localScope: Scope = new Scope('Loop', 'for-content', containerScope)

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

      // EJECUTAR EXPRESIONES
      this.props.modifiers.execute(containerScope)
    }
  }
}

export default ForLoop

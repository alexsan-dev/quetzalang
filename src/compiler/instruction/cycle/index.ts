import { DataTypeEnum, TokenInfo } from '../../utils/types'
import FunctionBlock from '../functions'
import Scope from '../../runtime/scope'
import Expression from '../expression'
import Instruction from '../abstract'

class CycleControl extends Instruction {
  // GLOBALES
  private isOnContinue = false
  private isOnBreak = false

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      condition: Expression
      body: Instruction[]
      isDoLoop?: boolean
    },
  ) {
    super(token, 'Loop')
    this.addControlFunction = this.addControlFunction.bind(this)
    this.continueLoop = this.continueLoop.bind(this)
    this.breakLoop = this.breakLoop.bind(this)
  }

  private breakLoop = (value: boolean) => {
    this.isOnBreak = value
  }

  private continueLoop = (value: boolean) => {
    this.isOnContinue = value
  }

  // AGREGAR FUNCION DE SALIDA
  private addControlFunction(
    scope: Scope,
    name: 'Return' | 'Break' | 'Continue',
  ) {
    const that = this
    scope.addFunction(
      name.toLowerCase(),
      { type: DataTypeEnum.VOID },
      new FunctionBlock(this.token, {
        id: name.toLowerCase(),
        type: { type: DataTypeEnum.VOID },
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
            execute: () => {
              if (name === 'Continue') that.continueLoop(true)
              else that.breakLoop(true)
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
    // ENTORNO CONTENEDOR
    const containerScope: Scope = new Scope('Loop', 'while-container', scope)
    this.addControlFunction(containerScope, 'Continue')
    this.addControlFunction(containerScope, 'Return')
    this.addControlFunction(containerScope, 'Break')
    this.isOnContinue = false
    this.isOnBreak = false

    // EJECUTAR INSTRUCCIONES
    const runInstructions = (id: string) => {
      // CREA UN NUEVO ENTORNO
      const localScope: Scope = new Scope('Loop', id, containerScope)

      // RECORRER INSTRUCCIONES
      for (
        let instructionCount = 0, length = this.props.body.length;
        instructionCount < length;
        instructionCount++
      ) {
        const instruction = this.props.body[instructionCount]

        if (!this.isOnBreak && !this.isOnContinue)
          instruction.execute(localScope)
        else {
          // REINICIAR CONTINUAR
          if (this.isOnContinue) this.isOnContinue = false
          break
        }
      }
    }

    if (!this.props.isDoLoop)
      while (
        this.props.condition
          .getValue(containerScope)
          ?.getValue(containerScope) !== false &&
        this.props.condition
          .getValue(containerScope)
          ?.getValue(containerScope) !== undefined &&
        !this.isOnBreak
      )
        runInstructions('while-content')
    else
      do runInstructions('do while-content')
      while (
        this.props.condition
          .getValue(containerScope)
          ?.getValue(containerScope) !== false &&
        this.props.condition
          .getValue(containerScope)
          ?.getValue(containerScope) !== undefined &&
        !this.isOnBreak
      )
  }
}

export default CycleControl

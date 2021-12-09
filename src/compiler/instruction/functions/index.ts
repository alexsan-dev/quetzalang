// TOOLS
import DataType, { TokenInfo } from '../../utils/types'
import { addError } from '../../utils/tools'
import Scope from '../../runtime/scope'

// VALORES
import Instruction from '../abstract'
import Value from '../value'

class FunctionBlock extends Instruction {
  // GLOBALES
  private functionValue: Value | undefined
  private scope: Scope | undefined
  private isOnBreak = false

  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      id: string
      type: DataType | 'void'
      content: Instruction[]
      params: { type: DataType; id: string }[]
    },
  ) {
    super(token, 'Function')
    this.scope = {} as Scope
    this.functionValue = undefined
  }

  // OBTENER VALOR DE FUNCION
  public getValue(): Value | undefined {
    return this.functionValue
  }

  // ASIGNAR ENTORNO
  public setScope(scope: Scope): void {
    this.scope = new Scope('Function', this.props.id, scope)
    this.isOnBreak = false
    this.functionValue = undefined
    this.scope.addFunction(
      'return',
      'void',
      new FunctionBlock(this.token, {
        id: 'return',
        type: 'void',
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
            execute: () => {
              this.isOnBreak = true
              return true
            },
          },
        ],
        params: [],
      }),
    )
  }

  // COMPILAR FUNCION
  public execute(): void {
    // COMPILAR CONTENIDO
    for (
      let instructionIndex = 0, length = this.props.content.length;
      instructionIndex < length;
      instructionIndex++
    ) {
      if (this.scope) {
        if (!this.isOnBreak)
          this.props.content[instructionIndex].execute(this.scope)
        else break
      }
    }

    // OBTENER VALOR DE RETORNO
    if (this.scope && 'getVar' in this.scope)
      this.functionValue = this.scope?.getVar('return')

    if (this.props.type !== 'void') {
      const functionType = this.functionValue?.getType(this.scope)
      if (this.props.type === functionType) {
        addError(
          this.token,
          `La funcion retorna un ${functionType} pero se esperaba un ${this.props.type
          }`,
        )
      }
    }
  }

  // OBTENER ENTORNO DE FUNCION
  public getScope(): Scope | undefined {
    return this.scope
  }
}

export default FunctionBlock

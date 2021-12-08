// TOOLS
import DataType, { TokenInfo } from '../../utils/types'
import { addError } from '../../utils/tools'
import Scope from '../../runtime/scope'

// VALORES
import Instruction from '../abstract'
import Value from '../value'

class FunctionBlock extends Instruction {
  // GLOBALES
  private env: Scope | undefined
  private functionValue: Value | undefined
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
    this.env = {} as Scope
    this.functionValue = undefined
  }

  // OBTENER VALOR DE FUNCION
  public getValue(): Value | undefined {
    return this.functionValue
  }

  // ASIGNAR ENTORNO
  public setScope(env: Scope): void {
    this.env = new Scope('Function', this.props.id, env)
    this.isOnBreak = false
    this.functionValue = undefined
    this.env.addFunction(
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
  public execute(): boolean {
    // COMPILAR CONTENIDO
    const compiles: boolean[] = []
    for (
      let instructionIndex = 0, length = this.props.content.length;
      instructionIndex < length;
      instructionIndex++
    ) {
      if (this.env) {
        if (!this.isOnBreak)
          compiles.push(this.props.content[instructionIndex].execute(this.env))
        else break
      }
    }

    // OBTENER VALOR DE RETORNO
    if (this.env && 'getVar' in this.env)
      this.functionValue = this.env?.getVar('return')

    if (this.props.type !== 'void') {
      if (this.props.type === this.functionValue?.getType()) {
        return compiles.every((result: boolean) => result === true)
      } else {
        addError(
          this.token,
          `La funcion retorna un ${this.functionValue?.getType()} pero se esperaba un ${
            this.props.type
          }`,
        )

        return false
      }
    } else return true
  }

  // OBTENER ENTORNO DE FUNCION
  public getScope(): Scope | undefined {
    return this.env
  }
}

export default FunctionBlock

// TOOLS
import DataType, { TokenInfo } from '../../utils/types'
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
      type: DataType
      content: Instruction[]
      params: { type: DataType; id: string }[]
    },
  ) {
    super(token, 'Function')
    this.scope = {} as Scope
    this.functionValue = undefined
    this.isOnBreak = false
  }

  // OBTENER TIPO DE FUNCION
  public getType(): DataType {
    return this.props.type
  }

  // ASIGNAR ENTORNO
  public setScope(scope: Scope): void {
    this.scope = new Scope('Function', this.props.id, scope)
    this.isOnBreak = false
    this.functionValue = undefined

    this.scope.addFunction(
      'Return',
      DataType.VOID,
      new FunctionBlock(this.token, {
        id: 'Return',
        type: DataType.VOID,
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
  public getValue(scope: Scope): Value | undefined {
    // COMPILAR CONTENIDO
    for (
      let instructionIndex = 0, length = this.props.content.length;
      instructionIndex < length;
      instructionIndex++
    ) {
      if (scope) {
        if (!this.isOnBreak)
          this.props.content[instructionIndex].execute(scope)
        else break
      }
    }

    // OBTENER VALOR DE RETORNO
    if (this.props.type !== DataType.VOID) {
      if (scope && 'getVar' in scope)
        this.functionValue = scope.getVar('return')
    } else this.functionValue = undefined

    // VALOR
    return this.functionValue
  }

  // AGREGAR FUNCION
  public execute(scope: Scope): void {
    scope.addFunction(this.props.id, this.props.type, this)
  }

  // OBTENER ENTORNO DE FUNCION
  public getScope(): Scope | undefined {
    return this.scope
  }
}

export default FunctionBlock

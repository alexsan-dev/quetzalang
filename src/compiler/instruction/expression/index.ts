/* eslint-disable indent */
// TIPOS
import { Operator, TokenInfo } from '../../utils/types'
import Scope from '../../runtime/scope'
import Instruction from '../abstract'
import operateValues from './tools'
import Value from '../value'

// ASIGNACIONES
class Expression extends Instruction {
  private childToken: TokenInfo

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: Partial<{
      value: Value
      left: Expression
      right: Expression
      operator: Operator
      condition?: Expression
    }>,
  ) {
    super(token, 'Expression')
    this.childToken = token
  }

  // COMPILAR VALORES
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public execute(_scope?: Scope): void { }

  // OBTENER VALOR REAL
  public getValue(scope: Scope): Value {
    // OBTENER RESULTADOS ANTERIORES
    const left: Value | undefined = this.props.left?.getValue(scope)
    const right: Value | undefined = this.props.right?.getValue(scope)
    const condition: Value | undefined = this.props.condition?.getValue(scope)

    // OPERAR
    if (left) {
      if (this.props.operator) {
        const result: Value | undefined = operateValues(
          scope,
          this.childToken,
          left,
          this.props.operator,
          right,
          condition,
        )
        if (result) return result
      } else {
        return left
      }
    } else if (this.props.value) {
      return this.props.value
    }
  }
}

export default Expression

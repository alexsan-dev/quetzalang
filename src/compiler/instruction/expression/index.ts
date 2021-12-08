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
  public execute(_env?: Scope): boolean {
    return true
  }

  // OBTENER VALOR REAL
  public getValue(env: Scope): Value | undefined {
    // OBTENER RESULTADOS ANTERIORES
    const left: Value | undefined = this.props.left?.getValue(env)
    const right: Value | undefined = this.props.right?.getValue(env)
    const condition: Value | undefined = this.props.condition?.getValue(env)

    // OPERAR
    if (left) {
      if (this.props.operator) {
        const result: Value | undefined = operateValues(
          env,
          this.childToken,
          left,
          this.props.operator,
          right,
          condition,
        )
        if (result) return result
      } else {
        if (left.execute(env)) return left
      }
    } else if (this.props.value) {
      if (this.props.value.execute(env)) return this.props.value
    }
  }
}

export default Expression

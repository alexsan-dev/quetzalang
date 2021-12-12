import { DataValue, TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'

class Evaluate extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      breakLine: boolean
      id: string
    },
  ) {
    super(token, { ...props, id: 'Eval' }, true)
    this.props.id = 'Eval'
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return this.props.params[0]?.getValue(scope)?.getValue(scope)
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Evaluate

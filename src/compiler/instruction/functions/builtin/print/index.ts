import { TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import logs from '../../../../logs'

class Print extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      breakLine: boolean
      id: string
    }
  ) {
    super(token, { ...props, id: 'Print' }, true)
    this.props.id = 'Print'
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // OBTENER VALORES
    this.props.params.forEach((exp) => {
      const expValue = exp.getValue(scope)
      logs.push(expValue.getValue(scope))
      if (this.props.breakLine) logs.push('\n')
    })
  }
}

export default Print
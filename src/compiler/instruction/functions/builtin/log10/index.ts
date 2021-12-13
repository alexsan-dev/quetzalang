import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'

class Log10 extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'Log10' }, true)
    this.props.id = 'Log10'
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return Math.log10(
      (this.props.params[0]?.getValue(scope)?.getValue(scope) as number) ?? 0,
    )
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.DOUBLE
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Log10

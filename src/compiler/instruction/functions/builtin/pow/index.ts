import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'

class Pow extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'Pow' }, true)
    this.props.id = 'Pow'
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return Math.pow(
      (this.props.params[0]?.getValue(scope)?.getValue(scope) as number) ?? 0,
      (this.props.params[1]?.getValue(scope)?.getValue(scope) as number) ?? 1,
    )
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.DOUBLE
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Pow

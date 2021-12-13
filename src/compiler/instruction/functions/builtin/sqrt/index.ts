import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'

class Sqrt extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'Sqrt' }, true)
    this.props.id = 'Sqrt'
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.DOUBLE
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return Math.sqrt(
      (this.props.params[0]?.getValue(scope)?.getValue(scope) as number) ?? 0,
    )
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Sqrt

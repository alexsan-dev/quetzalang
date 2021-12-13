import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'

class Sin extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'Sin' }, true)
    this.props.id = 'Sin'
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.DOUBLE
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return Math.sin(
      (this.props.params[0]?.getValue(scope)?.getValue(scope) as number) ?? 0,
    )
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Sin

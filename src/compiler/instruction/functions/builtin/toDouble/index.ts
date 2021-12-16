import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'
import { getValueByType } from '../../../value/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import Value from '../../../value'

class ToDouble extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'ToDouble' }, true)
    this.props.id = 'ToDouble'
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(
      this.token,
      { type: DataTypeEnum.DOUBLE },
      this.getValue(scope),
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    const paramScopedValue = paramValue.getValue(scope)
    return parseFloat(paramScopedValue?.toString() ?? '0')
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return { type: DataTypeEnum.DOUBLE }
  }

  // COMPILAR
  public execute(_scope: Scope): void {}
}

export default ToDouble

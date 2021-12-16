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

class TypeOf extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'TypeOf' }, true)
    this.props.id = 'TypeOf'
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(
      this.token,
      { type: DataTypeEnum.STRING },
      this.getValue(scope),
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    console.log(paramValue.getType(scope))
    return paramValue.getType(scope).type
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return { type: DataTypeEnum.STRING }
  }

  // COMPILAR
  public execute(_scope: Scope): void {}
}

export default TypeOf

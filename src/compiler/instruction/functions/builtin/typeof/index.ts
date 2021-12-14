import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
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
    return getValueByType(this.token, DataType.STRING, this.getValue(scope))
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    return paramValue.getType(scope)
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.STRING
  }

  // OBTENER TIPO
  public getGenType(scope: Scope): DataType {
    return this.getType(scope)
  }

  // COMPILAR
  public execute(_scope: Scope): void {}
}

export default TypeOf

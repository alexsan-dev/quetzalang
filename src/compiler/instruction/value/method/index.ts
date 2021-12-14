import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Value from '..'
import {
  getBuiltInMethod,
  getBuiltInMethodType,
  getValueByType,
} from '../tools'

class ValueMethod extends Value {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      value: Value
      methodName: string
      params: Expression[]
    },
  ) {
    super(token, 'Value')
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, this.getType(scope), this.getValue(scope))
  }

  // OBTENER TIPO
  public getType(scope: Scope): DataType {
    return getBuiltInMethodType(scope, this.props.methodName, this.props.value)
  }

  // OBTENER TIPO GENERICO
  public getGenType(scope: Scope): DataType {
    return this.getType(scope)
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    const primitiveValues = this.props.params.map((val) =>
      val.getValue(scope).getValue(scope),
    )
    return getBuiltInMethod(
      scope,
      this.props.methodName,
      this.props.value,
      primitiveValues,
    )
  }

  public execute(_scope: Scope, _type?: string): void {}
}

export default ValueMethod
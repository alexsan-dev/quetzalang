import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import Value from '..'

class IdValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER NOMBRE DE ID
  public getId(): DataValue {
    return this.value
  }

  // OBTENER VARIABLE DE ID
  public getScopedValue(scope: Scope): Value {
    const scopedValue = scope.getVar((this.value as string) ?? '')
    return scopedValue
  }

  // OBTENER TIPO DE RESULTADO
  public getType(scope: Scope): DataType {
    return this.getScopedValue(scope)?.getType(scope)
  }

  // OBTENER VALOR CAST
  public getValue(scope: Scope): DataValue | undefined {
    return this.getScopedValue(scope)?.getValue(scope)
  }
}

export default IdValue

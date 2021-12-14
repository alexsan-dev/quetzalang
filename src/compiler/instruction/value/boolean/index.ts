import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Value from '..'

class BooleanValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return DataType.BOOLEAN
  }

  public getGenType(): DataType {
    return this.getType()
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue {
    return this.value === 'false'
      ? false
      : this.value === '0'
      ? false
      : Boolean(this.value)
  }
}

export default BooleanValue

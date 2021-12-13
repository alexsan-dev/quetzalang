import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Value from '..'

class IntValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return DataType.INTEGER
  }

  public getGenType(): DataType {
    return this.getType()
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue | undefined {
    return parseInt(this.value?.toString() ?? '0', 10)
  }
}

export default IntValue

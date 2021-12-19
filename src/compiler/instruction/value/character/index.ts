import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import Value from '..'

class CharValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return { type: DataTypeEnum.CHARACTER }
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue | undefined {
    return (this.value?.toString() ?? '0').charAt(0)
  }
}

export default CharValue

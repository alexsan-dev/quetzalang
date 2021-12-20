import { TAC } from 'compiler/instruction/abstract'
import { getLast3AC } from '../../../utils/tools'
import Value from '..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'

class BooleanValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // CODIGO 3D
  public to3AC(): TAC {
    return getLast3AC(this.getValue().toString())
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return { type: DataTypeEnum.BOOLEAN }
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue {
    return typeof this.value === 'boolean'
      ? this.value
      : this.value === 'false'
      ? false
      : this.value === '0'
      ? false
      : Boolean(this.value)
  }
}

export default BooleanValue

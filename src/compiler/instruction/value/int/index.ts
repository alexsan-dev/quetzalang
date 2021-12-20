import { TAC } from 'compiler/instruction/abstract'
import { getLast3AC } from '../../../utils/tools'
import Value from '..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'

class IntValue extends Value {
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
    return { type: DataTypeEnum.INTEGER }
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue | undefined {
    return typeof this.value === 'number'
      ? this.value
      : parseInt(this.value?.toString() ?? '0', 10)
  }
}

export default IntValue

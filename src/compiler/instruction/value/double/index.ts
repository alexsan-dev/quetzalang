import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import Value from '..'
import { setLast3AC } from 'compiler/utils/tools'
import { TAC } from 'compiler/instruction/abstract'

class DoubleValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // CODIGO 3D
  public to3AC(): TAC {
    return setLast3AC(this.getValue().toString()) // TODO: 3D para metodos
  }

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return { type: DataTypeEnum.DOUBLE }
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue | undefined {
    return typeof this.value === 'number'
      ? this.value
      : parseFloat(this.value?.toString() ?? '0')
  }
}

export default DoubleValue

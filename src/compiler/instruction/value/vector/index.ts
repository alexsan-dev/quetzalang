import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import Value from '..'

class VectorValue extends Value {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      value: DataValue
      type: DataType
    },
  ) {
    super(token, props.value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return { type: DataTypeEnum.ARRAY, gen: this.props.type }
  }

  // OBTENER LONGITUD
  public length(): DataValue {
    return (this.props.value as DataValue[])?.length ?? 0
  }

  public length_type(): DataTypeEnum {
    return DataTypeEnum.INTEGER
  }

  // AGREGAR VALOR
  public push(newVal: DataValue): void {
    // @ts-ignore
    this.props.value?.push(newVal)
  }

  public push_type(): DataTypeEnum {
    return DataTypeEnum.VOID
  }

  // OBTENER ULTIMO VALOR
  public pop(): DataValue {
    // @ts-ignore
    return this.props.value.pop()
  }

  public pop_type(): DataTypeEnum {
    return this.props.type.type
  }

  // OBTENER VALOR CAST
  public getValue(): DataValue {
    return this.props.value
  }
}

export default VectorValue

import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Value from '..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import { inferTypeValue } from '../tools'

class VectorValue extends Value {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public expValue: Expression[],
    public defValues?: DataValue[],
  ) {
    super(token, [])
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(scope: Scope): DataType {
    const valType = {
      type: DataTypeEnum.ARRAY,
      gen: this.defValues
        ? inferTypeValue(this.defValues).gen
        : this.expValue[0]?.getType(scope),
    }
    return valType
  }

  // OBTENER LONGITUD
  public length(): DataValue {
    console.log(this.value)
    return (this.defValues ?? this.expValue)?.length ?? 0
  }

  public length_type(): DataType {
    return { type: DataTypeEnum.INTEGER }
  }

  // AGREGAR VALOR
  public push(newVal: DataValue): void {
    console.log('ay', this.value)
  }

  public push_type(): DataType {
    return { type: DataTypeEnum.VOID }
  }

  // OBTENER ULTIMO VALOR
  public pop(): void {
    console.log('ay')
  }

  public pop_type(scope: Scope): DataType {
    return this.defValues
      ? inferTypeValue(this.defValues)
      : this.expValue[0]?.getType(scope)
  }

  // OBTENER VALOR CAST
  public getValue(scope: Scope): DataValue[] {
    const refValues =
      this.defValues ??
      this.expValue.map((exp) => exp.getValue(scope).getValue(scope))
    this.value = refValues
    return refValues
  }
}

export default VectorValue

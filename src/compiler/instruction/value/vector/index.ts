import { getValueByType, inferTypeValue } from '../tools'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Value from '..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import { add3AC } from 'compiler/utils/tools'
import { TAC } from 'compiler/instruction/abstract'

class VectorValue extends Value {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public expValue: Expression[],
    public defValues?: DataValue[],
  ) {
    super(token, [])
  }

  // CODIGO 3D
  public to3AC(): TAC {
    return add3AC({ label: '', code: '' }) // TODO: 3d para vectores
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(scope: Scope): DataType {
    const valType = this.defValues
      ? inferTypeValue(this.defValues)
      : {
          type: DataTypeEnum.ARRAY,
          gen: this.expValue[0]?.getType(scope),
        } // TODO: revisar esto
    return valType
  }

  // OBTENER LONGITUD
  public length(): DataValue {
    return (this.defValues ?? this.expValue)?.length ?? 0
  }

  public length_type(): DataType {
    return { type: DataTypeEnum.INTEGER }
  }

  // AGREGAR VALOR
  public push(newVal: DataValue): void {
    if (this.defValues.length) this.defValues.push(newVal)
    else if (this.expValue.length)
      this.expValue.push(
        new Expression(this.token, {
          value: getValueByType(this.token, inferTypeValue(newVal), newVal),
        }),
      )
  }

  public push_type(): DataType {
    return { type: DataTypeEnum.VOID }
  }

  // OBTENER ULTIMO VALOR
  public pop(scope: Scope): DataValue {
    const lastValue = (this.defValues ?? this.expValue).pop()
    if (typeof lastValue === 'object' && 'getValue' in lastValue) {
      return lastValue.getValue(scope).getValue(scope)
    } else return lastValue
  }

  public pop_type(scope: Scope): DataType {
    const values = this.defValues ?? this.expValue
    const lastValue = values[values.length - 1]
    if (typeof lastValue === 'object' && 'getValue' in lastValue) {
      return inferTypeValue(lastValue.getValue(scope).getValue(scope))
    } else return inferTypeValue(lastValue)
  }

  // OBTENER VALOR CAST
  public getValue(scope: Scope): DataValue[] {
    const refValues =
      this.defValues ??
      this.expValue.map((exp) => exp.getValue(scope).getValue(scope))
    return refValues
  }
}

export default VectorValue

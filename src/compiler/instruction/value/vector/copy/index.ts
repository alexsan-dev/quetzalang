import { add3AC, addError } from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import Value from '../..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'
import { getValueByType } from '../../tools'
import { TAC } from '../../../abstract'

class VectorCopyValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public props: { value: Value }) {
    super(token, '')
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, this.getType(scope), this.getValue(scope))
  }

  // CODIGO 3D
  public to3AC(): TAC {
    return add3AC({ label: '', code: '' }) // TODO: 3d para vectores
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue | undefined {
    if (this.props.value.getType(scope).type === DataTypeEnum.ARRAY) {
      const nextValue = this.props.value.getValue(scope) as DataValue[]

      // COPIAR CON SPREAD
      return [...nextValue]
    } else addError(this.token, 'No se pudo copiar el arreglo.')
  }

  // OBTENER VALOR CAST
  public getType(scope: Scope): DataType {
    return this.props.value.getType(scope)
  }
}

export default VectorCopyValue

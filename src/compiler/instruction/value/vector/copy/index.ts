import {
  add3AC,
  addError,
  getLast3AC,
  getTemporal3AC,
  setLast3AC,
} from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import { getValueByType } from '../../tools'
import { TAC } from '../../../abstract'
import Value from '../..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'

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
  public to3AC(scope: Scope): TAC {
    const lastTemporal = getTemporal3AC(true)
    const originArray = this.props.value.to3AC(scope)

    return add3AC({
      label: lastTemporal,
      code: lastTemporal,
      extra: `CC_MEMCPY(${lastTemporal}, ${originArray.code}, sizeof(${originArray.code}))`,
    }) // TODO: 3d para vectores
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

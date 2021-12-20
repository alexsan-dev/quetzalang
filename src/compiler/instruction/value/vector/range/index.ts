import { add3AC, addError } from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import VectorValue from '..'
import Value from '../..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'
import { TAC } from '../../../abstract'

class VectorRangeValue extends Value {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      value: VectorValue
      start: Expression | string
      end: Expression | string
    },
  ) {
    super(token, '')
    if (typeof this.props.start === 'string')
      this.props.start = this.props.start.toUpperCase()
    if (typeof this.props.end === 'string')
      this.props.end = this.props.end.toUpperCase()
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER VARIABLE DE ID
  public getScopedValue(scope: Scope): Value {
    return new VectorValue(this.token, [], this.getValue(scope))
  }

  // CODIGO 3D
  public to3AC(): TAC {
    return add3AC({ label: '', code: '' }) // TODO: 3d para vectores
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue[] | undefined {
    // OBTENER ARREGLO
    const arryValue = this.props.value.getValue(scope)

    // VALIDAR
    if (this.props.value.getType(scope).type === DataTypeEnum.ARRAY) {
      // OBTENER POSICION
      const getBeginOrEnd = (
        positionValue: Expression | string,
      ): Value | number => {
        // OBTENER POSICION
        let tmpPostion: Value | number = 0
        if (typeof positionValue === 'string')
          tmpPostion = parseInt(
            positionValue
              .replace('BEGIN', '0')
              .replace('END', `${arryValue.length}`),
          )
        else tmpPostion = positionValue.getValue(scope)

        // VALIDAR NAN
        return Number.isNaN(tmpPostion) ? 0 : tmpPostion
      }

      // VALORES DE POSICIONES
      const startValue = getBeginOrEnd(this.props.start)
      const endValue = getBeginOrEnd(this.props.end)

      // VALDAR INICIO, FINAL
      if (typeof startValue !== 'number')
        if (startValue.getType(scope).type !== DataTypeEnum.INTEGER) {
          addError(
            this.token,
            `La posicion de inicio debe ser un ${DataTypeEnum.INTEGER}`,
          )
          return
        }
      if (typeof endValue !== 'number')
        if (endValue.getType(scope).type !== DataTypeEnum.INTEGER) {
          addError(
            this.token,
            `La posicion de final debe ser un ${DataTypeEnum.INTEGER}`,
          )
          return
        }

      // RANGOS VALIDOS
      const startPosition =
        typeof startValue === 'number'
          ? startValue
          : (startValue.getValue(scope) as number)
      const endPosition =
        typeof endValue === 'number'
          ? endValue
          : (endValue.getValue(scope) as number)

      // VALIDAR RANGO
      if (startPosition >= 0 && endPosition < arryValue.length + 1) {
        return arryValue.slice(startPosition, endPosition)
      } else addError(this.token, `Posiciones fuera de rango para el arreglo.`)
    } else addError(this.token, `No se puede acceder al arreglo.`)
  }

  // OBTENER VALOR CAST
  public getType(scope: Scope): DataType {
    return this.props.value.getType(scope)
  }
}

export default VectorRangeValue

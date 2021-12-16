import Scope from '../../../runtime/scope'
import BooleanValue from '../boolean'
import CharValue from '../character'
import StringValue from '../string'
import DoubleValue from '../double'
import VectorValue from '../vector'
import IntValue from '../int'
import IdValue from '../id'
import Value from '..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'

export const BINDREGEX = /[.+]?\$(?:\(([^\n\r]+)\)|([^\)\n\r\s]+))/gm

/**
 * Obtener grupos de string
 * @param str
 * @returns
 */
const getStringBind = (str: string) => {
  // REGEX
  let m: RegExpExecArray

  // GRUPOS
  const groups: string[] = []
  while ((m = BINDREGEX.exec(str)) !== null) {
    if (m.index === BINDREGEX.lastIndex) BINDREGEX.lastIndex++
    m.forEach((match, groupIndex) => {
      if (match && (groupIndex === 1 || groupIndex === 2))
        groups.push(`eval(${match});`)
    })
  }

  // RETORNAR GRUPOS
  return groups
}

/**
 * Obtener valor primitivo
 * @param token
 * @param rType
 * @param rValue
 * @returns
 */
export const getValueByType = (
  token: TokenInfo,
  rType: DataType,
  rValue: DataValue,
): Value => {
  let value: Value | null = null
  switch (rType.type) {
    case DataTypeEnum.INTEGER:
      value = new IntValue(token, rValue)
      break
    case DataTypeEnum.DOUBLE:
      value = new DoubleValue(token, rValue)
      break
    case DataTypeEnum.STRING:
      value = new StringValue(token, rValue)
      break
    case DataTypeEnum.BOOLEAN:
      value = new BooleanValue(token, rValue)
      break
    case DataTypeEnum.CHARACTER:
      value = new CharValue(token, rValue)
      break
    case DataTypeEnum.ARRAY:
      if ('map' in (rValue as DataValue[]))
        value = new VectorValue(token, [], rValue as DataValue[])
    default:
      break
  }
  return value
}

/**
 * Obtener metodo nativo por valor primitivo
 * @param scope
 * @param methodName
 * @param value
 * @returns
 */
export const getBuiltInMethod = (
  scope: Scope,
  methodName: string,
  value: Value,
  params: DataValue[],
): DataValue | undefined => {
  const scopedVal = getScopedValue(scope, value)
  if (scopedVal)
    if (methodName in scopedVal) return scopedVal[methodName](...params)
}

/**
 * Obtener tipo de metodo
 * @param scope
 * @param methodName
 * @param value
 * @returns
 */
export const getBuiltInMethodType = (
  scope: Scope,
  methodName: string,
  value: Value,
): DataType => {
  const scopedVal = getScopedValue(scope, value)
  if (scopedVal)
    if (`${methodName}_type` in scopedVal)
      return scopedVal[`${methodName}_type`](scope) as DataType
}

/**
 * Obtener variable si es ID
 * @param scope
 * @param value
 * @returns
 */
export const getScopedValue = (
  scope: Scope,
  value: Value,
): Value | undefined => {
  // ES UN ID
  if (value) {
    if ('getScopedValue' in value) {
      return (value as IdValue).getScopedValue(scope)
    } else {
      return value
    }
  }
}

/**
 * Obtner tipo de valor primitivo
 * @param value
 * @returns
 */
export const inferTypeValue = (value: DataValue): DataType => {
  if (typeof value === 'object' && 'map' in (value as DataValue[])) {
    // VERIFICAR SI TODOS LOS TIPOS SON IGUALES
    if (
      (value as DataValue[]).every(
        (val) => typeof val === typeof (value as DataValue[])[0],
      )
    )
      return {
        type: DataTypeEnum.ARRAY,
        gen: inferTypeValue((value as DataValue[])[0]),
      }
    else return { type: DataTypeEnum.ARRAY, gen: { type: DataTypeEnum.STRUCT } }
  } else {
    if (typeof value === 'string') {
      if (value.length === 1) return { type: DataTypeEnum.CHARACTER }
      else return { type: DataTypeEnum.STRING }
    } else if (typeof value === 'number') return { type: DataTypeEnum.DOUBLE }
    else if (typeof value === 'boolean') return { type: DataTypeEnum.BOOLEAN }
    else return { type: DataTypeEnum.NULL }
  }
}

export default getStringBind

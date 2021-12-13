import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import BooleanValue from '../boolean'
import CharValue from '../character'
import DoubleValue from '../double'
import StringValue from '../string'
import IntValue from '../int'
import IdValue from '../id'
import Value from '..'

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
  switch (rType) {
    case DataType.INTEGER:
      value = new IntValue(token, rValue)
      break
    case DataType.DOUBLE:
      value = new DoubleValue(token, rValue)
      break
    case DataType.STRING:
      value = new StringValue(token, rValue)
      break
    case DataType.BOOLEAN:
      value = new BooleanValue(token, rValue)
      break
    case DataType.CHARACTER:
      value = new CharValue(token, rValue)
      break
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
  // ES UN ID
  if ('getScopedValue' in value) {
    return (value as IdValue).getScopedValue(scope)[methodName](...params)
  } else {
    if (methodName in value) return value[methodName](...params)
  }
}

export default getStringBind

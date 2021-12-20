// TIPOS
import type { JISONTokenInfo, TokenInfo } from './types'
import codes, { addTemporal } from '../lexical/3ac'
import { TAC } from '../instruction/abstract'
import errors from '../lexical/error'

/**
 * Obtener token
 * @param jisonToken
 * @returns
 */
const getToken = (jisonToken: JISONTokenInfo): TokenInfo => ({
  line: jisonToken.first_line,
  col: jisonToken.first_column + 1,
})

/**
 * Agregar error
 * @param token
 * @param msg
 * @param type
 */
export const addError = (
  token: TokenInfo,
  msg: string,
  type: 'Lex' | 'Syntax' | 'Semantic' = 'Semantic',
) => {
  errors.push({ token, msg, type })
}

/**
 * Agregar codigo 3 direcciones
 * @param code
 */
export const add3AC = (code: TAC): TAC => {
  codes.push(code)
  return code
}

/**
 * Obtener siguiente variable temporal
 * @returns
 */
export const getTemporal3AC = (add?: boolean) => {
  return `t${addTemporal(add)}`
}

/**
 * Obtener codigo 3D con ultimo temporal
 * @param code
 * @returns
 */
export const getLast3AC = (code: string): TAC => ({
  label: getTemporal3AC(false),
  code,
})

/**
 * Agregar codigo 3d con ultimo temporal
 * @param code
 * @returns
 */
export const setLast3AC = (code: string): TAC =>
  add3AC({
    label: getTemporal3AC(true),
    code,
  })

export default getToken

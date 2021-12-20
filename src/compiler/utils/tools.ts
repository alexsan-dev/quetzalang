// TIPOS
import type { JISONTokenInfo, TokenInfo } from './types'
import { TAC } from 'compiler/instruction/abstract'
import errors from '../lexical/error'
import codes, { addTemporal, tempCounter } from '../lexical/3ac'

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
export const getTemporal3AC = () => {
  return `t${addTemporal()}`
}

/**
 * Asignar codigo 3D con ultimo temporal
 * @param code
 * @returns
 */

export const setLast3AC = (code: string): TAC =>
  add3AC({
    label: getTemporal3AC(),
    code,
  })

export default getToken

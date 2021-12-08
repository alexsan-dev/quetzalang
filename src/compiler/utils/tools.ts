// TIPOS
import type { JISONTokenInfo, TokenInfo } from './types'
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

export default getToken

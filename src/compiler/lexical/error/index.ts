import { TokenInfo } from 'compiler/utils/types'

const errors: {
  type: 'Lex' | 'Syntax' | 'Semantic'
  msg: string
  token: TokenInfo
}[] = []

export default errors

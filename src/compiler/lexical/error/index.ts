import { TokenInfo } from 'compiler/utils'

const errors: {
  type: 'Lex' | 'Syntax' | 'Semantic'
  msg: string
  token: TokenInfo
}[] = []

export default errors

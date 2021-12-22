import { TokenInfo } from 'compiler/utils/types'

interface TokenSymbol extends TokenInfo {
  name: string
  token: string
}

const symbols: TokenSymbol[] = []
export default symbols

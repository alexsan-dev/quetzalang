// TOOLS
import symbols from 'compiler/lexical/symbols'
import errors from 'compiler/lexical/error'
import * as parser from 'parser'
import logs from 'compiler/logs'

// LISTA DE INSTRUCCIONES
// let instructions: unknown[] = []

// COMPILAR
const compile = (code: string) => {
  // REINICIAR
  symbols.length = 0
  errors.length = 0
  logs.length = 0

  // COMPILAR
  try {
    console.log(parser.parse(code))
  } catch (err) {
    console.warn(err)
  }
}

compile('int int')

export { compile }

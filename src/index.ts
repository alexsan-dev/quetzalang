// TOOLS
import symbols from 'compiler/lexical/symbols'
import errors from 'compiler/lexical/error'
import * as parser from 'parser'
import logs from 'compiler/logs'

// LISTA DE INSTRUCCIONES
let instructions: unknown[] = []

const compile = () => {
  const editor = document.querySelector(
    '#editor > textarea',
  ) as HTMLTextAreaElement
  const value = editor?.value ?? ''

  // REINICIAR
  symbols.length = 0
  errors.length = 0
  logs.length = 0

  // COMPILAR
  try {
    instructions = parser.parse(value as string)
    console.log(instructions)
  } catch (err) {
    console.log(err)
  }
}

// LIMPIAR CONSOLA
const cleanConsole = () => {
  // TEXTAREA
  const textarea = document.getElementById('console') as HTMLTextAreaElement
  textarea.value = ''
}

// EVENTOS
const setEvents = () => {
  const cleanBtn = document.getElementById('cleanBtn')
  const compileBtn = document.getElementById('runtimeBtn')

  compileBtn?.addEventListener('click', compile)
  cleanBtn?.addEventListener('click', cleanConsole)
  window.addEventListener('keydown', (ev: KeyboardEvent) => {
    // CONTROL KEY
    if (ev.ctrlKey || ev.metaKey) {
      let isCtrl = false

      if (ev.key === 'p') {
        compile()
        isCtrl = true
      } else if (ev.key === 'm') {
        cleanConsole()
        isCtrl = true
      }

      if (isCtrl) ev.preventDefault()
    }
  })
}
// CONSOLA
const bindConsole = () => {
  // TEXTAREA
  const textarea = document.getElementById('console') as HTMLTextAreaElement

  const console_log = window.console.log
  window.console.log = function (...args) {
    console_log(...args)

    if (!textarea) return
    args.forEach((arg) => {
      if (textarea)
        textarea.value += `${JSON.stringify(arg).substring(
          1,
          JSON.stringify(arg).length - 1,
        )}\n`
    })
  }
}

bindConsole()
setEvents()

export default bindConsole

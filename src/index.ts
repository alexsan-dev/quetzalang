// TOOLS
import symbols from 'compiler/lexical/symbols'
import errors from 'compiler/lexical/error'
import * as parser from 'parser'
import logs from 'compiler/logs'

// LISTA DE INSTRUCCIONES
let instructions: unknown[] = []
let expandedConsole = false

const compile = () => {
  // @ts-ignore
  const value = editor.getValue();

  // REINICIAR
  symbols.length = 0
  errors.length = 0
  logs.length = 0

  // COMPILAR
  try {
    instructions = parser.parse(value as string)
    console.log(instructions)
    if (errors.length) console.log(errors.join('\n'))
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

// OCULTAR CONSOLA
const collapseConsole = () => {
  // TEXTAREA
  const textarea = document.getElementById('console') as HTMLTextAreaElement
  const chevron = document.getElementById('chevron') as HTMLTextAreaElement

  textarea.style.height = expandedConsole ? '0px' : '40vh'
  textarea.style.padding = expandedConsole ? '33px 12px 12px 12px' : '54px 12px 12px 12px'
  chevron.style.transform = `rotate(${expandedConsole ? 180 : 0}deg)`
  setTimeout(() => {
    // @ts-ignore
    editor.resize(true)
  }, expandedConsole ? 250 : 450)

  expandedConsole = !expandedConsole
}

// GUARDAR CODIGO
const saveCode = () => {
  // @ts-ignore
  const value = editor.getValue();
  window.localStorage.setItem("code", value)
}

// EVENTOS
const setEvents = () => {
  const cleanBtn = document.getElementById('cleanBtn')
  const compileBtn = document.getElementById('runtimeBtn')
  const collapseBtn = document.getElementById('collapseBtn')
  const terminalBtn = document.getElementById('terminalBtn')
  const saveBtn = document.getElementById('saveBtn')

  compileBtn?.addEventListener('click', compile)
  cleanBtn?.addEventListener('click', cleanConsole)
  collapseBtn?.addEventListener('click', collapseConsole)
  terminalBtn?.addEventListener('click', collapseConsole)
  saveBtn?.addEventListener('click', saveCode)

  window.addEventListener('keydown', (ev: KeyboardEvent) => {
    // CONTROL KEY
    if (ev.ctrlKey || ev.metaKey) {
      let isCtrl = false

      if (ev.key === 'p') {
        compile()
        isCtrl = true
      } else if (ev.key === 'r') {
        cleanConsole()
        isCtrl = true
      } else if (ev.key === 'm') {
        collapseConsole()
        isCtrl = true
      } else if (ev.key === 's') {
        saveCode()
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

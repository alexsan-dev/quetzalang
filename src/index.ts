// TOOLS
import Instruction from 'compiler/instruction/abstract'
import symbols from 'compiler/lexical/symbols'
import errors from 'compiler/lexical/error'
import * as parser from 'parser'
import logs from 'compiler/logs'
import compile from 'compiler'

// LISTA DE INSTRUCCIONES
let instructions: Instruction[] = []
let expandedConsole = true

// EJECUTAR
const runCode = () => {
  cleanConsole()
  // @ts-ignore
  const value = editor.getValue();

  // REINICIAR
  symbols.length = 0
  errors.length = 0
  logs.length = 0

  // COMPILAR
  try {
    instructions = parser.parse(value as string) as Instruction[]
    compile(instructions)

    if (logs.length) console.log(logs.join(''))
    if (errors.length) console.error(errors)

  } catch {
    console.error("Error sintactico")
  }

  // ABRIR
  if (!expandedConsole) collapseConsole()
}

// LIMPIAR CONSOLA
const cleanConsole = () => {
  // TEXTAREA
  const textarea = document.getElementById('console') as HTMLTextAreaElement
  textarea.innerHTML = ''
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

// COMPARTIR CODIGO
const shareCode = () => {
  // @ts-ignore
  const value = editor.getValue();
  window.localStorage.setItem("code", value)
  const url = `${window.location.href}?code=${encodeURIComponent(value)}`

  if ('clipboard' in navigator)
    navigator.clipboard.writeText(url)
  if ('share' in navigator)
    navigator.share({
      title: 'Quetzalang',
      url
    })
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
  const shareBtn = document.getElementById('shareBtn')

  compileBtn?.addEventListener('click', runCode)
  cleanBtn?.addEventListener('click', cleanConsole)
  collapseBtn?.addEventListener('click', collapseConsole)
  terminalBtn?.addEventListener('click', collapseConsole)
  saveBtn?.addEventListener('click', saveCode)
  shareBtn?.addEventListener('click', shareCode)

  window.addEventListener('keydown', (ev: KeyboardEvent) => {
    // CONTROL KEY
    if (ev.ctrlKey || ev.metaKey) {
      let isCtrl = false

      if (ev.key === 'p') {
        runCode()
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
      } else if (ev.key === 'u') {
        shareCode()
        isCtrl = true
      }

      if (isCtrl) ev.preventDefault()
    }
  })
}
// CONSOLA
const bindConsole = (hide: boolean = false) => {
  if (!hide) {
    // TEXTAREA
    const textarea = document.getElementById('console') as HTMLTextAreaElement

    const logClousure = (mode: string, fallback: (...exp) => void) => function logFunction(...args) {
      fallback(...args)

      if (!textarea) return
      args.forEach((arg) => {
        if (textarea) {
          const parsedValue = JSON.stringify(arg, null, 2).replace(/\\n/g, '\n')
          const span = document.createElement("span")
          span.className = mode
          span.innerText = `${parsedValue.substring(1, parsedValue.length - 1)}`
          textarea.appendChild(span)
        }
      })
    }

    window.console.log = logClousure("clsLog", window.console.log)
    window.console.warn = logClousure("clsWarn", window.console.warn)
    window.console.error = logClousure("clsError", window.console.error)
  }
}

bindConsole()
setEvents()

export default bindConsole

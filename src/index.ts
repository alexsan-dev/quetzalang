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

// INTERPRETE
export const getInstructions = (value: string) => {
  try {
    return parser.parse(value) as Instruction[]
  } catch (err) {
    console.error('Error sintactico', err)
  }
}

// EJECUTAR
const runCode = () => {
  cleanConsole()
  // @ts-ignore
  const value = editor.getValue()

  // REINICIAR
  symbols.length = 0
  errors.length = 0
  logs.length = 0

  // COMPILAR
  instructions = getInstructions(value as string)
  compile(instructions)

  if (logs.length) console.log(logs.join(''))
  if (errors.length) console.error(errors)

  // ABRIR
  if (!expandedConsole) collapseConsole()
}

// ABRIR ARCHIVO
const openFile = (ev: Event) => {
  const { files } = ev.target as HTMLInputElement
  const fileReader = new FileReader()

  // LEER
  fileReader.onload = () => {
    const code: string = fileReader.result as string
    // @ts-ignore
    editor.setValue(code, -1)
  }

  fileReader.readAsText(files[0])
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
  textarea.style.padding = expandedConsole
    ? '33px 12px 12px 12px'
    : '54px 12px 12px 12px'
  chevron.style.transform = `rotate(${expandedConsole ? 180 : 0}deg)`
  setTimeout(
    () => {
      // @ts-ignore
      editor.resize(true)
    },
    expandedConsole ? 250 : 450,
  )

  expandedConsole = !expandedConsole
}

// COMPARTIR CODIGO
const shareCode = () => {
  // @ts-ignore
  const value = editor.getValue()
  window.localStorage.setItem('code', value)
  const url = `${window.location.href}?code=${encodeURIComponent(value)}`

  if ('clipboard' in navigator) navigator.clipboard.writeText(url)
  if ('share' in navigator)
    navigator.share({
      title: 'Quetzalang',
      url,
    })
}

// GUARDAR CODIGO
const saveCode = () => {
  // @ts-ignore
  const value = editor.getValue()
  window.localStorage.setItem('code', value)
}

// EVENTOS
const setEvents = () => {
  const collapseBtn = document.getElementById('collapseBtn')
  const uploadInput = document.getElementById('uploadInput')
  const terminalBtn = document.getElementById('terminalBtn')
  const compileBtn = document.getElementById('runtimeBtn')
  const uploadBtn = document.getElementById('uploadBtn')
  const shareBtn = document.getElementById('shareBtn')
  const cleanBtn = document.getElementById('cleanBtn')
  const saveBtn = document.getElementById('saveBtn')

  collapseBtn?.addEventListener('click', collapseConsole)
  terminalBtn?.addEventListener('click', collapseConsole)
  uploadInput?.addEventListener('change', openFile)
  cleanBtn?.addEventListener('click', cleanConsole)
  shareBtn?.addEventListener('click', shareCode)
  compileBtn?.addEventListener('click', runCode)
  saveBtn?.addEventListener('click', saveCode)

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
      } else if (ev.key === 'o') {
        uploadBtn?.click()
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

    const logClousure = (mode: string, fallback: (...exp) => void) =>
      function logFunction(...args) {
        fallback(...args)

        if (!textarea) return
        args.forEach((arg) => {
          if (textarea) {
            try {
              const parsedValue =
                JSON.stringify(arg, null, 2)?.replace(/\\n/g, '\n') ?? ''
              const span = document.createElement('span')
              span.className = mode
              span.innerText = `${parsedValue.substring(
                1,
                parsedValue.length - 1,
              )}`
              textarea.appendChild(span)
            } catch {
              console.error('Erorr al imprimir.\n')
            }
          }
        })
      }

    window.console.error = logClousure('clsError', window.console.error)
    window.console.warn = logClousure('clsWarn', window.console.warn)
    window.console.log = logClousure('clsLog', window.console.log)
  }
}

bindConsole()
setEvents()

export default bindConsole

// TOOLS
import codes, {
  clearLabelCounter,
  clearTemporalCounter,
} from 'compiler/lexical/3ac'
import Instruction from 'compiler/instruction/abstract'
import symbols from 'compiler/lexical/symbols'
import compile, { translate } from 'compiler'
import errors from 'compiler/lexical/error'
import logs from 'compiler/logs'
import * as parser from 'parser'

// LISTA DE INSTRUCCIONES
let instructions: Instruction[] = []
let expandedConsole = true
let tabIndex = 0

// ELEMENTOS
const consoleTextarea = document.getElementById(
  'console',
) as HTMLTextAreaElement
const editorContainer = document.getElementById(
  'editorsSlide',
) as HTMLDivElement

const translateTab = document.getElementById('translateTab')
const collapseBtn = document.getElementById('collapseBtn')
const uploadInput = document.getElementById('uploadInput')
const terminalBtn = document.getElementById('terminalBtn')
const runtimeBtn = document.getElementById('runtimeBtn')
const compileBtn = document.getElementById('compileBtn')
const tokensList = document.getElementById('tokensList')
const errorsList = document.getElementById('errorsList')
const reportsTab = document.getElementById('reportsTab')
const uploadBtn = document.getElementById('uploadBtn')
const editorTab = document.getElementById('editorTab')
const tokensBtn = document.getElementById('tokensBtn')
const shareBtn = document.getElementById('shareBtn')
const cleanBtn = document.getElementById('cleanBtn')
const saveBtn = document.getElementById('saveBtn')

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
  // CAMBIAR DE PESTAÑA
  tokensList.innerHTML = ''
  errorsList.innerHTML = ''
  if (tabIndex !== 0) changeTab(0)()

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

// TRADUCIR CODIGO
const translateCode = () => {
  if (instructions.length === 0) runCode()

  if (instructions.length) {
    // REINCIIAR
    codes.length = 0
    clearTemporalCounter()
    clearLabelCounter()

    // TRADUCIR
    translate(instructions)
    const translateCodes: string = codes
      .map((code) => {
        let final3AC: string = ''
        if (code.label === code.code) final3AC += code.label + ';\n'

        if (code.extra !== undefined) final3AC += `${code.extra}`
        else final3AC = `${code.label} = ${code.code};`
        return final3AC
      })
      .join('\n')
    editorTranslate.setValue(translateCodes, -1)

    // ABRIR PESTAÑA
    if (tabIndex !== 1) changeTab(1)()
  }
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
const cleanConsole = () => (consoleTextarea.innerHTML = '')

// CAMBIAR DE PESTAÑA
const changeTab = (index: number) => () => {
  tabIndex = index
  editorContainer.style.transform = `translateX(-${33.33 * tabIndex}%)`
  editorTab.style.borderColor = tabIndex === 0 ? '#2196f3' : 'transparent'
  reportsTab.style.borderColor = tabIndex === 2 ? '#2196f3' : 'transparent'
  translateTab.style.borderColor = tabIndex === 1 ? '#2196f3' : 'transparent'
}

// OCULTAR CONSOLA
const collapseConsole = () => {
  const chevron = document.getElementById('chevron')

  // TEXTAREA
  consoleTextarea.style.height = expandedConsole ? '0px' : '40vh'
  consoleTextarea.style.padding = expandedConsole
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

// GENERAR REPORTES
const generateReports = () => {
  // COMPILAR Y GENERAR
  if (instructions.length === 0) runCode()
  if (expandedConsole) collapseConsole()

  if (instructions.length) {
    // GENERAR SIMBOLOS
    symbols.forEach((symbol) => {
      // CREAR
      const li = document.createElement('div')
      const name = document.createElement('span')
      const token = document.createElement('span')
      const line = document.createElement('span')
      const col = document.createElement('span')

      // ASIGNAR
      name.innerHTML = symbol.name
      token.innerHTML = symbol.token
      line.innerHTML = symbol.line.toString()
      col.innerHTML = symbol.col.toString()

      // AGREGAR
      li.appendChild(name)
      li.appendChild(token)
      li.appendChild(line)
      li.appendChild(col)
      tokensList.appendChild(li)
    })

    // GENERAR ERRORES
    errors.forEach((symbol) => {
      // CREAR
      const li = document.createElement('div')
      const name = document.createElement('span')
      const token = document.createElement('span')
      const line = document.createElement('span')
      const col = document.createElement('span')

      // ASIGNAR
      name.innerHTML = symbol.type
      token.innerHTML = symbol.msg
      line.innerHTML = symbol.token.line.toString()
      col.innerHTML = symbol.token.col.toString()

      // AGREGAR
      li.appendChild(name)
      li.appendChild(token)
      li.appendChild(line)
      li.appendChild(col)
      errorsList.appendChild(li)
    })

    if (tabIndex !== 2) changeTab(2)()
  }
}

// EVENTOS
const setEvents = () => {
  collapseBtn?.addEventListener('click', collapseConsole)
  terminalBtn?.addEventListener('click', collapseConsole)
  translateTab?.addEventListener('click', changeTab(1))
  tokensBtn?.addEventListener('click', generateReports)
  compileBtn?.addEventListener('click', translateCode)
  editorTab?.addEventListener('click', changeTab(0))
  reportsTab.addEventListener('click', changeTab(2))
  uploadInput?.addEventListener('change', openFile)
  cleanBtn?.addEventListener('click', cleanConsole)
  shareBtn?.addEventListener('click', shareCode)
  runtimeBtn?.addEventListener('click', runCode)
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
      } else if (ev.key === 'e') {
        translateCode()
        isCtrl = true
      } else if (ev.key === 'k') {
        generateReports()
        isCtrl = true
      }

      if (isCtrl) ev.preventDefault()
    }
  })
}
// CONSOLA
const bindConsole = (hide: boolean = false) => {
  if (!hide) {
    const logClousure = (mode: string, fallback: (...exp) => void) =>
      function logFunction(...args) {
        fallback(...args)

        if (!consoleTextarea) return
        args.forEach((arg) => {
          if (consoleTextarea) {
            try {
              const parsedValue =
                JSON.stringify(arg, null, 2)
                  ?.replace(/\\\\n/g, '\n')
                  .replace(/\\n/g, '\n') ?? ''

              const span = document.createElement('span')
              span.className = mode
              span.innerText = `${parsedValue.substring(
                1,
                parsedValue.length - 1,
              )}`
              consoleTextarea.appendChild(span)
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

// VALORES INICIALES
const urlParams = new URLSearchParams(window.location.search)
const initialValue =
  urlParams.get('code') || window.localStorage.getItem('code')

// CONFIGURAR EDITOR
// @ts-ignore
const editor = ace.edit('editor', {
  wrap: true,
  autoScrollEditorIntoView: true,
  enableLiveAutocompletion: true,
})

// @ts-ignore
const JavaMode = ace.require('ace/mode/java').Mode
editor.session.setMode(new JavaMode())
editor.setTheme('ace/theme/monokai')
editor.setFontSize(18)

// @ts-ignore
const editorTranslate = ace.edit('editorTranslate', {
  readOnly: true,
  wrap: true,
  autoScrollEditorIntoView: true,
  enableLiveAutocompletion: true,
})
editorTranslate.session.setMode(new JavaMode())
editorTranslate.setTheme('ace/theme/monokai')
editorTranslate.setFontSize(18)

// CODIGO INICIAL
if (initialValue) editor.setValue(initialValue, -1)

// CURSOR
const codeInfoCursor = document.getElementById('cursor')
const changeCursor = (isOnEditor) =>
  function (e) {
    const cursor = isOnEditor
      ? editor.selection.getCursor()
      : editorTranslate.selection.getCursor()
    codeInfoCursor.innerHTML = `Linea: ${cursor.row + 1}, Columna: ${
      cursor.column + 1
    }`
  }

editor.session.selection.on('changeCursor', changeCursor(true))
editorTranslate.session.selection.on('changeCursor', changeCursor(false))

// @ts-ignore
feather.replace()

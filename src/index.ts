import express from 'express'
import cors from 'cors'

// TOOLS
import symbols from './compiler/lexical/symbols'
import errors from './compiler/lexical/error'
import logs from './compiler/logs'
import parser from './grammar'

// APP DE EXPRESS
const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

// LISTA DE INSTRUCCIONES
let instructions: [] = []

// ENDPOINT PARA COMPILAR
app.post('/compile', (req, res) => {
  const body = req.body as { code: string }
  if (body?.code?.length) {
    // INICIAR PARSER
    try {
      symbols.length = 0
      errors.length = 0
      logs.length = 0

      // INTERPRETE
      instructions = parser.parse(body.code)
      console.log(instructions)

      return res.status(200).json({ success: true, symbols, errors, logs })
    } catch (err) {
      return res.status(200).json({ success: false, err })
    }
  } else return res.status(200).json({ success: false })
})

app.listen(5000, () => {
  console.log('Servidor en http://localhost:5000')
})

export default {}

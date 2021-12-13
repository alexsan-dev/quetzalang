import FunctionBlock from './instruction/functions'
import Instruction from './instruction/abstract'
import Scope from './runtime/scope'

// COMPILAR APLICACION
const compile = (instructions: Instruction[]) => {
  // CREAR ENTORNO GLOBAL
  const globalEnv = new Scope('Global', 'Global')

  // PRIMER CICLO PARA ASIGNAR FUNCIONES Y VARIABLES
  instructions?.forEach((instruction: Instruction) => {
    // GUARDAR VARIABLES Y FUNCIONES
    if (instruction.name === 'Function' || instruction.name === 'Declaration')
      instruction.execute(globalEnv)
  })

  // SEGUNDO PARA CORRER PROGRAMA
  instructions?.forEach((instruction: Instruction) => {
    if (instruction.name !== 'Declaration' && instruction.name !== 'Function') {
      instruction.execute(globalEnv)
    }
  })
}

export default compile

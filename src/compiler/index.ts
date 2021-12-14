import FunctionBlock from './instruction/functions'
import Instruction from './instruction/abstract'
import { addError } from './utils/tools'
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

  // BUSCAR METODO MAIN
  const mainMethod: FunctionBlock | undefined = instructions.find(
    (instruction) =>
      instruction.name === 'Function' &&
      (instruction as FunctionBlock).getId() === 'main',
  ) as FunctionBlock

  // SEGUNDO PARA CORRER PROGRAMA
  if (mainMethod) mainMethod.getValue(globalEnv)
  else addError({ line: 0, col: 0 }, `No existe el metodo main.`)
}

export default compile

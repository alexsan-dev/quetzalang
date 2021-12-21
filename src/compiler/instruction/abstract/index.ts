import DataType, { TokenInfo } from '../../utils/types'
import Scope from '../../runtime/scope'

// INSTRUCCIONES
export type InstructionName =
  | 'Declaration'
  | 'Assignment'
  | 'Expression'
  | 'Value'
  | 'Function'
  | 'FunctionCall'
  | 'Return'
  | 'Condition'
  | 'Loop'
  | 'Break'
  | 'Continue'
  | 'Switch'

export interface TAC {
  label: string
  code: string
  extra?: string
}

abstract class Instruction {
  // CONSTRUCTOR
  constructor(public token: TokenInfo, public name: InstructionName) {}

  // COMPILAR
  public abstract execute(scope: Scope, type?: DataType): void

  // AGRERGAR 3AC
  public abstract to3AC(scope: Scope, type?: DataType): TAC | undefined // TODO: verificar undefined
}

export default Instruction

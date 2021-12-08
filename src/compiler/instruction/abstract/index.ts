import Scope from '../../runtime/scope'
import { TokenInfo } from '../../utils/types'

// INSTRUCCIONES
export type InstructionName =
	| 'Declaration'
	| 'Assignment'
	| 'Expression'
	| 'Value'
	| 'Function'
	| 'FunctionCall'
	| 'Main'
	| 'Return'
	| 'Condition'
	| 'Loop'
	| 'Break'
	| 'Continue'
	| 'Switch'

abstract class Instruction {
	// CONSTRUCTOR
	constructor(public token: TokenInfo, public name: InstructionName) {}

	// COMPILAR
	public abstract execute(env: Scope, type?: string): boolean
}

export default Instruction
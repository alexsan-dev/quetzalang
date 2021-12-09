import { TokenInfo } from '../../utils/types'
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

abstract class Instruction {
	// CONSTRUCTOR
	constructor(public token: TokenInfo, public name: InstructionName) {}

	// COMPILAR
	public abstract execute(scope: Scope, type?: string): void
}

export default Instruction
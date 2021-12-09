// TIPOS
import DataType, { TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import Instruction from '../../abstract'
import Assignment from '../'

// DECLARACIONES
class Declaration extends Instruction {
	// CONSTRUCTOR
	constructor(token: TokenInfo, public props: { type: DataType; assignments: Assignment[] }) {
		super(token, 'Declaration')
	}

	// COMPILAR ASIGNACIONES
	public execute(scope: Scope): void {
		this.props.assignments.map((assignment: Assignment) =>
			assignment.execute(scope, this.props.type)
		)
	}
}

export default Declaration
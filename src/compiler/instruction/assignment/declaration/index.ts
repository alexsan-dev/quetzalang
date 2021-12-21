// TIPOS
import DataType, { TokenInfo } from '../../../utils/types'
import Instruction, { TAC } from '../../abstract'
import Scope from '../../../runtime/scope'
import Assignment from '../'

// DECLARACIONES
class Declaration extends Instruction {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: { type: DataType; assignments: Assignment[] },
  ) {
    super(token, 'Declaration')
  }

  // COMPILAR ASIGNACIONES
  public execute(scope: Scope): void {
    this.props.assignments.map((assignment: Assignment) =>
      assignment.execute(scope, this.props.type),
    )
  }

  // EJECUTAR 3D
  public to3AC(scope: Scope): TAC {
    this.props.assignments.forEach((assignment: Assignment) =>
      assignment.to3AC(scope, this.props.type),
    )

    return { label: '', code: '' }
  }
}

export default Declaration

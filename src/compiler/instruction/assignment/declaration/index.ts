// TIPOS
import DataType, { TokenInfo } from '../../../utils/types'
import Instruction, { TAC } from '../../abstract'
import Scope from '../../../runtime/scope'
import Assignment from '../'
import { add3AC, getTemporal3AC } from '../../../utils/tools'

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
    this.props.assignments.forEach(
      // @ts-ignore
      (assignment: Assignment) => assignment.to3AC(scope),
    )

    return { label: '', code: '' }
  }
}

export default Declaration

import DataType, { TokenInfo } from '../../../utils/types'
import { defaultValues } from '../../expression/tools'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Value from '../../value'
import Assignment from '../'

// ASIGNACIONES
class ExpAssignment extends Assignment {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: { id: string; exp?: Expression },
  ) {
    super(token, props.id)
  }

  // COMPILAR
  public execute(scope: Scope, expectedType?: DataType): void {
    const nextValue: Value | undefined = this.getValue(scope, expectedType)
    super.setValue(
      scope,
      expectedType ?? scope.getVar(this.props.id)?.getType(scope),
      nextValue,
      expectedType !== undefined,
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope, type: DataType): Value | undefined {
    if (this.props.exp) {
      // RETORNAR VALOR DE EXPRESION A ASIGNAR
      return this.props.exp.getValue(scope)
    }
    // SINO RETORNAR VALOR POR DEFECTO PARA DECLARACION
    else return defaultValues(this.token, type)
  }
}

export default ExpAssignment

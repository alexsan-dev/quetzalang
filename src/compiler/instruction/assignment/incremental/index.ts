import DataType, {
  DataTypeEnum,
  Operator,
  TokenInfo,
} from '../../../utils/types'
import { add3AC, addError } from '../../../utils/tools'
import DoubleValue from '../../value/double'
import Scope from '../../../runtime/scope'
import IntValue from '../../value/int'
import { TAC } from '../../abstract'
import Value from '../../value'
import Assignment from '../'

// ASIGNACIONES
class IncrementalAssignment extends Assignment {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: { id: string; operator: Operator },
  ) {
    super(token, props.id)
  }

  // GENERAR 3D
  public to3AC(): TAC {
    return add3AC({
      label: `${this.props.id}`,
      code: `${this.props.id} ${
        this.props.operator === Operator.PLUSPLUS ? '+ 1' : '- 1'
      }`,
    })
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // VERIFICAR VARIABLE
    const refVar = scope.getVar(this.id ?? '')
    const refType = refVar.getType(scope)

    if (refVar) {
      if (
        refType.type === DataTypeEnum.INTEGER ||
        refType.type === DataTypeEnum.DOUBLE
      ) {
        // VERIFICAR TIPO
        super.setValue(scope, refType, this.getValue(scope), false)
      } else
        addError(
          this.token,
          `La variable ${this.id} debe ser del tipo ${DataTypeEnum.INTEGER} | ${DataTypeEnum.DOUBLE}`,
        )
    } else addError(this.token, `La variable ${this.id} no existe.`)
  }

  // OBTENER VALOR
  public getValue(scope: Scope): Value {
    // VARIABLE
    const refVar = scope.getVar(this.id ?? '')

    if (refVar) {
      // VALOR
      const newValue =
        (refVar?.getValue(scope) as number) +
        (this.props.operator === Operator.PLUSPLUS ? 1 : -1)

      // REASIGNAR
      if (refVar.getType(scope).type === DataTypeEnum.DOUBLE)
        return new DoubleValue(this.token, newValue)
      else return new IntValue(this.token, newValue)
    } else return null
  }
}

export default IncrementalAssignment

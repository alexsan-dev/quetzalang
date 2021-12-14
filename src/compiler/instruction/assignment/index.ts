// TIPOS
import DataType, { TokenInfo } from '../../utils/types'
import { addError } from '../../utils/tools'
import Scope from '../../runtime/scope'
import Instruction from '../abstract'
import Value from '../value'

// ASIGNACIONES
class Assignment extends Instruction {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public id?: string) {
    super(token, 'Assignment')
  }

  // GUARDAR VARIABLE EN ENTORNO
  public setValue(
    scope: Scope,
    expectedType: DataType,
    value: Value | undefined,
    isNew = true,
  ): void {
    if (this.id?.length) {
      // EXCEPCIONES PARA NUMEROS
      const valueType = value.getType(scope)

      const typeException =
        (expectedType === DataType.DOUBLE && valueType === DataType.INTEGER) ||
        (expectedType === DataType.INTEGER && valueType === DataType.DOUBLE)

      if (expectedType === valueType || typeException) {
        if (isNew) scope.addVar(this.id, expectedType, value)
        else scope.setVar(this.id, value)
      } else {
        if (expectedType)
          addError(
            this.token,
            `No se puede asignar el tipo ${valueType} a ${expectedType}.`,
          )
        else
          addError(
            this.token,
            `Es posible que la variable ${this.id} no este declarada.`,
          )
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public execute(_env: Scope, _type?: DataType): void {}
}

export default Assignment

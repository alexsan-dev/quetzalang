// TIPOS
import DataType, { DataTypeEnum, DataValue, TokenInfo } from '../../utils/types'
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
        (expectedType.type === DataTypeEnum.DOUBLE &&
          valueType.type === DataTypeEnum.INTEGER) ||
        (expectedType.type === DataTypeEnum.INTEGER &&
          valueType.type === DataTypeEnum.DOUBLE)

      if (expectedType.type === valueType.type || typeException) {
        // VALIDAR PARA ARREGLOS
        if (valueType.type === DataTypeEnum.ARRAY) {
          // OBTENER VALORES PRIMITIVOS
          const values: { value: DataValue; type: DataType }[] = (
            value.getValue(scope) as DataValue[]
          )
            .map((value: DataValue) => ({ value, type: valueType.gen }))
            .filter(Boolean) as { value: DataValue; type: DataType }[]

          if (values.every((val) => val.type === values[0].type)) {
            if (isNew) scope.addVar(this.id, expectedType, value)
            else scope.setVar(this.id, value)
          } else
            addError(
              this.token,
              `La lista de valores debe ser del mismo tipo para el arrreglo ${this.id}.`,
            )
        } else {
          if (isNew) scope.addVar(this.id, expectedType, value)
          else scope.setVar(this.id, value)
        }
      } else {
        if (expectedType)
          addError(
            this.token,
            `No se puede asignar el tipo ${valueType.type} a ${expectedType.type}.`,
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

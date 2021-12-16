// TIPOS
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'
import { addError } from '../../../utils/tools'
import Scope from '../../../runtime/scope'
import ArrayValue from '../../value/vector'
import Expression from '../../expression'
import Value from '../../value'
import Assignment from '../'

// ASIGNACIONES DE VECTORES
class VectorAssignment extends Assignment {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      defValues?: Expression[]
      id: string
    },
  ) {
    super(token, props.id)
  }

  // COMPILAR EXPRESIONES COMO VECTOR
  public execute(scope: Scope, type: DataType): void {
    // COMPILAR PADRE
    super.setValue(
      scope,
      { type: DataTypeEnum.ARRAY, gen: { type: type.gen.type } },
      this.getValue(scope, type),
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope, type: DataType): Value | undefined {
    if (this.props.defValues?.length) {
      // OBTENER VALORES PRIMITIVOS
      const values: { value: DataValue; type: DataType }[] =
        this.props.defValues
          .map((exp: Expression) => {
            const value = exp.getValue(scope)
            return {
              value: value?.getValue(scope),
              type: value?.getType(scope),
            }
          })
          .filter(Boolean) as { value: DataValue; type: DataType }[]

      // VERIFICAR TIPO
      if (values.every((value) => value.type.type === values[0].type.type)) {
        if (JSON.stringify(values[0].type) === JSON.stringify(type.gen)) {
          const validValues: DataValue[] = values.map((value) => value.value)
          const newValue: Value = new ArrayValue(this.token, {
            value: validValues,
            type,
          })

          return newValue
        } else
          addError(
            this.token,
            `No se puede asignar el tipo ${values[0].type} a ${type}.`,
          )
      } else
        addError(this.token, 'La lista de valores debe ser del mismo tipo.')
    } else {
      return new ArrayValue(this.token, {
        value: [],
        type,
      })
    }
  }
}

export default VectorAssignment

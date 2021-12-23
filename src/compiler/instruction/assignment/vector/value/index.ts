import { add3AC, addError } from '../../../../utils/tools'
import VectorValue from '../../../value/vector'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import { TAC } from '../../../abstract'
import IdValue from '../../../value/id'
import Assignment from '../../'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'

// ASIGNACIONES
class VectorPositionAssignment extends Assignment {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      index: Expression
      exp: Expression
      id: IdValue
    },
  ) {
    super(token, '')
  }

  // AGREGAR 3D
  public to3AC(scope: Scope): TAC {
    // INDICE DE EXPRESION
    const index = this.props.index.to3AC(scope)
    return add3AC({
      label: `${this.props.id.to3AC().code}[${index.code}]`,
      code: `${this.props.exp.to3AC(scope).code}`,
    })
  }

  // COMPILAR
  public execute(scope: Scope): void {
    const arryType = this.props.id.getType(scope)

    if (arryType.type === DataTypeEnum.ARRAY)
      if (this.props.index.getType(scope).type === DataTypeEnum.INTEGER) {
        // ARREGLO DINAMICO
        if (arryType.gen.type === DataTypeEnum.STRUCT) {
          // INDICE DE EXPRESION
          const index: number = this.props.index
            .getValue(scope)
            .getValue(scope) as number
          const nodeType = arryType.nodes?.[index]
          this.setValue(scope, nodeType)
        } else this.setValue(scope, this.props.id.getType(scope).gen)
      } else
        addError(
          this.token,
          `La posicion del arreglo ${this.props.id.getId()} debe ser un ${
            DataTypeEnum.INTEGER
          }.`,
        )
    else addError(this.token, `No existe el arreglo ${this.props.id.getId()}`)
  }

  // ASIGNAR VALOR
  public setValue(scope: Scope, expectedType: DataType): void {
    // OBTENER VARIABLE
    const refValue: DataValue[] = this.props.id.getValue(scope) as DataValue[]

    if (refValue?.length) {
      const temporal: DataValue[] = [...refValue]

      // INDICE DE EXPRESION
      const index: number = this.props.index
        .getValue(scope)
        .getValue(scope) as number

      if (index >= 0 && index < temporal.length) {
        const newValueType = this.props.exp.getType(scope)
        const typeException =
          (newValueType.type === DataTypeEnum.INTEGER &&
            expectedType.type === DataTypeEnum.DOUBLE) ||
          (newValueType.type === DataTypeEnum.DOUBLE &&
            expectedType.type === DataTypeEnum.INTEGER)

        if (newValueType.type === expectedType.type || typeException) {
          // ASIGNAR NUEVO VALOR
          const newValue = this.props.exp?.getValue(scope).getValue(scope)
          temporal[index] = newValue

          // GUARDAR
          scope.setVar(
            this.props.id.getId() as string,
            new VectorValue(this.token, [], temporal),
          )
        } else
          addError(
            this.token,
            `No se puede asignar el tipo ${newValueType.type} a ${expectedType.type}.`,
          )
      } else
        addError(
          this.token,
          `La posicion ${index} esta fuera de rango para el arreglo ${this.props.id.getId()}.`,
        )
    } else
      addError(this.token, `El arreglo ${this.props.id.getId()} esta vacio.`)
  }
}

export default VectorPositionAssignment

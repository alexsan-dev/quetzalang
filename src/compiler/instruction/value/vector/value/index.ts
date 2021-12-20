import { addError, getLast3AC } from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import { getValueByType } from '../../tools'
import { TAC } from '../../../abstract'
import Value from '../..'
import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'

class VectorPositionValue extends Value {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      value: Value
      index: Expression
    },
  ) {
    super(token, '')
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER VARIABLE DE ID
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, this.getType(scope), this.getValue(scope))
  }

  // CODIGO 3D
  public to3AC(scope: Scope): TAC {
    return getLast3AC(
      `${this.props.value.to3AC(scope).code}[${
        this.props.index.to3AC(scope).code
      }]`,
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue | undefined {
    // OBTENER INDICE
    const indexValue = this.props.index.getValue(scope)

    // VALIDAR INDEX
    if (indexValue?.getType(scope).type === DataTypeEnum.INTEGER) {
      // VALIDAR VARIABLE
      const indexPrimitive = indexValue.getValue(scope) as number

      if (this.props.value.getType(scope).type === DataTypeEnum.ARRAY) {
        const array: DataValue[] = this.props.value?.getValue(
          scope,
        ) as DataValue[]
        if (array) return array[indexPrimitive]
      } else
        addError(
          this.token,
          `No fue posible acceder a la posicion ${indexPrimitive} del arreglo.`,
        )
    } else
      addError(
        this.token,
        `La posicion del arreglo debe ser un ${DataTypeEnum.INTEGER}.`,
      )
  }

  // OBTENER VALOR CAST
  public getType(scope: Scope): DataType {
    const arryType = this.props.value.getType(scope)
    if (arryType.type === DataTypeEnum.ARRAY) {
      if (arryType.gen.type === DataTypeEnum.STRUCT) {
        return arryType.nodes[
          (this.props.index.getValue(scope).getValue(scope) as number) ?? 0
        ]
      } else return arryType.gen
    } else return { type: DataTypeEnum.NULL }
  }
}

export default VectorPositionValue

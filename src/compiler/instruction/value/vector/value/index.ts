import { addError } from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import { getValueByType } from '../../tools'
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

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue | undefined {
    // OBTENER INDICE
    const indexValue = this.props.index.getValue(scope)

    // VALIDAR INDEX
    if (indexValue?.getType(scope).type === DataTypeEnum.INTEGER) {
      // VALIDAR VARIABLE
      if (this.props.value.getType(scope).type === DataTypeEnum.ARRAY) {
        const array: DataValue[] = this.props.value?.getValue(
          scope,
        ) as DataValue[]
        if (array) return array[indexValue.getValue(scope) as number]
      } else
        addError(
          this.token,
          `No fue posible acceder a la posicion ${indexValue.getValue(
            scope,
          )} del arreglo.`,
        )
    } else
      addError(
        this.token,
        `La posicion del arreglo debe ser un ${DataTypeEnum.INTEGER}.`,
      )
  }

  // OBTENER VALOR CAST
  public getType(scope: Scope): DataType {
    return this.props.value.getType(scope).gen
  }
}

export default VectorPositionValue

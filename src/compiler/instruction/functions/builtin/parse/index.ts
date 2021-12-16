import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'
import { getValueByType } from '../../../value/tools'
import { addError } from '../../../../utils/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import Value from '../../../value'

class TypeParse extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      type: DataType
      id: string
    },
  ) {
    super(token, { ...props, id: 'TypeParse' }, true)
    this.props.id = 'TypeParse'
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, this.props.type, this.getValue(scope))
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    const paramScopedValue = paramValue.getValue(scope)

    if (paramValue.getType(scope).type === DataTypeEnum.STRING) {
      if (this.props.type.type === DataTypeEnum.BOOLEAN) {
        // OBTENER VALORES
        const tmpParam = paramScopedValue.toString().toLowerCase()
        return Boolean(
          tmpParam === 'false'
            ? false
            : tmpParam === '0'
            ? false
            : paramScopedValue,
        )
      } else if (this.props.type.type === DataTypeEnum.DOUBLE) {
        return parseFloat(paramScopedValue?.toString() ?? '0')
      } else if (this.props.type.type === DataTypeEnum.INTEGER) {
        return parseInt(paramScopedValue?.toString() ?? '0')
      } else if (this.props.type.type === DataTypeEnum.STRING) {
        return paramScopedValue.toString()
      } else return null
    } else
      addError(
        this.token,
        `Se esperaba un ${DataTypeEnum.STRING} en el parametro 1 de la funcion parse.`,
      )
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return this.props.type
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default TypeParse

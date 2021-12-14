import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
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

    if (paramValue.getType(scope) === DataType.STRING) {
      if (this.props.type === DataType.BOOLEAN) {
        // OBTENER VALORES
        const tmpParam = paramScopedValue.toString().toLowerCase()
        return Boolean(
          tmpParam === 'false' ? false : tmpParam === '0' ? false : true,
        )
      } else if (this.props.type === DataType.DOUBLE) {
        return parseFloat(paramScopedValue?.toString() ?? '0')
      } else if (this.props.type === DataType.INTEGER) {
        return parseInt(paramScopedValue?.toString() ?? '0')
      } else if (this.props.type === DataType.STRING) {
        return paramScopedValue.toString()
      } else return null
    } else
      addError(
        this.token,
        `Se esperaba un ${DataType.STRING} en el parametro 1 de la funcion parse.`,
      )
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return this.props.type
  }

  // OBTENER TIPO
  public getGenType(scope: Scope): DataType {
    return this.getType(scope)
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default TypeParse

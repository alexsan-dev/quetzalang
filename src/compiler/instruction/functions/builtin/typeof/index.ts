import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../../utils/types'
import { getValueByType } from '../../../value/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import Value from '../../../value'

class TypeOf extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'TypeOf' }, true)
    this.props.id = 'TypeOf'
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(
      this.token,
      { type: DataTypeEnum.STRING },
      this.getValue(scope),
    )
  }

  // OBTENER TIPO COMO STRING
  private getTypeAsStrig(valueType: DataType): string {
    if (valueType.type === DataTypeEnum.ARRAY) {
      if (valueType.gen.type === DataTypeEnum.STRUCT) {
        const nodeTypes =
          valueType.nodes?.map((nodeType) => this.getTypeAsStrig(nodeType)) ??
          []
        return `Array<${nodeTypes
          .filter((item, pos) => nodeTypes.indexOf(item) == pos)
          .join(' | ')}>`
      } else return `Array<${this.getTypeAsStrig(valueType.gen)}>`
    } else return valueType.type
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    const valueType = paramValue.getType(scope)
    return this.getTypeAsStrig(valueType)
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return { type: DataTypeEnum.STRING }
  }

  // COMPILAR
  public execute(_scope: Scope): void {}
}

export default TypeOf

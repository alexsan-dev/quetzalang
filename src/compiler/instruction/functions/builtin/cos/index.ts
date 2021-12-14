import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import { getValueByType } from '../../../value/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import Value from '../../../value'

class Cos extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'Cos' }, true)
    this.props.id = 'Cos'
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // OBTENER VALORES
    return Math.cos(
      (this.props.params[0]?.getValue(scope)?.getValue(scope) as number) ?? 0,
    )
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, this.getType(scope), this.getValue(scope))
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.DOUBLE
  }

  // OBTENERR TIPO GENERICO
  public getGenType(scope: Scope): DataType {
    return this.getType(scope)
  }

  // COMPILAR
  public execute(scope: Scope): void {}
}

export default Cos

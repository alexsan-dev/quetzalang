import DataType, { DataValue, TokenInfo } from '../../utils/types'
import Scope from '../../runtime/scope'
import Instruction from '../abstract'

abstract class Value extends Instruction {
  // CONSTRUCTOR
  constructor(public token: TokenInfo, public value: DataValue | DataValue[]) {
    super(token, 'Value')
  }

  // OBTENER TIPO DE RESULTADO
  public abstract getType(scope: Scope): DataType

  // OBTENER VALOR CAST
  public abstract getValue(scope: Scope): DataValue | undefined
}

export default Value

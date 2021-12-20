import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import Value from '..'
import { setLast3AC } from 'compiler/utils/tools'
import { TAC } from 'compiler/instruction/abstract'

class IdValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // CODIGO 3D
  public to3AC(): TAC {
    return setLast3AC(this.value as string) // TODO: 3D para metodos
  }

  // OBTENER NOMBRE DE ID
  public getId(): DataValue {
    return this.value
  }

  // OBTENER VARIABLE DE ID
  public getScopedValue(scope: Scope): Value {
    const scopedValue = scope.getVar((this.value as string) ?? '')
    return scopedValue
  }

  // OBTENER TIPO DE RESULTADO
  public getType(scope: Scope): DataType {
    return this.getScopedValue(scope)?.getType(scope)
  }

  // OBTENER VALOR CAST
  public getValue(scope: Scope): DataValue | undefined {
    return this.getScopedValue(scope)?.getValue(scope)
  }
}

export default IdValue

/* eslint-disable indent */
// TIPOS
import DataType, { Operator, TokenInfo } from '../../utils/types'
import Instruction, { TAC } from '../abstract'
import Scope from '../../runtime/scope'
import operateValues from './tools'
import Value from '../value'
import { getTemporal3AC, setLast3AC } from 'compiler/utils/tools'

// ASIGNACIONES
class Expression extends Instruction {
  private childToken: TokenInfo

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: Partial<{
      value: Value
      left: Expression
      right: Expression
      operator: Operator
      condition?: Expression
    }>,
  ) {
    super(token, 'Expression')
    this.childToken = token
  }

  // EVALUAR EXPRESION
  public evaluateExp(scope: Scope, onlyTypes: boolean): DataType | Value {
    // OBTENER RESULTADOS ANTERIORES
    const left: Value | undefined = this.props.left?.getValue(scope)
    const right: Value | undefined = this.props.right?.getValue(scope)
    const condition: Value | undefined = this.props.condition?.getValue(scope)

    // OPERAR
    if (left) {
      if (this.props.operator) {
        const result: Value | undefined | DataType = operateValues(
          scope,
          this.childToken,
          this.props.operator,
          left,
          right,
          condition,
          onlyTypes,
        )

        if (result) return result
      } else return onlyTypes ? left.getType(scope) : left
    } else if (this.props.value)
      return onlyTypes ? this.props.value.getType(scope) : this.props.value
  }

  // AGREGAR CODIGO 3D
  public to3AC(scope: Scope): TAC {
    if (this.props.left) {
      if (this.props.operator) {
        return setLast3AC(
          `${this.props.left.to3AC(scope).label} ${this.props.operator} ${
            this.props.right.to3AC(scope).label
          }`,
        )
      } else return setLast3AC(`${this.props.left.to3AC(scope).label}`)
    } else if (this.props.value)
      return setLast3AC(`${this.props.value.to3AC(scope).label}`)
  }

  // COMPILAR VALORES
  public execute(_scope?: Scope): void {}

  // OBTENER TIPO
  public getType(scope: Scope): DataType {
    return this.evaluateExp(scope, true) as DataType
  }

  // OBTENER VALOR REAL
  public getValue(scope: Scope): Value {
    return this.evaluateExp(scope, false) as Value
  }
}

export default Expression

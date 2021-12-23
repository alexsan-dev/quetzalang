import DataType, { DataTypeEnum, TokenInfo } from '../../../utils/types'
import { defaultValues } from '../../expression/tools'
import { add3AC } from '../../../utils/tools'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import { TAC } from '../../abstract'
import Value from '../../value'
import Assignment from '../'

// ASIGNACIONES
class ExpAssignment extends Assignment {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: { id: string; exp?: Expression },
  ) {
    super(token, props.id)
  }

  // COMPILAR
  public execute(scope: Scope, expectedType?: DataType): void {
    const nextValue: Value | undefined = this.getValue(scope, expectedType)
    super.setValue(
      scope,
      expectedType ?? scope.getVar(this.props.id)?.getType(scope),
      nextValue,
      expectedType !== undefined,
    )
  }

  // GENERAR CODIGO 3D
  public to3AC(scope: Scope, expectedType?: DataType): TAC {
    let tac: TAC = { label: '', code: '' }

    // ASIGNAR UN ARREGLO A OTRO
    const valueType =
      expectedType ?? scope.getVar(this.props.id)?.getType(scope)
    if (valueType?.type === DataTypeEnum.ARRAY) {
      const expTac = this.props.exp?.to3AC(scope)
      if (expTac) {
        if (expTac.code.startsWith('{') && expTac.code.endsWith('}'))
          tac = { label: this.id, code: expTac.code }
        else
          tac = {
            label: this.id,
            code: this.id,
            modifier: expTac
              ? `CC_MEMCPY(${this.id}, ${expTac?.code}, sizeof(${expTac?.code}));`
              : '',
          }
      } else
        tac = {
          label: this.id,
          code: this.id,
        }
    } else tac = { label: this.id, code: this.props.exp.to3AC(scope).code }

    return add3AC(tac)
  }

  // OBTENER VALOR
  public getValue(scope: Scope, type: DataType): Value | undefined {
    if (this.props.exp) {
      // RETORNAR VALOR DE EXPRESION A ASIGNAR
      return this.props.exp.getValue(scope)
    }
    // SINO RETORNAR VALOR POR DEFECTO PARA DECLARACION
    else return defaultValues(this.token, type)
  }
}

export default ExpAssignment

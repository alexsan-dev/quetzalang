import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import { getValueByType } from '../../value/tools'
import { addError } from '../../../utils/tools'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Instruction from '../../abstract'
import Value from '../../value'
import FunctionBlock from '..'

class FunctionCall extends Instruction {
  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
      generic?: DataType
    },
    private builtIn: boolean = false,
  ) {
    super(token, 'FunctionCall')
  }

  // OBTENERR VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(
      this.token,
      this.getType(scope),
      this.getExecuteValue(scope),
    )
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue | undefined {
    return this.getExecuteValue(scope)
  }

  // OBTENER TIPO
  public getType(scope: Scope): DataType {
    // BUSCAR FUNCION
    const functionBlock: FunctionBlock | undefined = scope.getFunction(
      this.props.id,
    )
    return functionBlock?.getType()
  }

  // ES FUNCION NATIVA
  public isBuiltIn(): boolean {
    return this.builtIn
  }

  // COMPILAR
  public execute(scope: Scope): void {
    this.getExecuteValue(scope)
  }

  // COMPILAR Y OBTENER VALOR
  public getExecuteValue(scope: Scope): DataValue | undefined {
    // BUSCAR FUNCION
    const scopedFunction: FunctionBlock | undefined = scope.getFunction(
      this.props.id,
    )
    const functionBlock = new FunctionBlock(this.token, {
      ...scopedFunction.props,
    })

    // EJECUTAR
    if (functionBlock) {
      // OBTENER EXPRESIONES
      functionBlock.setScope(scope)
      const functionScope: Scope | undefined = functionBlock.getScope()

      if (functionScope) {
        const values: { value: Value; type: DataType }[] =
          this.props.params.map((exp: Expression) => {
            const expValue = exp.getValue(scope)
            return {
              value: expValue,
              type: expValue?.getType(scope),
            }
          }) as { value: Value; type: DataType }[]

        // VERIFICAR CANTIDAD DE PARAMETRO
        if (functionBlock.props.params.length === this.props.params.length) {
          // VERIFICAR TIPOS DE PARAMETROS
          values.forEach((value, index: number) => {
            if (
              value.type.type === functionBlock.props.params[index].type.type
            ) {
              // ASIGNAR VARIABLE A ENTORNO DE FUNCION
              functionScope.addVar(
                functionBlock.props.params[index].id,
                value.type,
                value.value,
              )
            } else {
              addError(
                this.token,
                `Se esperaba un ${
                  functionBlock.props.params[index].type.type
                } en el parametro ${index + 1} de la funcion ${
                  this.props.id
                } y se obtuvo un ${value.type.type}.`,
              )
            }
          })
          return functionBlock.getValue(scope)
        } else
          addError(
            this.token,
            `Se esperaban ${functionBlock.props.params.length} parametros pero se obtuvieron ${this.props.params.length} en la funcion ${this.props.id}.`,
          )
      }
    } else addError(this.token, `La funcion ${this.props.id} no existe.`)
  }
}

export default FunctionCall

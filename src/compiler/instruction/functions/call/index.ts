import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import { addError } from '../../../utils/tools'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Instruction from '../../abstract'
import Value from '../../value'
import FunctionBlock from '..'

class FunctionCall extends Instruction {
  // GLOBALES
  private functionValue: DataValue | undefined
  private refType: DataType

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
      generic?: DataType
    },
    private builtIn: boolean = false
  ) {
    super(token, 'FunctionCall')
    this.refType = DataType.ID
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue | undefined {
    this.execute(scope)
    return this.functionValue
  }

  // OBTENER TIPO
  public getType(): DataType | undefined {
    return this.refType
  }

  // ES FUNCION NATIVA
  public isBuiltIn(): boolean {
    return this.builtIn
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // BUSCAR FUNCION
    const functionBlock: FunctionBlock | undefined = scope.getFunction(this.props.id)

    // EJECUTAR
    if (functionBlock) {
      // OBTENER EXPRESIONES
      functionBlock.setScope(scope)
      const functionScope: Scope | undefined = functionBlock.getScope()

      if (functionScope) {
        const values: { value: Value; type: DataType }[] = this.props.params.map(
          (exp: Expression) => {
            const expValue = exp.getValue(scope)
            return {
              value: expValue,
              type: expValue?.getType(scope),
            }
          }
        ) as { value: Value; type: DataType }[]

        // VERIFICAR CANTIDAD DE PARAMETRO
        if (functionBlock.props.params.length === this.props.params.length) {
          // VERIFICAR TIPOS DE PARAMETROS
          values.forEach((value, index: number) => {
            if (value.type === functionBlock.props.params[index].type) {
              // ASIGNAR VARIABLE A ENTORNO DE FUNCION
              functionScope.addVar(functionBlock.props.params[index].id, value.type, value.value)
            } else {
              addError(this.token, `Se esperaba un ${functionBlock.props.params[index].type
                } en el parametro ${index + 1} en la function.`)
            }
          })

          const functionValue = functionBlock.getValue()
          if (functionValue) {
            this.functionValue = functionValue?.getValue(scope)
            this.refType = functionValue?.getType(scope)
          }
        } else
          addError(this.token, `Se esperaban ${functionBlock.props.params.length} parametros pero se obtuvieron ${this.props.params.length} en la funcion ${this.props.id}`)
      }
    } else
      addError(this.token, `La funcion ${this.props.id} no existe.`)
  }
}

export default FunctionCall
import { TokenInfo } from '../../../utils/types'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Instruction from '../../abstract'
import Value from '../../value'
import { getValueByType } from '../../value/tools'

class ReturnValue extends Instruction {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      content?: Expression
      type: 'Return' | 'Continue' | 'Break'
    },
  ) {
    super(token, props.type)
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // RECURSIVA
    let returnScope = scope
    const searchEnvironment = () => {
      if (
        returnScope?.getName() !== 'Function' &&
        returnScope?.getName() !== 'Loop' &&
        returnScope?.getName() !== 'Switch'
      ) {
        if (returnScope?.getPrevEnv()) {
          returnScope = returnScope?.getPrevEnv()
          searchEnvironment()
        } else return
      } else return
    }

    searchEnvironment()

    // ASIGNAR RETORNO A FUNCION
    if (returnScope) {
      if (this.props.type === 'Return') {
        const value = this.props.content?.getValue(scope)
        const valueType = value.getType(scope)

        // AGREGAR VARIABLE RERTURN
        returnScope.addVar(
          'return',
          valueType,
          getValueByType(this.token, valueType, value.getValue(scope)),
        )
      }

      // EJECUTAR RETURN
      const returnFunction = returnScope.getFunction(
        this.props.type.toLowerCase(),
      )
      if (returnFunction) returnFunction.getValue(returnScope)
    }
  }
}

export default ReturnValue

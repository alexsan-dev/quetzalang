import { TokenInfo } from "../../../utils/types";
import Scope from "../../../runtime/scope";
import Expression from "../../expression";
import Instruction from "../../abstract";
import Value from "../../value";

class ReturnValue extends Instruction {
  // CONSTRUCTOR
  constructor(public token: TokenInfo, public props: { content?: Expression, type: 'Return' | 'Continue' | 'Break' }) {
    super(token, props.type);
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // RECURSIVA
    const searchEnvironment = () => {
      if (
        scope?.getName() !== "Function" &&
        scope?.getName() !== "Loop" &&
        scope?.getName() !== "Switch"
      ) {
        if (scope?.getPrevEnv()) {
          scope = scope?.getPrevEnv();
          searchEnvironment();
        } else return;
      } else return;
    };

    searchEnvironment();

    // ASIGNAR RETORNO A FUNCION
    if (scope) {
      if (this.props.type === 'Return') {
        const value = this.props.content?.getValue(scope);
        const valueType = value.getType(scope)

        // AGREGAR VARIABLE RERTURN
        scope.addVar("return", valueType, value);
      }

      // EJECUTAR RETURN
      const returnFunction = scope.getFunction(this.props.type);
      if (returnFunction) returnFunction.getValue(scope);
    }
  }
}

export default ReturnValue;

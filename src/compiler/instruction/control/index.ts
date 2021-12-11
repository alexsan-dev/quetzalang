import { TokenInfo } from "../../utils/types";
import Scope from "../../runtime/scope";
import Expression from "../expression";
import Instruction from "../abstract";

interface ConditionExp {
  exp: Expression;
  body: Instruction[];
}
class Condition extends Instruction {
  private isOnBreak = false;

  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    private props: {
      valid: ConditionExp;
      inValid?: ConditionExp;
      fallback?: ConditionExp[];
    }
  ) {
    super(token, "Condition");
  }

  // COMPILAR
  public execute(env: Scope): void {
    this.isOnBreak = false;

    // EJECUTAR CONDICION INICIAL
    const conditionValue = this.props.valid.exp.getValue(env);
    if (
      conditionValue?.getValue(env) !== undefined &&
      conditionValue?.getValue(env) !== false
    ) {
      // ENTORNO DE CONDICION
      const scope = new Scope("Condition", "if", env);

      // EJECUTAR IF
      this.props.valid.body.forEach((instruction) => {
        if (!this.isOnBreak) instruction.execute(scope);
      });
    } else {
      // GUARDAR ESTADO DE ELSE
      const inValidCondition = () => {
        if (this.props.inValid) {
          // ENTORNO DE CONDICION
          const scope = new Scope("Condition", "else", env);

          // EJECUTAR ELSE
          this.props.inValid.body.forEach((instruction) => {
            if (!this.isOnBreak) instruction.execute(scope);
          });
        }
      };

      // EJECUTAR LISTA DE ELSE IF
      if (this.props.fallback) {
        let foundValid = false;
        for (
          let conditionIndex = 0, length = this.props.fallback.length;
          conditionIndex < length;
          conditionIndex++
        ) {
          // VALOR DE CONDICOIN
          const conditionValue =
            this.props.fallback[conditionIndex].exp.getValue(env);

          // VALIDAR
          if (conditionValue?.getValue(env)) {
            foundValid = true;
            const scope = new Scope(
              "Condition",
              "else if",
              env
            );

            // EJECUTAR ELSE-IF
            this.props.fallback[conditionIndex].body.forEach(
              (instruction) => {
                if (!this.isOnBreak) instruction.execute(scope);
              }
            );
          }
        }

        // EJECUTAR ELSE SI NO ENCONTRO NINGUN ELSE IF
        if (!foundValid) inValidCondition();
      }
      // EJECUTAR ELSE
      else inValidCondition();
    }
  }
}

export default Condition;

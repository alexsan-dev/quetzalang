import { DataTypeEnum, Operator, TokenInfo } from '../../../utils/types'
import Instruction, { TAC } from '../../abstract'
import { add3AC } from '../../../utils/tools'
import FunctionBlock from '../../functions'
import Scope from '../../../runtime/scope'
import Expression from '../../expression'
import Condition from '..'

// PROPS
interface CaseBody {
  case: Expression
  body: Instruction[]
}

class Switch extends Instruction {
  // GLOBALES
  private isOnBreak = false

  // CONSTRUCTOR
  constructor(
    token: TokenInfo,
    public props: {
      value: Expression
      cases?: CaseBody[]
      default?: Omit<CaseBody, 'case'>
    },
  ) {
    super(token, 'Switch')
  }

  // GENERAR 3D
  public to3AC(scope: Scope): TAC {
    // GENERAR CODIGO COMO SI FUERA UN IF
    let code: string = ''
    const casesCopy = [...this.props.cases]
    const caseValue = casesCopy.pop().case.getValue(scope)

    const ifControl = new Condition(this.token, {
      valid: {
        exp: new Expression(this.token, {
          left: this.props.value,
          operator: Operator.EQUALSEQUALS,
          right: new Expression(this.token, { value: caseValue }),
        }),
        body: this.props.cases[0].body,
      },
      fallback:
        casesCopy.map((caseExp) => ({
          exp: new Expression(this.token, {
            left: this.props.value,
            operator: Operator.EQUALSEQUALS,
            right: new Expression(this.token, {
              value: caseExp.case.getValue(scope),
            }),
          }),
          body: caseExp.body,
        })) || [],
      inValid: this.props.default
        ? {
            exp: {} as Expression,
            body: this.props.default.body,
          }
        : undefined,
    })

    // AGRERGAR
    code = ifControl.to3AC(scope).extra

    // AGREGAR
    return add3AC({ label: '', code: '-' })
  }

  // AGREGAR FUNCION DE SALIDA
  private addControlFunction(
    env: Scope,
    name: 'Return' | 'Break' | 'Continue',
  ) {
    env.addFunction(
      name.toLowerCase(),
      { type: DataTypeEnum.VOID },
      new FunctionBlock(this.token, {
        id: name.toLowerCase(),
        type: { type: DataTypeEnum.VOID },
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
            to3AC: () => ({ label: '', code: '' }),
            execute: () => {
              this.isOnBreak = true
              return true
            },
          },
        ],
        params: [],
      }),
    )
  }

  // COMPILAR
  public execute(scope: Scope): void {
    // AGREGAR ENTORNO LOCAL
    const localScope = new Scope('Switch', 'switch', scope)
    this.addControlFunction(localScope, 'Break')
    this.addControlFunction(localScope, 'Return')
    this.isOnBreak = false

    // EVALUAR CASES
    let foundCase = false
    for (
      let caseIndex = 0, length = this.props.cases?.length || 0;
      caseIndex < length;
      caseIndex++
    ) {
      if (this.props.cases?.length) {
        // EVALUAR SI EL VALOR ES IGUAL AL CASE
        const caseValue = this.props.cases[caseIndex].case
          .getValue(localScope)
          ?.getValue(localScope)
        if (
          caseValue ===
            this.props.value.getValue(localScope)?.getValue(localScope) ||
          (this.props.cases[caseIndex].case.props.operator && caseValue)
        ) {
          // EJECUTAR INSTRUCCIONES
          foundCase = true
          const caseEnv = new Scope('Case', `case_${caseIndex}`, localScope)
          for (
            let instructionIndex = 0,
              instructionsLength = this.props.cases[caseIndex].body.length;
            instructionIndex < instructionsLength;
            instructionIndex++
          ) {
            if (!this.isOnBreak)
              this.props.cases[caseIndex].body[instructionIndex].execute(
                caseEnv,
              )
            else break
          }

          // SALIR EN BREAK
          if (this.isOnBreak) break
        }
      }
    }

    // EVALUAR DEFAULT
    if (!foundCase) {
      if (this.props.default && this.props.default.body) {
        const defEnv = new Scope('Case', 'default', localScope)
        for (
          let instructionIndex = 0,
            instructionsLength = this.props.default.body.length;
          instructionIndex < instructionsLength;
          instructionIndex++
        ) {
          if (!this.isOnBreak)
            this.props.default.body[instructionIndex].execute(defEnv)
          else break
        }
      }
    }
  }
}

export default Switch

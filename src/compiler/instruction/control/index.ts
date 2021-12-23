import { add3AC, getLastLabel, getTemporal3AC } from '../../utils/tools'
import Instruction, { TAC } from '../abstract'
import { TokenInfo } from '../../utils/types'
import Scope from '../../runtime/scope'
import Expression from '../expression'

interface ConditionExp {
  exp: Expression
  body: Instruction[]
}

class Condition extends Instruction {
  private isOnBreak = false

  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    private props: {
      valid: ConditionExp
      inValid?: ConditionExp
      fallback?: ConditionExp[]
    },
  ) {
    super(token, 'Condition')
  }

  // GENERAR 3AC
  public to3AC(scope: Scope): TAC {
    // SOLO HAY UN IF
    const validLabel = getLastLabel(true)

    if (!this.props.inValid && !this.props.fallback) {
      const exitLabel = getLastLabel(true)
      const code = `if(${
        this.props.valid.exp.to3AC(scope).code
      }) goto ${validLabel};\ngoto ${exitLabel};\n${validLabel}:\n${this.props.valid.body
        .map((exp) => exp?.to3AC(scope)?.code)
        .join('\n')}\ngoto ${exitLabel};\n${exitLabel}: ;\n`

      return add3AC({
        label: getTemporal3AC(false),
        code,
        isMultiple: true,
      })
    }

    // EXISTE IF - ELSE
    else if (this.props.valid && this.props.inValid && !this.props.fallback) {
      const inValidLabel = getLastLabel(true)
      const exitLabel = getLastLabel(true)
      const code = `if(${
        this.props.valid.exp.to3AC(scope).code
      }) goto ${validLabel};\ngoto ${inValidLabel};\n${validLabel}:\n${this.props.valid.body
        .map((exp) => exp?.to3AC(scope)?.code)
        .join(
          '\n',
        )}goto ${exitLabel};\n${inValidLabel}:\n${this.props.inValid.body
        .map((exp) => exp?.to3AC(scope)?.code)
        .join('\n')}\n${exitLabel}: ;\n`

      return add3AC({
        label: getTemporal3AC(false),
        code,
        isMultiple: true,
      })
    }

    // EXISTE IF - ELSE IF
    else if (this.props.valid && this.props.fallback) {
      const inValidLabel = getLastLabel(true)
      const fallbackCopy = [...this.props.fallback]

      // ELIF RECURSIVO
      const getElif3AC = (): string => {
        const condition = fallbackCopy.pop()

        if (condition) {
          const validElifLabel = getLastLabel(true)
          const invalidElifLabel = getLastLabel(true)

          return `if(${
            condition.exp.to3AC(scope).code
          }) goto ${validElifLabel};\ngoto ${invalidElifLabel};\n${validElifLabel}:\n${condition.body
            .map((exp) => exp?.to3AC(scope)?.code)
            .join(
              '\n',
            )}\ngoto EXITLABEL;\n${invalidElifLabel}:\n${getElif3AC()}\ngoto EXITLABEL;`
        } else {
          // TODO: ejecutar instrucciones de else
          if (this.props.inValid)
            return `${this.props.inValid.body
              .map((exp) => exp?.to3AC(scope)?.code)
              .join('\n')}`
          else return ''
        }
      }

      const elifSequence = getElif3AC()
      const exitLabel = getLastLabel(true)
      const code = `if(${
        this.props.valid.exp.to3AC(scope).code
      }) goto ${validLabel};\ngoto ${inValidLabel};\n${validLabel}:\n${this.props.valid.body
        .map((exp) => exp?.to3AC(scope)?.code)
        .join(
          '\n',
        )}\ngoto ${exitLabel};\n${inValidLabel}:\n${elifSequence.replace(
        /EXITLABEL/g,
        exitLabel,
      )}\n${exitLabel}: ;`

      return add3AC({
        label: getTemporal3AC(false),
        code,
        isMultiple: true,
      })
    }
  }

  // COMPILAR
  public execute(env: Scope): void {
    this.isOnBreak = false

    // EJECUTAR CONDICION INICIAL
    const conditionValue = this.props.valid.exp.getValue(env)
    if (
      conditionValue?.getValue(env) !== undefined &&
      conditionValue?.getValue(env) !== false
    ) {
      // ENTORNO DE CONDICION
      const scope = new Scope('Condition', 'if', env)

      // EJECUTAR IF
      this.props.valid.body.forEach((instruction) => {
        if (!this.isOnBreak) instruction.execute(scope)
      })
    } else {
      // GUARDAR ESTADO DE ELSE
      const inValidCondition = () => {
        if (this.props.inValid) {
          // ENTORNO DE CONDICION
          const scope = new Scope('Condition', 'else', env)

          // EJECUTAR ELSE
          this.props.inValid.body.forEach((instruction) => {
            if (!this.isOnBreak) instruction.execute(scope)
          })
        }
      }

      // EJECUTAR LISTA DE ELSE IF
      if (this.props.fallback) {
        let foundValid = false
        for (
          let conditionIndex = 0, length = this.props.fallback.length;
          conditionIndex < length;
          conditionIndex++
        ) {
          // VALOR DE CONDICOIN
          const conditionValue =
            this.props.fallback[conditionIndex].exp.getValue(env)

          // VALIDAR
          if (conditionValue?.getValue(env)) {
            foundValid = true
            const scope = new Scope('Condition', 'else if', env)

            // EJECUTAR ELSE-IF
            this.props.fallback[conditionIndex].body.forEach((instruction) => {
              if (!this.isOnBreak) instruction.execute(scope)
            })
          }
        }

        // EJECUTAR ELSE SI NO ENCONTRO NINGUN ELSE IF
        if (!foundValid) inValidCondition()
      }
      // EJECUTAR ELSE
      else inValidCondition()
    }
  }
}

export default Condition

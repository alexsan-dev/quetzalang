/* eslint-disable indent */
import DataType, {
  DataTypeEnum,
  DataValue,
  Operator,
  TokenInfo,
} from '../../../utils/types'
import { getValueByType } from '../../value/tools'
import { addError } from '../../../utils/tools'
import BooleanValue from '../../value/boolean'
import CharValue from '../../value/character'
import DoubleValue from '../../value/double'
import VectorValue from '../../value/vector'
import StringValue from '../../value/string'
import Scope from '../../../runtime/scope'
import IntValue from '../../value/int'
import Value from '../../value'

/**
 * Operar valores
 * @description Operar dos valores segun una tabla de operaciones
 * @param left
 * @param operator
 * @param right
 */
const operateValues = (
  scope: Scope,
  token: TokenInfo,
  operator: Operator,
  left?: Value,
  right?: Value,
  condition?: Value,
  onlyTypes?: boolean,
): Value | undefined | DataType => {
  // PROPIEDADES DE EXP IZQUIERDA
  const lValue: DataValue | undefined = onlyTypes
    ? undefined
    : left?.getValue(scope)
  const lType: DataType | undefined = left?.getType(scope)

  // PROPIEDADES DE EXP DERECHA
  const rValue: DataValue | undefined = onlyTypes
    ? undefined
    : right?.getValue(scope)
  const rType: DataType | undefined = right?.getType(scope)

  // PROPIEDADES DE CONDICION
  const conditionValue: DataValue | undefined = onlyTypes
    ? undefined
    : condition?.getValue(scope)

  // RESULTADOS
  let value: Value | undefined
  let type: DataTypeEnum | undefined

  // OPERAR
  switch (operator) {
    //  OPERADORES ARITMETICOS
    case Operator.PLUS:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) + (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) + (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.BOOLEAN:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) + (rValue ? 1 : 0),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) + (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.STRING:
              if (!onlyTypes)
                value = new StringValue(
                  token,
                  (lValue as string) + (rValue as string),
                )
              type = DataTypeEnum.STRING
              break
            default:
              break
          }
          break
        case DataTypeEnum.DOUBLE:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) + (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) + (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.BOOLEAN:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) + (rValue ? 1 : 0),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) + (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.STRING:
              if (!onlyTypes)
                value = new StringValue(
                  token,
                  (lValue as string) + (rValue as string),
                )
              type = DataTypeEnum.STRING
              break
            default:
              break
          }
          break
        case DataTypeEnum.BOOLEAN:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (rValue ? 1 : 0) + (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (rValue ? 1 : 0) + (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.STRING:
              if (!onlyTypes)
                value = new StringValue(
                  token,
                  lValue ? 'true' : 'false' + (rValue as string),
                )
              type = DataTypeEnum.STRING
              break
            default:
              break
          }
          break
        case DataTypeEnum.CHARACTER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as string).charCodeAt(0) + (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as string).charCodeAt(0) + (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.STRING:
              if (!onlyTypes)
                value = new StringValue(
                  token,
                  (lValue as string) + (rValue as string),
                )
              type = DataTypeEnum.STRING
              break
            default:
              break
          }
          break
        case DataTypeEnum.STRING:
          if (!onlyTypes)
            value = new StringValue(
              token,
              (lValue as string) + (rValue as string),
            )
          type = DataTypeEnum.STRING
          break
        default:
          break
      }
      break
    case Operator.MINUS:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) - (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) - (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.BOOLEAN:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) - (rValue ? 1 : 0),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) - (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.INTEGER
              break
            default:
              break
          }
          break
        case DataTypeEnum.DOUBLE:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) - (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) - (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.BOOLEAN:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) - (rValue ? 1 : 0),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) - (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.BOOLEAN:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (rValue ? 1 : 0) - (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (rValue ? 1 : 0) - (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.CHARACTER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as string).charCodeAt(0) - (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as string).charCodeAt(0) - (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        default:
          break
      }
      break
    case Operator.TIMES:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) * (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) * (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as number) * (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.INTEGER
              break
            default:
              break
          }
          break
        case DataTypeEnum.DOUBLE:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) * (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) * (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.CHARACTER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) * (rValue as string).charCodeAt(0),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.CHARACTER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  (lValue as string).charCodeAt(0) * (rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as string).charCodeAt(0) * (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        default:
          break
      }
      break
    case Operator.DIVISION:
      if ((rValue as number) !== 0)
        switch (lType?.type) {
          case DataTypeEnum.INTEGER:
            switch (rType?.type) {
              case DataTypeEnum.INTEGER:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as number),
                  )
                type = DataTypeEnum.DOUBLE
                break
              case DataTypeEnum.DOUBLE:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as number),
                  )
                type = DataTypeEnum.DOUBLE
                break
              case DataTypeEnum.CHARACTER:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as string).charCodeAt(0),
                  )
                type = DataTypeEnum.DOUBLE
                break
              default:
                break
            }
            break
          case DataTypeEnum.DOUBLE:
            switch (rType?.type) {
              case DataTypeEnum.INTEGER:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as number),
                  )
                type = DataTypeEnum.DOUBLE
                break
              case DataTypeEnum.DOUBLE:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as number),
                  )
                type = DataTypeEnum.DOUBLE
                break
              case DataTypeEnum.CHARACTER:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as number) / (rValue as string).charCodeAt(0),
                  )
                type = DataTypeEnum.DOUBLE
                break
              default:
                break
            }
            break
          case DataTypeEnum.CHARACTER:
            switch (rType?.type) {
              case DataTypeEnum.INTEGER:
                if (!onlyTypes)
                  value = new IntValue(
                    token,
                    (lValue as string).charCodeAt(0) / (rValue as number),
                  )
                type = DataTypeEnum.INTEGER
                break
              case DataTypeEnum.DOUBLE:
                if (!onlyTypes)
                  value = new DoubleValue(
                    token,
                    (lValue as string).charCodeAt(0) / (rValue as number),
                  )
                type = DataTypeEnum.DOUBLE
                break
              default:
                break
            }
            break
          default:
            break
        }
      break
    case Operator.POWER:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new IntValue(
                  token,
                  Math.pow(lValue as number, rValue as number),
                )
              type = DataTypeEnum.INTEGER
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  Math.pow(lValue as number, rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.DOUBLE:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  Math.pow(lValue as number, rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  Math.pow(lValue as number, rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.STRING:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new StringValue(
                  token,
                  (lValue as string).repeat(rValue as number),
                )
              type = DataTypeEnum.STRING
              break
            default:
              break
          }
        default:
          break
      }
      break
    case Operator.MODULE:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) % (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) % (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        case DataTypeEnum.DOUBLE:
          switch (rType?.type) {
            case DataTypeEnum.INTEGER:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) % (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            case DataTypeEnum.DOUBLE:
              if (!onlyTypes)
                value = new DoubleValue(
                  token,
                  (lValue as number) % (rValue as number),
                )
              type = DataTypeEnum.DOUBLE
              break
            default:
              break
          }
          break
        default:
          break
      }
      break

    // OPERACIONES GENEERALES
    case Operator.NEGATION:
      switch (lType?.type) {
        case DataTypeEnum.INTEGER:
          if (!onlyTypes) value = new IntValue(token, (lValue as number) * -1)
          type = DataTypeEnum.INTEGER
          break
        case DataTypeEnum.DOUBLE:
          if (!onlyTypes)
            value = new DoubleValue(token, (lValue as number) * -1)
          type = DataTypeEnum.DOUBLE
          break
        default:
          break
      }
      break
    case Operator.NOT:
      switch (lType?.type) {
        case DataTypeEnum.BOOLEAN:
          if (!onlyTypes) value = new BooleanValue(token, !(lValue as boolean))
          type = DataTypeEnum.BOOLEAN
          break
        default:
          break
      }
      break
    case Operator.CONCAT:
      switch (lType?.type) {
        case DataTypeEnum.STRING:
          if (!onlyTypes)
            value = new StringValue(
              token,
              (lValue as string) + (rValue as string),
            )
          type = DataTypeEnum.STRING
          break
        default:
          break
      }
      switch (rType?.type) {
        case DataTypeEnum.STRING:
          if (!onlyTypes)
            value = new StringValue(
              token,
              (lValue as string) + (rValue as string),
            )
          type = DataTypeEnum.STRING
          break
        default:
          break
      }
      break

    // OPERADORES BOOLEANOS
    case Operator.OR:
      if (!onlyTypes)
        value = new BooleanValue(
          token,
          (lValue as boolean) || (rValue as boolean),
        )
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.AND:
      if (!onlyTypes)
        value = new BooleanValue(
          token,
          (lValue as boolean) && (rValue as boolean),
        )
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.TERNARY:
      if (conditionValue && conditionValue !== undefined) {
        if (!onlyTypes) value = getValueByType(token, lType, lValue)
        type = lType?.type
      } else {
        if (!onlyTypes) value = getValueByType(token, rType, rValue)
        type = rType?.type
      }
      break
    case Operator.EQUALSEQUALS:
      if (!onlyTypes) value = new BooleanValue(token, lValue === rValue)
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.NONEQUALS:
      if (!onlyTypes) value = new BooleanValue(token, lValue !== rValue)
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.MOREOREQUALS:
      if (!onlyTypes)
        value = new BooleanValue(
          token,
          (lValue as number) >= (rValue as number),
        )
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.LESSOREQUALS:
      if (!onlyTypes)
        value = new BooleanValue(
          token,
          (lValue as number) <= (rValue as number),
        )
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.MAJOR:
      if (!onlyTypes)
        value = new BooleanValue(token, (lValue as number) > (rValue as number))
      type = DataTypeEnum.BOOLEAN
      break
    case Operator.MINOR:
      if (!onlyTypes)
        value = new BooleanValue(token, (lValue as number) < (rValue as number))
      type = DataTypeEnum.BOOLEAN
      break
    default:
      break
  }

  // RETORNO
  if (type !== undefined) {
    if (onlyTypes) return { type }
    else {
      if (value !== undefined) return value
      else {
        addError(
          token,
          `No es posible operar la expresion ${lType} ${operator} ${rType}.`,
        )
        return null
      }
    }
  } else {
    addError(
      token,
      `No es posible operar la expresion ${lType?.type} ${operator} ${rType?.type}.`,
    )
    if (onlyTypes) return { type: DataTypeEnum.NULL }
    else return null
  }
}

/**
 * Valores por defecto
 * @description Retorna un valor por defecto para cada tipo de dato
 * @param type
 * @returns
 */
export const defaultValues = (token: TokenInfo, type: DataType): Value => {
  switch (type.type) {
    case DataTypeEnum.INTEGER:
      return new IntValue(token, 0)
    case DataTypeEnum.DOUBLE:
      return new DoubleValue(token, 0.0)
    case DataTypeEnum.STRING:
      return new StringValue(token, '')
    case DataTypeEnum.BOOLEAN:
      return new BooleanValue(token, true)
    case DataTypeEnum.CHARACTER:
      return new CharValue(token, '0')
    case DataTypeEnum.NULL:
      return null
    case DataTypeEnum.ARRAY:
      return new VectorValue(token, [])
    default:
      return new StringValue(token, '')
  }
}

export default operateValues

/* eslint-disable indent */
import DataType, { DataValue, Operator, TokenInfo } from '../../../utils/types'
import { addError } from '../../../utils/tools'
import Scope from '../../../runtime/scope'
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
	onlyTypes?: boolean
): Value | undefined | DataType => {
	// PROPIEDADES DE EXP IZQUIERDA
	const lValue: DataValue | undefined = onlyTypes ? undefined : (left?.getValue(scope) ?? undefined)
	const lType: DataType | undefined = left?.getType(scope)

	// PROPIEDADES DE EXP DERECHA
	const rValue: DataValue | undefined = onlyTypes ? undefined : (right?.getValue(scope) ?? undefined)
	const rType: DataType | undefined = right?.getType(scope)

	// PROPIEDADES DE CONDICION
	const conditionValue: DataValue | undefined = onlyTypes ? undefined : condition?.getValue(scope)

	// RESULTADOS
	let value: DataValue | undefined
	let type: DataType | undefined

	// OPERAR
	switch (operator) {
		//  OPERADORES ARITMETICOS
		case Operator.PLUS:
			switch (lType) {
				case DataType.INTEGER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) + (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) + (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.BOOLEAN:
							if (!onlyTypes) value = (lValue as number) + (rValue ? 1 : 0)
							type = DataType.INTEGER
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) + (rValue as string).charCodeAt(0)
							type = DataType.INTEGER
							break
						case DataType.STRING:
							if (!onlyTypes) value = (lValue as string) + (rValue as string)
							type = DataType.STRING
							break
						default:
							break
					}
					break
				case DataType.DOUBLE:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) + (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) + (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.BOOLEAN:
							if (!onlyTypes) value = (lValue as number) + (rValue ? 1 : 0)
							type = DataType.DOUBLE
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) + (rValue as string).charCodeAt(0)
							type = DataType.DOUBLE
							break
						case DataType.STRING:
							if (!onlyTypes) value = (lValue as string) + (rValue as string)
							type = DataType.STRING
							break
						default:
							break
					}
					break
				case DataType.BOOLEAN:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (rValue ? 1 : 0) + (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (rValue ? 1 : 0) + (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.STRING:
							if (!onlyTypes) value = lValue ? 'true' : 'false' + (rValue as string)
							type = DataType.STRING
							break
						default:
							break
					}
					break
				case DataType.CHARACTER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) + (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) + (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.STRING:
							if (!onlyTypes) value = (lValue as string) + (rValue as string)
							type = DataType.STRING
							break
						default:
							break
					}
					break
				case DataType.STRING:
					if (!onlyTypes) value = (lValue as string) + (rValue as string)
					type = DataType.STRING
					break
				default:
					break
			}
			break
		case Operator.MINUS:
			switch (lType) {
				case DataType.INTEGER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) - (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) - (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.BOOLEAN:
							if (!onlyTypes) value = (lValue as number) - (rValue ? 1 : 0)
							type = DataType.INTEGER
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) - (rValue as string).charCodeAt(0)
							type = DataType.INTEGER
							break
						default:
							break
					}
					break
				case DataType.DOUBLE:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) - (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) - (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.BOOLEAN:
							if (!onlyTypes) value = (lValue as number) - (rValue ? 1 : 0)
							type = DataType.DOUBLE
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) - (rValue as string).charCodeAt(0)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.BOOLEAN:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (rValue ? 1 : 0) - (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (rValue ? 1 : 0) - (rValue as number)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.CHARACTER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) - (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) - (rValue as number)
							type = DataType.DOUBLE
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
			switch (lType) {
				case DataType.INTEGER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) * (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) * (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) * (rValue as string).charCodeAt(0)
							type = DataType.INTEGER
							break
						default:
							break
					}
					break
				case DataType.DOUBLE:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) * (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) * (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.CHARACTER:
							if (!onlyTypes) value = (lValue as number) * (rValue as string).charCodeAt(0)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.CHARACTER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) * (rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as string).charCodeAt(0) * (rValue as number)
							type = DataType.DOUBLE
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
				switch (lType) {
					case DataType.INTEGER:
						switch (rType) {
							case DataType.INTEGER:
								if (!onlyTypes) value = (lValue as number) / (rValue as number)
								type = DataType.DOUBLE
								break
							case DataType.DOUBLE:
								if (!onlyTypes) value = (lValue as number) / (rValue as number)
								type = DataType.DOUBLE
								break
							case DataType.CHARACTER:
								if (!onlyTypes) value = (lValue as number) / (rValue as string).charCodeAt(0)
								type = DataType.DOUBLE
								break
							default:
								break
						}
						break
					case DataType.DOUBLE:
						switch (rType) {
							case DataType.INTEGER:
								if (!onlyTypes) value = (lValue as number) / (rValue as number)
								type = DataType.DOUBLE
								break
							case DataType.DOUBLE:
								if (!onlyTypes) value = (lValue as number) / (rValue as number)
								type = DataType.DOUBLE
								break
							case DataType.CHARACTER:
								if (!onlyTypes) value = (lValue as number) / (rValue as string).charCodeAt(0)
								type = DataType.DOUBLE
								break
							default:
								break
						}
						break
					case DataType.CHARACTER:
						switch (rType) {
							case DataType.INTEGER:
								if (!onlyTypes) value = (lValue as string).charCodeAt(0) / (rValue as number)
								type = DataType.INTEGER
								break
							case DataType.DOUBLE:
								if (!onlyTypes) value = (lValue as string).charCodeAt(0) / (rValue as number)
								type = DataType.DOUBLE
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
			switch (lType) {
				case DataType.INTEGER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = Math.pow(lValue as number, rValue as number)
							type = DataType.INTEGER
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = Math.pow(lValue as number, rValue as number)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.DOUBLE:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = Math.pow(lValue as number, rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = Math.pow(lValue as number, rValue as number)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.STRING:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as string).repeat(rValue as number)
							type = DataType.STRING
							break
						default:
							break
					}
				default:
					break
			}
			break
		case Operator.MODULE:
			switch (lType) {
				case DataType.INTEGER:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) % (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) % (rValue as number)
							type = DataType.DOUBLE
							break
						default:
							break
					}
					break
				case DataType.DOUBLE:
					switch (rType) {
						case DataType.INTEGER:
							if (!onlyTypes) value = (lValue as number) % (rValue as number)
							type = DataType.DOUBLE
							break
						case DataType.DOUBLE:
							if (!onlyTypes) value = (lValue as number) % (rValue as number)
							type = DataType.DOUBLE
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
			switch (lType) {
				case DataType.INTEGER:
					if (!onlyTypes) value = (lValue as number) * -1
					type = DataType.INTEGER
					break
				case DataType.DOUBLE:
					if (!onlyTypes) value = (lValue as number) * -1
					type = DataType.DOUBLE
					break
				default:
					break
			}
			break
		case Operator.NOT:
			switch (lType) {
				case DataType.BOOLEAN:
					if (!onlyTypes) value = !(lValue as boolean);
					type = DataType.BOOLEAN;
					break;
				default:
					break;
			}
			break;
		case Operator.CONCAT:
			switch (lType) {
				case DataType.STRING:
					if (!onlyTypes) value = (lValue as string) + (rValue as string);
					type = DataType.STRING;
					break;
					break
				default:
					break
			}
			break

		// OPERADORES BOOLEANOS
		case Operator.OR:
			if (!onlyTypes) value = (lValue as boolean) || (rValue as boolean)
			type = DataType.BOOLEAN
			break
		case Operator.AND:
			if (!onlyTypes) value = (lValue as boolean) && (rValue as boolean)
			type = DataType.BOOLEAN
			break
		case Operator.TERNARY:
			if (conditionValue && conditionValue !== undefined) {
				if (!onlyTypes) value = lValue
				type = lType
			} else {
				if (!onlyTypes) value = rValue
				type = rType
			}
			break
		case Operator.EQUALSEQUALS:
			if (!onlyTypes) value = lValue === rValue
			type = DataType.BOOLEAN
			break
		case Operator.NONEQUALS:
			if (!onlyTypes) value = lValue !== rValue
			type = DataType.BOOLEAN
			break
		case Operator.MOREOREQUALS:
			if (!onlyTypes) value = (lValue as number) >= (rValue as number)
			type = DataType.BOOLEAN
			break
		case Operator.LESSOREQUALS:
			if (!onlyTypes) value = (lValue as number) <= (rValue as number)
			type = DataType.BOOLEAN
			break
		case Operator.MAJOR:
			if (!onlyTypes) value = (lValue as number) > (rValue as number)
			type = DataType.BOOLEAN
			break
		case Operator.MINOR:
			if (!onlyTypes) value = (lValue as number) < (rValue as number)
			type = DataType.BOOLEAN
			break
		default:
			break
	}

	// RETORNO
	if (type !== undefined) {
		if (onlyTypes) return type
		else {
			if (value !== undefined) return new Value(token, { value, type })
			else {
				addError(token, `No es posible operar la expresion ${lType} ${operator} ${rType}.`)
				return new Value(token, { value: null, type: DataType.NULL })
			}
		}
	} else {
		addError(token, `No es posible operar la expresion ${lType} ${operator} ${rType}.`)
		if (onlyTypes) return DataType.NULL
		else
			return new Value(token, { value: null, type: DataType.NULL })
	}
}

/**
 * Valores por defecto
 * @description Retorna un valor por defecto para cada tipo de dato
 * @param type
 * @returns
 */
export const defaultValues = (type: DataType): DataValue => {
	switch (type) {
		case DataType.INTEGER:
			return 0
		case DataType.DOUBLE:
			return 0.0
		case DataType.STRING:
			return ''
		case DataType.BOOLEAN:
			return true
		case DataType.CHARACTER:
			return '0'
		case DataType.NULL:
			return null
		default:
			return ''
	}
}

export default operateValues
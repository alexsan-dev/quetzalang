/* eslint-disable indent */
// TIPOS
import DataType, { DataValue, TokenInfo } from '../../utils/types'
import Scope from '../../runtime/scope'
import Instruction from '../abstract'

// ASIGNACIONES
class Value extends Instruction {
	// CONSTRUCTOR
	constructor(
		token: TokenInfo,
		public props: { value: DataValue; type: DataType; }
	) {
		super(token, 'Value')
	}

	// COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
	public execute(scope: Scope): void { }

	// OBTENER TIPO DE RESULTADO
	public getType(scope: Scope): DataType {
		if (this.props.type === DataType.ID) {
			const idValue = scope.getVar(this.props.value as string)
			return idValue?.getType(scope) ?? DataType.NULL
		} else return this.props.type
	}

	// OBTENER VALOR CAST
	public getValue(scope: Scope): DataValue | undefined {
		if (scope) {
			// CAST TIPO
			if (typeof this.props.value !== 'object') {
				switch (this.props.type) {
					case DataType.STRING:
						return this.props.value
					case DataType.INTEGER:
						if (typeof this.props.value === 'string')
							return parseInt(this.props.value as string, 10)
						else return this.props.value
					case DataType.DOUBLE:
						if (typeof this.props.value === 'string') return parseFloat(this.props.value as string)
						else return this.props.value
					case DataType.BOOLEAN:
						if (typeof this.props.value === 'string')
							return (this.props.value as string).toLowerCase() === 'true'
						else return this.props.value
					case DataType.CHARACTER:
						return (this.props.value as string).charAt(0)
					case DataType.ID:
						const idValue = scope.getVar(this.props.value as string)
						return idValue.getValue(scope)
					case DataType.NULL:
						return null
					default:
						return this.props.value
				}
			} else return this.props.value
		}
	}
}

export default Value
import getStringBind, { BINDREGEX } from '../tools'
import { getInstructions } from '../../../../index'
import Instruction, { TAC } from '../../abstract'
import { getLast3AC } from '../../../utils/tools'
import FunctionCall from '../../functions/call'
import Scope from '../../../runtime/scope'
import Value from '../'

import DataType, {
  DataTypeEnum,
  DataValue,
  TokenInfo,
} from '../../../utils/types'

class StringValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // CODIGO 3D
  public to3AC(scope: Scope): TAC {
    return getLast3AC(this.getValue(scope) as string)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return { type: DataTypeEnum.STRING }
  }

  // OBTENER VALOR CAST
  public getValue(scope: Scope): DataValue | undefined {
    // OBTENER VARIABLES A INTERPOLAR
    let bindIndex: number = -1
    let bindData: DataValue[] = []
    const groups = getStringBind(this.value as string)

    groups?.forEach((exp: string) => {
      getInstructions(exp)?.forEach((evals: Instruction) => {
        bindData.push((evals as FunctionCall).getValue(scope))
      })
    })

    // RERTORNAR Y REMPLAZAR VALORES
    return (
      this.value
        ?.toString()
        ?.replace(BINDREGEX, () => bindData[++bindIndex]?.toString()) ?? ''
    )
  }

  // OBTENER LONGITUD
  public length(): number {
    return this.value.toString().length
  }

  public length_type(): DataType {
    return { type: DataTypeEnum.INTEGER }
  }

  // OBTENER CARACTER
  public characterOfPosition(index: number): string {
    return this.value.toString().charAt(index)
  }

  public characterOfPosition_type(): DataType {
    return { type: DataTypeEnum.CHARACTER }
  }

  // OBTENER SUB CADENA
  public subString(start: number, end?: number): string {
    return this.value.toString().substring(start, end)
  }

  public subString_type(): DataType {
    return { type: DataTypeEnum.STRING }
  }

  // OBTENER EN MAYUSCULAS
  public toUppercase(): string {
    return this.value.toString().toUpperCase()
  }

  public toUppercase_type(): DataType {
    return { type: DataTypeEnum.STRING }
  }

  // OBTENER CARACTER
  public toLowercase(): string {
    return this.value.toString().toLowerCase()
  }

  public toLowercase_type(): DataType {
    return { type: DataTypeEnum.STRING }
  }
}

export default StringValue

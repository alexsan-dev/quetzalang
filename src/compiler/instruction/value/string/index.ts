import DataType, { DataValue, TokenInfo } from '../../../utils/types'
import getStringBind, { BINDREGEX } from '../tools'
import { getInstructions } from '../../../../index'
import FunctionCall from '../../functions/call'
import Scope from '../../../runtime/scope'
import Instruction from '../../abstract'
import Value from '../'

class StringValue extends Value {
  // CONSTRUCTOR
  constructor(token: TokenInfo, public value: DataValue) {
    super(token, value)
  }

  // COMPILAR UN VALOR SIEMPRE DEVOLVERA TRUE
  public execute(): void {}

  // OBTENER TIPO DE RESULTADO
  public getType(): DataType {
    return DataType.STRING
  }

  // OBTENER TIPO GENERICO
  public getGenType(): DataType {
    return this.getType()
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
    return DataType.INTEGER
  }

  // OBTENER CARACTER
  public characterOfPosition(index: number): string {
    return this.value.toString().charAt(index)
  }

  public characterOfPosition_type(): DataType {
    return DataType.CHARACTER
  }

  // OBTENER SUB CADENA
  public subString(start: number, end?: number): string {
    return this.value.toString().substring(start, end)
  }

  public subString_type(): DataType {
    return DataType.STRING
  }

  // OBTENER EN MAYUSCULAS
  public toUppercase(): string {
    return this.value.toString().toUpperCase()
  }

  public toUppercase_type(): DataType {
    return DataType.STRING
  }

  // OBTENER CARACTER
  public toLowercase(): string {
    return this.value.toString().toLowerCase()
  }

  public toLowercase_type(): DataType {
    return DataType.STRING
  }
}

export default StringValue

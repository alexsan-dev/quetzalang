// TIPOS DE DATOS
export enum DataTypeEnum {
  ID = 'ID',
  VOID = 'VOID',
  NULL = 'NULL',
  INTEGER = 'INT',
  ARRAY = 'ARRAY',
  STRUCT = 'STRUCT',
  STRING = 'STRING',
  DOUBLE = 'DOUBLE',
  BOOLEAN = 'BOOLEAN',
  CHARACTER = 'CHARACTER',
}

interface DataType {
  type: DataTypeEnum
  gen?: DataType
  nodes?: DataType[]
}

// DATOS PRIMITIVOS
export type DataValue = string | number | boolean | null | DataValue[]

// OPERADORES
export enum Operator {
  PLUS = '+',
  MINUSMINUS = '--',
  PLUSPLUS = '++',
  MINUS = '-',
  NEGATION = '-*',
  DIVISION = '/',
  TIMES = '*',
  MODULE = '%',
  POWER = '^',
  TERNARY = '?:',
  EQUALSEQUALS = '==',
  MOREOREQUALS = '>=',
  MAJOR = '>',
  LESSOREQUALS = '<=',
  MINOR = '<',
  NOT = '!',
  NONEQUALS = '!=',
  AND = '&&',
  CONCAT = '&',
  OR = '||',
}

// LINEAS Y COLUMNAS
export interface JISONTokenInfo {
  first_line: number
  last_line: number
  first_column: number
  last_column: number
}

export interface TokenInfo {
  line: number
  col: number
}

export default DataType

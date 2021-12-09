// TIPOS
import DataType, { TokenInfo } from '../utils/types'
import { addError } from '../utils/tools'

// DATOS
import FunctionBlock from '../instruction/functions'
import Value from '../instruction/value'

type ScopeName =
  | 'Function'
  | 'Main'
  | 'Global'
  | 'Condition'
  | 'Loop'
  | 'Case'
  | 'Switch'
class Scope {
  // GLOBALES
  private vars: {
    [id: string]: {
      value: Value | undefined
      type: DataType
    }
  }

  private functions: {
    [id: string]: {
      value: FunctionBlock | undefined
      type: DataType | 'void'
    }
  }

  // CONSTRUCTOR
  constructor(
    private name: ScopeName,
    private id: string,
    private prevScope?: Scope,
  ) {
    this.vars = {}
    this.functions = {}
  }

  // OBTENER ENTORNO PREVIO
  public getPrevEnv(): Scope | undefined {
    return this.prevScope
  }

  // OBTENER NOMBRE
  public getName(): ScopeName {
    return this.name
  }

  // OBTENER ID
  public getID(): string {
    return this.id
  }

  // AGREGAR VARIABLE
  public addVar(id: string, type: DataType, value?: Value): void {
    // NO EXISTE
    if (!this.vars[id]) {
      this.vars[id] = { value, type }
    } else
      addError(
        this.getVar(id)?.token || ({} as TokenInfo),
        `La variable ${id} ya se ha declarado anteriormente.`,
      )
  }

  // RE ASIGNAR VARIABLE
  public setVar(id: string, newValue: Value): void {
    if (this.getVar(id) !== undefined) {
      // BUSCAR
      if (this.vars[id] !== undefined)
        this.vars[id] = { value: newValue, type: this.vars[id].type }
      else this.prevScope?.setVar(id, newValue)
    } else
      addError(
        this.getVar(id)?.token || ({} as TokenInfo),
        `La variable ${id} no existe.`,
      )
  }

  // OBTENER VARIABLE
  public getVar(id: string): Value | undefined {
    if (id in this.vars) {
      return this.vars[id].value
    } else {
      if (this.prevScope) return this.prevScope.getVar(id)
      else return undefined
    }
  }

  // OBTENER FUNCION
  public getFunction(id: string): FunctionBlock | undefined {
    if (id in this.functions) {
      if (this.functions[id]?.value)
        return Object.create(
          Object.getPrototypeOf(this.functions[id]?.value),
          Object.getOwnPropertyDescriptors(this.functions[id]?.value),
        )
    } else {
      if (this.prevScope) return this.prevScope.getFunction(id)
      else return undefined
    }
  }

  // AGREGAR FUNCION
  public addFunction(
    id: string,
    type: DataType | 'void',
    value: FunctionBlock,
  ): void {
    // NO EXISTE
    if (this.functions[id] === undefined) {
      this.functions[id] = { value, type }
    } else
      addError(
        this.getVar(id)?.token || ({} as TokenInfo),
        `La funcion ${id} ya se ha declarado anteriormente.`,
      )
  }
}

export default Scope

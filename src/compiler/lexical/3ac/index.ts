import { TAC } from 'compiler/instruction/abstract'

export let tempCounter = -1
const codes: TAC[] = []

export const addTemporal = () => ++tempCounter

export default codes

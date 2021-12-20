import { TAC } from 'compiler/instruction/abstract'

export let tempCounter = -1
const codes: TAC[] = []

export const addTemporal = (add?: boolean) => {
  if (add) tempCounter++
  return tempCounter
}
export const clearTemporalCounter = () => (tempCounter = 0)

export default codes

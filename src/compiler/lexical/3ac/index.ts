import { TAC } from 'compiler/instruction/abstract'

export let tempCounter = -1
export let labelCounter = -1
const codes: TAC[] = []

export const addTemporal = (add?: boolean) => {
  if (add) tempCounter++
  return tempCounter
}

export const addLabel = (add?: boolean) => {
  if (add) labelCounter++
  return labelCounter
}

export const clearTemporalCounter = () => (tempCounter = 0)
export const clearLabelCounter = () => (labelCounter = 0)

export default codes

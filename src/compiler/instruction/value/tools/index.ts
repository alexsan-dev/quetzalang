export const BINDREGEX = /[.+]?\$(?:\(([^\n\r]+)\)|([^\)\n\r\s]+))/gm

/**
 * Obtener grupos de string
 * @param str
 * @returns
 */
const getStringBind = (str: string) => {
  // REGEX
  let m: RegExpExecArray

  // GRUPOS
  const groups: string[] = []
  while ((m = BINDREGEX.exec(str)) !== null) {
    if (m.index === BINDREGEX.lastIndex) BINDREGEX.lastIndex++
    m.forEach((match, groupIndex) => {
      if (match && (groupIndex === 1 || groupIndex === 2))
        groups.push(`eval(${match});`)
    })
  }

  // RETORNAR GRUPOS
  return groups
}

export default getStringBind

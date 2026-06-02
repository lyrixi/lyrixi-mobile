import variables from './variables'

function getColorClass(color: unknown): string {
  return variables.getClassName(color, variables.fontColors)
}

export default getColorClass

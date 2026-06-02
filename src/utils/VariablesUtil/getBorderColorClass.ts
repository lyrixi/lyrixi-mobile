import variables from './variables'

function getBorderColorClass(color: unknown): string {
  return variables.getClassName(color, variables.borderColors)
}

export default getBorderColorClass

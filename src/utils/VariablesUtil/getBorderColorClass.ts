import variables from './variables'

function getBorderColorClass(name: string): string {
  return variables.getClassName(name, variables.borderColors)
}

export default getBorderColorClass

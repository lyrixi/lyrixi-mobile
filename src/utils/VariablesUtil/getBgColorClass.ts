import variables from './variables'

function getBgColorClass(name: string): string {
  return variables.getClassName(name, variables.bgColors)
}

export default getBgColorClass

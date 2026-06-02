import variables from './variables'

function getBgColorClass(color: unknown): string {
  return variables.getClassName(color, variables.bgColors)
}

export default getBgColorClass

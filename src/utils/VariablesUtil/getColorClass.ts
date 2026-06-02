import variables from './variables'

function getColorClass(name: string): string {
  return variables.getClassName(name, variables.fontColors)
}

export default getColorClass

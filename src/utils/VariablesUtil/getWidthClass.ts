import variables from './variables'

function getWidthClass(name: string): string {
  return variables.getClassName(name, variables.widths)
}

export default getWidthClass

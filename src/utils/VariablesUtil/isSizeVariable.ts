import variables from './variables'

function isSizeVariable(size: unknown): boolean {
  return variables.sizes.includes(String(size))
}

export default isSizeVariable

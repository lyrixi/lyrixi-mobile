import variables from './variables'

function isHeightVariable(height: unknown): boolean {
  return variables.heights.includes(String(height))
}

export default isHeightVariable

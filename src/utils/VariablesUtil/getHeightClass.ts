import variables from './variables'

function getHeightClass(height: unknown): string {
  const value = String(height)
  if (!variables.heights.includes(value)) {
    return ''
  }
  return `lyrixi-size-${value}`
}

export default getHeightClass

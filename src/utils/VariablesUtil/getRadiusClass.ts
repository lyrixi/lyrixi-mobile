import variables from './variables'

function getRadiusClass(value: unknown): string {
  const radius = String(value)
  if (!variables.radius.includes(radius)) {
    return ''
  }
  return `lyrixi-radius-${radius}`
}

export default getRadiusClass

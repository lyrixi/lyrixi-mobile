function getDefaultValue({ min, max }) {
  if (min && max) {
    return new Date(Math.min(min.getTime(), max.getTime()))
  }
  if (min) {
    return new Date(min)
  }
  if (max) {
    return new Date(max)
  }
  return new Date()
}

export default getDefaultValue

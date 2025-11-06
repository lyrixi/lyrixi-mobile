function getAnimation(left, right) {
  if (![undefined, null].includes(left)) {
    return 'slideDownLeft'
  }
  if (![undefined, null].includes(right)) {
    return 'slideDownRight'
  }
  return 'slideDown'
}

export default getAnimation

function getAnimation(left: string | number | undefined | null, right: string | number | undefined | null): string {
  if (left !== null) {
    return 'slideDownLeft'
  }
  if (right !== null) {
    return 'slideDownRight'
  }
  return 'slideDown'
}

export default getAnimation

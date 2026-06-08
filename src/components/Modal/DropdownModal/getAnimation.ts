function getAnimation(left: string | number | undefined | null, right: string | number | undefined | null): string {
  if (left !== null && left !== undefined) {
    return 'slideDownLeft'
  }
  if (right !== null && right !== undefined) {
    return 'slideDownRight'
  }
  return 'slideDown'
}

export default getAnimation

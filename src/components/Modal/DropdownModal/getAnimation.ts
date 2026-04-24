function getAnimation(left: string | number | undefined | null, right: string | number | undefined | null): string {
  if (![undefined, null].includes(left as null)) {
    return 'slideDownLeft'
  }
  if (![undefined, null].includes(right as null)) {
    return 'slideDownRight'
  }
  return 'slideDown'
}

export default getAnimation

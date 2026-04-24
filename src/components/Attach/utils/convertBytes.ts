const UNITS = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
} as const

type Unit = keyof typeof UNITS

function convertBytes(bytes: number, targetUnit = 'MB') {
  const key = targetUnit.toUpperCase() as Unit
  if (!(key in UNITS) || typeof bytes !== 'number') {
    return 0
  }

  return bytes / UNITS[key]
}

export default convertBytes

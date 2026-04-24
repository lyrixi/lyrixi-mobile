import getDefaultValue from './getDateDefaultValue'

function getRangeDefaultValue({ min, max }: { min?: Date | null; max?: Date | null }): [Date, Date] {
  const startDate = getDefaultValue({ min, max })
  const endDate = getDefaultValue({ min, max })

  return [startDate, endDate]
}

export default getRangeDefaultValue

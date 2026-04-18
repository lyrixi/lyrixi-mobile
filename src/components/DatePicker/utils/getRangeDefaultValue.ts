import getDefaultValue from './getDateDefaultValue'

function getRangeDefaultValue({ min, max }) {
  const startDate = getDefaultValue({ min, max })
  const endDate = getDefaultValue({ min, max })

  return [startDate, endDate]
}

export default getRangeDefaultValue

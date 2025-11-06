import dayjs from 'dayjs'

// type: 'year|quarter|month|week|date|day|hour|minute|second'
function add(date, count, type) {
  if (count === 0 || typeof count !== 'number') return date

  if (type === 'date') {
    // eslint-disable-next-line
    type = 'day'
  }

  if (count > 0) {
    return dayjs(date).add(count, type).toDate()
  }

  return dayjs(date).subtract(Math.abs(count), type).toDate()
}

export default add

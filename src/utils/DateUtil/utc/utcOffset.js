import dayjs from 'dayjs'
// UTC偏移量: 分钟数是国际时区标准
function utcOffset() {
  return dayjs().utcOffset()
}

export default utcOffset

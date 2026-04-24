import _Calendar from './Calendar'
import Header from './Header'
import isDisabledDate from './utils/isDisabledDate'

type CalendarWithStatics = typeof _Calendar & {
  Header: typeof Header
  isDisabledDate: typeof isDisabledDate
}

const Calendar = _Calendar as CalendarWithStatics
Calendar.Header = Header
Calendar.isDisabledDate = isDisabledDate

export default Calendar

import _Calendar from './Calendar'
import Header from './Header'
import isDisabledDate from './utils/isDisabledDate'

import type { CalendarComponents } from './Calendar.Components.types'

const Calendar = _Calendar as CalendarComponents
Calendar.Header = Header
Calendar.isDisabledDate = isDisabledDate

export default Calendar

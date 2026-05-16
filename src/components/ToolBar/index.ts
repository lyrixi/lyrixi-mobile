import ToolBarBase from './ToolBar'
import Dropdown from './Dropdown'
import DateRange from './DateRange'
import List from './List'
import ActionSheet from './ActionSheet'
import Search from './Search'
import SearchActive from './SearchActive'
import Button from './Button'
import Filter from './Filter'

const ToolBar = Object.assign(ToolBarBase, {
  Dropdown,
  DateRange,
  List,
  ActionSheet,
  Search,
  SearchActive,
  Button,
  Filter
}) as typeof ToolBarBase & {
  Dropdown: typeof Dropdown
  DateRange: typeof DateRange
  List: typeof List
  ActionSheet: typeof ActionSheet
  Search: typeof Search
  SearchActive: typeof SearchActive
  Button: typeof Button
  Filter: typeof Filter
}

export default ToolBar

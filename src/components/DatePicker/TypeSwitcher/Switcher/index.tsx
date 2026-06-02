import type {
  DatePickerTypeListItem,
  DatePickerTypeSwitcherSwitcherProps
} from '../../types'

// 内库使用-start
import TabBar from './../../../TabBar'
import ToolBar from './../../../ToolBar'
import type { ToolBarItem } from './../../../ToolBar/types'
// 内库使用-end

/* 测试使用-start
import { TabBar, ToolBar } from 'lyrixi-mobile'
测试使用-end */

function Switcher({
  switcherType = 'tabbar',
  dropdownPortal,
  types,
  value,
  style,
  className,
  onChange
}: DatePickerTypeSwitcherSwitcherProps) {
  if (switcherType === 'dropdown') {
    return (
      <ToolBar.List
        value={value as ToolBarItem}
        list={types as ToolBarItem[]}
        style={style}
        className={className}
        portal={dropdownPortal}
        onChange={(newValue) => {
          const item = Array.isArray(newValue) ? newValue[0] : newValue
          if (item) onChange(item as DatePickerTypeListItem)
        }}
      />
    )
  }

  return (
    <TabBar.Slide
      list={types}
      value={value}
      style={style}
      className={className}
      onChange={(item) => onChange(item as DatePickerTypeListItem)}
    />
  )
}

export default Switcher

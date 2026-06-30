import type { DatePickerRangesMap } from '../../DatePicker/types'
import type { ToolBarDropdownProps } from './ToolBar.Dropdown.types'

export interface ToolBarDateRangeBarProps extends ToolBarDropdownProps {
  value?: (Date | null)[] | null
  rangeId?: string | null
  type?: string
  placeholder?: string
  allowClear?: boolean
  min?: Date | null
  max?: Date | null
  ranges?: DatePickerRangesMap
  onOk?: (
    value: (Date | null)[] | null | undefined,
    options: { rangeId: string | null | undefined }
  ) => void | boolean | (Date | null)[] | Promise<void | boolean | (Date | null)[]>
  onChange?: (value: (Date | null)[] | null, options: { rangeId: string | null | undefined }) => void
}
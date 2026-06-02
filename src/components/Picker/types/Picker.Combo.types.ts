import type { InputSelectProps, InputSelectRef } from '../../Input/types'

import type { PickerItem } from './Picker.common.types'
import type { PickerModalProps, PickerModalRef } from './Picker.Modal.types'

export type PickerComboProps = Omit<InputSelectProps, 'value' | 'onChange' | 'formatter'> &
  Pick<
    PickerModalProps,
    | 'value'
    | 'list'
    | 'onChange'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'title'
    | 'okNode'
    | 'cancelNode'
    | 'okVisible'
    | 'cancelVisible'
  > & {
    formatter?: (value: PickerItem[] | null, options?: { separator?: string }) => string
    onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  }

export type PickerComboRef = InputSelectRef &
  PickerModalRef & {
    close: () => void
    open: () => void
  }

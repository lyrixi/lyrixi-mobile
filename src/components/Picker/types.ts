import type { InputSelectComboProps, InputSelectComboRef } from '../Input/Select/types'
import type { ModalRef } from '../Modal/types'
import type { PickerModalProps } from './Modal'

/** 选择器 Input.Select + 弹层，合并两套 props（共用 value / onChange / allowClear） */
export type PickerComboProps = InputSelectComboProps &
  Pick<
    PickerModalProps,
    | 'list'
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
    onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  }

export type PickerComboRef = InputSelectComboRef &
  ModalRef & {
    close: () => void
    open: () => void
  }

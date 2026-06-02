import type { InputSelectRef, InputSelectProps } from '../../Input/types'
import type { ModalRef } from '../../Modal/types'

import type { SelectModalProps } from './Select.Modal.types'

export type SelectComboProps = Omit<InputSelectProps, 'value' | 'onChange'> &
  Pick<
    SelectModalProps,
    | 'value'
    | 'list'
    | 'formatViewList'
    | 'formatViewItem'
    | 'multiple'
    | 'checkable'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'title'
    | 'cancelNode'
    | 'cancelVisible'
    | 'headerRender'
    | 'itemStyle'
    | 'itemClassName'
    | 'itemLayout'
    | 'checkboxVariant'
    | 'checkboxPosition'
    | 'itemRender'
    | 'onOk'
    | 'onChange'
  > & {
    onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  }

export type SelectComboRef = InputSelectRef &
  ModalRef & {
    close: () => void
    open: () => void
  }

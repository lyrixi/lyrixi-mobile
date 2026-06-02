import type { InputSelectRef, InputSelectProps } from '../../Input/types/Input.Select.types'
import type { InputTextProps } from '../../Input/types/Input.Text.types'

import type { ListPaginationItem } from './ListPagination.common.types'
import type { ListPaginationModalProps, ListPaginationModalRef } from './ListPagination.Modal.types'

export type ListPaginationComboProps = Omit<InputSelectProps, 'value' | 'onChange' | 'formatter'> &
  Omit<ListPaginationModalProps, 'open' | 'onClose'> & {
    value?: ListPaginationItem | ListPaginationItem[] | null
    formatter?: (
      value: ListPaginationItem | ListPaginationItem[] | null,
      options?: { separator?: string }
    ) => string
    onBeforeOpen?: () => Promise<boolean | undefined> | boolean | undefined
    placeholder?: string
    autoSize?: boolean
    mode?: string
    readOnly?: boolean
    disabled?: boolean
    separator?: string
    leftIconNode?: InputTextProps['leftIconNode']
    rightIconNode?: InputTextProps['rightIconNode']
    clearRender?: InputTextProps['clearRender']
    onClick?: InputSelectProps['onClick']
  }

export type ListPaginationComboRef = InputSelectRef &
  ListPaginationModalRef & {
    close: () => void
    open: () => void
  }

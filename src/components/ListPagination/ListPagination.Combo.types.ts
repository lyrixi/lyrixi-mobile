import type { InputSelectComboProps, InputSelectComboRef } from './../Input/types'
import type { ListPaginationModalProps, ListPaginationModalRef } from './ListPagination.Modal.types'

type RawItem = Record<string, unknown>

export interface ListPaginationComboRef extends InputSelectComboRef, Partial<ListPaginationModalRef> {
  close: () => void
  open: () => void
}

export interface ListPaginationComboProps
  extends Omit<ListPaginationModalProps, 'onChange' | 'value'>,
    Omit<InputSelectComboProps, 'onChange' | 'value'> {
  value?: RawItem | RawItem[] | null
  onChange?: (value: unknown) => void
  onBeforeOpen?: () => Promise<boolean | undefined> | boolean | undefined
}

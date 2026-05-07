import type { InputSelectComboProps, InputSelectComboRef } from './../Input/types'
import type { ModalPaginationProps, ModalPaginationRef } from './ListPagination.Modal.types'

type RawItem = Record<string, unknown>

export interface ComboPaginationRef extends InputSelectComboRef, Partial<ModalPaginationRef> {
  close: () => void
  open: () => void
}

export interface ComboPaginationProps
  extends Omit<ModalPaginationProps, 'onChange' | 'value'>,
    Omit<InputSelectComboProps, 'onChange' | 'value'> {
  value?: RawItem | RawItem[] | null
  onChange?: (value: unknown) => void
  onBeforeOpen?: () => Promise<boolean | undefined> | boolean | undefined
}

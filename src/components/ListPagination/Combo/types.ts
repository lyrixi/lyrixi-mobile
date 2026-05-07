import type { InputSelectComboProps, InputSelectComboRef } from './../../Input/Select/types'
import type { ModalPaginationProps, ModalPaginationRef } from './../Modal/types'

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

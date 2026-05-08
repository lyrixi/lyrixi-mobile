import type { InputSelectComboProps } from './../Input/types'

import type { TransferItem } from './Transfer.core.types'
import type { TransferModalProps } from './Transfer.Modal.types'

type TransferComboField = Omit<InputSelectComboProps, 'onChange' | 'value'>

/** Combo + Modal 组合 */
export type TransferComboProps = TransferComboField &
  Omit<TransferModalProps, 'value' | 'onChange'> & {
    value?: TransferItem[]
    list?: TransferItem[]
    onChange?: (value: TransferItem[]) => void
    onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  }

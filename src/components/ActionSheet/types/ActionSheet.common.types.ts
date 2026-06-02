import type { MouseEvent } from 'react'

import type { InputSelectItem } from '../../Input/types/Input.Node.types'

/** Modal / Combo 共用的列表项数据 */
export interface ActionSheetItem extends Omit<InputSelectItem, 'id' | 'name'> {
  id: string | number
  name: string
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

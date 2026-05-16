import type { CSSProperties, ReactNode } from 'react'

import type { CascaderNode } from './Cascader.common.types'
import type {
  LoadCountriesFn,
  LoadCountryRegionsFn,
  LoadStreetsFn
} from './Cascader.DistrictMain.types'

export interface CascaderDistrictModalProps {
  value?: CascaderNode[] | null
  type?: string
  loadCountries?: LoadCountriesFn
  loadCountryRegions?: LoadCountryRegionsFn
  loadStreets?: LoadStreetsFn
  open?: boolean
  min?: string
  maskClosable?: boolean
  safeArea?: boolean
  listStyle?: CSSProperties
  listClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: string | boolean | HTMLElement | null
  searchVisible?: boolean
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  onClose?: () => void
  onOk?: (value: CascaderNode[] | null | undefined) => boolean | Promise<unknown> | void
  onChange?: (value: CascaderNode[]) => void
}

/** DistrictMain ref 上供 Modal 使用的窄化句柄 */
export type CascaderDistrictModalMainHandle = { loadList: () => Promise<void>; list: unknown }

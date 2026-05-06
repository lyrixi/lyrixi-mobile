import type { CSSProperties, ReactNode } from 'react'

import type { ApiResult } from './../DistrictMain/api/types'
import type { CascaderNode } from './../cascaderTypes'

export type LoadCountriesFn = () => Promise<ApiResult>
export type LoadCountryRegionsFn = (id?: string | number) => Promise<ApiResult>
export type LoadStreetsFn = (id: string | number, ctx?: { value?: CascaderNode[] }) => Promise<ApiResult>

export interface DistrictModalProps {
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

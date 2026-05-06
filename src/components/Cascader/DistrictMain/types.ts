import type { CSSProperties } from 'react'

import type { ApiResult } from './utils/loadBaseData'
import type { CascaderNode } from './../cascaderTypes'

export type LoadCountriesFn = () => Promise<ApiResult>
export type LoadCountryRegionsFn = (id?: string | number) => Promise<ApiResult>
export type LoadStreetsFn = (id: string | number, ctx?: { value?: CascaderNode[] }) => Promise<ApiResult>

export interface DistrictMainLoadingProps {
  result?: unknown
  onReload?: () => void
  style?: CSSProperties
  className?: string
}

export interface DistrictMainResultProps {
  result?: ApiResult
  onReload?: () => void
  style?: CSSProperties
  className?: string
}

export interface DistrictMainProps {
  open?: boolean
  value?: CascaderNode[] | null
  type?: string
  loadCountries?: LoadCountriesFn
  loadCountryRegions?: LoadCountryRegionsFn
  loadStreets?: LoadStreetsFn
  listStyle?: CSSProperties
  listClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  searchVisible?: boolean
  onChange?: (v: CascaderNode[]) => void
}

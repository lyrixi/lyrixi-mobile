import type { CSSProperties } from 'react'

import type { DistrictResultState } from './Cascader.DistrictMain.api.types'
import type { CascaderNode } from './Cascader.core.types'

export type LoadCountriesFn = () => Promise<DistrictResultState>
export type LoadCountryRegionsFn = (id?: string | number) => Promise<DistrictResultState>
export type LoadStreetsFn = (id: string | number, ctx?: { value?: CascaderNode[] }) => Promise<DistrictResultState>

export interface CascaderDistrictMainLoadingProps {
  result?: unknown
  onReload?: () => void
  style?: CSSProperties
  className?: string
}

export interface CascaderDistrictMainResultProps {
  result?: DistrictResultState
  onReload?: () => void
  style?: CSSProperties
  className?: string
}

export interface CascaderDistrictMainProps {
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

import type { CSSProperties, FC, ForwardRefExoticComponent, RefAttributes } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapSearchControlProps {
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
}

/** Search 弹层内 queryNearby 返回形态 */
export interface SearchQueryNearbyResult {
  list?: Array<Record<string, unknown>>
  message?: string
  status?: string
  [key: string]: unknown
}

export interface MapSearchPageProps {
  open: boolean
  map?: MapContainerAPI
  onClose?: () => void
  onChange?: (item: unknown) => void
}

/** ToolBar.Search 在地图搜索条上的窄化 props（与 forwardRef 断言一致） */
export type MapSearchBarForwardedProps = {
  readOnly?: boolean
  className?: string
  style?: CSSProperties
  onClick?: () => void
} & RefAttributes<unknown>

export type MapSearchBarExoticComponent = ForwardRefExoticComponent<MapSearchBarForwardedProps>

/** SearchActive 在搜索页内的窄化 props */
export interface MapSearchActiveListProps {
  value?: string
  allowClear?: boolean
  onSearch?: (kw: string) => void
  onCancel?: () => void
}

export type MapSearchActiveListComponent = FC<MapSearchActiveListProps>

import type { CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapSearchControlProps {
  // Value & Display Value
  map?: MapContainerAPI
  // Style
  style?: CSSProperties
  className?: string
  // Events
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

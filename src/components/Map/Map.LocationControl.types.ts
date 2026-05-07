import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface LocationControlProps {
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  onChange?: (result: unknown) => void
}

export interface LocationControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  update: () => Promise<unknown>
}

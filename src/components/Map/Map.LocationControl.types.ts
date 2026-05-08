import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapLocationControlProps {
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  onChange?: (result: unknown) => void
}

export interface MapLocationControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  update: () => Promise<unknown>
}

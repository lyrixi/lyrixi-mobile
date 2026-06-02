import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapLocationControlProps {
  // Value & Display Value
  map?: MapContainerAPI
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onChange?: (result: unknown) => void
}

export interface MapLocationControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  update: () => Promise<unknown>
}

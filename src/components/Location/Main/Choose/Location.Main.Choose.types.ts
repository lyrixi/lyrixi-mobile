import type { MapLoaderProps, MapChooseProps, MapChooseValue } from '../../../Map/types'

export interface LocationMainChooseProps {
  // Value & Display Value
  value?: MapChooseValue | null
  cacheExpires?: number
  autoLocation?: boolean
  mapConfig?: Record<string, unknown>
  getLocation?: MapChooseProps['getLocation']
  getAddress?: MapChooseProps['getAddress']
  // Status
  readOnly?: boolean
  nearbyVisible?: boolean
  // Elements
  loadingNode?: MapLoaderProps['loadingNode']
  loadingRender?: MapLoaderProps['loadingRender']
  // Events
  onChange?: (newValue: MapChooseValue | null) => void
  onSuccess?: MapLoaderProps['onSuccess']
  onError?: MapLoaderProps['onError']
}

import type { MapLoaderProps, MapChooseProps, MapChooseValue } from './../../../Map/types'

export interface LocationChooseProps {
  value?: MapChooseValue | null
  cacheExpires?: number
  readOnly?: boolean
  autoLocation?: boolean
  nearbyVisible?: boolean
  mapConfig?: Record<string, unknown>
  getLocation?: MapChooseProps['getLocation']
  getAddress?: MapChooseProps['getAddress']
  loadingNode?: MapLoaderProps['loadingNode']
  loadingRender?: MapLoaderProps['loadingRender']
  onChange?: (newValue: MapChooseValue | null) => void
  onSuccess?: MapLoaderProps['onSuccess']
  onError?: MapLoaderProps['onError']
}

export interface LocationChooseFooterProps {
  onOk?: (() => void) | null
  onClear?: (() => void) | null
}

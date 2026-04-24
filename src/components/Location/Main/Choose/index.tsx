import React, { forwardRef, type ComponentProps } from 'react'

// 内库使用-start
import Map from './../../../Map'
import MapLoaderComponent from './../../../Map/components/MapLoader'
import type { MapContainerAPI } from './../../../Map/components/MapContainer'
import type { MapChooseProps, MapChooseValue } from './../../../Map/pages/MapChoose'
// 内库使用-end

type MapLoaderProps = ComponentProps<typeof MapLoaderComponent>

/* 测试使用-start
import { Map } from 'lyrixi-mobile'
测试使用-end */

const { MapChoose } = Map

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

const LocationChoose = forwardRef<MapContainerAPI, LocationChooseProps>(function LocationChoose(
  {
    value,
    cacheExpires,
    readOnly,
    autoLocation,
    nearbyVisible,
    mapConfig,
    getLocation,
    getAddress,
    loadingNode,
    loadingRender,
    onChange,
    onSuccess,
    onError
  },
  ref
) {
  return (
    <MapLoaderComponent
      config={{ ...window.MapLoaderConfig, ...mapConfig }}
      loadingNode={loadingNode}
      loadingRender={loadingRender}
      onSuccess={onSuccess}
      onError={onError}
    >
      <MapChoose
        ref={ref}
        value={value ?? undefined}
        cacheExpires={cacheExpires}
        readOnly={readOnly}
        autoLocation={autoLocation}
        nearbyVisible={nearbyVisible}
        getLocation={getLocation}
        getAddress={getAddress}
        onChange={(v) => {
          console.log('地址选点:', v)
          onChange?.(v as MapChooseValue | null)
        }}
      />
    </MapLoaderComponent>
  )
})

export default LocationChoose

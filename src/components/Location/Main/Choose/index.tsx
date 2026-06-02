import React, { forwardRef } from 'react'

import type { MapContainerAPI, MapChooseValue } from './../../../Map/types'

import type { LocationMainChooseProps } from './Location.Main.Choose.types'

// 内库使用-start
import Map from './../../../Map'
import MapLoaderComponent from './../../../Map/components/MapLoader'
// 内库使用-end

/* 测试使用-start
import { Map } from 'lyrixi-mobile'
测试使用-end */

const { MapChoose } = Map

const LocationChoose = forwardRef<MapContainerAPI, LocationMainChooseProps>(function LocationChoose(
  {
    // Value & Display Value
    value,
    cacheExpires,
    // Status
    readOnly,
    // Value & Display Value
    autoLocation,
    // Status
    nearbyVisible,
    // Value & Display Value
    mapConfig,
    getLocation,
    getAddress,
    // Elements
    loadingNode,
    loadingRender,
    // Events
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

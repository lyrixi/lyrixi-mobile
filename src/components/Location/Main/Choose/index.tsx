import React, { forwardRef } from 'react'

import type { MapContainerAPI, MapChooseValue } from './../../../Map/types'

import type { LocationChooseProps } from '../../types'

// 内库使用-start
import Map from './../../../Map'
import MapLoaderComponent from './../../../Map/components/MapLoader'
// 内库使用-end

/* 测试使用-start
import { Map } from 'lyrixi-mobile'
测试使用-end */

const { MapChoose } = Map

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

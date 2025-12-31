import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// 内库使用-start
import Map from './../../../Map'
// 内库使用-end

/* 测试使用-start
import { Map } from 'lyrixi-mobile'
测试使用-end */

const { APILoader, MapChoose } = Map

// 地图位置选择
const LocationChoose = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Status
      readOnly,
      autoLocation,

      // Element
      config,
      getLocation,
      getAddress,
      loadingNode,
      loadingRender,

      // Events
      onChange,
      onSuccess,
      onError
    },
    ref
  ) => {
    // 根节点
    const mapRef = useRef(null)
    useImperativeHandle(ref, () => {
      return mapRef.current
    })

    return (
      <APILoader
        // Element
        config={{ ...window.APILoaderConfig, ...config }}
        loadingNode={loadingNode}
        loadingRender={loadingRender}
        // Events
        onSuccess={onSuccess}
        onError={onError}
      >
        {/* Element: Map Choose */}
        <MapChoose
          ref={mapRef}
          // Value & Display Value
          value={value}
          // Status
          readOnly={readOnly}
          autoLocation={autoLocation}
          // Element
          getLocation={getLocation}
          getAddress={getAddress}
          // Events
          onChange={(newValue) => {
            console.log('地址选点:', newValue)
            onChange && onChange(newValue)
          }}
        />
      </APILoader>
    )
  }
)

export default LocationChoose

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
      readOnly,
      config,
      loading,
      onSuccess,
      onError,
      autoLocation,
      getLocation,
      getAddress,
      value,
      onChange,
      ...props
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
        config={{ ...window.APILoaderConfig, ...config }}
        loading={loading}
        onSuccess={onSuccess}
        onError={onError}
      >
        <MapChoose
          ref={mapRef}
          readOnly={readOnly}
          autoLocation={autoLocation}
          getLocation={getLocation}
          getAddress={getAddress}
          value={value}
          onChange={(newValue) => {
            console.log('地址选点:', newValue)
            onChange && onChange(newValue)
          }}
          {...props}
        />
      </APILoader>
    )
  }
)

export default LocationChoose

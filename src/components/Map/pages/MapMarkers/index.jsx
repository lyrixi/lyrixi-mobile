import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import MapContainer from './../../components/MapContainer'
import ZoomControl from './../../components/ZoomControl'
import Markers from './../../components/Markers'
import Circles from './../../components/Circles'
import Polyline from './../../components/Polyline'

// 地图标注
function MapMarkers(
  {
    markers,
    onMarkerClick,
    polyline,
    circles,

    icon,
    // 获取定位和地址工具类
    getAddress,
    getLocation,
    queryNearby,

    onLoad,
    // Control Props
    polylineClassName,
    polylineStyle,
    circlesClassName,
    circlesStyle,
    zoomControlClassName,
    zoomControlStyle,
    children,
    ...props
  },
  ref
) {
  // 地图容器
  const mapRef = useRef(null)

  const markersRef = useRef(null)
  const circlesRef = useRef(null)
  const polylineRef = useRef(null)
  const zoomRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      ...mapRef?.current,
      markersRef: markersRef,
      polylineRef: polylineRef,
      circlesRef: circlesRef,
      zoomRef: zoomRef
    }
  })

  useEffect(() => {
    if (!markers) return
    mapRef.current?.panTo?.(markers)
    // eslint-disable-next-line
  }, [JSON.stringify(markers)])

  return (
    <MapContainer
      // api
      ref={mapRef}
      zoom={14}
      {...props}
      onLoad={(map) => {
        // value没值时，开启自动定位，则先定位
        if (typeof map === 'string') return

        // 加载完成后更新视图
        mapRef.current?.panTo?.(markers)

        onLoad && onLoad(map)
      }}
      // 自定义获取地址和定位
      getAddress={getAddress}
      getLocation={getLocation}
      queryNearby={queryNearby}
    >
      {/* 标注点 */}
      <Markers ref={markersRef} points={markers} onClick={onMarkerClick} />

      {/* 圆圈 */}
      {circles && (
        <Circles
          ref={circlesRef}
          points={circles}
          className={circlesClassName}
          style={circlesStyle}
        />
      )}

      {/* 折线 */}
      {polyline && (
        <Polyline
          ref={polylineRef}
          points={polyline}
          className={polylineClassName}
          style={polylineStyle}
        />
      )}

      {/* 缩放控件 */}
      <ZoomControl
        ref={zoomRef}
        className={zoomControlClassName}
        style={{ bottom: '20px', ...zoomControlStyle }}
      />

      {children}
    </MapContainer>
  )
}

export default forwardRef(MapMarkers)

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import MapContainer from './../../components/MapContainer'
import ZoomControl from './../../components/ZoomControl'
import Markers from './../../components/Markers'
import Circles from './../../components/Circles'
import Polyline from './../../components/Polyline'

// 地图标注
function MapMarkers(
  {
    // Value & Display Value
    markers,
    minZoom,
    maxZoom,
    polyline,
    circles,

    // Style
    style,
    className,
    polylineStyle,
    polylineClassName,
    circlesStyle,
    circlesClassName,
    zoomControlStyle,
    zoomControlClassName,

    // Utils
    getAddress,
    getLocation,
    queryNearby,
    openLocation,

    // Elements
    children,

    // Events
    onLoad,
    onMarkerClick,
    onZoomStart,
    onZoom,
    onZoomEnd,
    onMoveStart,
    onMove,
    onMoveEnd,
    onDragStart,
    onDrag,
    onDragEnd
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
      ref={mapRef}
      // Value & Display Value
      zoom={14}
      minZoom={minZoom}
      maxZoom={maxZoom}
      // Utils
      getAddress={getAddress}
      getLocation={getLocation}
      queryNearby={queryNearby}
      openLocation={openLocation}
      // Style
      className={className}
      style={style}
      // Events
      onLoad={(result) => {
        // 地图加载失败
        if (result?.status === 'error') return

        // 加载完成后更新视图
        result?.map?.panTo?.(markers)

        onLoad && onLoad(result)
      }}
      onZoomStart={onZoomStart}
      onZoom={onZoom}
      onZoomEnd={onZoomEnd}
      onMoveStart={onMoveStart}
      onMove={onMove}
      onMoveEnd={onMoveEnd}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      {/* Element: Markers */}
      <Markers
        ref={markersRef}
        // Value & Display Value
        points={markers}
        // Events
        onClick={onMarkerClick}
      />

      {/* Element: Circles */}
      {circles && (
        <Circles
          ref={circlesRef}
          // Value & Display Value
          points={circles}
          // Style
          className={circlesClassName}
          style={circlesStyle}
        />
      )}

      {/* Element: Polyline */}
      {polyline && (
        <Polyline
          ref={polylineRef}
          // Value & Display Value
          points={polyline}
          // Style
          className={polylineClassName}
          style={polylineStyle}
        />
      )}

      {/* Element: ZoomControl */}
      <ZoomControl
        ref={zoomRef}
        // Style
        className={zoomControlClassName}
        style={{ bottom: '20px', ...zoomControlStyle }}
      />

      {children}
    </MapContainer>
  )
}

export default forwardRef(MapMarkers)

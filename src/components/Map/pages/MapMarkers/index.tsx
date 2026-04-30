import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import MapContainer, { type MapContainerAPI } from './../../components/MapContainer'
import ZoomControl, { type ZoomControlRef } from './../../components/ZoomControl'
import Markers, { type MarkersHandle } from './../../components/Markers'
import Circles from './../../components/Circles'
import type { CirclePoint } from './../../components/Circles/addCircles'
import Polyline from './../../components/Polyline'
import type { LinePoint } from './../../components/Polyline/addPolyline'
import type { MapMarkersProps, MapMarkersHandle } from './types'

export type { MapMarkersProps, MapMarkersHandle } from './types'

// 地图标注
const MapMarkers = forwardRef<MapMarkersHandle, MapMarkersProps>(function MapMarkers(
  {
    markers,
    minZoom,
    maxZoom,
    polyline,
    circles,
    style,
    className,
    polylineStyle,
    polylineClassName,
    circlesStyle,
    circlesClassName,
    zoomControlStyle,
    zoomControlClassName,
    getAddress,
    getLocation,
    queryNearby,
    openLocation,
    children,
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
  const mapRef = useRef<MapContainerAPI | null>(null)

  const markersRef = useRef<MarkersHandle | null>(null)

  const circlesRef = useRef<{ redraw: () => void } | null>(null)

  const polylineRef = useRef<{ redraw: () => void } | null>(null)

  const zoomRef = useRef<ZoomControlRef | null>(null)


  useEffect(() => {
    if (!markers) return
    const target = markers as unknown as Parameters<MapContainerAPI['panTo']>[0]
    mapRef.current?.panTo?.(target)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(markers)])


  // Ref handle extends MapContainerAPI with map refs; may be null before map is ready. React ref typings expect the non-null branch for useImperativeHandle.
  // @ts-expect-error MapMarkersHandle includes null; TS useImperativeHandle infers the non-null handle shape only
  useImperativeHandle(ref, () => {
    const m = mapRef.current
    if (!m) {
      return null
    }
    return {
      ...m,
      markersRef,
      polylineRef,
      circlesRef,
      zoomRef
    } as MapMarkersHandle
  })


  return (
    <MapContainer
      ref={mapRef}
      zoom={14}
      minZoom={minZoom}
      maxZoom={maxZoom}
      getAddress={getAddress}
      getLocation={getLocation}
      queryNearby={queryNearby}
      openLocation={openLocation}
      className={className}
      style={style}
      onLoad={(result) => {
        if (result?.status === 'error') return
        if (markers) {
          if (Array.isArray(markers)) {
            result?.map?.panTo?.(markers as unknown as Parameters<MapContainerAPI['panTo']>[0])
          } else {
            result?.map?.panTo?.(markers as Parameters<MapContainerAPI['panTo']>[0])
          }
        }
        onLoad?.(result)
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
      <>
        <Markers ref={markersRef} points={markers} onClick={onMarkerClick} />

        {circles ? (
          <Circles
            {...({
              ref: circlesRef,
              points: circles as CirclePoint[],
              className: circlesClassName,
              style: circlesStyle
            } as React.ComponentPropsWithRef<typeof Circles>)}
          />
        ) : null}

        {polyline ? (
          <Polyline
            {...({
              ref: polylineRef,
              points: polyline as LinePoint[],
              className: polylineClassName,
              style: polylineStyle
            } as React.ComponentPropsWithRef<typeof Polyline>)}
          />
        ) : null}

        <ZoomControl
          ref={zoomRef}
          onZoomIn={(m) => {
            void m
          }}
          onZoomOut={(m) => {
            void m
          }}
          className={zoomControlClassName}
          style={{ bottom: '20px', ...zoomControlStyle }}
        />

        {children}
      </>
    </MapContainer>
  )
})

export default MapMarkers

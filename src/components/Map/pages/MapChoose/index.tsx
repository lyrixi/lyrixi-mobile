import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'

import coordsToWgs84 from './../../utils/coordsToWgs84'

import MapContainer from './../../components/MapContainer'
import ZoomControl from './../../components/ZoomControl'
import SearchControl from './../../components/SearchControl'
import CenterMarker from './../../components/CenterMarker'
import LocationControl from './../../components/LocationControl'
import NearbyControl from './../../components/NearbyControl'
import Markers from './../../components/Markers'

import type { MapChooseProps, MapChooseValue, MapContainerAPI, MapPoint as WgsMapPoint } from '../../types'

// 内库使用-start
import Toast from './../../../Toast'
import Loading from './../../../Loading'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Loading, Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function strLocale(node: string | React.ReactNode): string {
  return typeof node === 'string' ? node : '…'
}

// 地图选点
const MapChoose = forwardRef<MapContainerAPI, MapChooseProps>(function MapChoose(
  {
    // Value & Display Value
    value,
    center,
    zoom: zoomProp,
    minZoom,
    maxZoom,
    cacheExpires,
    // Status
    readOnly,
    // Value & Display Value
    autoLocation = true,
    // Status
    nearbyVisible,
    // Value & Display Value
    getAddress,
    getLocation,
    queryNearby,
    openLocation,
    // Style
    style,
    className,
    searchControlStyle,
    searchControlClassName,
    centerMarkerStyle,
    centerMarkerClassName,
    markersStyle,
    markersClassName,
    zoomControlStyle,
    zoomControlClassName,
    locationControlStyle,
    locationControlClassName,
    nearbyControlStyle,
    nearbyControlClassName,
    // Elements
    children,
    // Events
    onLoad,
    onChange,
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

  const nearbyRef = useRef<React.ComponentRef<typeof NearbyControl> | null>(null)

  const locationRef = useRef<React.ElementRef<typeof LocationControl> | null>(null)

  const zoomRef = useRef<React.ElementRef<typeof ZoomControl> | null>(null)

  const [points, setPoints] = useState<unknown[] | null>(null)

  function handleChange(newValue: unknown) {
    if (newValue === null || newValue === undefined) {
      onChange?.(null)
      return
    }
    if (typeof newValue !== 'object') {
      return
    }
    const fmt = coordsToWgs84(newValue as WgsMapPoint)
    onChange?.(fmt)
  }

  useEffect(() => {
    if (value?.longitude && value?.latitude && value?.type) {
      mapRef.current?.panTo(value as WgsMapPoint)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(value)])

  // Inner ref is null before MapContainer commits; parent Ref<MapContainerAPI> still allows .current == null.
  useImperativeHandle(ref, () => mapRef.current as MapContainerAPI)

  async function handleAutoLocation() {
    if (value?.longitude && value?.latitude && value?.address) {
      return
    }

    let newValue: MapChooseValue | null = value ? { ...value } : null

    if (!newValue?.longitude || !newValue?.latitude) {
      Loading.show({
        content: strLocale(
          LocaleUtil.locale('定位中...', 'lyrixi_2c4006447f62bffd57686aabbdc3f5dd')
        )
      })
      const result: unknown = await mapRef.current?.getLocation?.({ type: 'wgs84' })
      Loading.hide()
      if (
        result &&
        typeof result === 'object' &&
        'status' in result &&
        (result as { status: string }).status === 'error'
      ) {
        const message = (result as { message?: string }).message
        Toast.show({
          content: typeof message === 'string' ? message : 'Error'
        })
        return
      }
      newValue = {
        ...(newValue || {}),
        ...(result as MapChooseValue)
      }
    }

    if (!newValue?.address) {
      Loading.show({
        content: strLocale(
          LocaleUtil.locale('获取地址中...', 'lyrixi_727c51b4575192c9cc0ca17b67375392')
        )
      })
      const result: unknown = await mapRef.current?.getAddress?.(newValue as WgsMapPoint)
      Loading.hide()
      if (
        result &&
        typeof result === 'object' &&
        'status' in result &&
        (result as { status: string }).status === 'error'
      ) {
        const message = (result as { message?: string }).message
        Toast.show({
          content: typeof message === 'string' ? message : 'Error'
        })
        return
      }
      newValue = {
        ...(newValue || {}),
        ...(result as MapChooseValue)
      }
    }

    if (newValue?.longitude && newValue?.latitude && newValue?.type) {
      mapRef.current?.panTo(newValue as WgsMapPoint)
    }

    handleChange(newValue)
  }

  return (
    <MapContainer
      ref={mapRef}
      center={value || center}
      zoom={zoomProp ?? 14}
      minZoom={minZoom}
      maxZoom={maxZoom}
      cacheExpires={cacheExpires}
      getAddress={getAddress}
      getLocation={getLocation}
      queryNearby={queryNearby}
      openLocation={openLocation}
      className={className}
      style={style}
      onLoad={(result) => {
        if (result?.status === 'error') return

        if (value?.longitude && value?.latitude && value?.type) {
          result?.map?.panTo?.(value as WgsMapPoint)
        }

        onLoad?.(result)

        if (readOnly || !autoLocation) return
        void handleAutoLocation()
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
      {readOnly ? null : (
        <SearchControl
          onChange={handleChange}
          className={searchControlClassName}
          style={searchControlStyle}
        />
      )}

      <CenterMarker
        value={value}
        onDragEnd={
          readOnly
            ? null
            : async (map: MapContainerAPI) => {
                const center = map.getCenter()
                let result: WgsMapPoint = {
                  ...center
                } as WgsMapPoint
                Loading.show({
                  content: strLocale(
                    LocaleUtil.locale('获取地址中...', 'lyrixi_727c51b4575192c9cc0ca17b67375392')
                  )
                })
                const addr: unknown = await map.getAddress(result)
                if (
                  addr &&
                  typeof addr === 'object' &&
                  'status' in addr &&
                  (addr as { status: string }).status !== 'error'
                ) {
                  result = { ...result, ...(addr as WgsMapPoint) }
                }
                Loading.hide()
                handleChange(result as MapChooseValue)
              }
        }
        className={centerMarkerClassName}
        style={centerMarkerStyle}
      />

      {!readOnly ? (
        <Markers
          points={points}
          onClick={onMarkerClick}
          className={markersClassName}
          style={markersStyle}
        />
      ) : null}

      <ZoomControl
        ref={zoomRef}
        onZoomIn={(m) => {
          setTimeout(() => {
            console.log('放大', m.getZoom())
          }, 300)
        }}
        onZoomOut={(m) => {
          setTimeout(() => {
            console.log('缩小', m.getZoom())
          }, 300)
        }}
        className={zoomControlClassName}
        style={{ bottom: readOnly ? '115px' : '145px', ...zoomControlStyle }}
      />

      {readOnly ? null : (
        <LocationControl
          ref={locationRef}
          onChange={handleChange}
          className={locationControlClassName}
          style={{ bottom: '145px', ...locationControlStyle }}
        />
      )}

      <NearbyControl
        {...({
          ref: nearbyRef,
          readOnly,
          nearbyVisible,
          value,
          radius: 1000,
          onChange: handleChange,
          onSuccess: (result: unknown) => {
            const list =
              result && typeof result === 'object' && 'list' in result
                ? (result as { list?: unknown[] }).list
                : undefined
            if (list?.length) {
              setPoints((list as unknown[]).map((i) => i) as unknown[])
            } else {
              setPoints(null)
            }
          },
          onError: () => {
            setPoints(null)
          },
          className: nearbyControlClassName,
          style: nearbyControlStyle
        } as React.ComponentPropsWithRef<typeof NearbyControl>)}
      />

      {children}
    </MapContainer>
  )
})

export default MapChoose

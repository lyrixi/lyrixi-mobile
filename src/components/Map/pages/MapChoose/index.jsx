import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'

import coordsToWgs84 from './../../utils/coordsToWgs84'

import MapContainer from './../../components/MapContainer'
import ZoomControl from './../../components/ZoomControl'
import SearchControl from './../../components/SearchControl'
import CenterMarker from './../../components/CenterMarker'
import LocationControl from './../../components/LocationControl'
import NearbyControl from './../../components/NearbyControl'
import Markers from './../../components/Markers'

// 内库使用-start
import Toast from './../../../Toast'
import Loading from './../../../Loading'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Loading, Toast, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 地图选点
function MapChoose(
  {
    // Value & Display Value
    value, // {latitude: '纬度', longitude: '经度', address: '地址', type: '坐标类型'}
    center,
    minZoom,
    maxZoom,

    // Status
    readOnly,
    autoLocation = true,

    // Utils
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
  // 地图容器
  const mapRef = useRef(null)

  // 附近的点
  const nearbyRef = useRef(null)

  // 定位
  const locationRef = useRef(null)

  // 放大缩小
  const zoomRef = useRef(null)

  // Marker
  let [points, setPoints] = useState(null)

  // Expose
  useImperativeHandle(ref, () => {
    return mapRef?.current
  })

  useEffect(() => {
    if (value?.longitude && value?.latitude && value?.type) {
      mapRef.current?.panTo?.(value)
    }
    // eslint-disable-next-line
  }, [JSON.stringify(value)])

  // 获取当前位置
  async function handleAutoLocation() {
    if (value?.longitude && value?.latitude && value?.address) {
      return
    }

    let newValue = value ? { ...value } : null

    // 默认选中当前位置
    if (!newValue?.longitude || !newValue?.latitude) {
      Loading.show({ content: LocaleUtil.locale('定位中...', 'lyrixi_positioning') })
      let result = await mapRef.current?.getLocation?.({ type: 'wgs84' })
      Loading.hide()
      if (result.status === 'error') {
        Toast.show({
          content: result.message
        })
        return
      }
      newValue = {
        ...(newValue || {}),
        ...result
      }
    }

    // 获取地址
    if (!newValue?.address) {
      Loading.show({ content: LocaleUtil.locale('获取地址中...', 'lyrixi_getting_address') })
      let result = await mapRef.current?.getAddress?.(newValue)
      Loading.hide()
      if (result.status === 'error') {
        Toast.show({
          content: result.message
        })
        return
      }
      newValue = {
        ...(newValue || {}),
        ...result
      }
    }

    if (newValue?.longitude && newValue?.latitude && newValue?.type) {
      mapRef.current?.panTo?.(newValue)
    }

    handleChange(newValue)
  }

  const handleLoadRef = useRef(null)
  handleLoadRef.current = function (map) {
    // value没值时，开启自动定位，则先定位
    if (typeof map === 'string') return

    // 加载完成后更新视图
    if (value?.longitude && value?.latitude && value?.type) {
      mapRef.current?.panTo?.(value)
    }

    onLoad && onLoad(map)

    // 当前位置
    if (readOnly || !autoLocation) return
    handleAutoLocation()
  }

  // Format coord to wgs84 before change
  function handleChange(newValue) {
    let fmtNewValue = coordsToWgs84(newValue)
    onChange && onChange(fmtNewValue)
  }

  return (
    <MapContainer
      ref={mapRef}
      // Value & Display Value
      center={value || center}
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
      onLoad={(map) => {
        handleLoadRef.current(map)
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
      {/* Element: SearchControl */}
      {readOnly ? null : (
        <SearchControl
          // Events
          onChange={handleChange}
          // Style
          className={searchControlClassName}
          style={searchControlStyle}
        />
      )}

      {/* Element: CenterMarker */}
      <CenterMarker
        // Value & Display Value
        value={value}
        // Events
        onDragEnd={
          readOnly
            ? null
            : async (map) => {
                let center = map.getCenter()
                let result = {
                  ...center
                }

                Loading.show({
                  content: LocaleUtil.locale('获取地址中...', 'lyrixi_getting_address')
                })
                result = await map.getAddress(result)
                Loading.hide()

                handleChange(result)
              }
        }
        // Style
        className={centerMarkerClassName}
        style={centerMarkerStyle}
      />

      {/* Element: Markers */}
      {!readOnly ? (
        <Markers
          // Value & Display Value
          points={points}
          // Events
          onClick={onMarkerClick}
          // Style
          className={markersClassName}
          style={markersStyle}
        />
      ) : null}

      {/* Element: ZoomControl */}
      <ZoomControl
        ref={zoomRef}
        // Events
        onZoomIn={(map) => {
          setTimeout(() => {
            console.log('放大', map.getZoom())
          }, 300)
        }}
        onZoomOut={(map) => {
          setTimeout(() => {
            console.log('缩小', map.getZoom())
          }, 300)
        }}
        // Style
        className={zoomControlClassName}
        style={{ bottom: readOnly ? '115px' : '145px', ...zoomControlStyle }}
      />

      {/* Element: LocationControl */}
      {readOnly ? null : (
        <LocationControl
          ref={locationRef}
          // Events
          onChange={handleChange}
          // Style
          className={locationControlClassName}
          style={{ bottom: '145px', ...locationControlStyle }}
        />
      )}

      {/* Element: NearbyControl */}
      <NearbyControl
        ref={nearbyRef}
        // Status
        readOnly={readOnly}
        // Value & Display Value
        value={value}
        radius={1000}
        // Events
        onChange={handleChange}
        onLoad={(list) => {
          // 间距调整, 附件面板的高度在展开后会很高会出问题
          // let bottom = nearbyRef.current.rootDOM.clientHeight
          // if (bottom) {
          //   bottom = bottom + 20 + 'px'
          //   if (locationRef.current?.rootDOM) locationRef.current.rootDOM.style.bottom = bottom
          //   if (zoomRef.current?.rootDOM) zoomRef.current.rootDOM.style.bottom = bottom
          // }
          setPoints(list)
        }}
        // Style
        className={nearbyControlClassName}
        style={nearbyControlStyle}
      />

      {children}
    </MapContainer>
  )
}

export default forwardRef(MapChoose)

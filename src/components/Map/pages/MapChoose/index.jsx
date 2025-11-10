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
    readOnly,
    autoLocation = true,
    // 获取定位和地址工具类
    getAddress,
    getLocation,
    queryNearby,
    center,
    // value: {latitude: '纬度', longitude: '经度', address: '地址', type: '坐标类型'}
    value,
    onLoad,
    onChange,
    onMarkerClick,

    // Control Props
    searchControlClassName,
    searchControlStyle,
    centerMarkerClassName,
    centerMarkerStyle,
    markersClassName,
    markersStyle,
    zoomControlClassName,
    zoomControlStyle,
    locationControlClassName,
    locationControlStyle,
    nearbyControlClassName,
    nearbyControlStyle,

    minZoom,
    maxZoom,
    openLocation,
    onZoomStart,
    onZoom,
    onZoomEnd,
    onMoveStart,
    onMove,
    onMoveEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    className,
    style,

    children
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
      // api
      ref={mapRef}
      center={value || center}
      zoom={14}
      // onMoveEnd={(map) => {
      //   console.log('获取中心点:', map.getCenter())
      // }}
      // 自定义获取地址和定位
      getAddress={getAddress}
      getLocation={getLocation}
      queryNearby={queryNearby}
      onLoad={(map) => {
        handleLoadRef.current(map)
      }}
      minZoom={minZoom}
      maxZoom={maxZoom}
      openLocation={openLocation}
      onZoomStart={onZoomStart}
      onZoom={onZoom}
      onZoomEnd={onZoomEnd}
      onMoveStart={onMoveStart}
      onMove={onMove}
      onMoveEnd={onMoveEnd}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      className={className}
      style={style}
    >
      {/* 搜索控件 */}
      {readOnly ? null : (
        <SearchControl
          onChange={handleChange}
          className={searchControlClassName}
          style={searchControlStyle}
        />
      )}

      {/* 中心标注点: 仅用于显示 */}
      <CenterMarker
        value={value}
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
        className={centerMarkerClassName}
        style={centerMarkerStyle}
      />

      {/* 标注点 */}
      {!readOnly ? (
        <Markers
          points={points}
          onClick={onMarkerClick}
          className={markersClassName}
          style={markersStyle}
        />
      ) : null}

      {/* 缩放控件 */}
      <ZoomControl
        ref={zoomRef}
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
        className={zoomControlClassName}
        style={{ bottom: readOnly ? '115px' : '145px', ...zoomControlStyle }}
      />

      {/* 定位控件 */}
      {readOnly ? null : (
        <LocationControl
          ref={locationRef}
          style={{ bottom: '145px', ...locationControlStyle }}
          onChange={handleChange}
          className={locationControlClassName}
        />
      )}

      {/* 附近控件 */}
      <NearbyControl
        ref={nearbyRef}
        readOnly={readOnly}
        value={value}
        radius={1000}
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
        className={nearbyControlClassName}
        style={nearbyControlStyle}
      />

      {children}
    </MapContainer>
  )
}

export default forwardRef(MapChoose)

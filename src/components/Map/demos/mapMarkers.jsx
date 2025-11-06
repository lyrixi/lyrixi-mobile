import React, { useRef, useState, useEffect } from 'react'

// 内库使用
import { Page, Map, Button } from 'lyrixi-mobile'

// 测试使用
// import Map from 'library/components/Map'

// 生成随机点
const { APILoader, MapMarkers, LocationControl, Circles, coordsToWgs84 } = Map
import getPoints from './getPoints'

// 随机生成点, 用于测试性能
// const currentPoints = coordsToWgs84(
//   getPoints({
//     center: {
//       latitude: 39.907783490367706,
//       longitude: 116.39120737493609
//     },
//     // 半径5000000米
//     radius: 1000,
//     // 生成点数
//     count: 101
//   })
// )

// This coordsToWgs84 just example, no practical use
const points = coordsToWgs84([
  {
    icon: {
      iconUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`,
      iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`
      // html: '<div style="background-color:red;color:white;">1</div>'
    },
    type: 'gcj02',
    latitude: '31.982723',
    longitude: '118.735298',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`,
      iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`
      // html: '<div style="background-color:yellow;color:white;">2</div>'
    },
    type: 'gcj02',
    latitude: '31.982594',
    longitude: '118.735184',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`,
      iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`
      // html: '<div style="background-color:green;color:white;">3</div>'
    },
    type: 'gcj02',
    latitude: '31.98266',
    longitude: '118.735237',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: `https://cdn-icons-png.flaticon.com/128/15047/15047495.png`,
      iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/15047/15047495.png`
      // html: '<div style="background-color:black;color:white;">4</div>'
    },
    type: 'gcj02',
    latitude: '31.982693',
    longitude: '118.73526',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  }
])

export default () => {
  const mapRef = useRef(mapRef)
  // const [points, setPoints] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPoints(currentPoints)
  //   }, 5000)
  // }, [])

  function handleFocusPoint() {
    mapRef.current.markersRef.current.focus(points[0])
  }

  function handleBlurPoint() {
    mapRef.current.markersRef.current.blur()
  }

  return (
    <Page>
      <Page.Header>
        <Button onClick={handleFocusPoint}>Focus point</Button>
        <Button onClick={handleBlurPoint}>Blur point</Button>
      </Page.Header>
      <Page.Main>
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png`
              },
              markerIcon: {
                iconUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
          // onError={(errMsg) => {
          //   console.log('地图加载失败:', errMsg)
          //   return '错误地址'
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapMarkers
              ref={mapRef}
              // 转换为wgs84坐标
              ZoomControlProps={{
                style: { bottom: '20px' }
              }}
              // 标注
              markers={points}
              // 折线
              // polyline={points}
              // PolylineProps={{
              //   color: '#ff8800'
              // }}
              // 圆圈
              // circles={[
              //   {
              //     latitude: 31.981827992209773,
              //     longitude: 118.73498038509915,
              //     type: 'gcj02',
              //     radius: 500
              //     // color: '#ff8800'
              //   }
              // ]}
              // CirclesProps={{
              //   color: '#ff8800'
              // }}
              onMarkerClick={(e) => {
                console.log('点击marker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: true })
              }}
              // onMarkerClick={(e) => {
              //   console.log('点击marker:', e)
              //   // e.remove()
              //   let newMarkerIcon = window.L.icon({
              //     active: true,
              //     iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
              //     iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
              //     shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
              //     shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
              //     shadowSize: [33, 33],
              //     iconSize: [20, 33],
              //     iconAnchor: [10, 16]
              //   })
              //   e.setIcon(newMarkerIcon, { multiple: false })

              //   console.log(mapRef.current.leafletMap)
              //   let popup = window.L.popup()
              //     .setLatLng([e.latitude, e.longitude])
              //     .setContent('I am a standalone popup.')
              //     .openOn(mapRef.current.leafletMap)
              // }}
              onLoad={(map) => {
                let currentZoom = map.getZoom()
                map.setZoom(currentZoom - 1)
              }}
            >
              <LocationControl
                style={{ bottom: '20px' }}
                onChange={(result) => {
                  mapRef.current.panTo(result)
                }}
              />
            </MapMarkers>
          </div>
        </APILoader>
      </Page.Main>
    </Page>
  )
}

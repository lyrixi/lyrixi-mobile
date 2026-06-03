# Map Example

以下示例位于本目录 `demos/`（由 `src/components/Map/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Map } from 'lyrixi-mobile'`

## demos/MapMapContainer.tsx

```tsx
import { useRef } from 'react'

import { Page, Map, Button, type MapContainerAPI, type MapPoint } from 'lyrixi-mobile'

const { MapLoader, MapContainer, coordsToWgs84 } = Map

export default function MapMapContainerDemo() {
  const mapRef = useRef<MapContainerAPI | null>(null)

  const center = coordsToWgs84({
    latitude: 31.982664,
    longitude: 118.735069,
    type: "wgs84"
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '天安门'
  }) as MapPoint | null

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              ref={mapRef}
              center={center ?? undefined}
              zoom={16}
              minZoom={10}
              maxZoom={18}
              onLoad={(result) => {
                console.log('地图加载完成:', result)
              }}
              onZoomStart={(map) => {
                console.log('开始缩放:', map.getZoom())
              }}
              onZoom={(map) => {
                console.log('缩放中:', map.getZoom())
              }}
              onZoomEnd={(map) => {
                console.log('缩放结束:', map.getZoom())
              }}
              onMoveStart={(map) => {
                console.log('开始移动')
              }}
              onMove={(map) => {
                console.log('移动中')
              }}
              onMoveEnd={(map) => {
                console.log('移动结束')
              }}
              onDragStart={(map) => {
                console.log('开始拖拽')
              }}
              onDrag={(map) => {
                console.log('拖拽中')
              }}
              onDragEnd={(map) => {
                console.log('拖拽结束')
              }}
            >
              {/* MapContainer 会自动将 map 注入到子组件中 */}
            </MapContainer>
          </div>
        </MapLoader>
        <div style={{ padding: '10px' }}>
          <Button
            onClick={() => {
              if (mapRef.current && center) {
                mapRef.current.panTo(center)
                console.log('移动到中心点')
              }
            }}
          >
            移动到中心点
          </Button>
          <Button
            onClick={() => {
              if (mapRef.current) {
                const zoom = mapRef.current.getZoom()
                if (zoom == null) {
                  return
                }
                mapRef.current.setZoom(zoom + 1)
                console.log('放大，当前缩放级别:', mapRef.current.getZoom())
              }
            }}
          >
            放大
          </Button>
          <Button
            onClick={() => {
              if (mapRef.current) {
                const zoom = mapRef.current.getZoom()
                if (zoom == null) {
                  return
                }
                mapRef.current.setZoom(zoom - 1)
                console.log('缩小，当前缩放级别:', mapRef.current.getZoom())
              }
            }}
          >
            缩小
          </Button>
          <Button
            onClick={async () => {
              if (mapRef.current) {
                const location = await mapRef.current.getLocation({ type: 'wgs84' })
                console.log('获取当前位置:', location)
              }
            }}
          >
            获取当前位置
          </Button>
          <Button
            onClick={async () => {
              if (mapRef.current) {
                const address = await mapRef.current.getAddress(center as MapPoint)
                console.log('获取地址:', address)
              }
            }}
          >
            获取地址
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapZoomControl.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, ZoomControl } = Map

export default function MapZoomControlDemo() {
  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={{
                latitude: 39.909187,
                longitude: 116.397451,
                type: 'gcj02'
              }}
              zoom={14}
            >
              <ZoomControl
                style={{ bottom: '20px', right: '20px' }}
                onZoomIn={(map) => {
                  console.log('放大，当前缩放级别:', map.getZoom())
                }}
                onZoomOut={(map) => {
                  console.log('缩小，当前缩放级别:', map.getZoom())
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapSearchControl.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, SearchControl } = Map

export default function MapSearchControlDemo() {
  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={{
                latitude: 39.909187,
                longitude: 116.397451,
                type: 'gcj02'
              }}
              zoom={14}
            >
              <SearchControl
                onChange={(result) => {
                  console.log('搜索结果:', result)
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapCenterMarker.tsx

```tsx
import { useState } from 'react'

import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, CenterMarker, coordsToWgs84 } = Map

export default function MapCenterMarkerDemo() {
  const [value, setValue] = useState({
    latitude: 39.909187,
    longitude: 116.397451,
    type: 'gcj02',
    address: '天安门'
  })

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={coordsToWgs84(value) ?? undefined}
              zoom={16}
              onDragEnd={(map) => {
                const center = map.getCenter()
                setValue({
                  latitude: center.latitude,
                  longitude: center.longitude,
                  type: 'wgs84',
                  address: ''
                })
              }}
            >
              <CenterMarker
                value={coordsToWgs84(value) ?? undefined}
                onDragEnd={(map) => {
                  const center = map.getCenter()
                  setValue({
                    latitude: center.latitude,
                    longitude: center.longitude,
                    type: 'wgs84',
                    address: ''
                  })
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapMarkers.tsx

```tsx
import { useRef } from 'react'

import { Page, Map, Button, type MapMarkersLayerHandle } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Markers, coordsToWgs84 } = Map

export default function MapMarkersDemo() {
  const markersRef = useRef<MapMarkersLayerHandle | null>(null)

  const points = coordsToWgs84([
    {
      latitude: 31.982686517043174,
      longitude: 118.73538657912759,
      type: "gcj02"
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`
      },
      type: 'gcj02',
      latitude: '31.982723',
      longitude: '118.735298'
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`
      },
      type: 'gcj02',
      latitude: '31.982594',
      longitude: '118.735184'
    },
    {
      icon: {
        html: '<div style="background-color:green;color:white;width:100px;height:100px;">This is a html</div>',
        // iconUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`,
        // iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`
      },
      type: 'gcj02',
      latitude: '31.98766',
      longitude: '118.732237'
    }
  ])

  function handleFocusPoint() {
    const p0 = points[0]
    if (p0 == null) {
      return
    }
    markersRef.current?.focus(p0)
  }

  function handleBlurPoint() {
    markersRef.current?.blur()
  }

  return (
    <Page>
      <Page.Header>
        <Button onClick={handleFocusPoint}>Focus point</Button>
        <Button onClick={handleBlurPoint}>Blur point</Button>
      </Page.Header>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap',
            markerIcons: {
              markerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={
                coordsToWgs84({
                  latitude: 31.982723,
                  longitude: 118.735298,
                  type: 'gcj02'
                }) ?? undefined
              }
              zoom={16}
            >
              <Markers
                ref={markersRef}
                points={points}
                onClick={(e) => {
                  console.log('点击标记:', e)
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapCircles.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Circles, coordsToWgs84 } = Map

export default function MapCirclesDemo() {
  const points = coordsToWgs84([
    {
      latitude: 39.909187,
      longitude: 116.397451,
      type: 'gcj02',
      radius: 500
    },
    {
      latitude: 39.910187,
      longitude: 116.398451,
      type: 'gcj02',
      radius: 300
    },
    {
      latitude: 39.908187,
      longitude: 116.396451,
      type: 'gcj02',
      radius: 400
    }
  ])

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={
                coordsToWgs84({
                  latitude: 39.909187,
                  longitude: 116.397451,
                  type: 'gcj02'
                }) ?? undefined
              }
              zoom={14}
            >
              <Circles points={points} color="#ff8800" radius={500} />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapPolyline.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Polyline, coordsToWgs84 } = Map

export default function MapPolylineDemo() {
  // 折线示例：多段拐折的路径，避免共线看起来像直线
  const points = coordsToWgs84([
    { latitude: 39.909187, longitude: 116.397451, type: 'gcj02' },
    { latitude: 39.9105, longitude: 116.3995, type: 'gcj02' },
    { latitude: 39.9095, longitude: 116.4015, type: 'gcj02' },
    { latitude: 39.911, longitude: 116.403, type: 'gcj02' },
    { latitude: 39.910187, longitude: 116.404451, type: 'gcj02' }
  ])

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={
                coordsToWgs84({
                  latitude: 39.909187,
                  longitude: 116.397451,
                  type: 'gcj02'
                }) ?? undefined
              }
              zoom={14}
            >
              <Polyline points={points} color="#ff8800" />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapPolygon.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Polygon, coordsToWgs84 } = Map

export default function MapPolygonDemo() {
  // 多边形示例：至少 3 个点，首尾自动闭合
  const points = coordsToWgs84([
    { latitude: 39.909187, longitude: 116.397451, type: 'gcj02' },
    { latitude: 39.911, longitude: 116.3995, type: 'gcj02' },
    { latitude: 39.9102, longitude: 116.4025, type: 'gcj02' },
    { latitude: 39.9085, longitude: 116.4005, type: 'gcj02' }
  ])

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={
                coordsToWgs84({
                  latitude: 39.909187,
                  longitude: 116.397451,
                  type: 'gcj02'
                }) ?? undefined
              }
              zoom={14}
            >
              <Polygon
                points={points}
                color="#3388ff"
                fillColor="#3388ff"
                fillOpacity={0.25}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapLocationControl.tsx

```tsx
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, LocationControl } = Map

export default function MapLocationControlDemo() {
  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={{
                latitude: 39.909187,
                longitude: 116.397451,
                type: 'gcj02'
              }}
              zoom={14}
            >
              <LocationControl
                style={{ bottom: '20px', right: '20px' }}
                onChange={(result) => {
                  console.log('定位结果:', result)
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/MapNearbyControl.tsx

```tsx
import { useState } from 'react'

import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, NearbyControl, coordsToWgs84 } = Map

export default function MapNearbyControlDemo() {
  const [value, setValue] = useState({
    latitude: 39.909187,
    longitude: 116.397451,
    type: 'gcj02',
    address: '天安门',
    name: '天安门'
  })

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={coordsToWgs84(value) ?? undefined}
              zoom={16}
            >
              <NearbyControl
                value={coordsToWgs84(value) ?? undefined}
                radius={1000}
                onChange={(item) => {
                  console.log('选择附近地点:', item)
                  if (item && typeof item === 'object') {
                    setValue((prev) => ({ ...prev, ...(item as typeof prev) }))
                  }
                }}
                onSuccess={(result) => {
                  console.log('搜索成功:', result)
                }}
                onError={(error) => {
                  console.log('搜索失败:', error)
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}
```

## demos/PageMapChoose.tsx

```tsx
import { useRef, useState } from 'react'

import {
  Page,
  Loading,
  type L,
  type MapChooseProps,
  type MapChooseValue,
  type MapContainerAPI
} from 'lyrixi-mobile'

import type { DemoMarkerClickPayload } from './Map.demos.types'

import MapLoader from '../components/MapLoader'
import MapChoose from '../pages/MapChoose'
import coordsToWgs84 from '../utils/coordsToWgs84'

// 生成随机点
// import getPoints from './getPoints'
// const points = getPoints()

export default function PageMapChooseDemo() {
  const mapRef = useRef<MapContainerAPI>(null)
  // Bridge.debug = true
  let [value, setValue] = useState<MapChooseValue>({
    // address: '美国白宫',
    // latitude: 38.8976763,
    // longitude: -77.0365298,
    // type: 'wgs84'
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '太平洋公园'
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '天安门'
    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '天安门'
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '南京烽火科技'
  })
  /*
  useState()
  useState({
    latitude: 39.907783490367706,
    longitude: 116.39120737493609,
    address: '天安门'
  })
  */

  const handleMapChooseChange: MapChooseProps['onChange'] = (newValue) => {
    console.log('newValue:', newValue)
    if (newValue !== null && newValue !== undefined && !Array.isArray(newValue)) {
      setValue((prev) => ({ ...prev, ...newValue }))
    }
  }

  return (
    <Page>
      <Page.Main>
        <MapLoader
          loadingNode={<Loading content="Loading..." />}
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              },
              markerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
          // config={{
          //   key: '',
          //   type: 'google'
          // }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
        // onError={(error) => {
        //   console.log('地图加载失败', error)
        //   return <div>{error.message}</div>
        // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapChoose
              ref={mapRef}
              // readOnly
              // autoLocation={false}
              zoom={16}
              value={(coordsToWgs84(value) ?? undefined) as MapChooseValue | undefined}
              onChange={handleMapChooseChange}
              onMarkerClick={(e) => {
                const payload = e as DemoMarkerClickPayload
                console.log('点击marker:', e)
                console.log(mapRef.current)
                // e.remove()
                const newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                } as L.IconOptions & { active?: boolean })
                payload.setIcon(newMarkerIcon, { multiple: false })
              }}
            // getLocation={(data) => {
            //   console.log(data)
            //   return { latitude: 35.689487, longitude: 139.691706 }
            // }}
            // getAddress={(data) => {
            //   return new Promise((resolve) => {
            //     setTimeout(() => {
            //       resolve({
            //         ...data,
            //         province: '江苏省',
            //         provinceNumber: 100010,
            //         address: '江苏省11'
            //       })
            //     }, 1000)
            //   })
            // }}
            // queryNearby={({ map, keyword, longitude, latitude, radius }) => {
            //   console.log('搜索附近:', map, keyword, longitude, latitude, radius)
            //   return [
            //     {
            //       address: '上海市南京东路831号',
            //       latitude: 31.237415229632834,
            //       longitude: 121.47015544295395,
            //       name: '市百一店'
            //     },
            //     {
            //       address: '上海市南京东路832号',
            //       latitude: 31.237415229632834,
// ... 其余见 demos/PageMapChoose.tsx 全文
```

## demos/PageMapMarkers.tsx

```tsx
import { useRef } from 'react'

import {
  Page,
  Map,
  Button,
  type L,
  type MapMapMarkersHandle,
  type MapMarkersLayerHandle,
  type MapPoint
} from 'lyrixi-mobile'

import type { DemoMarkerClickPayload } from './Map.demos.types'

import getPoints from './getPoints'

// 生成随机点
const { MapLoader, MapMarkers, LocationControl, coordsToWgs84 } = Map

// 随机生成点, 用于测试性能
const points = coordsToWgs84(
  getPoints({
    center: {
      latitude: 39.907783490367706,
      longitude: 116.39120737493609
    },
    // 半径5000000米
    radius: 1000,
    // 生成点数
    count: 101
  })
)

// This coordsToWgs84 just example, no practical use
// const points = coordsToWgs84([
//   {
//     icon: {
//       iconUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`,
//       iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`
//       // html: '<div style="background-color:red;color:white;">1</div>'
//     },
//     type: 'gcj02',
//     latitude: '31.982723',
//     longitude: '118.735298',
//     inChinaTo: 'bd09',
//     outChinaTo: 'wgs84',
//     isInChina: true
//   },
//   {
//     icon: {
//       iconUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`,
//       iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`
//       // html: '<div style="background-color:yellow;color:white;">2</div>'
//     },
//     type: 'gcj02',
//     latitude: '31.982594',
//     longitude: '118.735184',
//     inChinaTo: 'bd09',
//     outChinaTo: 'wgs84',
//     isInChina: true
//   },
//   {
//     icon: {
//       iconUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`,
//       iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`
//       // html: '<div style="background-color:green;color:white;">3</div>'
//     },
//     type: 'gcj02',
//     latitude: '31.98266',
//     longitude: '118.735237',
//     inChinaTo: 'bd09',
//     outChinaTo: 'wgs84',
//     isInChina: true
//   },
//   {
//     icon: {
//       iconUrl: `https://cdn-icons-png.flaticon.com/128/15047/15047495.png`,
//       iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/15047/15047495.png`
//       // html: '<div style="background-color:black;color:white;">4</div>'
//     },
//     type: 'gcj02',
//     latitude: '31.982693',
//     longitude: '118.73526',
//     inChinaTo: 'bd09',
//     outChinaTo: 'wgs84',
//     isInChina: true
//   }
// ])

export default function PageMapMarkersDemo() {
  const mapRef = useRef<MapMapMarkersHandle | null>(null)

  function handleFocusPoint() {
    const handle = mapRef.current?.markersRef.current
    const p0 = points[0]
    if (handle && p0 !== null && p0 !== undefined) {
      handle.focus(p0 as Parameters<MapMarkersLayerHandle['focus']>[0])
    }
  }

  function handleBlurPoint() {
    mapRef.current?.markersRef.current?.blur()
  }

  return (
    <Page>
      <Page.Header>
        <Button onClick={handleFocusPoint}>Focus point</Button>
        <Button onClick={handleBlurPoint}>Blur point</Button>
      </Page.Header>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              },
              markerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
          onError={(error) => {
            console.log('地图加载失败:', error.message)
            return {
              status: 'error',
              message: 'Custom error message'
            }
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapMarkers
              ref={mapRef}
              // 转换为wgs84坐标
              zoomControlStyle={{ bottom: '20px' }}
              // 标注
              markers={points}
              // 折线
              // polyline={points}
// ... 其余见 demos/PageMapMarkers.tsx 全文
```

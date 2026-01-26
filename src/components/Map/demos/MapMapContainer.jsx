import React, { useRef } from 'react'
import { Page, Map, Button } from 'lyrixi-mobile'

const { APILoader, MapContainer, coordsToWgs84 } = Map

export default () => {
  const mapRef = useRef(null)

  const center = coordsToWgs84({
    latitude: 31.982664,
    longitude: 118.735069,
    type: "wgs84"
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '天安门'
  })

  return (
    <Page>
      <Page.Main>
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap'
          }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              ref={mapRef}
              center={center}
              zoom={16}
              minZoom={10}
              maxZoom={18}
              onLoad={(map) => {
                console.log('地图加载完成:', map)
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
        </APILoader>
        <div style={{ padding: '10px' }}>
          <Button
            onClick={() => {
              if (mapRef.current) {
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
                const location = await mapRef.current.getLocation()
                console.log('获取当前位置:', location)
              }
            }}
          >
            获取当前位置
          </Button>
          <Button
            onClick={async () => {
              if (mapRef.current) {
                const address = await mapRef.current.getAddress(center)
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

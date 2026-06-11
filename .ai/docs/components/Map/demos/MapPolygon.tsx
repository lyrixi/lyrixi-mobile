import React from 'react'
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

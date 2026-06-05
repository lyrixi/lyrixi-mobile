import React from 'react'
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

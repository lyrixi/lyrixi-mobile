import React, { useState } from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { APILoader, MapContainer, NearbyControl, coordsToWgs84 } = Map

export default () => {
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
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={coordsToWgs84(value)}
              zoom={16}
            >
              <NearbyControl
                value={coordsToWgs84(value)}
                radius={1000}
                onChange={(item) => {
                  console.log('选择附近地点:', item)
                  setValue(item)
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
        </APILoader>
      </Page.Main>
    </Page>
  )
}

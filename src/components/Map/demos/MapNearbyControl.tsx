import React, { useState } from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, NearbyControl, coordsToWgs84 } = Map

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

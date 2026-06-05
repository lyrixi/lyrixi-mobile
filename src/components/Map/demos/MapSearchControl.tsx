import React from 'react'
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

import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { APILoader, MapContainer, SearchControl } = Map

export default () => {
  return (
    <Page>
      <Page.Main>
        <APILoader
          config={{
            key: 'bmap key',
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
        </APILoader>
      </Page.Main>
    </Page>
  )
}

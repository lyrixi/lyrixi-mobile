import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { APILoader, MapContainer, SearchControl } = Map

export default () => {
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

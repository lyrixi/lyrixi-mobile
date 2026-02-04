import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, LocationControl } = Map

export default () => {
  return (
    <Page>
      <Page.Main>
        <MapLoader
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

import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, ZoomControl } = Map

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

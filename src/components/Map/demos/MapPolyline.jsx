import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Polyline, coordsToWgs84 } = Map

export default () => {
  const points = coordsToWgs84([
    {
      latitude: 39.909187,
      longitude: 116.397451,
      type: 'gcj02'
    },
    {
      latitude: 39.910187,
      longitude: 116.398451,
      type: 'gcj02'
    },
    {
      latitude: 39.911187,
      longitude: 116.399451,
      type: 'gcj02'
    },
    {
      latitude: 39.912187,
      longitude: 116.400451,
      type: 'gcj02'
    }
  ])

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
              center={coordsToWgs84({
                latitude: 39.909187,
                longitude: 116.397451,
                type: 'gcj02'
              })}
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

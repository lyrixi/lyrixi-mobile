import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { APILoader, MapContainer, Circles, coordsToWgs84 } = Map

export default () => {
  const points = coordsToWgs84([
    {
      latitude: 39.909187,
      longitude: 116.397451,
      type: 'gcj02',
      radius: 500
    },
    {
      latitude: 39.910187,
      longitude: 116.398451,
      type: 'gcj02',
      radius: 300
    },
    {
      latitude: 39.908187,
      longitude: 116.396451,
      type: 'gcj02',
      radius: 400
    }
  ])

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
              center={coordsToWgs84({
                latitude: 39.909187,
                longitude: 116.397451,
                type: 'gcj02'
              })}
              zoom={14}
            >
              <Circles points={points} color="#ff8800" radius={500} />
            </MapContainer>
          </div>
        </APILoader>
      </Page.Main>
    </Page>
  )
}

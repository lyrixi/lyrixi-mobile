import React, { useState } from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { APILoader, MapContainer, CenterMarker, coordsToWgs84 } = Map

export default () => {
  const [value, setValue] = useState({
    latitude: 39.909187,
    longitude: 116.397451,
    type: 'gcj02',
    address: '天安门'
  })

  return (
    <Page>
      <Page.Main>
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={coordsToWgs84(value)}
              zoom={16}
              onDragEnd={(map) => {
                const center = map.getCenter()
                setValue({
                  latitude: center.lat,
                  longitude: center.lng,
                  type: 'wgs84',
                  address: ''
                })
              }}
            >
              <CenterMarker
                value={coordsToWgs84(value)}
                onDragEnd={(map) => {
                  const center = map.getCenter()
                  setValue({
                    latitude: center.lat,
                    longitude: center.lng,
                    type: 'wgs84',
                    address: ''
                  })
                }}
              />
            </MapContainer>
          </div>
        </APILoader>
      </Page.Main>
    </Page>
  )
}

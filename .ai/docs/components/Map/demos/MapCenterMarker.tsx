import React, { useState } from 'react'

import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, CenterMarker, coordsToWgs84 } = Map

export default function MapCenterMarkerDemo() {
  const [value, setValue] = useState({
    latitude: 39.909187,
    longitude: 116.397451,
    type: 'gcj02',
    address: '天安门'
  })

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
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
              center={coordsToWgs84(value) ?? undefined}
              zoom={16}
              onDragEnd={(map) => {
                const center = map.getCenter()
                setValue({
                  latitude: center.latitude,
                  longitude: center.longitude,
                  type: 'wgs84',
                  address: ''
                })
              }}
            >
              <CenterMarker
                value={coordsToWgs84(value) ?? undefined}
                onDragEnd={(map) => {
                  const center = map.getCenter()
                  setValue({
                    latitude: center.latitude,
                    longitude: center.longitude,
                    type: 'wgs84',
                    address: ''
                  })
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}

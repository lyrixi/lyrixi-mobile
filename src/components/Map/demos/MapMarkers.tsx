import React, { useRef } from 'react'
import { Page, Map, Button, type MapMarkersLayerHandle } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Markers, coordsToWgs84 } = Map

export default function MapMarkersDemo() {
  const markersRef = useRef<MapMarkersLayerHandle | null>(null)

  const points = coordsToWgs84([
    {
      latitude: 31.982686517043174,
      longitude: 118.73538657912759,
      type: "gcj02"
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/13484/13484859.png`
      },
      type: 'gcj02',
      latitude: '31.982723',
      longitude: '118.735298'
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`
      },
      type: 'gcj02',
      latitude: '31.982594',
      longitude: '118.735184'
    },
    {
      icon: {
        html: '<div style="background-color:green;color:white;width:100px;height:100px;">This is a html</div>',
        // iconUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`,
        // iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`
      },
      type: 'gcj02',
      latitude: '31.98766',
      longitude: '118.732237'
    }
  ])

  function handleFocusPoint() {
    const p0 = points[0]
    if (p0 === null) {
      return
    }
    markersRef.current?.focus(p0)
  }

  function handleBlurPoint() {
    markersRef.current?.blur()
  }

  return (
    <Page>
      <Page.Header>
        <Button onClick={handleFocusPoint}>Focus point</Button>
        <Button onClick={handleBlurPoint}>Blur point</Button>
      </Page.Header>
      <Page.Main>
        <MapLoader
          config={{
            key: '4KFq5IGKQM1c6vkVhgIpAYFu',
            type: 'bmap',
            markerIcons: {
              markerIcon: {
                iconUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapContainer
              center={
                coordsToWgs84({
                  latitude: 31.982723,
                  longitude: 118.735298,
                  type: 'gcj02'
                }) ?? undefined
              }
              zoom={16}
            >
              <Markers
                ref={markersRef}
                points={points}
                onClick={(e) => {
                  console.log('点击标记:', e)
                }}
              />
            </MapContainer>
          </div>
        </MapLoader>
      </Page.Main>
    </Page>
  )
}

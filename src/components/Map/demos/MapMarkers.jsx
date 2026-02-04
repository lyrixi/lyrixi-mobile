import React from 'react'
import { Page, Map } from 'lyrixi-mobile'

const { MapLoader, MapContainer, Markers, coordsToWgs84 } = Map

export default () => {
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
      longitude: '118.735298',
      inChinaTo: 'bd09',
      outChinaTo: 'wgs84',
      isInChina: true
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/10096/10096738.png`
      },
      type: 'gcj02',
      latitude: '31.982594',
      longitude: '118.735184',
      inChinaTo: 'bd09',
      outChinaTo: 'wgs84',
      isInChina: true
    },
    {
      icon: {
        iconUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`,
        iconRetinaUrl: `https://cdn-icons-png.flaticon.com/128/14463/14463613.png`
      },
      type: 'gcj02',
      latitude: '31.98266',
      longitude: '118.735237',
      inChinaTo: 'bd09',
      outChinaTo: 'wgs84',
      isInChina: true
    }
  ])

  return (
    <Page>
      <Page.Main>
        <MapLoader
          config={{
            key: 'bmap key',
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
              center={coordsToWgs84({
                latitude: 31.982723,
                longitude: 118.735298,
                type: 'gcj02'
              })}
              zoom={16}
            >
              <Markers
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

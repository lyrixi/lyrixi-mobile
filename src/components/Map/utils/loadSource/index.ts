import loadLeaflet from './loadLeaflet'
import loadGoogle from './loadGoogle'
import loadBaidu from './loadBaidu'
import loadOpenstreet from './loadOpenstreet'
import type { MapLoaderSourceConfig, LoadSourceResult } from '../../types'

// Load leaflet map source
async function loadSource(
  params: MapLoaderSourceConfig = {
    key: '',
    type: '', // google
    leaflet: {
      css: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/css/leaflet.css',
      js: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
    }
  }
): Promise<LoadSourceResult> {
  let result = (await loadLeaflet(params?.leaflet)) as LoadSourceResult
  if (result.status === 'error') {
    return result
  }

  if (params.type === 'google') {
    result = (await loadGoogle(params?.key as string | undefined)) as LoadSourceResult
    return result
  }

  if (params.type === 'bmap') {
    result = (await loadBaidu(params?.key as string | undefined)) as LoadSourceResult
    return result
  }

  result = (await loadOpenstreet()) as LoadSourceResult
  return result
}

export default loadSource

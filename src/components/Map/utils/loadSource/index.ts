import loadLeaflet from './loadLeaflet'
import loadGoogle from './loadGoogle'
import loadBaidu from './loadBaidu'
import loadOpenstreet from './loadOpenstreet'
import type { MapLoaderSourceConfig, LoadSourceResult } from './types'

export type { MapLoaderSourceConfig } from './types'

// Load leaflet map source
async function loadSource(
  options: MapLoaderSourceConfig = {
    key: '',
    type: '', // google
    leaflet: {
      css: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/css/leaflet.css',
      js: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
    }
  }
): Promise<LoadSourceResult> {
  let result = (await loadLeaflet(options?.leaflet)) as LoadSourceResult
  if (result.status === 'error') {
    return result
  }

  if (options.type === 'google') {
    result = (await loadGoogle(options?.key as string | undefined)) as LoadSourceResult
    return result
  }

  if (options.type === 'bmap') {
    result = (await loadBaidu(options?.key as string | undefined)) as LoadSourceResult
    return result
  }

  result = (await loadOpenstreet()) as LoadSourceResult
  return result
}

export default loadSource

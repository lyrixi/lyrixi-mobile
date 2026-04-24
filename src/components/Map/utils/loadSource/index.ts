import loadLeaflet from './loadLeaflet'
import loadGoogle from './loadGoogle'
import loadBaidu from './loadBaidu'
import loadOpenstreet from './loadOpenstreet'

export interface MapLoaderSourceConfig {
  key?: string
  type?: string
  leaflet?: { css?: string; js?: string }
  [key: string]: unknown
}

interface LoadResult {
  status: string
  message?: string
  data?: unknown
  [key: string]: unknown
}

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
): Promise<LoadResult> {
  let result = (await loadLeaflet(options?.leaflet)) as LoadResult
  if (result.status === 'error') {
    return result
  }

  if (options.type === 'google') {
    result = (await loadGoogle(options?.key as string | undefined)) as LoadResult
    return result
  }

  if (options.type === 'bmap') {
    result = (await loadBaidu(options?.key as string | undefined)) as LoadResult
    return result
  }

  result = (await loadOpenstreet()) as LoadResult
  return result
}

export default loadSource

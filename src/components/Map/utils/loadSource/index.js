import loadLeaflet from './loadLeaflet'
import loadGoogle from './loadGoogle'
import loadBaidu from './loadBaidu'
import loadOpenstreet from './loadOpenstreet'

// Load leaflet map source
async function loadSource(
  options = {
    key: '',
    type: '', // google
    leaflet: {
      css: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/css/leaflet.css',
      js: 'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
    }
  }
) {
  // Load leaflet js and css
  let result = await loadLeaflet(options?.leaflet)
  if (result.status === 'error') {
    return result
  }

  // Load google js
  if (options.type === 'google') {
    result = await loadGoogle(options?.key)
    return result
  }

  // Load bmap js
  if (options.type === 'bmap') {
    result = await loadBaidu(options?.key)
    return result
  }

  // Load open street
  result = await loadOpenstreet()
  return result
}

export default loadSource

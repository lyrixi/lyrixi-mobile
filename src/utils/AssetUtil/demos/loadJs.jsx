import React from 'react'
import { AssetUtil } from 'lyrixi-mobile'

export default () => {
  function handleLoadJsByCallback() {
    AssetUtil.loadJs('https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js', {
      id: 'leaflet-js',
      onSuccess: () => {
        alert('Js load succeeded')
      },
      onError: () => {
        alert('Js load failed')
      }
    })
  }
  async function handleLoadJsByAsync() {
    let result = await AssetUtil.loadJs(
      'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js',
      {
        id: 'leaflet-js'
      }
    )
    if (result.status === 'success') {
      alert('Js load succeeded')
    } else {
      alert('Js load failed')
    }
  }
  return (
    <>
      <div onClick={handleLoadJsByCallback}>Load js by callback</div>
      <div onClick={handleLoadJsByAsync}>Load js by async</div>
    </>
  )
}

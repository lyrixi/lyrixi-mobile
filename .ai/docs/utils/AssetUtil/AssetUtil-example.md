# AssetUtil Example

以下示例位于本目录 `demos/`（由 `src/utils/AssetUtil/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { AssetUtil } from 'lyrixi-mobile'`

## demos/AssetUtil.tsx

```tsx
import { AssetUtil } from 'lyrixi-mobile'

export default function AssetUtilDemo() {
  return (
    <>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
        )}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet.pdf')}</div>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.image'
        )}
      </div>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.'
        ) || 'No Extension'}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet. a') || 'No Extension'}</div>
    </>
  )
}
```

## demos/loadJs.tsx

```tsx
import { AssetUtil } from 'lyrixi-mobile'

export default function LoadJsDemo() {
  function handleLoadJsByCallback() {
    void AssetUtil.loadRemoteJs('https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js', {
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
    const result: { status: string } = (await AssetUtil.loadRemoteJs(
      'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js',
      {
        id: 'leaflet-js'
      }
    )) as { status: string }
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
```

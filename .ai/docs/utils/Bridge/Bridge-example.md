# Bridge Example

`Bridge` 是跨容器（浏览器、微信/企微/小程序、支付宝、钉钉、飞书等）的 **JS-SDK/原生能力** 统一入口。默认用 `Device.platform` 选实现；可传第二参 `platform` 强制。类型从包内 `Bridge` 相关导出或 `import type { SuccessCallback, ... } from 'lyrixi-mobile'` 使用。

完整互动示例见源码：`src/utils/Bridge/demos/Bridge.tsx`。

## 引入

```tsx
import { Bridge, Page, Card, Button, Loading } from 'lyrixi-mobile'
```

## 窗口与返回

- `openWindow` / `closeWindow` / `back`：多场景可用；`back` 与地址栏 `isFromApp` 等共同决定是关 WebView、回首页或 `history`。
- `onBack`：在支持的客户端/企微里拦截返回。

```tsx
Bridge.openWindow({ title: '测试', url: 'https://www.baidu.com/' })
Bridge.closeWindow()
Bridge.back()
Bridge.setTitle({ title: '自定义标题' })
```

## 媒体

```tsx
Bridge.scanCode({
  scanType: ['barCode'],
  onSuccess: (res) => {
    console.log(res)
  },
  onError: (err) => {
    console.log(err)
  }
})

Bridge.chooseMedia({
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  onSuccess: (res) => {
    // res.data.localFiles
  },
  onError: (e) => {},
  onCancel: (c) => {}
})
```

`previewMedia` 使用 `sources` 与 `index`；`previewFile` 推荐 **`fileUrl`**。

## 位置与分享

```tsx
Bridge.openLocation({
  type: 'gcj02',
  latitude: 39.81,
  longitude: 116.49,
  name: '终点',
  address: '终点地址名',
  scale: 16
})

Loading.show({ content: '定位中...' })
Bridge.getLocation({
  type: 'gcj02',
  onSuccess: (res) => { Loading.hide(); console.log(res) },
  onError: (e) => { Loading.hide(); console.log(e) }
})

Bridge.share({
  title: '标题',
  description: '描述',
  imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
  url: 'https://lyrixi.github.io/lyrixi-mobile/'
})
```

## 自定义 Bridge

在自有 App WebView 注入对象时，可先 `addBridge` 再合并到默认 `Browser` 上，与内置 `WeChat` / `DingTalk` 等选路方式一致，详见 `index.ts` 中 `_getCurrentBridge`。

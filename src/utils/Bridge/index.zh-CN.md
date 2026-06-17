---
category: Utils
group: 平台工具
title: Bridge
---

# Bridge

Bridge 是一个跨平台桥接工具，用于在不同平台（微信、企业微信、支付宝、钉钉、飞书、浏览器等）之间提供统一的 API 接口。它会自动检测当前运行环境，并调用对应平台的原生能力。

它还支持扩展平台桥接，但必须按照统一的 API 接口进入适配，扩展平台方法：

```js
import BridgeCustom from './BridgeCustom'

// 自有平台桥接
Bridge.addBridge('custom', BridgeCustom)
```

## 平台支持

Bridge 已支持以下平台：

- **微信** (`wechat`) - 微信浏览器环境
- **企业微信** (`wecom`) - 企业微信浏览器环境
- **微信小程序** (`wechatMiniProgram`) - 微信小程序环境
- **企业微信小程序** (`wecomMiniProgram`) - 企业微信小程序环境
- **支付宝** (`alipay`) - 支付宝浏览器环境
- **支付宝小程序** (`alipayMiniProgram`) - 支付宝小程序环境
- **钉钉** (`dingtalk`) - 钉钉浏览器环境
- **飞书** (`lark`) - 飞书浏览器环境
- **浏览器** (`browser`) - 普通浏览器环境（默认）

## API

多数方法支持**第二个可选参数** `platform`（字符串），用于指定使用哪个平台的 Bridge 实现（例如测试或显式指定环境）。不传时由运行时 `Device.platform` 决定。

### load(params, platform?)

加载平台 SDK（如微信 JSSDK 等）。

**参数：**

- `getScriptSrc` (Function, 可选) - 自定义脚本地址，`function({ platform: String }) => String`
- `onSuccess` (Function, 可选) - 加载成功，回调入参为 `{ status: 'success', ... }`
- `onError` (Function, 可选) - 加载失败

**示例：**

```javascript
Bridge.load({
  getScriptSrc: ({ platform }) => {
    // 可覆盖默认 CDN，未实现时各平台有内置默认地址
    return '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
  },
  onSuccess: (result) => {
    if (result.status === 'success') {
      console.log('SDK 加载成功')
    }
  },
  onError: (err) => {
    console.log('加载失败', err)
  }
})
```

### config(params, platform?)

JS-SDK **鉴权配置**（拉取 signature 并调用各平台 `config`）。微信 / 企业微信 / 钉钉 / 飞书等实现不同，需配合后端签名接口使用。

**参数：**

- `getConfigUrl` (Function, 可选) - 获取签名接口地址，`function({ platform: String }) => String | Promise<String>`
- `formatHeaders` (Function, 可选) - 格式化请求头
- `formatPayload` (Function, 可选) - 格式化请求体（如 `appId`、`url` 等）
- `formatResponse` (Function, 可选) - 格式化接口返回为各平台所需字段
- `onSuccess` (Function, 可选) - 鉴权成功
- `onError` (Function, 可选) - 鉴权失败

**示例：**

```javascript
Bridge.config({
  getConfigUrl: ({ platform }) => '/api/js-sdk-signature',
  onSuccess: () => console.log('config 成功'),
  onError: (e) => console.log('config 失败', e)
})
```

### back(delta)

自动判断返回上一页或关闭窗口, 根据 url 参数 isFromApp 决定返回方式

- isFromApp=1 时, 调用 Bridge.closeWindow()
- isFromApp=home 时, 调用 Bridge.goHome()
- isFromApp 包含 confirm-close 时, 提示用户是否关闭窗口, 如果用户确认关闭, 调用 Bridge.closeWindow()
- isFromApp 包含 confirm 时, 提示用户是否返回上一页, 如果用户确认返回, 调用 window.history.go(delta)
- 其他情况调用 window.history.go(delta)

**参数：**

- `delta` (Number, 可选) - 返回的页面数，默认为 1

**示例：**

```javascript
// 返回上一页或关闭窗口或回到首页
Bridge.back()
```

### closeWindow(params)

关闭当前窗口。

**参数：**

- `params` (Object, 可选) - 关闭窗口参数

**示例：**

```javascript
Bridge.closeWindow()
```

### onBack(params)

监听物理返回键或手势返回（仅客户端与企微支持）。

**参数：**

- `onSuccess` (Function) - 阻止返回成功回调, 返回 true 表示允许返回, false 表示不允许返回
- `onError` (Function) - 阻止返回失败回调

**示例：**

```javascript
Bridge.onBack({
  onSuccess: () => {
    console.log('用户点击了返回键')
    return true // 返回 true 表示允许返回；false 表示拦截并需再次监听
  }
})
```

### setTitle(params)

修改原生标题。

**参数：**

- `title` (String|Function) - 标题文本或返回标题的函数
- `onSuccess` (Function, 可选) - 成功回调
- `onError` (Function, 可选) - 失败回调

**示例：**

```javascript
Bridge.setTitle({
  title: '自定义标题'
})
```

### openWindow(params)

打开新的窗口。

**参数：**

- `url` (String) - 要打开的 URL
- `title` (String) - 窗口标题
- `target` (String, 可选) - 打开方式，`'_self'` 表示当前窗口

**示例：**

```javascript
Bridge.openWindow({
  title: '新窗口',
  url: 'https://www.example.com'
})

// 在当前窗口打开
Bridge.openWindow({
  title: '新窗口',
  url: 'https://www.example.com',
  target: '_self'
})
```

### goHome()

返回首页（仅订货客户端支持）。

**示例：**

```javascript
Bridge.goHome()
```

### tel(number)

拨打电话。

**参数：**

- `number` (String|Number) - 电话号码

**示例：**

```javascript
Bridge.tel({ number: '10086' })
```

### getLocation(params)

获取当前地理位置。

**参数：**

- `type` (String, 可选) - 坐标类型，`'wgs84'`|`'gcj02'`，默认为 `'wgs84'`
- `onSuccess` (Function) - 成功回调，返回 `{ status: 'success', code, message, data: { latitude, longitude, speed, accuracy, type, ... } }`（以实际平台为准）
- `onError` (Function) - 失败回调
- `onCancel` (Function, 可选) - 取消回调

**示例：**

```javascript
Bridge.getLocation({
  type: 'gcj02',
  onSuccess: (res) => {
    console.log('定位成功', res.latitude, res.longitude)
  },
  onError: (error) => {
    console.log('定位失败', error.message)
  }
})
```

### getBrowserLocation(params)

获取浏览器地理位置（所有平台都可以调用）。

**参数：**

- `type` (String, 可选) - 坐标类型，`'wgs84'`|`'gcj02'`，默认为 `'gcj02'`
- `onSuccess` (Function) - 成功回调
- `onError` (Function) - 失败回调

**示例：**

```javascript
Bridge.getBrowserLocation({
  type: 'gcj02',
  onSuccess: (res) => {
    console.log('定位成功', res)
  },
  onError: (error) => {
    console.log('定位失败', error)
  }
})
```

### openLocation(params, platform?)

打开地图查看位置。

**参数：**

- `from` (Object, 可选) - 起点，一般 SDK 不需要传
  - `latitude` (Number) - 纬度
  - `longitude` (Number) - 经度
  - `type` (String, 可选) - 坐标类型，`'wgs84'`|`'gcj02'`，默认为 `'wgs84'`
  - `name` (String) - 位置名称
  - `address` (String) - 位置地址
- `to` (Object) - 终点
  - `latitude` (Number) - 纬度
  - `longitude` (Number) - 经度
  - `type` (String, 可选) - 坐标类型，`'wgs84'`|`'gcj02'`，默认为 `'wgs84'`
  - `name` (String) - 位置名称
  - `address` (String) - 位置地址
- `scale` (Number, 可选) - 地图缩放级别
- `onSuccess` (Function, 可选) - 成功回调
- `onError` (Function, 可选) - 失败回调

**示例：**

```javascript
Bridge.openLocation({
  to: {
    latitude: 39.81,
    longitude: 116.49,
    name: '终点',
    address: '终点地址名'
  },
  scale: 16
})
```

### scanCode(params)

扫描二维码并返回结果。

**参数：**

- `scanType` (Array<String>, 可选) - 扫码类型，`['qrCode', 'barCode']`，默认为 `['qrCode', 'barCode']`
- `onSuccess` (Function) - 成功回调，返回 `{status: 'success', resultStr: String}`
- `onError` (Function, 可选) - 失败回调
- `onCancel` (Function, 可选) - 取消回调

**示例：**

```javascript
Bridge.scanCode({
  scanType: ['barCode'],
  onSuccess: (res) => {
    console.log('扫码成功', res.resultStr)
  },
  onError: (error) => {
    console.log('扫码失败', error)
  }
})
```

### chooseMedia(params)

选择图片或视频。

**参数：**

- `count` (Number, 可选) - 最多可以选择的图片张数，默认为 9
- `sizeType` (Array<String>, 可选) - 图片大小，`['original', 'compressed']`，默认为 `['original', 'compressed']`
- `sourceType` (Array<String>, 可选) - 图片来源，`['camera', 'album']`，默认为 `['camera', 'album']`
- `mediaType` (Array<String>, 可选) - 媒体类型，`['image', 'video', 'mix']`，默认为 `['image']`
- `maxDuration` (Number, 可选) - 视频最大时长，单位秒，默认为 10
- `onSuccess` (Function) - 成功回调，返回 `{status: 'success', localFiles: Array<{fileUrl: String, filePath: String, fileType: String}>}`
- `onError` (Function, 可选) - 失败回调
- `onCancel` (Function, 可选) - 取消回调

**示例：**

```javascript
Bridge.chooseMedia({
  count: 9,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  mediaType: ['image'],
  onSuccess: (res) => {
    console.log('选择成功', res.localFiles)
  },
  onError: (error) => {
    console.log('选择失败', error)
  }
})
```

### uploadFile(params)

上传文件。

**参数：**

- `localFile` (Object, 必填) - 需要上传的文件的本地文件对象，`{ path: String, type: String }`
- `getUploadUrl` (Function, 必填) - 获取上传地址的函数，`function({ platform: String }) => String`
- `formatHeaders` (Function, 可选) - 格式化请求头，`function({ 'Content-Type': 'multipart/form-data', Cookie: document.cookie }, { platform: String }) => Object`
- `formatPayload` (Function, 可选) - 格式化表单数据，`function(payload, { platform: String }) => Object`
- `formatResponse` (Function, 可选) - 格式化上传结果，`function(payload, { platform: String }) => {status: 'success|error', result: Object}`
- `onSuccess` (Function) - 成功回调，返回 `{status: 'success', result: Object}`
- `onError` (Function, 可选) - 失败回调
- `onCancel` (Function, 可选) - 取消回调

**示例：**

```javascript
Bridge.uploadFile({
  localFile: {
    path: '/path/to/file',
    type: 'image'
  },
  getUploadUrl: ({ platform }) => {
    return 'https://api.example.com/upload'
  },
  formatHeaders: (headers, { platform }) => {
    return {
      ...headers,
      Authorization: 'Bearer token'
    }
  },
  onSuccess: (res) => {
    console.log('上传成功', res.result)
  },
  onError: (error) => {
    console.log('上传失败', error)
  }
})
```

### previewMedia(params)

预览图片或视频。

**参数：**

- `index` (Number, 可选) - 当前显示图片索引，默认 0
- `sources` (Array<Object>, 必填) - 需要预览的媒体 http 链接列表，`[{fileUrl: String, fileType: String, poster: String}]`
- `onSuccess` (Function, 可选) - 成功回调
- `onError` (Function, 可选) - 失败回调
- `onCancel` (Function, 可选) - 取消回调

**示例：**

```javascript
Bridge.previewMedia({
  index: 0,
  sources: [
    {
      fileUrl: 'https://example.com/image1.jpg',
      fileType: 'image'
    },
    {
      fileUrl: 'https://example.com/video1.mp4',
      fileType: 'video',
      poster: 'https://example.com/poster.jpg'
    }
  ]
})
```

### previewFile(params)

预览文件（仅客户端支持）。

**参数：**

- `fileUrl` (String, 必填) - 需要预览文件的地址
- `fileName` (String, 可选) - 需要预览文件的文件名（不填的话取 url 的最后部分）
- `fileSize` (Number, 可选) - 需要预览文件的字节大小
- `onSuccess` (Function, 可选) - 成功回调
- `onError` (Function, 可选) - 失败回调

**示例：**

```javascript
Bridge.previewFile({
  fileUrl: 'https://example.com/document.pdf',
  fileName: '文档.pdf',
  fileSize: 1024000
})
```

### detectFace(params, platform?)

人脸识别 / 活体检测（当前为**钉钉** `dd.biz.ATMBle.exclusiveLiveCheck`，其他平台未实现则不会调用）。

**参数：**

- `getConfig` (Function, 可选) - 异步或同步返回**调用原生接口所需的参数对象**，`function({ platform: String }) => Record<String, Any> | Promise<Record<String, Any>>`。返回值会展开传入钉钉 API，用于传入鉴权等字段。
- `onSuccess` (Function, 可选) - 成功回调，`data` 中含 `match`（是否通过）、`confidence`（置信度，可能为 `undefined`）
- `onError` (Function, 可选) - 失败回调

**示例：**

```javascript
Bridge.detectFace({
  getConfig: async ({ platform }) => {
    const res = await fetch('/api/dingtalk-live-check-config').then((r) => r.json())
    return res // 需与后端约定字段，与钉钉 API 一致
  },
  onSuccess: (res) => {
    console.log('检测结果', res.data?.match, res.data?.confidence)
  },
  onError: (err) => console.log(err)
})
```

### share(params, platform?)

消息分享。

**参数：**

- `platforms` (Array<String>, 可选) - 分享平台，微信、企微、飞书、钉钉都不支持，默认分享到当前平台
- `title` (String, 必填) - 分享标题
- `description` (String, 可选) - 分享副标题
- `url` (String, 可选) - 分享链接
- `imageUrl` (String, 可选) - 分享链接的图片
- `onSuccess` (Function, 可选) - 分享成功回调
- `onError` (Function, 可选) - 分享失败回调

**示例：**

```javascript
Bridge.share({
  title: '分享标题',
  description: '分享描述',
  url: 'https://www.example.com',
  imageUrl: 'https://example.com/image.jpg',
  onSuccess: () => {
    console.log('分享成功')
  },
  onError: (error) => {
    console.log('分享失败', error)
  }
})
```

## 工具方法

Bridge 还提供了一些工具方法：

### Bridge.utils.back(delta)

返回上一页的工具方法。

### Bridge.utils.formatOpenLocationCoord(params)

格式化打开地图的参数。

## 平台兼容性说明

不同平台对 API 的支持情况不同：

| API                  | 浏览器 | 微信 | 企业微信 | 支付宝 | 钉钉 | 飞书 | 小程序 |
| -------------------- | ------ | ---- | -------- | ------ | ---- | ---- | ------ |
| `load`               | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `config`             | ✅\*   | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `back`               | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `closeWindow`        | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `onBack`             | ❌     | ❌   | ✅       | ❌     | ❌   | ❌   | ❌     |
| `setTitle`           | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `openWindow`         | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `goHome`             | ❌     | ❌   | ❌       | ❌     | ❌   | ❌   | ❌     |
| `tel`                | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `getLocation`        | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `getBrowserLocation` | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `openLocation`       | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `scanCode`           | ❌     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `chooseMedia`        | ❌     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `uploadFile`         | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `previewMedia`       | ✅     | ✅   | ✅       | ✅     | ✅   | ✅   | ✅     |
| `previewFile`        | ❌     | ❌   | ❌       | ❌     | ❌   | ❌   | ❌     |
| `detectFace`         | ❌     | ❌   | ❌       | ❌     | ✅   | ❌   | ❌     |
| `share`              | ❌     | ✅   | ✅       | ❌     | ✅   | ✅   | ✅     |

\* 浏览器等平台为占位实现（直接成功回调），便于联调；真实鉴权以各端文档为准。

**说明：**

- ✅ 表示支持
- ❌ 表示不支持或功能受限

## 使用示例

<code src="./demos/Bridge.tsx"></code>

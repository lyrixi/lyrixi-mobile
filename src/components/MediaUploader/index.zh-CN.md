---
group:
  title: 数据展示
  order: 5
order: 1
title: MediaUploader
toc: content
---

# MediaUploader

媒体上传器组件，用于上传图片、视频等媒体文件。

## 何时使用

- 需要上传图片、视频时
- 需要管理媒体上传状态时
- 需要显示媒体上传进度时

## 代码演示

<code src="./demos/general/index.jsx"></code>

## API

### 属性

| 属性                   | 说明           | 类型                                                                                                                         | 默认值                |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| mediaType              | 媒体类型       | `Array<'image' \| 'video'>`                                                                                                  | `['image']`           |
| list                   | 媒体列表       | `Array<{fileThumbnail: string, fileUrl: string, filePath: string, status: 'choose' \| 'uploading' \| 'error' \| 'success'}>` | `[]`                  |
| maxUploadCount         | 最大上传数量   | `number`                                                                                                                     | -                     |
| maxChooseCount         | 最大选择数量   | `number`                                                                                                                     | -                     |
| platform               | 强制上传平台   | `'browser' \| 'wechatMiniProgram' \| 'wechat' \| 'wecom' \| 'wecomMiniProgram' \| 'dingtalk'`                                | -                     |
| ellipsis               | 省略配置       | `object`                                                                                                                     | -                     |
| sourceType             | 来源类型       | `Array<'album' \| 'camera'>`                                                                                                 | `['album', 'camera']` |
| sizeType               | 尺寸类型       | `Array<'original' \| 'compressed'>`                                                                                          | `['compressed']`      |
| isSaveToAlbum          | 是否保存到本地 | `number`                                                                                                                     | `0`                   |
| fileImageCompress      | 图片压缩配置   | `{maxWidth: number, quality: number}`                                                                                        | -                     |
| async                  | 是否异步上传   | `boolean`                                                                                                                    | `false`               |
| verifyImage            | 校验图片       | `boolean`                                                                                                                    | `true`                |
| reUpload               | 支持重新上传   | `boolean`                                                                                                                    | `true`                |
| allowClear             | 允许清除       | `boolean`                                                                                                                    | `true`                |
| allowChoose            | 允许选择       | `boolean`                                                                                                                    | `true`                |
| previewAllowChoose     | 预览允许选择   | `boolean`                                                                                                                    | -                     |
| previewAllowClear      | 预览允许清除   | `boolean`                                                                                                                    | -                     |
| compatible             | 兼容模式       | `boolean`                                                                                                                    | `true`                |
| timeout                | 超时时间       | `number`                                                                                                                     | -                     |
| style                  | 自定义样式     | `object`                                                                                                                     | -                     |
| className              | 自定义类名     | `string`                                                                                                                     | -                     |
| uploadPosition         | 上传位置       | `'start' \| 'end'`                                                                                                           | -                     |
| previewSafeArea        | 预览安全区     | `boolean`                                                                                                                    | -                     |
| previewNavBarStyle     | 预览导航栏样式 | `object`                                                                                                                     | -                     |
| previewNavBarClassName | 预览导航栏类名 | `string`                                                                                                                     | -                     |
| previewModalStyle      | 预览模态框样式 | `object`                                                                                                                     | -                     |
| previewModalClassName  | 预览模态框类名 | `string`                                                                                                                     | -                     |
| previewMaskStyle       | 预览遮罩样式   | `object`                                                                                                                     | -                     |
| previewMaskClassName   | 预览遮罩类名   | `string`                                                                                                                     | -                     |
| uploadRender           | 上传按钮渲染   | `() => ReactNode`                                                                                                            | -                     |
| uploadingRender        | 上传中渲染     | `(item: object) => ReactNode`                                                                                                | -                     |
| itemRender             | 项渲染         | `(item: object) => ReactNode`                                                                                                | -                     |
| previewPortal          | 预览挂载节点   | `HTMLElement`                                                                                                                | -                     |
| previewCancelPosition  | 预览取消位置   | `string`                                                                                                                     | -                     |
| getItemExtra           | 获取项额外数据 | `(options: object) => object`                                                                                                | -                     |
| getUploadUrl           | 获取上传地址   | `(options: object) => string`                                                                                                | -                     |
| formatChoose           | 格式化选择     | `(result: object) => object`                                                                                                 | -                     |
| formatHeader           | 格式化请求头   | `(options: object) => object`                                                                                                | -                     |
| formatPayload          | 格式化请求体   | `(options: object) => object`                                                                                                | -                     |
| formatResponse         | 格式化响应     | `(result: object) => object`                                                                                                 | -                     |
| onBeforeChoose         | 选择前事件     | `(e: Event) => Promise<boolean>`                                                                                             | -                     |
| onUpload               | 上传事件       | `(item: object) => Promise<object>`                                                                                          | -                     |
| onChange               | 变化事件       | `(list: Array, options: object) => void`                                                                                     | -                     |
| onPreview              | 预览事件       | `(item: object, index: number) => void`                                                                                      | -                     |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

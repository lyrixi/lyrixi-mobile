---
group:
  title: 数据录入
  order: 2
order: 1
title: Media
toc: content
---

# Media

图片组件，用于图片展示、选择和上传。

## 何时使用

- 需要展示图片时
- 需要图片选择和上传时
- 需要图片预览时
- 需要视频选择时

## 示例

## 多媒体

<code src="./demos/Media/index.jsx"></code>

## Media

### 属性

| 属性            | 说明         | 类型                            | 默认值                |
| --------------- | ------------ | ------------------------------- | --------------------- |
| allowChoose     | 是否允许选择 | `boolean`                       | `false`               |
| allowClear      | 是否允许清除 | `boolean \| (item) => boolean`  | `false`               |
| uploadPosition  | 上传按钮位置 | `'start' \| 'end'`              | `'end'`               |
| uploadRender    | 上传按钮     | `function({uploadType: ''})`    | -                     |
| uploadingRender | 自定义上传中 | `function({uploadingType: ''})` | -                     |
| async           | 是否异步     | `boolean`                       | `false`               |
| reUpload        | 是否重新上传 | `boolean`                       | `true`                |
| maxCount        | 最大数量     | `number`                        | -                     |
| visibleCount    | 可见数量     | `number`                        | -                     |
| mediaType       | 选择类型     | `[video,image]`                 | -                     |
| sourceType      | 来源类型     | `array`                         | `['album', 'camera']` |
| sizeType        | 尺寸类型     | `array`                         | `['compressed']`      |
| maxWidth        | 最大宽度     | `number`                        | -                     |
| list            | 图片列表     | `array`                         | `[]`                  |
| onBeforeChoose  | 选择前回调   | `() => boolean`                 | -                     |
| onChoose        | 选择回调     | `(files: array) => void`        | -                     |
| onFileChange    | 文件变化回调 | `(files: array) => void`        | -                     |
| onUpload        | 上传回调     | `(file: object) => void`        | -                     |
| onChange        | 变化回调     | `(list: array) => void`         | -                     |
| onPreview       | 预览回调     | `(file: object) => void`        | -                     |

### Ref

| 属性         | 说明       | 类型                   |
| ------------ | ---------- | ---------------------- |
| element      | 根元素     | `HtmlDivElement`       |
| getElement   | 获取根元素 | () => `HtmlDivElement` |
| updateStatus | 更新状态   | `() => void`           |
| chooseFile   | 选择文件   | `() => void`           |

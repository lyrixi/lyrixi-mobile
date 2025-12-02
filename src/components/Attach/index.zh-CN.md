---
group:
  title: 数据录入
  order: 2
order: 1
title: Attach
toc: content
---

# Attach

文件上传组件，用于文件选择和上传。

## 何时使用

- 需要文件上传功能时
- 需要图片上传时
- 需要多文件上传时
- 需要文件预览时

## 示例

<code src="./demos/index.jsx"></code>

## Browser

### 属性

| 属性            | 说明         | 类型                            | 默认值  |
| --------------- | ------------ | ------------------------------- | ------- |
| allowChoose     | 是否允许选择 | `boolean`                       | `false` |
| allowClear      | 是否允许清除 | `boolean \| (item) => boolean`  | `false` |
| uploadPosition  | 上传按钮位置 | `string`                        | -       |
| uploadRender    | 上传按钮     | `function({uploadType: ''})`    | -       |
| uploadingRender | 是否上传中   | `function({uploadingType: ''})` | -       |
| async           | 是否异步     | `boolean`                       | `false` |
| reUpload        | 是否重新上传 | `boolean`                       | `true`  |
| count           | 最大数量     | `number`                        | -       |
| sourceType      | 文件扩展名   | `Array<string>`                 | -       |
| maxSize         | 最大文件大小 | `number`                        | -       |
| list            | 文件列表     | `array`                         | `[]`    |
| onBeforeChoose  | 选择前回调   | `() => boolean`                 | -       |
| onChoose        | 选择回调     | `(files: array) => void`        | -       |
| onFileChange    | 文件变化回调 | `(files: array) => void`        | -       |
| onUpload        | 上传回调     | `(file: object) => void`        | -       |
| onChange        | 变化回调     | `(list: array) => void`         | -       |
| onPreview       | 预览回调     | `(file: object) => void`        | -       |

### Ref

| 属性        | 说明       | 类型                        |
| ----------- | ---------- | --------------------------- |
| rootDOM     | 根元素     | `HtmlDivElement`            |
| getRootDOM  | 获取根元素 | () => `HtmlDivElement`      |
| chooseFile  | 选择文件   | `() => Promise<boolean>`    |
| choose      | 选择文件   | `() => Promise<boolean>`    |
| uploadList  | 上传列表   | `() => void`                |
| showLoading | 显示加载   | `(options: object) => void` |
| hideLoading | 隐藏加载   | `(options: object) => void` |

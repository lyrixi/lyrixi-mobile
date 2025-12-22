---
group:
  title: 数据展示
  order: 5
order: 1
title: AttachUploader
toc: content
---

# AttachUploader

附件上传器组件，用于上传附件文件。

## 何时使用

- 需要上传附件文件时
- 需要管理附件上传状态时
- 需要显示附件上传进度时

## 代码演示

<code src="./demos/index.jsx"></code>

## API

### 属性

| 属性                    | 说明               | 类型                                                                                                  | 默认值  |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------------------------------- | ------- |
| list                    | 附件列表           | `Array<{fileUrl: string, filePath: string, status: 'choose' \| 'uploading' \| 'error' \| 'success'}>` | `[]`    |
| maxCount                | 最大数量           | `number`                                                                                              | -       |
| maxChooseCount          | 最大选择数量       | `number`                                                                                              | -       |
| sourceType              | 来源类型           | `Array<'album' \| 'camera'>`                                                                          | -       |
| maxSize                 | 最大文件大小       | `number`                                                                                              | -       |
| async                   | 是否异步上传       | `boolean`                                                                                             | `false` |
| reUpload                | 支持重新上传       | `boolean`                                                                                             | `true`  |
| allowClear              | 允许清除           | `boolean`                                                                                             | `true`  |
| allowChoose             | 允许选择           | `boolean`                                                                                             | `true`  |
| className               | 自定义类名         | `string`                                                                                              | -       |
| uploadPosition          | 上传位置           | `'start' \| 'end'`                                                                                    | -       |
| uploadRender            | 上传按钮渲染       | `() => ReactNode`                                                                                     | -       |
| uploadingRender         | 上传中渲染         | `(item: object) => ReactNode`                                                                         | -       |
| itemRender              | 项渲染             | `(item: object) => ReactNode`                                                                         | -       |
| previewPortal           | 预览挂载节点       | `HTMLElement`                                                                                         | -       |
| previewServerUrl        | 预览服务器地址     | `string`                                                                                              | -       |
| previewServerSourceType | 预览服务器来源类型 | `string`                                                                                              | -       |
| getUploadUrl            | 获取上传地址       | `(options: object) => string`                                                                         | -       |
| formatHeader            | 格式化请求头       | `(options: object) => object`                                                                         | -       |
| formatPayload           | 格式化请求体       | `(options: object) => object`                                                                         | -       |
| formatResponse          | 格式化响应         | `(result: object) => object`                                                                          | -       |
| onBeforeChoose          | 选择前事件         | `(e: Event) => Promise<boolean>`                                                                      | -       |
| onFileChange            | 文件变化事件       | `(result: object) => void`                                                                            | -       |
| onUpload                | 上传事件           | `(item: object) => Promise<object>`                                                                   | -       |
| onChange                | 变化事件           | `(list: Array, options: object) => void`                                                              | -       |
| onPreview               | 预览事件           | `(item: object, index: number) => void`                                                               | -       |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

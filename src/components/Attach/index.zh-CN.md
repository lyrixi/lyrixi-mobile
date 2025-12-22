---
group:
  title: 数据展示
  order: 5
order: 1
title: Attach
toc: content
---

# Attach

附件组件，用于显示和管理附件文件。

## 何时使用

- 需要显示附件文件时
- 需要上传附件文件时
- 需要预览附件文件时

## 代码演示

<code src="./demos/index.jsx"></code>

## API

### 属性

| 属性                    | 说明               | 类型                                                                                                                                      | 默认值  |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| list                    | 附件列表           | `Array<{fileUrl: string, filePath: string, fileName: string, fileSize: number, status: 'choose' \| 'uploading' \| 'error' \| 'success'}>` | `[]`    |
| maxCount                | 最大数量           | `number`                                                                                                                                  | -       |
| sourceType              | 来源类型           | `Array<'album' \| 'camera'>`                                                                                                              | -       |
| disabled                | 是否禁用           | `boolean`                                                                                                                                 | -       |
| allowChoose             | 允许选择           | `boolean`                                                                                                                                 | `false` |
| allowClear              | 允许清除           | `boolean`                                                                                                                                 | `false` |
| async                   | 是否异步上传       | `boolean`                                                                                                                                 | `false` |
| reUpload                | 支持重新上传       | `boolean`                                                                                                                                 | `true`  |
| maxSize                 | 最大文件大小       | `number`                                                                                                                                  | -       |
| style                   | 自定义样式         | `object`                                                                                                                                  | -       |
| className               | 自定义类名         | `string`                                                                                                                                  | -       |
| uploadPosition          | 上传位置           | `'start' \| 'end'`                                                                                                                        | `'end'` |
| uploadRender            | 上传按钮渲染       | `() => ReactNode`                                                                                                                         | -       |
| uploadingRender         | 上传中渲染         | `(item: object) => ReactNode`                                                                                                             | -       |
| itemRender              | 项渲染             | `(item: object) => ReactNode`                                                                                                             | -       |
| previewPortal           | 预览挂载节点       | `HTMLElement`                                                                                                                             | -       |
| previewServerUrl        | 预览服务器地址     | `string`                                                                                                                                  | -       |
| previewServerSourceType | 预览服务器来源类型 | `string`                                                                                                                                  | -       |
| onBeforeChoose          | 选择前事件         | `(e: Event) => Promise<boolean>`                                                                                                          | -       |
| onChoose                | 选择事件           | `(result: object) => void`                                                                                                                | -       |
| onFileChange            | 文件变化事件       | `(result: object) => void`                                                                                                                | -       |
| onUpload                | 上传事件           | `(item: object) => Promise<object>`                                                                                                       | -       |
| onChange                | 变化事件           | `(list: Array, options: object) => void`                                                                                                  | -       |
| onPreview               | 预览事件           | `(item: object, index: number) => void`                                                                                                   | -       |

### Ref

| 属性         | 说明       | 类型                              |
| ------------ | ---------- | --------------------------------- | --- |
| element      | 根元素     | `HtmlDivElement`                  |
| getElement   | 获取根元素 | () => `HtmlDivElement`            |
| updateStatus | 更新状态   | `() => void`                      |
| chooseFile   | 选择文件   | `() => Promise<object>`           |
| choose       | 选择       | `() => Promise<object>`           |
| uploadList   | 上传列表   | `(list: Array) => Promise<Array>` | -   |
| showLoading  | 显示加载   | `(options: object) => void`       | -   |
| hideLoading  | 隐藏加载   | `(options: object) => void`       | -   |

## Attach.List

附件列表组件。

### 何时使用

- 需要显示附件列表时

### 代码演示

<code src="./demos/index.jsx"></code>

### API

#### 属性

| 属性       | 说明     | 类型                          | 默认值 |
| ---------- | -------- | ----------------------------- | ------ |
| list       | 附件列表 | `Array<object>`               | -      |
| allowClear | 允许清除 | `boolean`                     | -      |
| itemRender | 项渲染   | `(item: object) => ReactNode` | -      |
| onChange   | 变化事件 | `(list: Array) => void`       | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Attach.Button

附件按钮组件。

### 何时使用

- 需要显示附件上传按钮时

### 代码演示

<code src="./demos/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                 | 默认值 |
| --------- | ---------- | -------------------- | ------ |
| style     | 自定义样式 | `object`             | -      |
| className | 自定义类名 | `string`             | -      |
| children  | 按钮内容   | `ReactNode`          | -      |
| onClick   | 点击事件   | `(e: Event) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Attach.Uploading

附件上传中组件。

### 何时使用

- 需要显示附件上传中状态时

### 代码演示

<code src="./demos/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 上传中内容 | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

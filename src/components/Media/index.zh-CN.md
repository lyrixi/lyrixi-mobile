---
group:
  title: 数据展示
  order: 5
order: 1
title: Media
toc: content
---

# Media

媒体组件，用于显示和管理图片、视频等媒体文件。

## 何时使用

- 需要显示图片、视频时
- 需要上传图片、视频时
- 需要预览图片、视频时

## 代码演示

<code src="./demos/Media.jsx"></code>

## API

### 属性

| 属性                   | 说明           | 类型                                                                                                                         | 默认值                |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| list                   | 媒体列表       | `Array<{fileThumbnail: string, fileUrl: string, filePath: string, status: 'choose' \| 'uploading' \| 'error' \| 'success'}>` | `[]`                  |
| maxCount               | 最大数量       | `number`                                                                                                                     | -                     |
| mediaType              | 媒体类型       | `Array<'image' \| 'video'>`                                                                                                  | `['image']`           |
| ellipsis               | 省略配置       | `object`                                                                                                                     | -                     |
| sourceType             | 来源类型       | `Array<'album' \| 'camera'>`                                                                                                 | `['album', 'camera']` |
| sizeType               | 尺寸类型       | `Array<'original' \| 'compressed'>`                                                                                          | `['compressed']`      |
| fileImageCompress      | 图片压缩配置   | `{maxWidth: number, quality: number}`                                                                                        | -                     |
| allowChoose            | 允许选择       | `boolean`                                                                                                                    | `false`               |
| allowClear             | 允许清除       | `boolean`                                                                                                                    | `false`               |
| async                  | 是否异步上传   | `boolean`                                                                                                                    | `false`               |
| reUpload               | 支持重新上传   | `boolean`                                                                                                                    | `true`                |
| previewAllowChoose     | 预览允许选择   | `boolean`                                                                                                                    | -                     |
| previewAllowClear      | 预览允许清除   | `boolean`                                                                                                                    | -                     |
| style                  | 自定义样式     | `object`                                                                                                                     | -                     |
| className              | 自定义类名     | `string`                                                                                                                     | -                     |
| uploadPosition         | 上传位置       | `'start' \| 'end'`                                                                                                           | `'end'`               |
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
| onBeforeChoose         | 选择前事件     | `(e: Event) => Promise<boolean>`                                                                                             | -                     |
| onChoose               | 选择事件       | `(result: object) => void`                                                                                                   | -                     |
| onFileChange           | 文件变化事件   | `(result: object) => void`                                                                                                   | -                     |
| onUpload               | 上传事件       | `(item: object) => Promise<object>`                                                                                          | -                     |
| onChange               | 变化事件       | `(list: Array, options: object) => void`                                                                                     | -                     |
| onPreview              | 预览事件       | `(item: object, index: number) => Promise<string \| false>`                                                                  | -                     |

### Ref

| 属性         | 说明       | 类型                   |
| ------------ | ---------- | ---------------------- |
| element      | 根元素     | `HtmlDivElement`       |
| getElement   | 获取根元素 | () => `HtmlDivElement` |
| updateStatus | 更新状态   | `() => void`           |

## Media.List

媒体列表组件。

### 何时使用

- 需要显示媒体列表时

### 代码演示

<code src="./demos/MediaList.jsx"></code>

### API

#### 属性

| 属性            | 说明         | 类型                                    | 默认值 |
| --------------- | ------------ | --------------------------------------- | ------ |
| list            | 媒体列表     | `Array<object>`                         | -      |
| mediaType       | 媒体类型     | `Array<'image' \| 'video'>`             | -      |
| ellipsis        | 省略配置     | `object`                                | -      |
| allowClear      | 允许清除     | `boolean`                               | -      |
| uploadingRender | 上传中渲染   | `(item: object) => ReactNode`           | -      |
| itemRender      | 项渲染       | `(item: object) => ReactNode`           | -      |
| onChange        | 变化事件     | `(list: Array) => void`                 | -      |
| onReUpload      | 重新上传事件 | `(item: object, index: number) => void` | -      |
| onPreview       | 预览事件     | `(item: object, index: number) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Media.PreviewModal

媒体预览模态框组件。

### 何时使用

- 需要预览媒体时

### 代码演示

<code src="./demos/MediaPreviewModal.jsx"></code>

### API

#### 属性

| 属性                   | 说明           | 类型                                | 默认值 |
| ---------------------- | -------------- | ----------------------------------- | ------ |
| list                   | 媒体列表       | `Array<object>`                     | -      |
| index                  | 当前索引       | `number`                            | -      |
| mediaType              | 媒体类型       | `Array<'image' \| 'video'>`         | -      |
| open                   | 是否显示       | `boolean`                           | -      |
| safeArea               | 是否安全区     | `boolean`                           | -      |
| previewNavBarStyle     | 预览导航栏样式 | `object`                            | -      |
| previewNavBarClassName | 预览导航栏类名 | `string`                            | -      |
| modalStyle             | 模态框样式     | `object`                            | -      |
| modalClassName         | 模态框类名     | `string`                            | -      |
| maskStyle              | 遮罩样式       | `object`                            | -      |
| maskClassName          | 遮罩类名       | `string`                            | -      |
| portal                 | 挂载节点       | `HTMLElement`                       | -      |
| cancelPosition         | 取消位置       | `string`                            | -      |
| allowChoose            | 允许选择       | `boolean`                           | -      |
| allowClear             | 允许清除       | `boolean`                           | -      |
| onBeforeChoose         | 选择前事件     | `(e: Event) => Promise<boolean>`    | -      |
| onChoose               | 选择事件       | `(result: object) => void`          | -      |
| onFileChange           | 文件变化事件   | `(result: object) => void`          | -      |
| onUpload               | 上传事件       | `(item: object) => Promise<object>` | -      |
| onChange               | 变化事件       | `(list: Array) => void`             | -      |
| onClose                | 关闭事件       | `() => void`                        | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Media.PreviewMain

媒体预览主组件。

### 何时使用

- 需要直接使用媒体预览主组件时

### 代码演示

<code src="./demos/MediaPreviewMain.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                        | 默认值 |
| --------- | ---------- | --------------------------- | ------ |
| list      | 媒体列表   | `Array<object>`             | -      |
| index     | 当前索引   | `number`                    | -      |
| mediaType | 媒体类型   | `Array<'image' \| 'video'>` | -      |
| style     | 自定义样式 | `object`                    | -      |
| className | 自定义类名 | `string`                    | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Media.Mark

媒体标记组件。

### 何时使用

- 需要在媒体上显示标记时

### 代码演示

<code src="./demos/MediaMark.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 标记内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

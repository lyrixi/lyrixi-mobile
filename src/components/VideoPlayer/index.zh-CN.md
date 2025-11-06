---
group:
  title: 数据展示
  order: 2
order: 1
title: VideoPlayer
toc: content
---

# VideoPlayer

视频播放器组件，用于视频播放和控制。

## 何时使用

- 需要视频播放功能时
- 需要直播视频播放时
- 需要视频控制功能时
- 需要视频预览时

## 示例

<code src="./demos/demo1.jsx"></code>

## VideoPlayer

### 属性

| 属性     | 说明       | 类型                      | 默认值 |
| -------- | ---------- | ------------------------- | ------ |
| portal   | 渲染容器   | `HTMLElement`             | -      |
| poster   | 封面图片   | `string`                  | `''`   |
| src      | 视频源     | `string`                  | -      |
| autoPlay | 自动播放   | `boolean`                 | `true` |
| isLive   | 是否直播   | `boolean`                 | -      |
| params   | 播放器参数 | `object`                  | -      |
| onError  | 错误回调   | `(error: object) => void` | -      |
| headerRender | 状态栏渲染函数 | `() => ReactNode`         | -      |
| children | 子元素     | `ReactNode`               | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
| pause      | 暂停播放   | `() => void`           |
| play       | 开始播放   | `() => void`           |

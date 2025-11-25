---
group:
  title: 数据展示
  order: 2
order: 1
title: NoticeBar
toc: content
---

# NoticeBar

通告栏，用于展示重要的提示信息。

## 何时使用

- 需要向用户展示通知、提示、警告等信息时
- 需要在页面顶部或内容区域展示重要信息时
- 需要用户注意但不需要强制交互的场景

## 示例

<code src="./demos/NoticeBar.jsx"></code>

## NoticeBar

### 属性

| 属性        | 说明               | 类型                                        | 默认值  |
| ----------- | ------------------ | ------------------------------------------- | ------- |
| type        | 通知类型           | `success` \| `info` \| `warning` \| `error` | `info`  |
| title       | 通知标题           | `ReactNode`                                 | -       |
| description | 通知描述           | `ReactNode`                                 | -       |
| closable    | 是否可关闭         | `boolean`                                   | `false` |
| iconRender  | 自定义图标渲染函数 | `() => ReactNode`                           | -       |
| style       | 自定义样式         | `CSSProperties`                             | -       |
| className   | 自定义类名         | `string`                                    | -       |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HTMLDivElement`       |
| getRootDOM | 获取根元素 | `() => HTMLDivElement` |
| close      | 关闭通知栏 | `() => void`           |
| open       | 打开通知栏 | `() => void`           |

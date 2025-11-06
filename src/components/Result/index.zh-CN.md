---
group: 数据展示
category: Components
title: Result
---

# Result

结果页组件，用于展示操作结果。

## 何时使用

- 需要展示操作结果时
- 需要展示空状态时
- 需要展示错误状态时
- 需要展示成功状态时

## 示例

## Empty

<code src="./demos/empty.jsx"></code>

## 500

<code src="./demos/500.jsx"></code>

## Result

### 属性

| 属性        | 说明     | 类型                                                                           | 默认值 |
| ----------- | -------- | ------------------------------------------------------------------------------ | ------ |
| status      | 状态类型 | `'empty' \| '500' \| 'success' \| 'waiting' \| 'info' \| 'warning' \| 'error'` | -      |
| title       | 标题     | `string`                                                                       | -      |
| description | 描述     | `string`                                                                       | -      |
| image       | 图片     | `string \| ReactNode \| function`                                              | -      |
| children    | 子元素   | `ReactNode`                                                                    | -      |

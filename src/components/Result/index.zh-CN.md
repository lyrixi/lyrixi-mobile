---
group:
  title: 反馈
  order: 4
order: 1
title: Result
toc: content
---

# Result

结果页组件，用于显示操作结果。

## 何时使用

- 需要显示操作结果时
- 需要显示空状态时
- 需要显示错误状态时

## 代码演示

<code src="./demos/Result.jsx"></code>

## API

### 属性

| 属性        | 说明           | 类型                                                                           | 默认值 |
| ----------- | -------------- | ------------------------------------------------------------------------------ | ------ |
| status      | 状态           | `'empty' \| '500' \| 'success' \| 'waiting' \| 'info' \| 'warning' \| 'error'` | -      |
| title       | 标题           | `ReactNode`                                                                    | -      |
| description | 描述           | `ReactNode`                                                                    | -      |
| style       | 自定义样式     | `object`                                                                       | -      |
| className   | 自定义类名     | `string`                                                                       | -      |
| imageRender | 自定义图片渲染 | `() => ReactNode`                                                              | -      |
| imageUrl    | 图片地址       | `string \| null`                                                               | -      |
| children    | 结果页内容     | `ReactNode`                                                                    | -      |

### Ref

无 Ref 方法。

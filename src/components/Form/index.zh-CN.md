---
group:
  title: 数据录入
  order: 2
order: 1
title: Form
toc: content
---

# Form

表单组件，用于数据收集和验证。

## 何时使用

- 需要收集用户输入数据时
- 需要表单验证时
- 需要统一的表单布局时
- 需要表单数据管理时

## 示例

### 基本使用

<code src="./demos/Layout.jsx"></code>

## Form

### 属性

| 属性        | 说明         | 类型                                     | 默认值         |
| ----------- | ------------ | ---------------------------------------- | -------------- |
| layout      | 布局方式     | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol    | 标签列配置   | `object`                                 | -              |
| mainCol     | 主内容列配置 | `object`                                 | -              |
| scrollerDOM | 滚动容器     | `HTMLElement`                            | -              |
| virtual     | 虚拟滚动     | `boolean`                                | -              |
| style       | 自定义样式   | `object`                                 | -              |
| className   | 自定义类名   | `string`                                 | -              |
| children    | 表单内容     | `ReactNode`                              | -              |

### Ref

| 属性    | 说明   | 类型              |
| ------- | ------ | ----------------- |
| rootDOM | 根元素 | `HtmlFormElement` |

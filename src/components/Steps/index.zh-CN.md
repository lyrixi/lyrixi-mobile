---
group:
  title: 数据展示
  order: 5
order: 1
title: Steps
toc: content
---

# Steps

步骤条组件，用于显示步骤流程。

## 何时使用

- 需要显示步骤流程时
- 需要显示进度步骤时
- 需要引导用户完成操作时

## 代码演示

<code src="./demos/Active.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型                                                                          | 默认值       |
| --------- | ---------- | ----------------------------------------------------------------------------- | ------------ |
| value     | 当前步骤   | `{index: number, id: string, status: string}`                                 | -            |
| list      | 步骤列表   | `Array<{id: string, title: string, description: string, [key: string]: any}>` | -            |
| style     | 自定义样式 | `object`                                                                      | -            |
| className | 自定义类名 | `string`                                                                      | -            |
| iconSize  | 图标大小   | `number`                                                                      | `8`          |
| align     | 对齐方式   | `'center' \| 'left'`                                                          | `'center'`   |
| direction | 方向       | `'vertical' \| 'horizontal'`                                                  | `'vertical'` |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |

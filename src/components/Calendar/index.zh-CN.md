---
group:
  title: 数据录入
  order: 2
order: 1
title: Calendar
toc: content
---

# Calendar

日历组件，用于日期选择和展示。

## 何时使用

- 需要日期选择时
- 需要日期范围选择时
- 需要日历展示时
- 需要周/月视图切换时

## 示例

## 视图

<code src="./demos/type.jsx"></code>

## 属性

<code src="./demos/props.jsx"></code>

### 选择模式

<code src="./demos/mode.jsx"></code>

### 事件

<code src="./demos/events.jsx"></code>

### ref 实例化

<code src="./demos/instance.jsx"></code>

## Calendar

### 属性

| 属性          | 说明         | 类型                                 | 默认值                       |
| ------------- | ------------ | ------------------------------------ | ---------------------------- |
| type          | 日历类型     | `'week' \| 'month'`                  | `'month'`                    |
| value         | 选中值       | `Date \| Date[]`                     | -                            |
| selectionMode | 选择模式     | `'single' \| 'range'`                | -                            |
| weekStart     | 周起始日     | `'Monday' \| 'Sunday'`               | `'Sunday'`                   |
| titleRender   | 标题格式化   | `string`                             | `'YYYY-MM'`                  |
| min           | 最小日期     | `Date`                               | -                            |
| max           | 最大日期     | `Date`                               | -                            |
| draggable     | 可拖动方向   | `array`                              | `['horizontal', 'vertical']` |
| headerRender  | 头部渲染函数 | `(params: object) => ReactNode`      | -                            |
| dateRender    | 日期渲染函数 | `function`                           | -                            |
| onChange      | 选择变化回调 | `(date: Date, info: object) => void` | -                            |
| onPageChange  | 滑动变化回调 | `(date: Date, info: object) => void` | -                            |
| onError       | 错误回调     | `(error: Error) => void`             | -                            |

### Ref

| 属性          | 说明       | 类型                   |
| ------------- | ---------- | ---------------------- |
| element       | 根元素     | `HtmlDivElement`       |
| getElement    | 获取根元素 | () => `HtmlDivElement` |
| slideCollapse | 收起动画   | `() => Promise<void>`  |
| slideExpand   | 展开动画   | `() => Promise<void>`  |
| slidePrevious | 上一月     | `() => Promise<void>`  |
| slideNext     | 下一月     | `() => Promise<void>`  |

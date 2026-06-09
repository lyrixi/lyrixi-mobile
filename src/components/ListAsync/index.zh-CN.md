---
group:
  title: 数据展示
  order: 5
order: 1
title: ListAsync
toc: content
---

# ListAsync

最灵活的异步列表组件, 通常使用 ListPagination 可满足大部分的异步列表

## 何时使用

- 需要显示分页数据列表时
- 需要自动加载数据时
- 需要支持下拉刷新和上拉加载时

## 代码演示

### 普通列表（ListAsyncList）

<code src="./demos/ListAsyncList.tsx"></code>

### 虚拟滚动列表（ListAsyncVirtualList）

<code src="./demos/ListAsyncVirtualList.tsx"></code>

### 分组列表（ListAsyncGroup）

<code src="./demos/ListAsyncGroup.tsx"></code>

## API

### 属性

| 属性                 | 说明             | 类型                                                                                                                                                     | 默认值   |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| loadData             | 数据加载函数     | `(params: { previousResult: ListAsyncLoadResult \| null; action: string }) => Promise<ListAsyncLoadResult>`                                               | -        |
| initialLoad          | 初始加载         | `boolean`                                                                                                                                                | `true`   |
| list                 | 列表数据         | `ListAsyncItem[]`                                                                                                                                        | -        |
| height               | 列表高度         | `number`                                                                                                                                                 | -        |
| children             | 子元素           | `ReactNode`                                                                                                                                              | -        |
| value                | 选中的项         | `ListAsyncItem \| ListAsyncItem[] \| null`                                                                                                                | -        |
| formatViewList       | 格式化列表       | `(list: ListAsyncItem[], meta?: { result: ListAsyncLoadResult \| null }) => ListAsyncViewItem[]`                                                          | -        |
| formatViewItem       | 格式化项         | `(item: ListAsyncItem, options: { index: number; result?: ListAsyncLoadResult \| null }) => ListAsyncViewItem`                                            | -        |
| errorRetry           | 错误重试         | `boolean`                                                                                                                                                | `true`   |
| emptyRetry           | 空状态重试       | `boolean`                                                                                                                                                | -        |
| multiple             | 是否多选         | `boolean`                                                                                                                                                | -        |
| allowClear           | 允许清除         | `boolean`                                                                                                                                                | -        |
| checkable            | 是否可选         | `boolean`                                                                                                                                                | -        |
| disableTopRefresh    | 禁用顶部刷新     | `boolean`                                                                                                                                                | `false`  |
| disableBottomRefresh | 禁用底部刷新     | `boolean`                                                                                                                                                | `false`  |
| virtual              | 虚拟滚动配置     | `{ getItemHeight: (item: ListAsyncItem) => number }`                                                                                                      | -        |
| threshold            | 滚动阈值         | `number`                                                                                                                                                 | -        |
| touchStopPropagation | 触摸事件阻止冒泡 | `boolean`                                                                                                                                                | -        |
| safeArea             | 安全区域适配     | `boolean`                                                                                                                                                | -        |
| style                | 自定义样式       | `CSSProperties`                                                                                                                                          | -        |
| className            | 自定义类名       | `string`                                                                                                                                                 | -        |
| itemStyle            | 项自定义样式     | `CSSProperties`                                                                                                                                          | -        |
| itemClassName        | 项自定义类名     | `string`                                                                                                                                                 | -        |
| itemLayout           | 项布局           | `string`                                                                                                                                                 | -        |
| checkboxVariant      | 复选框外观       | `string`                                                                                                                                                 | -        |
| checkboxPosition     | 复选框位置       | `string`                                                                                                                                                 | -        |
| itemRender           | 自定义项渲染     | `(item: ListAsyncItem, options: { index: number; checked: boolean; onChange: (item: ListAsyncItem) => void }) => ReactNode`                               | -        |
| loadingRender        | 加载中渲染       | `(options: { action?: string }) => ReactNode`                                                                                                             | -        |
| loadingModalStyle    | 加载弹窗样式     | `CSSProperties`                                                                                                                                          | -        |
| loadingModalClassName| 加载弹窗类名     | `string`                                                                                                                                                 | -        |
| loadingMaskStyle     | 加载遮罩样式     | `CSSProperties`                                                                                                                                          | -        |
| loadingMaskClassName | 加载遮罩类名     | `string`                                                                                                                                                 | -        |
| loadingPortal        | 加载弹窗挂载节点 | `HTMLElement`                                                                                                                                            | -        |
| prependRender        | 列表前置渲染     | `(options: { list?: ListAsyncItem[]; value?: ListAsyncItem \| ListAsyncItem[] \| null; onChange?: (newValue, options?) => void }) => ReactNode`            | -        |
| appendRender         | 列表后置渲染     | `(options: { list?: ListAsyncItem[]; value?: ListAsyncItem \| ListAsyncItem[] \| null; onChange?: (newValue, options?) => void }) => ReactNode`            | -        |
| onChange             | 变化事件         | `(newValue: ListAsyncItem \| ListAsyncItem[] \| null, options?: { action?: string; checkedItem: ListAsyncItem }) => void`                                 | -        |
| onTopRefresh         | 顶部刷新回调     | `() => void \| Promise<void>`                                                                                                                             | -        |
| onBottomRefresh      | 底部刷新回调     | `() => void \| Promise<void>`                                                                                                                             | -        |
| onLoad               | 加载事件         | `(params: { result: ListAsyncLoadResult \| null; action: ListAsyncLoadAction }) => void`                                                                   | -        |

### Ref

| 属性            | 说明         | 类型                            |
| --------------- | ------------ | ------------------------------- |
| element         | 根元素       | `HTMLElement \| null`           |
| getElement      | 获取根元素   | `() => HTMLElement \| null`     |
| getAnchors      | 获取锚点列表 | `() => string[]`                |
| scrollToAnchor  | 滚动到锚点   | `(anchor: string) => void`      |
| reload          | 重新加载     | `(action?: string) => void`     |
| getResult       | 获取加载结果 | `() => ListAsyncLoadResult \| null` |

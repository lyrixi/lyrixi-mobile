---
group:
  title: 数据展示
  order: 5
order: 1
title: PaginationList
toc: content
---

# PaginationList

分页列表组件，用于显示分页数据列表。

## 何时使用

- 需要显示分页数据列表时
- 需要自动加载数据时
- 需要支持下拉刷新和上拉加载时

## 代码演示

<code src="./demos/PaginationList.jsx"></code>

## API

### 属性

| 属性                 | 说明         | 类型                                         | 默认值 |
| -------------------- | ------------ | -------------------------------------------- | ------ |
| cacheName            | 缓存名称     | `string`                                     | -      |
| url                  | 数据接口地址 | `string`                                     | -      |
| headers              | 请求头       | `object`                                     | -      |
| params               | 查询参数     | `{rows: number, [key: string]: any}`         | -      |
| formatResult         | 格式化结果   | `(result: object) => object`                 | -      |
| formatViewList       | 格式化列表   | `(list: Array) => Array`                     | -      |
| formatViewItem       | 格式化项     | `(item: object) => object`                   | -      |
| errorRetry           | 错误重试     | `boolean`                                    | -      |
| emptyRetry           | 空状态重试   | `boolean`                                    | -      |
| multiple             | 是否多选     | `boolean`                                    | -      |
| allowClear           | 允许清除     | `boolean`                                    | -      |
| checkable            | 是否可选     | `boolean`                                    | -      |
| disableTopRefresh    | 禁用顶部刷新 | `boolean`                                    | -      |
| disableBottomRefresh | 禁用底部刷新 | `boolean`                                    | -      |
| virtual              | 是否虚拟滚动 | `boolean`                                    | -      |
| style                | 自定义样式   | `object`                                     | -      |
| className            | 自定义类名   | `string`                                     | -      |
| itemRender           | 自定义项渲染 | `(item: object) => ReactNode`                | -      |
| itemLayout           | 项布局       | `string`                                     | -      |
| loadingRender        | 加载中渲染   | `() => ReactNode`                            | -      |
| prependRender        | 前置渲染     | `() => ReactNode`                            | -      |
| appendRender         | 后置渲染     | `() => ReactNode`                            | -      |
| onChange             | 变化事件     | `(value: any \| any[]) => void`              | -      |
| onScroll             | 滚动事件     | `(e: Event) => void`                         | -      |
| onScrollEnd          | 滚动结束事件 | `(e: Event) => void`                         | -      |
| onLoad               | 加载事件     | `({result: object, action: string}) => void` | -      |

### Ref

| 属性        | 说明       | 类型                           |
| ----------- | ---------- | ------------------------------ | --- |
| element     | 根元素     | `HtmlDivElement`               |
| getElement  | 获取根元素 | () => `HtmlDivElement`         |
| updateCache | 更新缓存   | `(extraCache: object) => void` | -   |
| clearCache  | 清除缓存   | `() => void`                   |
| getCache    | 获取缓存   | `() => object`                 |
| reload      | 重新加载   | `(action?: string) => void`    | -   |
| getResult   | 获取结果   | `() => object`                 |

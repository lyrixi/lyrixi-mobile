---
group:
  title: 数据展示
  order: 5
order: 1
title: ListPagination
toc: content
---

# ListPagination

分页列表组件，提供分页数据列表的三种用法：内嵌列表（Main）、触发器+弹窗选择（Combo）、受控弹窗选择（Modal）。

## 何时使用

- 需要显示分页数据列表时
- 需要自动加载数据、下拉刷新和上拉加载时
- 需要从分页列表中单选/多选并展示在输入框或弹窗时

## 代码演示

## ListPagination.Main

内嵌分页列表，直接渲染在页面中。

### 何时使用

- 列表作为页面主体内容时
- 需要下拉刷新、上拉加载、缓存与重试时

### 代码演示

<code src="./demos/ListPaginationMain/index.tsx"></code>

### API

#### 属性

| 属性                 | 说明             | 类型                                                                 | 默认值 |
| -------------------- | ---------------- | -------------------------------------------------------------------- | ------ |
| cacheName            | 缓存名称         | `string`                                                             | -      |
| url                  | 数据接口地址     | `string`                                                             | -      |
| headers              | 请求头           | `Record<string, string>`                                             | -      |
| payload              | 查询参数         | `Record<string, unknown>`                                            | -      |
| pagination           | 分页配置         | `{ rows?: number }`                                                  | -      |
| formatPayload        | 格式化入参       | `(params: object) => object \| Promise<object>`                      | -      |
| formatResult         | 格式化结果       | `(result: unknown, options: object) => object \| Promise<object>`    | -      |
| initialLoad          | 是否初始加载     | `boolean`                                                            | -      |
| errorRetry           | 错误重试         | `boolean`                                                            | -      |
| emptyRetry           | 空状态重试       | `boolean`                                                            | -      |
| value                | 选中的值         | `object \| object[] \| null`                                         | -      |
| list                 | 静态列表         | `Array<object>`                                                      | -      |
| formatViewList       | 格式化列表       | `(list: Array) => Array`                                             | -      |
| formatViewItem       | 格式化项         | `(item: object, options: object) => object`                          | -      |
| multiple             | 是否多选         | `boolean`                                                            | -      |
| allowClear           | 允许清除         | `boolean`                                                            | -      |
| checkable            | 是否可选         | `boolean`                                                            | -      |
| itemStyle            | 项样式           | `object`                                                             | -      |
| itemClassName        | 项类名           | `string`                                                             | -      |
| itemLayout           | 项布局           | `string`                                                             | -      |
| checkboxVariant      | 复选框样式变体   | `string`                                                             | -      |
| checkboxPosition     | 复选框位置       | `string`                                                             | -      |
| disableTopRefresh    | 禁用顶部刷新     | `boolean`                                                            | -      |
| disableBottomRefresh | 禁用底部刷新     | `boolean`                                                            | -      |
| virtual              | 是否虚拟滚动     | `boolean \| object`                                                  | -      |
| threshold            | 触发阈值         | `number`                                                             | -      |
| touchStopPropagation | 触摸阻止冒泡     | `boolean`                                                            | -      |
| safeArea             | 是否安全区       | `boolean`                                                            | -      |
| style                | 自定义样式       | `object`                                                             | -      |
| className            | 自定义类名       | `string`                                                             | -      |
| children             | 子元素           | `ReactNode`                                                          | -      |
| itemRender           | 自定义项渲染     | `(item: object, options: object) => ReactNode`                       | -      |
| loadingRender        | 加载中渲染       | `(options: object) => ReactNode`                                     | -      |
| loadingModalStyle    | 加载弹窗样式     | `object`                                                             | -      |
| loadingModalClassName | 加载弹窗类名    | `string`                                                             | -      |
| loadingMaskStyle     | 加载遮罩样式     | `object`                                                             | -      |
| loadingMaskClassName | 加载遮罩类名     | `string`                                                             | -      |
| loadingPortal        | 加载挂载节点     | `HTMLElement`                                                        | -      |
| prependRender        | 前置渲染         | `(options: object) => ReactNode`                                     | -      |
| appendRender         | 后置渲染         | `(options: object) => ReactNode`                                     | -      |
| onChange             | 变化事件         | `(value: object \| object[] \| null, options?: object) => void`      | -      |
| onScroll             | 滚动事件         | `(e: UIEvent) => void`                                               | -      |
| onScrollEnd          | 滚动结束事件     | `(e: UIEvent) => void`                                               | -      |
| onTopRefresh         | 顶部刷新事件     | `() => void \| Promise<boolean \| string \| undefined>`              | -      |
| onBottomRefresh      | 底部刷新事件     | `() => void \| Promise<boolean \| string \| undefined \| void>`      | -      |
| onLoad               | 加载事件         | `(params: { result: object \| null; action: string }) => void`       | -      |

#### Ref

| 属性            | 说明         | 类型                           |
| --------------- | ------------ | ------------------------------ |
| element         | 根元素       | `HTMLElement`                  |
| getElement      | 获取根元素   | () => `HTMLElement \| null`  |
| getAnchors      | 获取锚点列表 | () => `string[]`               |
| scrollToAnchor  | 滚动到锚点   | `(anchor: string) => void`     |
| reload          | 重新加载     | `(action?: string) => void`    |
| getResult       | 获取结果     | `() => object \| null`         |
| updateCache     | 更新缓存     | `(extraCache?: object) => void` |
| clearCache      | 清除缓存     | `() => unknown`                |
| getCache        | 获取缓存     | `() => unknown`                |

## ListPagination.Combo

组合组件：输入框触发器 + 弹窗内分页列表选择。

### 何时使用

- 需要从分页接口中选择一项或多项，并展示在输入框时
- 与表单搭配、占位少、点击再加载列表时

### 代码演示

<code src="./demos/ListPaginationCombo/index.tsx"></code>

### API

#### 属性

| 属性                 | 说明         | 类型                            | 默认值 |
| -------------------- | ------------ | ------------------------------- | ------ |
| value                | 选中的值     | `any \| any[]`                  | -      |
| placeholder          | 占位符       | `string`                        | -      |
| formatter            | 展示格式化   | `(value: any) => string`        | -      |
| autoSize             | 自动调整大小 | `boolean`                       | -      |
| separator            | 多选时分隔符 | `string`                        | -      |
| mode                 | 展示模式     | `string`                        | -      |
| readOnly             | 只读         | `boolean`                       | -      |
| disabled             | 禁用         | `boolean`                       | -      |
| allowClear           | 允许清除     | `boolean`                       | -      |
| style / className    | 样式/类名    | `object` / `string`             | -      |
| leftIconNode         | 左侧图标     | `ReactNode`                     | -      |
| rightIconNode        | 右侧图标     | `ReactNode`                     | -      |
| clearRender          | 清除按钮渲染 | `(props: object) => ReactNode`  | -      |
| url                  | 数据接口地址 | `string`                        | -      |
| headers              | 请求头       | `object`                        | -      |
| payload              | 查询参数     | `object`                        | -      |
| formatPayload        | 格式化入参   | `(result: object) => object`    | -      |
| formatResult         | 格式化结果   | `(result: object) => object`    | -      |
| formatViewList       | 格式化列表   | `(list: Array) => Array`        | -      |
| formatViewItem       | 格式化项     | `(item: object) => object`      | -      |
| maskClosable         | 点击遮罩关闭 | `boolean`                       | -      |
| errorRetry           | 错误重试     | `boolean`                       | -      |
| emptyRetry           | 空状态重试   | `boolean`                       | -      |
| multiple             | 是否多选     | `boolean`                       | -      |
| checkable            | 是否可选     | `boolean`                       | -      |
| disableTopRefresh    | 禁用顶部刷新 | `boolean`                       | -      |
| disableBottomRefresh | 禁用底部刷新 | `boolean`                       | -      |
| virtual              | 是否虚拟滚动 | `boolean`                       | -      |
| safeArea             | 是否安全区   | `boolean`                       | -      |
| modalStyle           | 弹窗样式     | `object`                        | -      |
| modalClassName       | 弹窗类名     | `string`                        | -      |
| maskStyle            | 遮罩样式     | `object`                        | -      |
| maskClassName        | 遮罩类名     | `string`                        | -      |
| portal               | 挂载节点     | `HTMLElement \| null \| false`  | -      |
| title                | 弹窗标题     | `ReactNode`                     | -      |
| cancelNode           | 取消按钮     | `ReactNode`                     | -      |
| cancelVisible        | 取消按钮可见 | `boolean`                       | -      |
| headerRender         | 头部渲染     | `(props: object) => ReactNode`  | -      |
| itemRender           | 项渲染       | `(item: object) => ReactNode`   | -      |
| loadingRender        | 加载中渲染   | `() => ReactNode`               | -      |
| prependRender        | 前置渲染     | `() => ReactNode`               | -      |
| appendRender         | 后置渲染     | `() => ReactNode`               | -      |
| onOk                 | 确认事件     | `(value: any \| any[]) => void` | -      |
| onChange             | 变化事件     | `(value: any \| any[]) => void` | -      |
| onBeforeOpen         | 打开前事件   | `() => Promise<boolean>`        | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
| close      | 关闭弹窗   | `() => void`           |
| open       | 打开弹窗   | `() => void`           |

## ListPagination.Modal

受控弹窗内的分页列表选择。

### 何时使用

- 需要由外部控制弹窗显隐时
- 与自定义触发器、按钮等组合使用时

### 代码演示

<code src="./demos/ListPaginationModal/index.tsx"></code>

### API

#### 属性

同 [ListPagination.Main](#listpaginationmain) 组件属性，并额外支持：

| 属性           | 说明         | 类型                                              | 默认值 |
| -------------- | ------------ | ------------------------------------------------- | ------ |
| open           | 是否显示     | `boolean`                                         | -      |
| maskClosable   | 点击遮罩关闭 | `boolean`                                         | -      |
| modalStyle     | 弹窗样式     | `object`                                          | -      |
| modalClassName | 弹窗类名     | `string`                                          | -      |
| maskStyle      | 遮罩样式     | `object`                                          | -      |
| maskClassName  | 遮罩类名     | `string`                                          | -      |
| portal         | 挂载节点     | `HTMLElement \| null \| false`                    | -      |
| title          | 弹窗标题     | `ReactNode`                                       | -      |
| cancelNode     | 取消按钮     | `ReactNode`                                       | -      |
| cancelVisible  | 取消按钮可见 | `boolean`                                         | -      |
| headerRender   | 头部渲染     | `(options: object) => ReactNode`                  | -      |
| onOk           | 确认事件     | `(value: object \| object[] \| null) => unknown`  | -      |
| onClose        | 关闭事件     | `() => void`                                      | -      |

#### Ref

| 属性            | 说明           | 类型                          |
| --------------- | -------------- | ----------------------------- |
| maskElement     | 遮罩元素       | `HTMLDivElement`              |
| getMaskElement  | 获取遮罩元素   | () => `HTMLDivElement`        |
| modalElement    | 模态框元素     | `HTMLDivElement`              |
| getModalElement | 获取模态框元素 | () => `HTMLDivElement`        |
| element         | 列表根元素     | `HTMLElement`                 |
| getElement      | 获取列表根元素 | () => `HTMLElement \| null`   |
| getAnchors      | 获取锚点列表   | () => `string[]`              |
| scrollToAnchor  | 滚动到锚点     | `(anchor: string) => void`    |
| reload          | 重新加载       | `(action?: string) => void`   |
| getResult       | 获取结果       | `() => object \| null`        |
| updateCache     | 更新缓存       | `(extraCache?: object) => void` |
| clearCache      | 清除缓存       | `() => unknown`               |
| getCache        | 获取缓存       | `() => unknown`               |

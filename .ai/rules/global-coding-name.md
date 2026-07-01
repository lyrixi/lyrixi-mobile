---
description: JS/TS 实现代码命名规范（props、refs、state、handlers 等）
globs: '**/*.{js,jsx,ts,tsx}'
alwaysApply: false
---

# 实现代码命名规范

## props 解构 / 默认值

规则保持业务语义名, 布尔值用 `readOnly / disabled / open / enableXxx/ disableXxx/ xxVisible` 回调函数用 `onXxx` 示例: `{ title, value, open = false, disabled = false, onChange, onClose }`

## refs 规则

- React ref 统一后缀：`xxRef`，如 `rootRef`、`listRef`
- 保存真实 DOM 节点变量：`xxElement`，如 `rootElement`、`inputElement`

## state 规则

值本身直接命名，示例 `open / setOpen`, `loading / setLoading`, `activeIndex / setActiveIndex`, `keyword / setKeyword`

## derived values / memo 规则

统一前缀：`mergedXxx`, `computedXxx`, `visibleXxx`, `filteredXxx`, `sortedXxx`, 示例: `mergedOpen`, `computedStyle`, `filteredList`, `sortedOptions`, `visibleItems`

## internal helpers 规则

按动作命名, 示例: `getXxx`, `saveXxx`, `updateXxx`, `loadXxx`, `calcXxx`, `isXxx`, `hasXxx`

## effects 规则

useEffect 不用命名, 示例: useEffect(() => { ... }, [value])

## expose / imperative handle 规则

暴露给外部的方法，用动词开头, 示例: `focus`, `blur`, `open`, `close`, `toggle`, `scrollTo`, `reset`, `submit`, 避免: `doOpen`, `handleOpen`, `setOpen`

## event handlers 规则

事件处理名与 props 对应，`handle` + 与 `on` 后相同的一段, 例如: onChange -> handleChange。

统一用`handle`开头, 示例: `handleChange`, `handleInput`, `handleSelect`, `handleClick`, `handleClose`, `handleSubmit`

## type 命名规则

### 方法入参与回调出参（types 内）

**仅约束** `src/components` 和 `src/utils` 里方法的入参形参与回调出参形参（如 `xxRender`、`loadData`、`formatXxx`、`onLoad`、`onChange` 等），**不改**组件 Props / Ref **类型名**本身（如 `ButtonProps`）。

#### 方法/工具函数入参

调用方传入的配置或上下文对象。

- 类型名：`XxxParams`（如 `GetLocationParams`、`AttachChooseParams`）
- 形参名：`params`、`xxParams`（如 `iconParams`、`layerParams`）

#### 回调出参

回调被调用时，组件 / 工具向外传递的值。适用于 `onChange`、`onSelect`、`onLoad`、`onSuccess`、`onError`、`onCancel`，以及 `itemRender`、`formatViewItem` 等函数类型 props 的形参。

**通用签名**（按场景三选一）：

- 业务值：`(主值, options?: { ... }) => void`
- 仅附加信息：`(options: { ... }) => void`
- DOM / React 事件：`(event: XxxEvent<Element>) => void`

仅一个出参时可省略 `options`；`onClick`、`onFocus`、`onBlur` 等事件回调主出参统一用 `event`（禁止 `e`、`evt`）。

**第一出参（主值）形参名**：按业务语义自行抉择，能直接表达「变了什么」即可（禁止 `v` 等无意义简写）。

| 场景                   | 形参名（示例） | 示例                                          |
| ---------------------- | -------------- | --------------------------------------------- |
| 受控值 / 选中值变更    | `value`        | `onChange?: (value: string) => void`          |
| 列表集合变更           | `list`         | `onChange?: (list: FileItem[]) => void`       |
| 单条记录选中           | `item`         | `onChange?: (item: TabBarItem) => void`       |
| 布尔态变更             | `checked`      | `onChange?: (checked: boolean) => void`       |
| 索引 / 序号变更        | `index`        | `onChange?: (index: number \| null) => void`  |
| 成功 / 失败 / 异步结果 | `result`       | `onSuccess?: (result: XxxResult) => void`     |
| DOM / React 事件       | `event`        | `onClick?: (event: MouseEvent<HTMLDivElement>) => void` |
| 特定业务字面量         | 语义名         | `onChange?: (base64: string \| null) => void` |

- 类型名：`XxxItem`、`XxxResult` 等（如 `TransferItem`、`ListItem`、`BridgeSuccessResult`）

**第二出参（混合 / 附加信息）**：

- 形参名统一 `options`（禁止 `opts`）
- 类型为匿名对象或 `XxxChangeOptions` 等；字段保持语义，如 `{ action?: string; checkedItem: ListItem }`

```ts
onChange?: (item: ListItem | ListItem[] | null, options?: { action?: string; checkedItem: ListItem }) => void
onChange?: (list: FileItem[], options?: { action?: string }) => void
onLoad?: (options: { result: ListAsyncLoadResult | null; action: ListAsyncLoadAction }) => void
onClick?: (event: MouseEvent<HTMLDivElement>) => void
```

**渲染 / 格式化类回调**（`itemRender`、`formatViewItem`、`formatViewList`）：

- 当前行 / 当前列表：形参 `item` 或 `list`（传入待渲染数据，非向外传出）
- 索引、勾选态等附加信息：形参 `options`，如 `(item: XxxItem, options: { index: number; checked: boolean }) => ReactNode`

### 例外

- 组件 Props / Ref **类型名**及 Props 上的普通字段（非回调形参）
- **第三方 API**：SDK / 库怎么定义就怎么声明、透传（如 Leaflet `L.MapOptions`、微信 JSSDK 签名）
- Canvas 绘图上下文 `ctx`（`CanvasRenderingContext2D`）

## render helpers 规则

- 统一用`render`开头, 示例: `renderArrow`, `renderHeader`, `renderFooter`, `renderContent`, `renderEmpty`, `renderLoading`
- 返回 TSX

## return 规则

JSX 内变量名延续以上规范。

### Props 事件命名：`on` + 大写首字母的事件语义，即 `onXxx` 形式；若中间含名词，名词放在 `on` 之后、事件语义之前。

- 示例：`onChange`、`onVisibleChange`、`onButtonClick`、`onSearch`、`onSelect`

### className 类名

`lyrixi-` 前缀 + 功能语义（kebab-case）；多个类名用 `DOMUtil.classNames` 合并。细则见 [`component-coding-styles.md`](./component-coding-styles.md)（组件库）、[`page-coding-styles.md`](./page-coding-styles.md)（业务页面）。

## props 和 state 值结构约定

- 页面上查询参数为: `[queryParams, setQueryParams] = useState(null)`
- 单选值通常为: `{ id, name }`
- 多选值通常为: `Array<{ id, name }>`
- 列表数据通常为: `[{ id, name, ... }]`
- 通过 `onChange`, `onSelect` 更新受控值

## 完整示例

```tsx
const Example = forwardRef<ExampleRef, ExampleProps>(({...}, ref) => {
  // 1. props

  // 2. refs
  const xxRef = useRef<...>(...)

  // 3. state, {id: '', name: ''} 或者[{id: '', name: ''}]
  const [...] = useState(...)

  // 4. derived values / memo

  // 5. internal helpers
  const initXX = () => {}
  const loadXX = () => {}
  const queryXX = () => {}
  const updateXX = () => {}
  const saveXX = () => {}
  const getXX = () => {}

  // 6. effects
  useEffect(() => {}, [])

  // 7. expose / imperative handle
  useImperativeHandle(...)

  // 8. event handlers
  const handleChange = () => {}

  // 9. render helpers
  const renderArrow = () => {}

  // 10. return
  return <Page>
    <Main className={DOMUtil.classNames('', '')} onChange={handleChange}/>
  </Page>
})

export default Example
```

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

### 方法入参与回调参数（types 内）

**仅约束 src/components 和 src/utils 里的方法出参与入参**（如 `xxRender`、`loadData`、`formatXxx`、`onLoad`、`onChange` 等），**不改**组件 Props 接口名本身（如 `ButtonProps`）。

#### 出参(值、结果等出参)

这类参数常用于`onLoad`、`onChange`、`onSuccess`、`onError`、`onCancel`，等事件类回调参数

- 类型名(保留形参)：`XxxItem`、`XxxResult`等（如 `TransferItem`、`ListItem`、`SelectorItem`）
- 形参名：`value`、`item`、`xxItem`、`result`、`xxResult`

#### 入参

- 类型名：`XxxParams`（如 `GetLocationParams`、`AttachChooseParams`）
- 形参名：`params`、`xxParams`（如 `iconParams`、`layerParams`）

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

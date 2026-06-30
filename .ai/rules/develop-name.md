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

### 回调函数参数（types 内）

**仅约束类型定义里的回调签名**（如 `xxRender`、`loadData`、`formatXxx`、`onLoad` 等），**不改**组件 Props 接口名本身（如 `ButtonProps`）。

- **单参数回调**：形参命名为 `options` 或 `xxOptions`
- **多参数回调**：首参保留业务语义（如 `value`、`item`、`payload`）；表示上下文/配置的后续形参命名为 `options` 或 `xxOptions`（如 `loadOptions`、`renderOptions`）
- **禁止**使用 `ctx`、`props`、`params`、`payload`、`helpers`、`config`、`meta` 等作为上述上下文/配置形参名（单参数回调时 `payload` 等亦应改为 `options`）

```ts
// ✅ 单参数回调
uploadRender?: (options: { uploadingType: string }) => ReactNode
onLoad?: (options: { result: ListAsyncLoadResult | null; action: string }) => void

// ✅ 多参数：首参为业务数据，第二参上下文用 options
onChange?: (value: string, options?: { action: string }) => void
loadData?: (tabs: CascaderItem[], options: { list: CascaderItem[] }) => Promise<LoadDataResult>
formatPayload?: (payload: Record<string, unknown>, options: { platform: string }) => unknown
onSearch?: (keyword: string, options: { list: CascaderItem[] }) => void

// ❌
uploadRender?: (ctx: { uploadingType: string }) => ReactNode
headerRender?: (props: { open: boolean }) => ReactNode
onChange?: (value: string, meta?: { action: string }) => void
onLoad?: (params: { result: unknown }) => void
```

**例外（保持原命名）**：

- 组件 Props / Ref **类型名**及 Props 上的普通字段（非回调形参）
- 多参数格式化回调的**首参**为业务实体时保留语义名（如 `payload`、`headers`、`response`）
- **第三方 API 类型**：对方 SDK / 库怎么定义形参名，我们就怎么声明、怎么透传，**不要**按本规则改名（如 Leaflet `extend(props)`、微信 JSSDK 回调签名等）
- Canvas 绘图上下文 `ctx`（`CanvasRenderingContext2D`，非业务回调上下文）
- Bridge 等工具**方法**入参（如 `Bridge.load(params?)`），区别于方法配置对象内的**回调**属性

## render helpers 规则

- 统一用`render`开头, 示例: `renderArrow`, `renderHeader`, `renderFooter`, `renderContent`, `renderEmpty`, `renderLoading`
- 返回 TSX

## return 规则

JSX 内变量名延续以上规范。

### Props 事件命名：`on` + 大写首字母的事件语义，即 `onXxx` 形式；若中间含名词，名词放在 `on` 之后、事件语义之前。

- 示例：`onChange`、`onVisibleChange`、`onButtonClick`、`onSearch`、`onSelect`

### className 类名

`项目前缀(可以防冲突)-功能名`, 多个样式, 使用`DOMUtil.classNames`包裹

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

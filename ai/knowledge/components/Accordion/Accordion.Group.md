# Accordion.Group

多面板手风琴容器：包裹多个 `Accordion` 子项，通过 `cloneElement` 注入 `open`、`onOpen`、`onClose`，保证**同一时间最多展开一项**。挂载在默认导出上：`Accordion.Group`（见 `src/components/Accordion/index.js`）。

更完整的选用规则、示例与反例见同目录 [`Accordion.Group-patterns.md`](./Accordion.Group-patterns.md)。强制使用要求见 [`Accordion.Group-rules.md`](./Accordion.Group-rules.md)。

## 何时使用

- 页面有多段可折叠内容，且需要互斥展开（展开一项时自动收起其它项）
- 需要统一受控「当前展开第几项」（`value` + `onChange`）

## Usage

受控：外部维护当前展开索引。

```tsx
import { Accordion } from 'lyrixi-mobile'

const [active, setActive] = useState<number | null>(null)

<Accordion.Group value={active} onChange={setActive}>
  <Accordion title="第一项">内容 A</Accordion>
  <Accordion title="第二项">内容 B</Accordion>
</Accordion.Group>
```

非受控：不传 `value`/`onChange`，由 Group 内部 `activeIndex` 管理（子项点击仍会切换展开项）。

```tsx
<Accordion.Group>
  <Accordion title="第一项">…</Accordion>
  <Accordion title="第二项">…</Accordion>
</Accordion.Group>
```

通过 ref 打开指定项或全部收起：

```tsx
const groupRef = useRef(null)

<Accordion.Group ref={groupRef} value={active} onChange={setActive}>
  …
</Accordion.Group>

// groupRef.current?.openIndex(1)
// groupRef.current?.close()
```

## API 摘要

属性与 ref 见同目录 [`Accordion.Group-props.json`](./Accordion.Group-props.json)。子项 `Accordion` 的 props 见 [`Accordion-props.json`](./Accordion-props.json)。

与单独使用 `Accordion` 的关系：Group 通过 `cloneElement` 为每个子项设置 `open`、`onOpen`、`onClose`，展开第 `index` 项时 `onChange(index)`，收起时 `onChange(null)`；子项一般不再手写这三项。

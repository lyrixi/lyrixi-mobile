## 选择规则（何时用）

- 页面有多段可折叠内容，且需要**互斥展开**（展开一项时收起其它项）。
- 需要统一受控「当前展开第几项」（`value` + `onChange`），或由 Group 内部非受控管理 `activeIndex`。
- 与 `src/components/Accordion/AccordionGroup.jsx` 行为一致：`cloneElement` 向子 `Accordion` 注入 `open`、`onOpen`、`onClose`。

## 示例

受控互斥（`value` 与 `onChange` 成对使用，子 `Accordion` 通常不写 `open`/`onOpen`/`onClose`）：

```tsx
import { Accordion } from 'lyrixi-mobile'

const [active, setActive] = useState<number | null>(null)

<Accordion.Group value={active} onChange={setActive}>
  <Accordion title="第一项">内容 A</Accordion>
  <Accordion title="第二项">内容 B</Accordion>
</Accordion.Group>
```

非受控互斥（不传 `value`/`onChange`，由 Group 内部切换当前展开项）：

```tsx
<Accordion.Group>
  <Accordion title="第一项">…</Accordion>
</Accordion.Group>
```

通过 ref 展开指定项或全部收起：

```tsx
const groupRef = useRef(null)

<Accordion.Group ref={groupRef} value={active} onChange={setActive}>
  …
</Accordion.Group>

groupRef.current?.openIndex(2)
groupRef.current?.close()
```

## 正确用法

- 受控时 `value` 与 `onChange` 一起用，在 `onChange` 里更新保存当前索引的状态。
- 依赖 Group 注入时，子项不必再手写 `open`、`onOpen`、`onClose`。
- 需要程序化切换展开项时，使用 Group ref 的 `openIndex` / `close`（见上节）。

## 错误用法

- 在 Group 内又给子 `Accordion` 传与 Group 冲突的 `open`（Group 已注入 `open`；除非刻意覆盖，否则易与父级状态不一致）。

```tsx
<Accordion.Group value={i} onChange={setI}>
  <Accordion open={manual} title="A">
    …
  </Accordion>
</Accordion.Group>
```

- 受控只传 `value` 不传 `onChange`：与 `AccordionGroup` 内「受控同步」逻辑不匹配，无法正常驱动展开状态更新。

```tsx
<Accordion.Group value={0}>…</Accordion.Group>
```

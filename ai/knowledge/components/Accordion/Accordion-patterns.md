## 选择规则（何时用）

- 需要节省纵向空间、把一段内容收成可展开区域。
- 需要标题行 + 箭头点击展开，或只要底部「展开/收起」条（可无顶部标题）。
- 折叠后仍要露出部分内容时，用 `minHeight`。
- 多个面板同时只能展开一个时，不要用多个独立 `Accordion` 各自维护状态，应使用 [`Accordion.Group.md`](./Accordion.Group.md) 中的 `Accordion.Group`。

## 示例

标题 + 受控展开：

```tsx
import { Accordion } from 'lyrixi-mobile'

<Accordion
  title="标题"
  open={expanded}
  onOpen={() => setExpanded(true)}
  onClose={() => setExpanded(false)}
>
  内容
</Accordion>
```

仅底部省略条、无 `title`（无默认头部），并限制折叠时可见高度：

```tsx
<Accordion ellipsis={{ expandText: '展开', collapseText: '收起' }} minHeight={60}>
  <div>主体内容</div>
</Accordion>
```

自定义头部（`headerRender` 与 `title` 二选一）：

```tsx
<Accordion
  headerRender={({ open, onClick }) => (
    <div onClick={onClick}>{open ? '收起' : '展开'}自定义头</div>
  )}
>
  内容
</Accordion>
```

## 正确用法

- 用 `title` 显示默认头部，或用 `headerRender({ open, onClick })` 完全自定义头部点击区域。
- 需要底部「展开/收起」时：使用 `ellipsis={{ expandText, collapseText }}`（两个字段都要）或 `ellipsisRender({ open, onClick })`。
- 受控展开：父组件维护 `open`，在 `onOpen`/`onClose` 里更新状态；嵌入 `Accordion.Group` 时由 Group 注入 `open`/`onOpen`/`onClose`（见 `Accordion.Group-patterns.md`）。
- 折叠时仍露出部分内容：设置 `minHeight`（传给内部过渡容器）。

## 错误用法

- 用普通 `div` + 手写高度动画模拟本组件职责内的折叠行为（应使用 `Accordion` 或配合 `Accordion.Group`）。
- 只传 `ellipsis.expandText` 不传 `collapseText`（或反之）却期望出现默认省略条（组件要求两者齐全才渲染）。
- 同时需要默认头部却既不传 `title` 也不传 `headerRender`（此时无头部，仅主体 + 可选省略区）。

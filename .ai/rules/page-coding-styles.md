---
description: 页面样式目录与 class 命名规范
globs: 'src/pages/**/*.{tsx,jsx,less},src/examples/**/*.{tsx,jsx,less}'
alwaysApply: false
---

# 页面样式规范

适用范围：`src/pages/`、`src/examples/`。页面目录见 [`page-structure.md`](./page-structure.md)。

与 [`component-coding-styles.md`](./component-coding-styles.md) **规则相同**，仅类名前缀不同。

## 目录规范

- Less 与组件 tsx **同目录**
- 文件名与组件名一致：`<ComponentName>.less`（如 `OrderList.less`、`Header.less`、`Main.less`）

## 命名规范

- 类名前缀：`{页面名}-`（页面目录 PascalCase → kebab-case，如 `OrderList` → `order-list-`）
- 类名与组件名一致：`order-list-main`、`order-list-header`
- 子元素在组件名后追加语义段：`order-list-divider`、`order-list-item`
- 多个类名用 `DOMUtil.classNames(...)` 合并，对外 `className` prop 放最后

```tsx
import './OrderList.less'

<ListAsync className="order-list-main" />
```

```tsx
className={DOMUtil.classNames('order-list-header', active ? 'order-list-header-active' : '', className)}
```

```less
.order-list-main {
  .order-list-divider { ... }
  .order-list-item { ... }
}
```

---
description: 组件样式目录与 class 命名规范
globs: 'src/components/**/*.{tsx,less}'
alwaysApply: false
---

# 组件样式规范

适用范围：`src/components/`。组件目录见 [`component-structure.md`](./component-structure.md)。

## 目录规范

- Less 与组件 tsx **同目录**
- 文件名与组件名一致：`<ComponentName>.less`（如 `Button.less`、`InputText.less`、`AccordionGroup.less`）

## 命名规范

- 类名前缀：`lyrixi-`
- 类名与组件名一致：PascalCase → kebab-case（`Button` → `lyrixi-button`，`InputText` → `lyrixi-input-text`）
- 子元素在组件名后追加语义段：`lyrixi-{组件kebab}-{元素kebab}`（如 `lyrixi-button-icon`）
- 多个类名用 `DOMUtil.classNames(...)` 合并，对外 `className` prop 放最后

```tsx
className={DOMUtil.classNames('lyrixi-button', disabled ? 'lyrixi-button-disabled' : '', className)}
```

```less
.lyrixi-button {
  &-icon { ... }
  &.lyrixi-button-disabled { ... }
}
```

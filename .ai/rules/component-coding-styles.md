---
description: 组件样式目录与 class 命名规范
globs: 'src/components/**/*.{tsx,less}'
alwaysApply: false
---

# 组件样式规范

适用范围：**库内实现**，即 `src/components/`、`src/utils/` 下的组件与工具代码。

**不适用于** `**/demos/**`、`src/examples/**`、`src/pages/**`、`src/entry/**` —— 这些属于业务/演示侧，样式见 [`page-coding-styles.md`](./page-coding-styles.md)。包目录见 [`component-structure.md`](./component-structure.md)。

## 目录规范

- Less 与组件 tsx **同目录**
- 文件名与组件名一致：`<ComponentName>.less`（如 `Button.less`、`InputText.less`、`AccordionGroup.less`）

## 命名规范

- 类名前缀：`lyrixi-`
- 类名与**组件对外挂载名**一致：PascalCase **转全小写**，不在组件名内部插入 `-`
  - `Button` → `lyrixi-button`
  - `NavBar` → `lyrixi-navbar`（不是 `lyrixi-nav-bar`）
  - `FooterBar` → `lyrixi-footerbar`、`DatePicker` → `lyrixi-datepicker`
- **子组件**（`Parent.Sub`）：`lyrixi-{parent}-{sub}`，`Parent`、`Sub` 均转全小写（如 `Input.Text` → `lyrixi-input-text`，`NavBar.Button` → `lyrixi-navbar-button`）
- 子元素在组件名后追加语义段：`lyrixi-{组件前缀}-{元素}`（如 `lyrixi-button-icon`、`lyrixi-navbar-title`）
- 多个类名用 `DOMUtil.classNames(...)` 合并，对外 `className` prop 放最后

```tsx
className={DOMUtil.classNames('lyrixi-button', disabled ? 'lyrixi-button-disabled' : '', className)}
```

```less
.lyrixi-button {
  &-icon {
    ...;
  }
  &.lyrixi-button-disabled {
    ...;
  }
}
```

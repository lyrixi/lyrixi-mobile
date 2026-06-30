---
description: 组件样式命名、DOMUtil.classNames 与 Less 目录规范
globs: 'src/components/**/*.{tsx,less}'
alwaysApply: false
---

# 组件样式规范

适用范围：`src/components/<PackageName>/` 下的 Less 与 TSX 中的 `className` 写法。组件目录结构见 [`component-structure.md`](./component-structure.md)；变量名、handler 等见 [`global-coding-name.md`](./global-coding-name.md)。

## 总则

| 项         | 规则                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------- |
| 类名前缀   | 统一 `lyrixi-`，全小写、连字符分隔（kebab-case）                                             |
| 设计 token | Less 变量 `@lyrixi-*`；运行时 CSS 变量 `var(--lyrixi-*)`，定义于 `src/assets/variables.less` |
| 合并类名   | 一律用 `DOMUtil.classNames(...)`，禁止手写字符串拼接                                         |
| 对外扩展   | 根节点保留 `className` prop，并作为 `DOMUtil.classNames` **最后一个**参数传入                |

---

## 类名命名

### 根块（Block）

组件根节点类名 = `lyrixi-` + 包名 kebab：

| 组件                  | 根类名                                               |
| --------------------- | ---------------------------------------------------- |
| Button                | `lyrixi-button`                                      |
| Card                  | `lyrixi-card`                                        |
| DatePicker.RangeCombo | `lyrixi-datepicker-rangecombo`                       |
| Input.Text            | `lyrixi-input-text`（容器层可能还有 `lyrixi-input`） |

规则：

1. PascalCase 包名 / 子模块名 → 全小写连写：`DatePicker` → `datepicker`，`RangeCombo` → `rangecombo`。
2. 子组件对外挂载名与目录一致时，类名与 Less 文件名语义对齐（如 `InputText.less` ↔ `lyrixi-input-text`）。

### 元素（Element）

在根块下追加语义段，用连字符连接：

```
lyrixi-{block}-{element}
```

示例：

- `lyrixi-noticebar-icon`、`lyrixi-noticebar-content`、`lyrixi-noticebar-title`
- `lyrixi-chat-item-avatar`、`lyrixi-input-node`、`lyrixi-input-placeholder`

Less 中优先嵌套在根块选择器内：

```less
.lyrixi-noticebar {
  &-icon {
    ...;
  }
  &-content {
    ...;
  }
  &-title {
    ...;
  }
}
```

### 修饰（Modifier）

两类写法，按场景选用：

| 类型           | 形式                                                               | 示例                                                                          |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 组件内语义修饰 | `lyrixi-{block}-{modifier}`                                        | `lyrixi-noticebar-info`、`lyrixi-noticebar-warning`                           |
| 跨组件通用状态 | `lyrixi-{modifier}`                                                | `lyrixi-active`、`lyrixi-disabled`、`lyrixi-animated`、`lyrixi-has-formatter` |
| 尺寸           | `lyrixi-size-{xs\|s\|m\|l\|xl\|xxl}` 或 props 映射 `lyrixi-{size}` | `lyrixi-size-xs`、`lyrixi-xs`                                                 |
| 布局/方向      | 与 Flex 等 props 对应                                              | `lyrixi-flex-wrap-scroll`                                                     |

Less 中修饰符用 `&.` 挂在块或元素上：

```less
.lyrixi-button {
  &.lyrixi-disabled {
    opacity: 0.5;
  }
  &.lyrixi-size-xs {
    ...;
  }
}

.lyrixi-noticebar {
  &.lyrixi-noticebar-info {
    ...;
  }
  &.lyrixi-noticebar-warning {
    ...;
  }
}
```

### 禁止

- ❌ 无 `lyrixi-` 前缀的业务类名（组件库内）
- ❌ camelCase / PascalCase 类名（如 `lyrixi-NoticeBar`）
- ❌ 用 `_` 或 BEM `__` / `--` 分隔（本项目统一连字符）
- ❌ 在组件根节点硬编码覆盖全局工具类语义（布局优先用 props 或全局 `lyrixi-flex` 等）

---

## DOMUtil.classNames 常用写法

实现位于 `src/utils/DOMUtil/classNames.ts`：支持字符串、对象（truthy key 生效）、数组；自动忽略 `null` / `undefined` / 空字符串。

### 1. 根节点：基础类 + 外部 className

最常见模式，**`className` 放最后**以便业务覆盖：

```tsx
className={DOMUtil.classNames('lyrixi-card', className)}
```

TypeScript 严格场景可写（与仓库现有写法一致）：

```tsx
className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-card', className)}
```

### 2. 条件修饰：三元 + 空字符串

布尔 / 枚举 props 驱动修饰类：

```tsx
className={DOMUtil.classNames(
  'lyrixi-input',
  size ? `lyrixi-${size}` : '',
  disabled ? 'lyrixi-input-disabled' : '',
  readOnly ? 'lyrixi-input-readOnly' : '',
  className
)}
```

```tsx
className={DOMUtil.classNames(
  'lyrixi-skeleton-block',
  animated ? 'lyrixi-animated' : '',
  className
)}
```

### 3. 枚举 / 类型映射

```tsx
className={DOMUtil.classNames(
  'lyrixi-noticebar',
  type && `lyrixi-noticebar-${type}`,
  className
)}
```

### 4. 对象形式（多条件修饰）

适合同一节点上多个独立开关：

```tsx
className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-flex', {
  'lyrixi-flex-wrap-scroll': wrap === 'scroll'
})}
```

### 5. 子节点 / 固定结构

内部 DOM 无 `className` prop 时可直接写字符串；需要条件时仍用 `DOMUtil.classNames`：

```tsx
<div className="lyrixi-noticebar-content">...</div>

<div
  className={DOMUtil.classNames('lyrixi-input-text', cursor ? 'lyrixi-input-focus' : '')}
>...</div>
```

### 6. 派生类名 helper

复杂组合可抽 `getClassName`（见 `Flex`），return 中再与 `className` 合并：

```tsx
const rootClassName = getClassName({ wrap })
// ...
className={DOMUtil.classNames(rootClassName, className)}
```

### 7. 可选：关闭默认样式

部分组件支持 `noStyle` 等 prop，基础类用空字符串占位：

```tsx
className={DOMUtil.classNames(noStyle ? '' : 'lyrixi-amount', className)}
```

---

## Less 目录与文件规则

与 [`component-structure.md`](./component-structure.md) 形态对应：

| 形态                   | 样式落点                                                      |
| ---------------------- | ------------------------------------------------------------- |
| A 纯子组件（Input）    | 包级 `Input.less` 聚合；子模块 `Text/InputText.less`          |
| B 父 + 子（Accordion） | 包级 `Accordion.less` + `AccordionGroup.less` 或子目录内 less |
| C 单一（Amount）       | 与入口同级 `Amount.less`                                      |

### 文件命名

- 包级聚合：`<PackageName>.less`（如 `Button.less`、`DatePicker.less`）
- 子模块：`<Parent><Sub>.less`（如 `InputText.less`、`AccordionGroup.less`）或 `<SubDir>/<Feature>.less`

### 聚合与引入

1. **包级 less** 用 `@import` 汇总子模块（相对路径、不带 `.less` 扩展名可选，与现有文件保持一致）：

```less
@import 'Text/InputText.less';
@import 'Node/InputNode.less';
```

2. **实现 tsx** 中一般**不**单独 `import './Xxx.less'`（样式由 `src/assets/index.less` 统一打包）；维护库时改 less 后确保已在 assets 中注册。

3. **全局注册**：新组件包级 less 须加入 `src/assets/index.less` 的组件 `@import` 列表（按字母序，Modal 相关顺序见仓库约定）。

### Less 书写习惯

- 颜色、间距、字号优先 `var(--lyrixi-*)`，Less 编译期可用 `@lyrixi-*`
- 可复用布局/边框/文字工具：在 less 内调用 mixin 形式（见 `src/assets/global/`）：

```less
.lyrixi-map-nearby-control-header {
  .lyrixi-flex();
  .lyrixi-flex-align-center();
  .lyrixi-border-b();
}
```

- 组件 **tsx 里** 需要快速布局时，可直接用全局工具类（`lyrixi-flex`、`lyrixi-border-b` 等，定义于 `src/assets/global/`），与组件私有类名组合。

---

## 完整示例

**NoticeBar.tsx（根节点 className）**

```tsx
className={DOMUtil.classNames(
  'lyrixi-noticebar',
  type && `lyrixi-noticebar-${type}`,
  className
)}
```

**NoticeBar.less（块 + 元素 + 修饰）**

```less
.lyrixi-noticebar {
  display: flex;

  &-icon {
    flex-shrink: 0;
  }
  &-content {
    flex: 1;
    min-width: 0;
  }
  &-title {
    font-size: var(--lyrixi-font-size-m);
  }

  &.lyrixi-noticebar-info {
    background: var(--lyrixi-color-info-lighten);
  }
  &.lyrixi-noticebar-warning {
    background: var(--lyrixi-color-warning-lighten);
  }
}
```

---

## 与其它规则的分工

| 文件                                                 | 职责                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| **本文件**                                           | 组件 class 命名、`DOMUtil.classNames`、Less 文件位置与聚合 |
| [`component-structure.md`](./component-structure.md) | 组件目录树、tsx 文件放哪                                   |
| [`global-coding-name.md`](./global-coding-name.md)   | 变量、handler、ref 等 TS 命名                              |
| [`page-coding-styles.md`](./page-coding-styles.md)   | 业务页面样式（`src/pages` / `src/examples`）               |

---
description: TS 实现层类型写法（any、React 事件、通用 Props/Ref、forwardRef）
globs: '**/*.{ts,tsx}'
alwaysApply: false
---

# TypeScript 类型写法

## 禁 any

- ❌ `: any` / `as any` / `<any>`
- ✅ 未知对象 → `Record<string, unknown>`；未知值 → `unknown` 再收窄
- ✅ wx / dd / L / BMap 等见 `src/global-augmentations.d.ts`，用 `window.X`，勿 `as any`

## React 事件

裸 `MouseEvent` 解析为**全局 DOM** 版，与 React 传入的 `MouseEvent<Element>` 不兼容（TS2322/TS2352）。

- `import type { MouseEvent, TouchEvent, KeyboardEvent, FocusEvent, UIEvent, … } from 'react'`
- **必带元素泛型**：`MouseEvent<HTMLDivElement>`、`KeyboardEvent<HTMLInputElement>` 等
- 需要原生 DOM 事件 → `globalThis.MouseEvent`

## 通用 Props 字段

- `style?: CSSProperties` · `className?: string` · `children?: ReactNode`
- 可选属性勿再加 `| undefined`

## forwardRef

```tsx
const Foo = forwardRef<FooRef, FooProps>((props, ref) => { … })
```

必须显式 `<Ref, Props>` 双泛型。

## Ref 形状

有根 DOM 的组件，Ref 至少：

```ts
interface XxxRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
```

Ref / 方法命名、受控值 `{ id, name }`、`onChange` 见 [`global-coding-name.md`](./global-coding-name.md)。

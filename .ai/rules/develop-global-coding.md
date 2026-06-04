---
description: 全局 TS/TSX 编码习惯（严格相等、可选回调调用、与 ESLint 一致）
globs: '**/*.{ts,tsx,js,jsx}'
alwaysApply: false
---

# 全局编码习惯

## 严格相等（eqeqeq）

禁止 `==` / `!=`，一律用 `===` / `!==`。

## 可选回调调用（no-unused-expressions）

禁止用短路表达式单独调用可选函数，ESLint 会报 `Expected an assignment or function call and instead saw an expression`。

```tsx
// ❌
onChange && onChange(newValue)
onClose && onClose(e)

// ✅
onChange?.(newValue)
onClose?.(e)
```

- 同一标识符：`fn && fn(...)` → `fn?.(...)`。
- ref 上的回调：`ref.current && ref.current(...)` → `ref.current?.(...)`。
- 条件与 callee 不同（如 `config?.cacheKey && setCache(...)`）→ 用 `if`。
- 仅副作用、且要先判断别的变量时 → 用 `if`，不要用 `a && b()` 当语句。

## 可选值「有没有」

- 判断 **要不要展示**（可选 prop、`ReactNode` 等）：用真值即可 — `title`、`!!content`、`value ? … : null`。
- 只有必须区分 `0` / `false` / `''` 仍算「有值」时，才写 `!== null` 等显式判断（少见）。

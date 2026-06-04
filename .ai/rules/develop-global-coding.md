---
description: 全局 TS/TSX 编码习惯（严格相等、与 ESLint eqeqeq 一致）
globs: '**/*.{ts,tsx,js,jsx}'
alwaysApply: false
---

# 全局编码习惯

## 严格相等（eqeqeq）

禁止 `==` / `!=`，一律用 `===` / `!==`。

## 可选值「有没有」

- 判断 **要不要展示**（可选 prop、`ReactNode` 等）：用真值即可 — `title`、`!!content`、`value ? … : null`。
- 只有必须区分 `0` / `false` / `''` 仍算「有值」时，才写 `!== null` 等显式判断（少见）。

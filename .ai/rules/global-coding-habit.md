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

## 注释与用途说明

业务页面须让阅读者（含 AI）能快速理解**每个页面、方法、变量的用途**。命名能自解释的仍建议保留简短注释，避免只堆代码无说明。

### 页面 / 模块

| 位置                         | 要求                                                                        |
| ---------------------------- | --------------------------------------------------------------------------- |
| `index.tsx` 入口             | 文件或页面组件上方说明页面职责（如「订单列表：筛选 + 分页 + 跳转详情」）    |
| `Header` / `Main` / `Footer` | 组件上方说明渲染区域与对外暴露能力（如「筛选区，暴露 onSearch」）           |
| `api/`                       | 每个请求/转换函数说明数据来源、调用时机、与 `serverXxx` / `localXxx` 的关系 |
| `utils/`                     | 每个工具函数说明解决什么页面级问题                                          |

### 变量

- **state / ref**：上一行 `//` 说明存什么、驱动什么 UI 或逻辑（如 `// 列表筛选条件，变更后 Main 重新 query`）。
- **派生值、临时变量**：名称不足以表达业务含义时必须注释（如 `// 提交前去掉空筛选项`）。
- **常量、枚举式对象**：说明业务含义或取值约定。

### 方法

- 每个函数（含 `loadData`、`handleSave`、`formatPayload`、`serverData` 等）在定义上方用 **`//` 一行**或 **`/** JSDoc \*/`** 说明：**做什么、何时调用、返回值用途\*\*。
- 事件处理 `handleXxx` 与 props 回调 `onXxx` 对应时，注释可写明触发场景（如 `// 头部点击查询，合并筛选项并刷新列表`）。

### 复杂入参

下列情况须对**入参**单独说明（函数上方 JSDoc `@param`，或在 `types.ts` 里为参数对象字段写注释）：

- 参数个数 **> 3**，或含多个可选字段的对象
- 参数为 **回调**（说明何时调用、回调参数含义）
- 参数为 **联合类型 / 字符串字面量**（说明各取值业务含义）
- **api** 层 `queryXxx` / `saveXxx` 的 `payload`、`options` 等

简单入参（1 ～ 2 个且含义 obvious）可只在函数注释里概括，不必逐参数 `@param`。

```tsx
/** 将 Main 勾选行转为批量删除接口 payload */
function serverDeletePayload(rows: OrderRow[]): { ids: string[] } {
  return { ids: rows.map((row) => row.id) }
}

/**
 * 加载列表数据
 * @param queryParams 筛选 + 分页；变更 Header 筛选或 Main 翻页时传入
 * @param options.action 区分首屏 load / 下拉 refresh / 翻页 append
 */
async function loadData(
  queryParams: QueryParams,
  options?: { action?: 'load' | 'refresh' | 'append' }
) {
  // ...
}
```

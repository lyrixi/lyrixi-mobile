# Storage Rules

> 源文档：`src/utils/Storage/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `Storage`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/Storage/index.zh-CN.md` 说明与 demos。

## Demo 索引（本目录 `demos/`）
- `demos/Storage.tsx`
- `demos/useCacheState.tsx`
- `demos/localStorage.tsx`
- `demos/sessionStorage.tsx`
- `demos/Storage.demos.types.ts`

## 查阅顺序
- API：`Storage-props.json`
- 示例：`Storage-example.md`
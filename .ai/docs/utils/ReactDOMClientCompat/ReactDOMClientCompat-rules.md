# ReactDOMClientCompat Rules

> 源文档：`src/utils/ReactDOMClientCompat/index.ts`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `ReactDOMClientCompat`，**禁止**自造同类工具函数。

## 何时使用
- 需要兼容 React 17/18 创建 root 节点时（如 `Message.open` 内部挂载）
- 需要在多版本 React 环境下使用渲染 API

## API 索引（节选）
- `ReactDOMClientCompat.createRoot`

## 查阅顺序
- API：`ReactDOMClientCompat-props.ts`
- 示例：`ReactDOMClientCompat-example.md`
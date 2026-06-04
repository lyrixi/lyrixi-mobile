# ToolBar Rules

> 源文档：`src/components/ToolBar/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `ToolBar`，**禁止**自造同类 UI。
- 子组件写法：`ToolBar.Sub`（与库导出一致）。

## 何时使用
- 需要显示工具栏时
- 需要显示操作按钮时
- 需要显示筛选、搜索等功能时

## 子组件
- `ToolBar.Dropdown`
- `ToolBar.DateRange`
- `ToolBar.Filter`

## Demo 索引（本目录 `demos/`）
- `demos/ToolBar.tsx`
- `demos/ToolBarDropdown.tsx`
- `demos/ToolBarButton.tsx`
- `demos/ToolBarSearch.tsx`
- `demos/ToolBarSearchActive.tsx`
- `demos/ToolBarDateRange.tsx`
- `demos/ToolBarList.tsx`
- `demos/ToolBarActionSheet.tsx`
- `demos/ToolBarFilter.tsx`

## 查阅顺序
- Props：`ToolBar-props.ts`
- 示例：`ToolBar-example.md`
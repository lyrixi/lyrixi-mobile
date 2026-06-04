# List IndexBar Rules

> 模板 ID：`list-indexbar` · 源码：`demos/IndexBar/`

## 何时使用

- 列表需右侧字母索引（IndexBar）
- 数据项含 `anchor` 字段用于分组

## 目录结构

- 复用 Common `Header`
- 自有 `Main/`（onLoad 收集 anchors）
- 页面级 `IndexBar` 组件绑定 Main scroller

## create-page 替换点

| 字段 | 位置 |
|------|------|
| `anchorField` | `Main/onLoad` 中读取的列表字段 |
| `api.queryData` | 同 Common 列表查询 |

# 工具 AI 文档

与 `src/utils/` 导出工具一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| `{Name}-props.json` | API / 方法（由 `index.zh-CN.md`、源码与 demos 生成） |
| `{Name}-rules.md` | 何时使用、必须使用库工具、demo 索引 |
| `{Name}-example.md` | 示例索引与代码摘录 |
| `demos/` | 与 `src/utils/{Name}/demos` 同步的示例源码 |

**更新：** 修改工具文档或 demo 后执行：

```bash
npm run build:ai-docs
```

索引：[`../mapping.json`](../mapping.json)

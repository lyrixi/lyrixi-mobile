# 模板复制与 API 改写

模板根目录：`.ai/docs/pages/{templatePath}/`  
文档三件套：`.ai/docs/pages/{Category}/{Variant}-props.ts`、`-rules.md`、`-example.md`  
生成目标：`page-spec.output.outputPath`（相对仓库根；命名习惯见 [develop-page-structure.md](../../../rules/develop-page-structure.md)）

生成时以 **props.ts 中的可替换项** 为准，将 page-spec.json / 问答结果写入模板对应文件（见各 `-rules.md` 替换点表）。

## 目录映射

| 模板 | 典型结构 | 生成时 |
|------|----------|--------|
| List/* | `index.tsx`, `Header/`, `Main/`, `Footer/`, `api/queryData/` | 保留；`queryData` 接真实 URL |
| Edit/* | `index.tsx`, `Footer/`, `api/queryData|saveData|validateData/` | 按用户接口增删 `saveData` |
| Detail/* | `index.tsx`, `Footer/`, `api/queryData/` | 只读展示，无 save |
| Report/* | `index.tsx`, `Header/`, `Content/`, `api/query*` | 多接口时保留多个 query 方法 |

入口组件名 = 目录末级名（`OrderList` 目录 → `const OrderList = () => …`）。

## API 改写

以模板中的 `api/queryData/index.ts`（或同类）为蓝本：

1. **url** — 替换为 `page-spec.json` 的 `apiUrl`。
2. **method** — `GET` / `POST`，与 `Request.get` / `Request.post` 一致。
3. **入参** — 根据 `apiRequest`：
   - URL 参数：`Device.getUrlParameter('id')`
   - 查询 state：`queryParams.xxx` → 经 `toServerParams` / `serverData` 转出（模板有则沿用文件名）
4. **出参** — 根据 `api.*.response`（`ApiResponseMapping`，缺省见 `DEFAULT_API_RESPONSE_MAPPING`）映射到统一形态：
   - `success` → 成功时 `result.status = 'success'`（或模板约定的 loading/empty 等）
   - `error` → 失败时 `result.status = 'error'`
   - `data` → 业务数据；列表用 `localData` / `toData` 转前端字段
   - `message` → 错误文案，写入 `result.message`

命名约定（rules）：查询 `queryXxx`，提交 `saveXxx`；`serverData` / `localData` 用于前后端结构转换。

## Mock 与视图字段

Q7 决定页面字段如何生成（写入 `page-spec.json` 的 `mockData`）；**须在 Q8 出参映射之前完成**，以便对照 mock 结构配置 `success` / `data` / `message`：

| `mockData.source` | 生成策略 |
|-------------------|----------|
| `user` | 从 `mockData.sample`（业务 `data`）解析 key，生成 `displayFields` / `formFields` / `listItem`；字符串 → `Text` 展示或 `Input.Text`；数组/对象按模板惯例选用 `Select`/`Text.getDisplayValue` 等 |
| `inferred` | 优先用 `designNotes` 中提到的字段；否则按页面类型给**合理推测字段**（Detail：若干 `Form.Item` + 字段名占位；List：`titleField`/`descriptionField` 等常见名；Edit：与 Detail 类似但用输入控件）。**必须在产出说明标注「字段为推测」** |

- 有 mock 时：**禁止**无视 sample 自行编造与 sample 无关的字段名。
- 无 mock 时：推测字段宜少不宜多（3–5 个），便于联调后替换。
- `mockData.sample` **仅写入 page-spec**，不要作为运行时 mock 留在 `api/**`（生产页仍走真实接口）。

## 视图改写

- **有高保真图**：按图调整 `Header`/`Main`/`Footer` 组合与表单项 `name`/`label`；组件选用 `lyrixi-mobile` 与模板一致。
- **仅文字描述**：在模板骨架上增删 `Form.Item`、列表 `formatViewItem` 等，不推翻模板数据流。

未在 `page-spec` 的 `view` 中启用的区块（模板有但不需要的 Header/Footer）可删除引用。

## 导入

- 业务页使用 `import { … } from 'lyrixi-mobile'`（测试包名模式）。
- `import type` 放在第三方 import 之后、相对路径之前（见 `develop-sequence-import.md`）。

## 不要复制

- 模板里的 `/api/examples/*` 若仅为 demo，一律换成用户提供的 `apiUrl`。
- `mockResult`、纯演示用 `console.log` 不要带入新页。

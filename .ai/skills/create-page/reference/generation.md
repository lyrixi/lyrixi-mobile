# 模板复制与 API 改写

模板根目录：`.ai/docs/pages/{templatePath}/`  
生成目标：`src/pages/{PageName}/`（与 [develop-page-structure.md](../../../rules/develop-page-structure.md) 一致）

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
4. **出参** — 根据 `apiResponse` 映射到统一形态：
   - `result.status` — 成功码（如 `code === '1'`）
   - `result.message` — 错误文案字段
   - `result.data` — 业务数据；列表用 `localData` / `toData` 转前端字段

命名约定（rules）：查询 `queryXxx`，提交 `saveXxx`；`serverData` / `localData` 用于前后端结构转换。

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

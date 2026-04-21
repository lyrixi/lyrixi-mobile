# Skill：list-page-from-dsl（工作流说明）

**目的**：业务不手写长提示词，仅选择本 skill + 粘贴/编辑 **list-page DSL**（见 `ai/knowledge/dsl/templates/list-page.template.json`），生成与 `src/examples/List/demos/Common` **同结构**的代码。

## 输入

1. DSL JSON（以 `list-page.template.json` 为起点修改）。
2. 可选：目标目录、是否含 Footer、是否使用 `Page.Main` 包裹列表。

## 执行步骤（供自动化/Agent）

1. **校验 DSL**：按 `ai/knowledge/dsl/list-page.schema.md` 检查必填字段。  
2. **加载知识**：  
   - 结构：`ai/knowledge/examples/List-demos-Common/overview.md`  
   - 数据流：`data-flow.md`  
   - 组件/API 参考：`components-reference.md`
   - 组件知识：`ai/knowledge/components/Page/Page.md`、`ai/knowledge/components/ToolBar/ToolBar.md`、`ai/knowledge/components/ListPagination/ListPagination.md`、`ai/knowledge/components/Form/Form.md`、`ai/knowledge/components/Input/Input.md`、`ai/knowledge/components/FooterBar/FooterBar.md`
3. **映射组件**：`ai/knowledge/mappings/list-page-dsl-to-files.md`。  
4. **生成文件树**：`index.tsx`、`Header/`、`Main/`（含三 format）、按需 `Footer/`、`index.less`。  
5. **对齐库 API**：
   - `ListPagination.Main` 可直接使用 `import { ListPagination } from 'lyrixi-mobile'`
   - 当前列表请求链路以 `Request.post` 为准；若 DSL 声明了 `GET` 或真正的表单编码需求，先提示当前能力缺口，再决定是否生成降级实现
   - `Page.Main` 是否包裹列表区以 DSL 的 `layout.usePageMain` 或用户附加要求为准
6. **发现缺口先显式说明**：若 DSL 未覆盖接口差异、筛选字段复杂交互、Footer 业务动作等，先列出需补充的信息，再继续生成。

## 输出

- 与 Common 示例同目录结构的源码目录（如 `src/pages/{pageId}/` 或业务约定路径）。
- 可变部分仅来自 DSL：`url`、headers、format 三文件内容、Header 筛选项、是否生成 Footer、是否包 `Page.Main`。

## 与现有 Cursor 规则的关系

- 详细代码片段可参考 `ai/examples/list-page.mdc`（规则级示例）。  
- 本 workflow 侧重 **DSL 驱动**，`list-page.mdc` 侧重 **手写时的规范**。
- 用户提示词模板见：`ai/knowledge/skills/list-page-from-dsl.prompt.md`

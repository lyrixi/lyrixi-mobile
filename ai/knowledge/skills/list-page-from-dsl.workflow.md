# Skill：list-page-from-dsl（工作流说明）

**目的**：业务不手写长提示词，仅选择本 skill + 粘贴/编辑 **list-page DSL**（见 `ai/knowledge/dsl/templates/list-page.template.json`），生成与 `src/examples/List/demos/Common` **同结构**的代码。

## 输入

1. DSL JSON（以 `list-page.template.json` 为起点修改）。  
2. 可选：页面名、是否含 Footer、是否使用 `Page.Main` 包裹列表。

## 执行步骤（供自动化/Agent）

1. **校验 DSL**：按 `ai/knowledge/dsl/list-page.schema.md` 检查必填字段。  
2. **加载知识**：  
   - 结构：`ai/knowledge/examples/List-demos-Common/overview.md`  
   - 数据流：`data-flow.md`  
3. **映射组件**：`ai/knowledge/mappings/list-page-dsl-to-files.md`。  
4. **生成文件树**：`index.tsx`、`Header/`、`Main/`（含三 format）、按需 `Footer/`、`index.less`。  
5. **对齐库 API**：`ListPagination` 从包入口导入时注意为 `{ Main }` 子组件（以当前 `src/index.ts` 导出为准）。

## 输出

- 与 Common 示例同目录结构的源码目录（如 `src/pages/{pageId}/` 或业务约定路径）。  
- 可变部分仅来自 DSL：`url`、headers、format 三文件内容、Header 筛选项。

## 与现有 Cursor 规则的关系

- 详细代码片段可参考 `ai/examples/list-page.mdc`（规则级示例）。  
- 本 workflow 侧重 **DSL 驱动**，`list-page.mdc` 侧重 **手写时的规范**。

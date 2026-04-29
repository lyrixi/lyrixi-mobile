# AI 开发规范

## rules 规则

- **`usage.mdc`**：定义了`lyrixi-mobile`的使用方法
- **`develop.mdc`**：定义了业务开发的规范

## knowledge 知识库

- **`components`**：定义了组件的使用方法
- **`utils`**：定义了工具的使用方法
- **`examples`**：典型页面源码级说明（如 `examples/List-demos-Common` 列表模板）
- **`mappings`**：决定用什么组件、DSL 字段落哪个文件（如 `mappings/list-page-dsl-to-files.md`）
- **`skills`**：定义了执行流程（如 `skills/list-page-from-dsl.workflow.md`）
- **`dsl`**：描述意图与可变配置（`dsl/list-page.schema.md`、`dsl/templates/list-page.template.json`）

## 业务加载知识库

执行以下命令， 将把 rule 会生成到项目的.cursor 中

```
npx lyrixi-mobile:ai
```

## 业务使用知识库

```
选择 skill（list-page-from-dsl）
    ↓
输入 DSL（结构）
    ↓
skill 执行：
  - 校验 DSL
  - 根据 mappings 选组件
  - 加载 components 规则
  - 生成代码
    ↓
输出 React 代码
```

## 推荐用法（List 页面试水）

建议不要只说“参考 ai/knowledge 生成一个列表页”，而是明确要求 AI 按固定顺序读取知识，再基于 DSL 生成。

推荐提示词结构：

```text
请按 ai/knowledge/skills/list-page-from-dsl.workflow.md 执行。

先读取这些文件：
- ai/knowledge/dsl/list-page.schema.md
- ai/knowledge/dsl/templates/list-page.template.json
- ai/knowledge/examples/List-demos-Common/overview.md
- ai/knowledge/examples/List-demos-Common/data-flow.md
- ai/knowledge/examples/List-demos-Common/components-reference.md
- ai/knowledge/mappings/list-page-dsl-to-files.md

然后基于下面 DSL 生成代码，不要自行发明目录结构或组件：
<粘贴 DSL JSON>

附加要求：
- 目标路径：xxx
- 是否使用 Page.Main：是 / 否
- 是否生成 Footer：是 / 否
- 如果 DSL 未覆盖某个实现细节，先列出缺口再生成
```

也可直接参考：`ai/knowledge/skills/list-page-from-dsl.prompt.md`

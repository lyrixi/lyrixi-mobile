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
npx lyrixi-mobile-ai
```

## 业务使用知识库

```
选择 skill（detail-page）
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

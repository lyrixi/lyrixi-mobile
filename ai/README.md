# 功能说明

## rules 规则

- **`lyrixi-develop-locale.mdc`**：定义了国际化规范
- **`lyrixi-develop-name-file.mdc`**：定义了文件命名规范
- **`lyrixi-develop-name.mdc`**：定义了方法变量的命名规范
- **`lyrixi-develop-sequence-import.mdc`**：定义了代码导入和导出顺序规范
- **`lyrixi-develop-sequence.mdc`**：定义了代码的顺序规范

## skills

- **`lyrixi-base-page-dsl`**：用于生成新增、编辑、详情页面, 用户选择此 skill, 输入自定义`DSL.json`即可生成代码.

## lyrixi-knowledge

- **`lyrixi-knowledge/components`**：定义了组件的使用方法
- **`lyrixi-knowledge/utils`**：定义了工具的使用方法
- **`lyrixi-knowledge/mappings.json`**：决定用什么组件, 会根据提示词自动匹配使用哪个组件

- **`skills/dsl`**：skill + 定制 dsl.json -> 读取 Example, 并通过插槽定制功能 -> 生成生产级代码

## 业务加载知识库

执行以下命令，将把 `ai/lyrixi-knowledge`、`ai/rules/**`、`ai/skills/**` 同步到当前项目下的 `.cursor/lyrixi-knowledge`、`.cursor/rules`、`.cursor/skills`（实现见 `ai/init.js`）

```
npx lyrixi-mobile-ai
```

## 业务使用知识库

```
选择 skill
    +
输入 DSL（业务自定义）
    ↓
skill 执行：
  - 校验 DSL
  - 根据 Example + mappings 选组件
  - 加载 components 规则
  - 生成代码
    ↓
输出 React 代码
```

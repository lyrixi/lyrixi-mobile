# AI 开发规范

## rules 规则

- **`develop-locale.mdc`**：定义了国际化规范
- **`develop-name.mdc`**：生成代码的命名规范
- **`develop-sequence.mdc`**：生成代码的顺序规范

## DSL 生成生成级代码(用 DSL 提示词)

- **`knowledge/components`**：定义了组件的使用方法
- **`knowledge/utils`**：定义了工具的使用方法
- **`knowledge/mappings.json`**：决定用什么组件, 会根据提示词自动匹配使用哪个组件

- **`skills/dsl`**：skill + 定制 dsl.json -> 读取 Example, 并通过插槽定制功能 -> 生成生产级代码

## 业务加载知识库

执行以下命令， 将把 rule 会生成到项目的.cursor 中

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

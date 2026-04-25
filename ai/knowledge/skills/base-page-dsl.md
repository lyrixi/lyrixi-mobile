# List 页面推荐提示词

适用于让 AI 按 `list-page-from-dsl` 知识链路生成页面，而不是自由发挥。

## 标准版本

```text
请按 ai/knowledge/skills/list-page-from-dsl.workflow.md 执行。

先读取这些文件：
- ai/knowledge/dsl/list-page.schema.md
- ai/knowledge/dsl/templates/list-page.template.json
- ai/knowledge/examples/List-demos-Common/overview.md
- ai/knowledge/examples/List-demos-Common/data-flow.md
- ai/knowledge/examples/List-demos-Common/components-reference.md
- ai/knowledge/mappings/list-page-dsl-to-files.md

然后基于下面 DSL 生成代码，不要自行发明目录结构、请求链路或组件：
<粘贴 DSL JSON>

附加要求：
- 目标路径：xxx
- 是否使用 Page.Main：是 / 否
- 是否生成 Footer：是 / 否
- 如果 DSL 未覆盖某个实现细节，先列出缺口再继续
```

## 更稳的版本

```text
请严格按 ai/knowledge/skills/list-page-from-dsl.workflow.md 执行。

要求：
1. 先读取 workflow、schema、template、overview、data-flow、components-reference、mappings
2. 生成的代码结构必须与 List-demos-Common 同构
3. 只允许根据 DSL 决定可变部分
4. 不要编造不存在的组件或 props
5. 如果遇到 GET / form 编码 / 复杂筛选联动等知识未覆盖场景，先输出“能力缺口”，不要直接猜实现

DSL:
<粘贴 DSL JSON>
```

## 什么时候要补充额外说明

以下情况建议在 DSL 之外再补一句：

- 需要 `Select.Combo`、`DatePicker.Combo` 等复杂筛选控件
- 需要真正 GET 请求
- 需要真实表单编码
- 需要固定底部操作区
- 需要自定义 `itemRender`
- 需要列表缓存或虚拟滚动

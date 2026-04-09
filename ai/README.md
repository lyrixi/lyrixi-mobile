---
description: Lyrixi AI 入口与阅读顺序
globs:
  - "**/*.{js,jsx,ts,tsx}"
alwaysApply: false
---

# Lyrixi AI 入口说明

本目录是 `lyrixi-mobile` 提供给 AI 助手的入口信息。

优先阅读：

@./usage.mdc
@./develop.mdc
@./usage.json
@./patterns.mdc
@./anti-patterns.mdc

补充参考：

- `./usage.json`：从包入口导出的组件与工具**结构化使用说明**（与 `usage.mdc` 互补），适合做规则匹配与自动化分析
- `./examples/`：基于 `src/examples` 真实 demos 提炼出的页面级模板示例，包含目录结构与规范写法

使用建议：

1. 先读 `usage.mdc`（库使用守则），理解强约束与导入规范；需要按导出项查场景/反模式/一行示例时对照 `usage.json`。
2. 再读 `develop.mdc`（业务开发规范：值结构、事件、import、命名与目录）。
3. 再读 `patterns.mdc`，按页面/场景组合组件。
4. 最后用 `anti-patterns.mdc` 过滤掉原生 DOM 思维与不符合库风格的写法。

说明：示例里的 `import`、组件名、API、文件名等与代码一致，保留英文；**文档说明与 `usage.json` 中的场景/约束描述已统一为中文**，便于团队阅读和维护。

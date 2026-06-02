# Theme Rules

> 源文档：`src/utils/Theme/` 源码。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `Theme`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/Theme/` 源码 说明与 demos。

## API 索引（节选）
- `Theme.hexToRgb`

## 查阅顺序
- API：`Theme-props.json`
- 示例：`Theme-example.md`
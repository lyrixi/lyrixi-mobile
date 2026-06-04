# LocaleUtil Rules

> 源文档：`src/utils/LocaleUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `LocaleUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/LocaleUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `LocaleUtil.languageMap`
- `LocaleUtil._getCustomGetLanguages`
- `LocaleUtil.addLanguage`
- `LocaleUtil.getLanguage`
- `LocaleUtil.loadLocale`
- `LocaleUtil.setLocale`
- `LocaleUtil.getLanguageMap`

## Demo 索引（本目录 `demos/`）
- `demos/LocaleUtil.tsx`

## 查阅顺序
- API：`LocaleUtil-props.ts`
- 示例：`LocaleUtil-example.md`
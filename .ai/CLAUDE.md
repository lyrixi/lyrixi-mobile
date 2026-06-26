# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 项目概述

**lyrixi-mobile** 是一个基于 React + TypeScript 的移动端 UI 组件库。项目基于 ejected 的 Create React App，既是组件库源码，也是 demo/测试环境。通过 `src/index.ts` 统一导出约 60 个组件和 20 个工具模块。

## 常用命令

- `npm start` — 启动开发服务器（webpack，端口 3000）
- `npm run build` — 生产环境构建，输出到 `build/`

## 架构

### 组件目录结构及文件命名

每个组件位于 `src/components/<Name>/`，目录固定为：

- `index.ts` — 桶导出，组装子组件（如 `Input.Text`、`Button.Icon`）
- `<Name>.tsx` 或子文件夹 — 实现代码
- `types/` — TypeScript 类型定义（`*.types.ts`、`*.modules.types.ts`）
- `demos/` — 使用示例
- `*.less` — 组件样式
- `index.zh-CN.md` / `index.en-US.md` — 文档

### 工具目录结构及文件命名

每个工具位于 `src/utils/<Name>/`，目录固定为：

- `index.ts` — 桶导出，组装子组件（如 `DateUtil.toDate`、`Button.startOrEnd`）
- `<Name>.ts` 或子文件夹 — 实现代码
- `types/` — TypeScript 类型定义（`*.types.ts`、`*.modules.types.ts`）
- `demos/` — 使用示例
- `index.zh-CN.md` / `index.en-US.md` — 文档

### 导入约定

代码中通过注释切换两种导入模式：

- **内库使用**：相对路径导入，如 `import DOMUtil from './../../../utils/DOMUtil'`
- **测试使用**：包名导入，如 `import { DOMUtil } from 'lyrixi-mobile'`

`lyrixi-mobile` 路径别名在 `tsconfig.json` 的 paths 中配置，指向 `src/index`。

### Modal 加载顺序

`Modal` 必须在 `src/index.ts` 中最先导出，因为其他组件在模块求值阶段依赖它。

### 国际化

- `src/assets/locale/` 包含 50+ 语言的翻译文件
- `LocaleUtil` 通过 `window.lyrixiLocaleLanguage` / `window.lyrixiLocaleData` 管理运行时语言检测
- 可通过 `App` 组件的 `language` prop 或 `LocaleUtil.addLanguage()` 设置语言

### 样式

- Less + CSS 自定义属性（变量定义在 `src/assets/variables.less`）
- CSS 变量前缀：`--lyrixi-*`
- Less 变量前缀：`@lyrixi-*`

### 全局类型扩展

`src/global-augmentations.d.ts` 扩展了 `Window`，声明运行时注入的 SDK（微信 wx、钉钉 dd、飞书 tt、支付宝 ap、地图库 BMap/AMap/google/L）。

## 代码风格

- Prettier：单引号、无分号、无尾逗号、100 字符宽度
- ESLint：`react-app` + `react-app/jest` 预设
- TypeScript strict 模式

## 规则

详见 `.claude/rules/` 目录：

- `develop-name.md` — 命名规范（props、refs、state、handlers、render helpers）
- `develop-sequence-coding.md` — 组件内部代码书写顺序
- `develop-sequence-import.md` — import 语句排序
- `develop-locale.md` — 国际化要求
- `develop-page-structure.md` — 业务页面目录结构
- `develop-commponent-structure.md` — 组件包目录结构
- `develop-types-structure.md` — 类型文件（types）组织、命名、目录
- `develop-types-coding.md` — 实现层类型写法（any / React 事件 / forwardRef / Ref）

## Skills

详见 `.ai/skills/` 目录（可 symlink 到 `.cursor/skills`、`.claude/skills`）：

- `docs/` — 经 `mapping.json` 检索组件/工具文档，优先按 `.ai/docs` 生成代码
- `add-component/` — 问答式创建库组件（选择参考模板 + Props/设计，同步 `.ai/docs`）
- `create-page/` — 问答式生成业务页面（选择 docs/pages 模板 + 接口信息）

## Docs

详见 `.claude/docs/`（`.ai/docs/`）：

- `components/Page/` — Page 布局容器 props 及示例
- `components/FooterBar/` — 底部操作栏 props 及示例
- `utils/Bridge/` — 跨平台 JS-SDK 桥接 API 参考
- `mapping.json` — 关键词 → 文档路径索引

## Decisions

`.claude/decisions/` — AI 计划与待用户拍板的问题（**不要预加载**）：

- `current.md` — 默认编辑的活跃决策
- 归档：`/save-decisions` → `archive/decisions/<标题>.md`

## Memory

`.claude/memory/` — 启动可读：

- `MEMORY.md` — 业务永久记忆
- [`preference.md`](memory/preference.md) — 技术偏好（TS/TSX）

**不要预加载** `decisions/`、`docs/`。

## Archive

`.claude/archive/` — 已结束材料：`decisions/`（决策归档）、`memory/`（从 MEMORY 移出的过期业务小节）。

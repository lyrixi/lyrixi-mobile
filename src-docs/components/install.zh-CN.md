---
group:
  title: 通用
  order: 1
order: 1
title: 安装
toc: content
---

# 安装

<div align="center"><a name="readme-top"></a>

<img height="180" src="https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png">

<div style="font-size:24px;text-align:center;">lyrixi-mobile</div>

<div style="text-align:center;margin-top: 10px;">React 19 UI library for mobile.
Minimalist Token, Unified API, Simple and easy to use</div>

<img height="8" width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png"/>

</div>

## 📦 Install

### NPM

```bash
npm install lyrixi-mobile
```

## 🤖 AI CLI

安装完成后，执行以下命令会把包内 `ai/` 目录（`.mdc` 规则与 `usage.json` 等）**原样复制**到当前项目的 `.cursor/rules/lyrixi-mobile/`，便于 Cursor 按项目规则加载。

```bash
npx lyrixi-mobile-ai
```

## 📦 CSS

### Less

```bash
@import 'lyrixi-mobile/assets/index.less';
```

### CSS import

```bash
@import 'lyrixi-mobile/assets/index.css';
```

## 🔨 Usage

```tsx
import { Button } from 'lyrixi-mobile'

export default () => (
  <>
    <Button className="primary">PRESS ME</Button>
  </>
)
```

[Visit lyrixi-mobile docs](https://lyrixi.github.io/lyrixi-mobile)

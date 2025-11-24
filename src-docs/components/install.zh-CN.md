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

<h1>Lyrixi Mobile for React</h1>

An enterprise-class UI design language and React UI library.

<img height="8" width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png"/>

</div>

## 📦 CSS

### Less import

```bash
@import 'lyrixi-mobile.min.css';
```

### CSS import

```html
<link
  rel="stylesheet"
  href="https://lyrixi.github.io/lyrixi-mobile/assets/externals/lyrixi-mobile.min.css"
/>
```

## 📦 Install

### NPM

```bash
npm install lyrixi-mobile
```

```bash
yarn add lyrixi-mobile
```

```bash
pnpm add lyrixi-mobile
```

### UMD

Add scripts to `index.html`

```html
<script src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/react.18.2.0.min.js"></script>
<script src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/react-dom.18.2.0.min.js"></script>
<script src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/axios.1.6.2.min.js"></script>
<script src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/dayjs.1.11.8.min.js"></script>
<script src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/lodash.4.17.21.min.js"></script>
<!-- Lyrixi must defer -->
<script
  defer
  src="https://lyrixi.github.io/lyrixi-mobile/assets/externals/lyrixi-mobile.min.js"
></script>

<!-- The UMD tool unpkg can get the latest base library, example:  -->
<!-- <script src="https://unpkg.com/react-routers"></script> -->

<script>
  // The UMD version of lodash must have reference to window.lodash
  window.lodash = window._
</script>
```

Config webpack.config.js

```js
return {
  // [自定义修改]公共cdn文件 start
  // externalsType: 'umd',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    axios: 'axios',
    dayjs: 'dayjs',
    lodash: '_',
    'lyrixi-mobile': 'Lyrixi'
  },
  // [自定义修改]公共cdn文件 end
  target: ['browserslist'],
  ...
}
```

## 🔨 Usage

```tsx
import { Button, DatePicker } from 'lyrixi-mobile'

export default () => (
  <>
    <Button className="primary">PRESS ME</Button>
    <DatePicker.Combo type="date" placeholder="select date" />
  </>
)
```

[Visit lyrixi-mobile docs](https://lyrixi.github.io/lyrixi-mobile/)

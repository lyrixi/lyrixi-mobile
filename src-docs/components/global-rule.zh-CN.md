---
group:
  title: 通用
  order: 0
order: 3
title: 通用规则
toc: content
---

# 简介

这些通用规则适用于各种 AI 大模型，可以用此训练大模型，也可用于复制提示词，用于提升大模型生成代码的优雅性，降低幻觉

## 开发页面思想架构

### 全局规范

- 组件一律用 jsx 后缀
- 工具类一律用 js 后缀
- 页面上展示的块状分区，均在同级目录下拆成单独的组件，比如一个上中下结构的页面:`index.jsx`可拆成`Header/index.jsx`、`Content/index.jsx`、`Footer/index.jsx`
- 所有 less 全局变量和全局样式，先从`global-styles.zh-CN.md`中阅读和理解，然后优先使用`global-styles.zh-CN.md`中的样式与变量
- 所有的显示在页面上的文字都需要用 locale 包裹，例如: locale('Example')，但不要传第二个参数，因为第二个参数是 key，后面由命令`npm run translate`统一补上
- 定义组件不要用 props, 例如: `function Component(props)`，而且是直接用结构后的属性`function Component({style, className})`

### 一个页面的目录结构

- api/
- utils/
- 组件/index.jsx
- components/
- index.jsx

### 目录说明

- `api`文件夹用于数据请求与数据转换, `api/queryData/localData`将服务器数据转成本地数据, `api/saveData/validateData`校验数据的正确性, `api/saveData/serverData`将本地数据转成服务器数据, 通常 api 下文件夹的命名范围是`saveXX/deleteXX/queryXX/downloadXX`

- `utils`文件夹用于工具相关

- `组件` 要高内聚，低耦合，若涉及组件之间的交互，通常使用`index.js`里定义的 state，将方法暴露出来`onXX`，`index.jsx`中使用`onXX={handleXX}`去接收

- `index.jsx` 需要将页面上的各个部件拆成组件后引入

- `components` 文件夹用于页面的复用组件, 通常没有这个文件夹

### 列表页面参考页面

### 编辑页面参考页面

### 详情页面参考页面

### 详情页面参考页面

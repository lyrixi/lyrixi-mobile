---
group:
  title: 通用
  order: 0
order: 3
title: 通用规则
toc: content
---

# 通用规则

这些通用规则适用于各种 AI 大模型，可以用此训练大模型，也可用于复制提示词，用于提升大模型生成代码的优雅性，降低幻觉

## 国际化规则

所有的显示在页面上的文字都需要用 locale 包裹，例如: locale('Example')
但不要传第二个参数，因为第二个参数是 key，后面由命令`npm run translate`统一补上

## 开发页面思想架构

### 目录

api/
utils/
组件/
components/
index.jsx

### 目录说明

- `api`文件夹用于数据请求与数据转换, `api/queryData/localData`将服务器数据转成本地数据, `api/saveData/validateData`校验数据的正确性, `api/saveData/serverData`将本地数据转成服务器数据, 通常 api 下文件夹的命名范围是`saveXX/deleteXX/queryXX/downloadXX`

- `utils`文件夹用于工具相关

- `组件` 要高内聚，低耦合，若涉及组件之间的交互，通常使用`index.js`里定义的 state，将方法暴露出来`onXX`，`index.jsx`中使用`onXX={handleXX}`去接收

- `index.jsx` 需要将页面上的各个部件拆成组件后引入

- `components` 文件夹用于页面的复用组件, 通常没有这个文件夹

## 参考页面

### 列表页面

### 编辑页面

### 详情页面

### 详情页面

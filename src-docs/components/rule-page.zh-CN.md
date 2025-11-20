---
group:
  title: Rule
  order: 0
order: 3
title: Rule
toc: content
---

## 页面架构

### 一个页面的目录结构

- api/
- utils/
- 组件/index.jsx
- components/
- index.jsx

### 目录说明

- `api`文件夹用于数据请求与数据转换, `api/(queryData|saveData|deleteData|downloadData)/localData`将服务器数据转成本地数据, `api/(queryData|saveData|deleteData|downloadData)/validateData`校验数据的正确性, `api/(queryData|saveData|deleteData|downloadData)/serverData`将本地数据转成服务器数据, 通常 api 下文件夹的命名范围是`saveXX/deleteXX/queryXX/downloadXX`

- `utils`文件夹用于工具相关

- `组件` 要高内聚,低耦合,若涉及组件之间的交互,通常使用`index.js`里定义的 state,将方法暴露出来`onXX`,`index.jsx`中使用`onXX={handleXX}`去接收

- `index.jsx` 需要将页面上的各个部件拆成组件后引入

- `components` 文件夹用于页面的复用组件, 通常没有这个文件夹

## 提示词(AI 请忽略以下内容)

这些提示词提供给开发者复制, 可配合 rules 一起使用

提示词

```bash
先不要写代码,
阅读学习"模板页面地址"页面的架构思维与代码风格,用相同的架构与代码风格开发页面"页面文件夹目录地址",
获取数据的接口地址为:"xxx",
入参为:"{
id:地址栏的id(用Device.getUrlParameter取),
xx:详细的入参说明,
}",
出参为:"{
code: '1(成功)|0(失败)',
data: {// 详细的出参说明}
message: 'code为0时的错误信息'
}";

页面渲染如图所示,封装三块布局组件:"Header/index.jsx"、"Main/组件/index.jsx"、"Footer/index.jsx",
其中中间区域"Main"再封装两个子组件"Main/xx/index.jsx"、"Main/xx/index.jsx"

页面中需要使用的组件有:"Card(渲染块状区域)"、"DatePicker.Types(渲染头部日期选择)"、"TabBar.Tabs(渲染图表视图切换按钮)"、"F2.Chart(渲染图表）";

页面中需要使用的图标有:"xx(问号)"、"xx(向上箭头)"、"xx(向下箭头)";


此页面路径为:"页面路径".
为此页面增加路由:"路由地址".

基于以上的条件，开始写代码吧
```

### 列表页面参考页面

```bash
src/pages/List/demos/Common
```

### 编辑页面参考页面

```bash
src/pages/Edit/demos/Cache
```

### 详情页面参考页面

```bash
src/pages/Detail/demos/Form
```

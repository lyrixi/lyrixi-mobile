---
group:
  title: 通用
  order: 0
order: 3
title: 通用规则
toc: content
---

# 简介

这些通用规则适用于各种 AI 大模型,可以用此训练大模型,也可用于复制提示词,用于提升大模型生成代码的优雅性,降低幻觉

## 开发页面思想架构

### 全局规范

- 组件一律用 jsx 后缀

- 页面上展示的块状分区,均在同级目录下拆成单独的组件,比如一个上中下结构的页面:`index.jsx`可拆成`Header/index.jsx`、`Main/index.jsx`、`Footer/index.jsx`

- 写组件前,先阅读和理解`src/components`组件文档`index.zh-CN.md`,理解各个组件的用法,然后优先使用内置组件渲染

- 用内置组件,不要强行覆盖内置组件 class 样式,而是通过组件属性去修改,正确示例:`<Input.Text style={{ height: '40px' }} />`,错误示例:`.lyrixi-input { height: 40px; }`

- 写样式前,先从`global-styles.zh-CN.md`中阅读和理解,然后优先使用`global-styles.zh-CN.md`中的样式与变量

- 所有的显示在页面上的文字都需要用 locale 包裹,例如: locale('Example'),但不要传第二个参数,因为第二个参数是 key,后面由命令`npm run translate`统一补上

- 定义组件不要用 props, 例如: `function Component(props)`,而且是直接用结构后的属性`function Component({style, className})`

- 工具类一律用 js 后缀

- 写工具类前,先阅读和理解`src/utils`组件文档`index.zh-CN.md`,理解各个工具的用法,然后优先使用内置工具类开发

### 一个页面的目录结构

- api/
- utils/
- 组件/index.jsx
- components/
- index.jsx

### 目录说明

- `api`文件夹用于数据请求与数据转换, `api/queryData/localData`将服务器数据转成本地数据, `api/saveData/validateData`校验数据的正确性, `api/saveData/serverData`将本地数据转成服务器数据, 通常 api 下文件夹的命名范围是`saveXX/deleteXX/queryXX/downloadXX`

- `utils`文件夹用于工具相关

- `组件` 要高内聚,低耦合,若涉及组件之间的交互,通常使用`index.js`里定义的 state,将方法暴露出来`onXX`,`index.jsx`中使用`onXX={handleXX}`去接收

- `index.jsx` 需要将页面上的各个部件拆成组件后引入

- `components` 文件夹用于页面的复用组件, 通常没有这个文件夹

## 提示词

### 列表页面参考页面

### 编辑页面参考页面

### 详情页面参考页面

提示词

```bash
1.开发页面:"src/pages/Report/MyTargetNew/Page";

2.页面渲染如图所示;

3.页面布局,封装三块布局组件:"Header/index.jsx"、"Main/组件/index.jsx"、"Footer/index.jsx",
其中中间区域"Main"再封装两个子组件"Main/Sale/index.jsx"、"Main/Time/index.jsx"

4.页面中需要使用的组件有:"Card(渲染块状区域)"、"DatePicker.Types(渲染头部日期选择)"、"TabBar.Tabs(渲染图表视图切换按钮)"、"F2.Chart(渲染图表）";

5.页面中需要使用的图标有:"lyrixi-iconfont-circle-question(问号)"、"lyrixi-iconfont-triangle-up-fill(向上箭头)"、"lyrixi-iconfont-triangle-down-fill(向下箭头)";

6.代码阅读学习"/pages/Detail/demos/Form"页面的架构思维,开发此页面,
页面详情接口地址为:"xxx",
入参为:"{
id:地址栏的id(用Device.getUrlParameter取),
xx:xx,
}",
出参为:"{
code: '1(成功)|0(失败)',
data: {...}
message: 'code为0时的错误信息'
}";

7.为此页面增加路由:"xx".
```

### 详情页面参考页面

---
group:
  title: 通用
  order: 0
order: 3
title: 全局规则
toc: content
---

# 简介

这些通用规则适用于各种 AI 大模型,可以用此训练大模型,也可用于复制提示词,用于提升大模型生成代码的优雅性,降低幻觉

## 样式

- 写样式前,先从`global-styles.zh-CN.md`中阅读和理解,然后优先使用`global-styles.zh-CN.md`中的样式与变量

- 使用组件,不要强行覆盖内置组件 class 样式,而是通过组件属性去修改,正确示例:`<Input.Text style={{ height: '40px' }} />`,错误示例:`.lyrixi-input { height: 40px; }`

## 国际化

- 所有的显示在页面上的文字都需要用 locale 包裹,例如: locale('Example'),但不要传第二个参数,因为第二个参数是 key,后面由命令`npm run translate`统一补上

## 工具

- 后缀: 工具一律用 js 后缀
- 复用: 阅读和理解`src/utils`组件文档`index.zh-CN.md`,理解各个工具的用法,然后优先使用内置工具类开发

## 组件

- 开发组件时, 先阅读`global-rule-component.zh-CN`了解组件开发的规则

## 页面

- 开发页面时, 先阅读`global-rule-page.zh-CN.md`了解页面开发的规则

---
group:
  title: Rule
  order: 0
order: 3
title: Rule
toc: content
---

# 通用规则

## 显示的文字需要用 locale 包裹

- 所有的显示在页面上的文字都需要用 locale 包裹,例如: locale('Example'),但不要传第二个参数,因为第二个参数是 key,后面由命令`npm run translate`统一补上

## 复用样式

- 写样式前,先从`global-styles.zh-CN.md`中阅读和理解,然后优先使用`global-styles.zh-CN.md`中的样式与变量

## 复用组件

- 优先使用共用组件,阅读和理解`src/components`组件文档`index.zh-CN.md`,理解各个组件的用法,然后优先使用内置组件渲染

## 复用工具

- 优先使用共用工具,阅读和理解`src/utils`组件文档`index.zh-CN.md`,理解各个工具的用法,然后优先使用内置工具类开发

## 组件

- 开发组件时, 先阅读`global-rule-component.zh-CN`了解组件开发的规则

## 页面

- 开发页面时, 先阅读`global-rule-page.zh-CN.md`了解页面开发的规则

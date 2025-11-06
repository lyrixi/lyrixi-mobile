---
group:
  title: 通用
  order: 1
order: 2
title: 全局样式
toc: content
---

# 全局样式

## 色彩

完整的颜色系统，包括文字颜色、背景颜色、语义化颜色等

### 文字颜色

| 类名                 | 说明           | 变量                           |
| -------------------- | -------------- | ------------------------------ |
| `.color-white`       | 白色文字       | `white`                        |
| `.color-disabled`    | 禁用状态文字   | `--seed-font-color-disabled`   |
| `.color-default`     | 默认文字颜色   | `--seed-font-color-default`    |
| `.color-auxiliary`   | 辅助文字颜色   | `--seed-font-color-tertiary`   |
| `.color-secondary`   | 次要文字颜色   | `--seed-font-color-secondary`  |
| `.color-tertiary`    | 三级文字颜色   | `--seed-font-color-tertiary`   |
| `.color-placeholder` | 占位符文字颜色 | `--seed-font-color-quaternary` |
| `.color-primary`     | 主题色文字     | `--seed-primary`               |
| `.color-link`        | 链接文字颜色   | `--seed-link`                  |
| `.color-warning`     | 警告文字颜色   | `--seed-warning`               |
| `.color-danger`      | 危险文字颜色   | `--seed-danger`                |
| `.color-success`     | 成功文字颜色   | `--seed-success`               |

### 背景颜色

| 类名                  | 说明           | 变量                         |
| --------------------- | -------------- | ---------------------------- |
| `.bg-transparent`     | 透明背景       | `transparent`                |
| `.bg-white`           | 白色背景       | `white`                      |
| `.bg-body`            | 页面背景色     | `--seed-bg-default`          |
| `.bg-disabled`        | 禁用状态背景   | `--seed-font-color-disabled` |
| `.bg-primary`         | 主题色背景     | `--seed-primary`             |
| `.bg-primary-lighten` | 主题色浅色背景 | `--seed-primary-lighten`     |
| `.bg-link`            | 链接背景色     | `--seed-link`                |
| `.bg-warning`         | 警告背景色     | `--seed-warning`             |
| `.bg-danger`          | 危险背景色     | `--seed-danger`              |
| `.bg-success`         | 成功背景色     | `--seed-success`             |

## 字体

字体大小、字体粗细、文本处理等

### 字体大小

| 类名             | 说明     | 变量                   |
| ---------------- | -------- | ---------------------- |
| `.font-size-xxl` | 超大字体 | `--seed-font-size-xxl` |
| `.font-size-xl`  | 大字体   | `--seed-font-size-xl`  |
| `.font-size-l`   | 较大字体 | `--seed-font-size-l`   |
| `.font-size-m`   | 中等字体 | `--seed-font-size-m`   |
| `.font-size-s`   | 小字体   | `--seed-font-size-s`   |
| `.font-size-xs`  | 超小字体 | `--seed-font-size-xs`  |

### 字体粗细

| 类名                  | 说明     | 值     |
| --------------------- | -------- | ------ |
| `.font-weight-bold`   | 粗体     | `bold` |
| `.font-weight-medium` | 中等粗细 | `500`  |

### 文本对齐

| 类名           | 说明     | 值                  |
| -------------- | -------- | ------------------- |
| `.text-center` | 居中对齐 | `text-align:center` |
| `.text-right`  | 右对齐   | `text-align:right`  |
| `.text-left`   | 左对齐   | `text-align:left`   |

### 文本处理

| 类名        | 说明             | 功能                      |
| ----------- | ---------------- | ------------------------- |
| `.ellipsis` | 省略号           | `text-overflow: ellipsis` |
| `.nowrap`   | 单行省略         | 单行文本省略号            |
| `.nowrap1`  | 单行省略（兼容） | 单行文本省略号            |
| `.nowrap2`  | 两行省略         | 两行文本省略号            |
| `.nowrap3`  | 三行省略         | 三行文本省略号            |

## 圆角

6 个层级的圆角规范

| 类名          | 说明     | 变量                |
| ------------- | -------- | ------------------- |
| `.radius-xl`  | 超大圆角 | `--seed-radius-xl`  |
| `.radius-l`   | 大圆角   | `--seed-radius-l`   |
| `.radius-m`   | 中等圆角 | `--seed-radius-m`   |
| `.radius-s`   | 小圆角   | `--seed-radius-s`   |
| `.radius-xs`  | 超小圆角 | `--seed-radius-xs`  |
| `.radius-xxs` | 极小圆角 | `--seed-radius-xxs` |

## 间距

8 个层级的间距系统，包括内边距和外边距

### 内边距（Padding）

#### 水平内边距

| 类名                       | 说明             | 变量                |
| -------------------------- | ---------------- | ------------------- |
| `.padding-horizontal-xxl`  | 超大水平内边距   | `--seed-space-xxl`  |
| `.padding-horizontal-xl`   | 大水平内边距     | `--seed-space-xl`   |
| `.padding-horizontal-l`    | 较大水平内边距   | `--seed-space-l`    |
| `.padding-horizontal-m`    | 中等水平内边距   | `--seed-space-m`    |
| `.padding-horizontal-s`    | 小水平内边距     | `--seed-space-s`    |
| `.padding-horizontal-xs`   | 超小水平内边距   | `--seed-space-xs`   |
| `.padding-horizontal-xss`  | 极小水平内边距   | `--seed-space-xss`  |
| `.padding-horizontal-xxxs` | 超极小水平内边距 | `--seed-space-xxxs` |

#### 垂直内边距

| 类名                     | 说明             | 变量                |
| ------------------------ | ---------------- | ------------------- |
| `.padding-vertical-xxl`  | 超大垂直内边距   | `--seed-space-xxl`  |
| `.padding-vertical-xl`   | 大垂直内边距     | `--seed-space-xl`   |
| `.padding-vertical-l`    | 较大垂直内边距   | `--seed-space-l`    |
| `.padding-vertical-m`    | 中等垂直内边距   | `--seed-space-m`    |
| `.padding-vertical-s`    | 小垂直内边距     | `--seed-space-s`    |
| `.padding-vertical-xs`   | 超小垂直内边距   | `--seed-space-xs`   |
| `.padding-vertical-xss`  | 极小垂直内边距   | `--seed-space-xss`  |
| `.padding-vertical-xxxs` | 超极小垂直内边距 | `--seed-space-xxxs` |

### 外边距（Margin）

#### 水平外边距

| 类名                      | 说明             | 变量                |
| ------------------------- | ---------------- | ------------------- |
| `.margin-horizontal-xxl`  | 超大水平外边距   | `--seed-space-xxl`  |
| `.margin-horizontal-xl`   | 大水平外边距     | `--seed-space-xl`   |
| `.margin-horizontal-l`    | 较大水平外边距   | `--seed-space-l`    |
| `.margin-horizontal-m`    | 中等水平外边距   | `--seed-space-m`    |
| `.margin-horizontal-s`    | 小水平外边距     | `--seed-space-s`    |
| `.margin-horizontal-xs`   | 超小水平外边距   | `--seed-space-xs`   |
| `.margin-horizontal-xss`  | 极小水平外边距   | `--seed-space-xss`  |
| `.margin-horizontal-xxxs` | 超极小水平外边距 | `--seed-space-xxxs` |

#### 垂直外边距

| 类名                    | 说明             | 变量                |
| ----------------------- | ---------------- | ------------------- |
| `.margin-vertical-xxl`  | 超大垂直外边距   | `--seed-space-xxl`  |
| `.margin-vertical-xl`   | 大垂直外边距     | `--seed-space-xl`   |
| `.margin-vertical-l`    | 较大垂直外边距   | `--seed-space-l`    |
| `.margin-vertical-m`    | 中等垂直外边距   | `--seed-space-m`    |
| `.margin-vertical-s`    | 小垂直外边距     | `--seed-space-s`    |
| `.margin-vertical-xs`   | 超小垂直外边距   | `--seed-space-xs`   |
| `.margin-vertical-xss`  | 极小垂直外边距   | `--seed-space-xss`  |
| `.margin-vertical-xxxs` | 超极小垂直外边距 | `--seed-space-xxxs` |

### 通用内边距

| 类名       | 说明       | 值                                        |
| ---------- | ---------- | ----------------------------------------- |
| `.padding` | 通用内边距 | `var(--seed-space-m) var(--seed-space-l)` |

## 布局

基于 Flexbox 的完整布局系统

### 基础 Flex 类

| 类名           | 说明         | 值                     |
| -------------- | ------------ | ---------------------- |
| `.flex`        | Flexbox 布局 | `display: flex`        |
| `.inline-flex` | 行内 Flexbox | `display: inline-flex` |

### Flex 属性

| 类名            | 说明           | 值                |
| --------------- | -------------- | ----------------- |
| `.flex-initial` | 初始值         | `flex: initial`   |
| `.flex-0`       | 不伸缩         | `flex: 0`         |
| `.flex-none`    | 不伸缩且不收缩 | `flex: none`      |
| `.flex-1`       | 等分剩余空间   | `flex: 1`         |
| `.flex-wrap`    | 换行           | `flex-wrap: wrap` |

### 方向控制

| 类名                       | 说明     | 值                               |
| -------------------------- | -------- | -------------------------------- |
| `.flex-vertical`           | 垂直布局 | `flex-direction: column`         |
| `.flex-horizontal`         | 水平布局 | `flex-direction: row`            |
| `.flex-vertical-reverse`   | 垂直反向 | `flex-direction: column-reverse` |
| `.flex-horizontal-reverse` | 水平反向 | `flex-direction: row-reverse`    |

### 主轴对齐（水平对齐）

| 类名            | 说明     | 值                               |
| --------------- | -------- | -------------------------------- |
| `.flex-left`    | 左对齐   | `justify-content: flex-start`    |
| `.flex-center`  | 居中对齐 | `justify-content: center`        |
| `.flex-right`   | 右对齐   | `justify-content: flex-end`      |
| `.flex-between` | 两端对齐 | `justify-content: space-between` |
| `.flex-around`  | 环绕对齐 | `justify-content: space-around`  |

### 交叉轴对齐（垂直对齐）

| 类名             | 说明     | 值                        |
| ---------------- | -------- | ------------------------- |
| `.flex-top`      | 顶部对齐 | `align-items: flex-start` |
| `.flex-middle`   | 垂直居中 | `align-items: center`     |
| `.flex-bottom`   | 底部对齐 | `align-items: flex-end`   |
| `.flex-stretch`  | 拉伸对齐 | `align-items: stretch`    |
| `.flex-baseline` | 基线对齐 | `align-items: baseline`   |

### 组合对齐

| 类名                 | 说明     | 功能             |
| -------------------- | -------- | ---------------- |
| `.flex-middlecenter` | 完全居中 | 水平和垂直都居中 |

### 自身对齐

| 类名                 | 说明         | 值                       |
| -------------------- | ------------ | ------------------------ |
| `.flex-self-stretch` | 自身拉伸     | `align-self: stretch`    |
| `.flex-self-top`     | 自身顶部对齐 | `align-self: flex-start` |
| `.flex-self-middle`  | 自身垂直居中 | `align-self: center`     |
| `.flex-self-bottom`  | 自身底部对齐 | `align-self: flex-end`   |

## 显示与隐藏

| 类名                | 说明           | 值                              |
| ------------------- | -------------- | ------------------------------- |
| `.hide`             | 隐藏元素       | `display: none`                 |
| `.hide-important`   | 强制隐藏       | `display: none !important`      |
| `.hidden`           | 隐藏但占位     | `visibility: hidden`            |
| `.hidden-important` | 强制隐藏但占位 | `visibility: hidden !important` |
| `.overflow-hidden`  | 隐藏溢出       | `overflow: hidden`              |
| `.overflow-auto`    | 自动滚动       | `overflow: auto`                |

## 定位

| 类名                      | 说明         | 功能                 |
| ------------------------- | ------------ | -------------------- |
| `.position-absolute`      | 绝对定位     | `position: absolute` |
| `.position-absolute.full` | 全屏绝对定位 | 覆盖整个容器         |
| `.position-relative`      | 相对定位     | `position: relative` |

## 边框

### 基础边框

| 类名        | 说明     | 功能                                         |
| ----------- | -------- | -------------------------------------------- |
| `.border-0` | 无边框   | 移除所有边框                                 |
| `.bordered` | 四边边框 | `border: 1px solid var(--seed-border-color)` |
| `.border`   | 四边边框 | `border: 1px solid var(--seed-border-color)` |

### 单边边框

| 类名         | 说明     | 功能                                                |
| ------------ | -------- | --------------------------------------------------- |
| `.border-t`  | 上边框   | `border-top: 1px solid var(--seed-border-color)`    |
| `.border-b`  | 下边框   | `border-bottom: 1px solid var(--seed-border-color)` |
| `.border-tb` | 上下边框 | 上下两条边框                                        |
| `.border-l`  | 左边框   | `border-left: 1px solid var(--seed-border-color)`   |
| `.border-lt` | 左上边框 | 左上两条边框                                        |
| `.border-lb` | 左下边框 | 左下两条边框                                        |
| `.border-r`  | 右边框   | `border-right: 1px solid var(--seed-border-color)`  |
| `.border-rt` | 右上边框 | 右上两条边框                                        |
| `.border-rb` | 右下边框 | 右下两条边框                                        |

### 边框样式

| 类名      | 说明     | 值                     |
| --------- | -------- | ---------------------- |
| `.dotted` | 点线边框 | `border-style: dotted` |
| `.dashed` | 虚线边框 | `border-style: dashed` |

### 特殊边框

| 类名                | 说明       | 功能                 |
| ------------------- | ---------- | -------------------- |
| `.basketline`       | 篮子线边框 | 带左右边线的底部边框 |
| `.border-separator` | 分割线     | 垂直分割线           |

## 交互控制

| 类名                     | 说明         | 功能                       |
| ------------------------ | ------------ | -------------------------- |
| `.events-none`           | 禁用事件     | `pointer-events: none`     |
| `.noselect`              | 禁止选择     | 禁用文本选择和长按菜单     |
| `.transition-duration-0` | 禁用过渡动画 | `transition-duration: 0ms` |
| `.animation-duration-0`  | 禁用动画     | `animation-duration: 0ms`  |

## 显示控制

| 类名            | 说明       | 值               |
| --------------- | ---------- | ---------------- |
| `.block`        | 块级显示   | `display: block` |
| `.inline-block` | 行内块显示 | `display: block` |
| `.width-full`   | 全宽       | `width: 100%`    |
| `.height-full`  | 全高       | `height: 100%`   |

## 清除浮动

| 类名        | 说明     | 功能               |
| ----------- | -------- | ------------------ |
| `.clearfix` | 清除浮动 | 使用伪元素清除浮动 |
| `.clear`    | 清除浮动 | `clear: both`      |

## 背景图片

| 类名                 | 说明         | 图片地址     |
| -------------------- | ------------ | ------------ |
| `.bg-avatar-default` | 默认头像背景 | 默认头像图片 |
| `.bg-image-default`  | 默认图片背景 | 默认图片     |

## 遮罩和动画

### 遮罩

| 类名    | 说明   | 功能               |
| ------- | ------ | ------------------ |
| `.mask` | 遮罩层 | 全屏遮罩，支持动画 |

### 弹框动画

| 类名               | 说明         | 功能             |
| ------------------ | ------------ | ---------------- |
| `.modal-animation` | 弹框动画容器 | 支持多种动画效果 |

### 动画类型

| 动画值       | 说明         | 效果       |
| ------------ | ------------ | ---------- |
| `slideLeft`  | 从右往左滑动 | 从右侧滑入 |
| `slideRight` | 从左往右滑动 | 从左侧滑入 |
| `slideUp`    | 从下向上滑动 | 从底部滑入 |
| `slideDown`  | 从上向下滑动 | 从顶部滑入 |
| `zoom`       | 放大缩小     | 缩放动画   |
| `fade`       | 淡入淡出     | 透明度动画 |
| `none`       | 无动画       | 直接显示   |

### 位置类

| 类名             | 说明         | 位置     |
| ---------------- | ------------ | -------- |
| `.middle`        | 正中间弹出   | 屏幕中央 |
| `.top-left`      | 左上角弹出   | 左上角   |
| `.top-center`    | 顶部中央弹出 | 顶部中央 |
| `.top-right`     | 右上角弹出   | 右上角   |
| `.bottom-left`   | 左下角弹出   | 左下角   |
| `.bottom-center` | 底部中央弹出 | 底部中央 |
| `.bottom-right`  | 右下角弹出   | 右下角   |
| `.left-top`      | 左侧顶部弹出 | 左侧顶部 |
| `.left-middle`   | 左侧中央弹出 | 左侧中央 |
| `.left-bottom`   | 左侧底部弹出 | 左侧底部 |
| `.right-top`     | 右侧顶部弹出 | 右侧顶部 |
| `.right-middle`  | 右侧中央弹出 | 右侧中央 |
| `.right-bottom`  | 右侧底部弹出 | 右侧底部 |

## 变量

所有样式类都基于以下 CSS 变量：

### 间距变量

- `--seed-space-xxl`: 16px
- `--seed-space-xl`: 14px
- `--seed-space-l`: 12px
- `--seed-space-m`: 10px
- `--seed-space-s`: 8px
- `--seed-space-xs`: 6px
- `--seed-space-xss`: 4px
- `--seed-space-xxxs`: 2px

### 字体变量

- `--seed-font-size-xxl`: 20px
- `--seed-font-size-xl`: 18px
- `--seed-font-size-l`: 16px
- `--seed-font-size-m`: 14px
- `--seed-font-size-s`: 12px
- `--seed-font-size-xs`: 11px

### 圆角变量

- `--seed-radius-xl`: 12px
- `--seed-radius-l`: 10px
- `--seed-radius-m`: 8px
- `--seed-radius-s`: 6px
- `--seed-radius-xs`: 4px
- `--seed-radius-xxs`: 3px

### 颜色变量

- `--seed-primary`: 主题色
- `--seed-link`: 链接色
- `--seed-warning`: 警告色
- `--seed-danger`: 危险色
- `--seed-success`: 成功色
- `--seed-font-color-default`: 默认文字色
- `--seed-font-color-secondary`: 次要文字色
- `--seed-font-color-tertiary`: 辅助文字色
- `--seed-font-color-quaternary`: 占位符文字色
- `--seed-font-color-disabled`: 禁用文字色
- `--seed-border-color`: 边框色
- `--seed-bg-default`: 默认背景色

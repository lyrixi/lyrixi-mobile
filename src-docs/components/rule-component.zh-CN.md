---
group:
  title: Rule
  order: 0
order: 3
title: Rule
toc: content
---

## 组件

- 后缀: 组件一律用 jsx 后缀

## 组件属性

## 定义属性避免

定义组件不要用 ...props, 例如: `function Component({...props})`,而且是直接用结构后的属性`function Component({style, className})`

### Value & Display Value

值和值的渲染相关属性, 例如:

```bash
value,
placeholder,
list,
count,
sourceType,
uploadDir,
chooseExtraParams,
loadData,
```

### Status

状态与控制相关属性，例如:

```bash
readOnly,
open,
visible,
maskClosable,
async,
reUpload,
virtual,
disabled,
multiple,
allowClear,
autoFocus,
autoSelect,
checkable,
editable,
autoLocation,
locationVisible,
chooseVisible,
previewVisible,
clickAction,
```

### Style

样式相关属性，例如:

```bash
safeArea,
style,
className,
modalStyle,
modalClassName,
maskStyle,
maskClassName,
optionStyle,
optionClassName,
groupStyle,
groupClassName,
```

### Elements

渲染 DOM 属性，通常以 Render 或 Node 结尾, 例如:

```bash
portal,
comboRender,
clearRender,
itemRender,
xxRender,
leftIconNode,
rightIconNode,
xxNode,
children,
```

### Validate

校验相关属性，例如:

```bash
precision,
trim,
max,
min,
maxLength,
maxSize,
```

### Events

事件相关属性, 通常是 on 开头

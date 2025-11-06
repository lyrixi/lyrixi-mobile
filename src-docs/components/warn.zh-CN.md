---
group:
  title: 通用
  order: 1
order: 1
title: 严禁
toc: content
---

# 严禁

## 不要改组件样式

错误用法:

```css
.lyrixi-input {
  height: 40px;
}
```

正确用法

```
import { Input } from 'lyrixi-mobile'

export default () => <Input.Text style={{ height: '40px' }} />
```

## 属性不要用动态 props 定义

错误定义:

```
<header
  {...props}
>
  {children}
</header>
```

正确用法

```
<header style={style} className={className}>
  {children}
</header>
```

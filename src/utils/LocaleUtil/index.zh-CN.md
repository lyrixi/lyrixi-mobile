---
category: Utils
group: 国际化
title: LocaleUtil
---

# LocaleUtil

## LocaleUtil.languageMap

支持的语言列表

## LocaleUtil.setLocale

LocaleUtil.setLocale(language, data)设置语言, 设置后, 两个变量将有值: window.lyrixiLocaleLanguage 标识语言, window.lyrixiLocaleData 记录国际化数据

## LocaleUtil.locale

LocaleUtil.setLocale 后, LocaleUtil.locale 默认读取 window.lyrixiLocaleData 对象

```javascript
import React from 'react'
import { LocaleUtil } from 'lyrixi-mobile'

// 其中key的值为: 半径{0}米
LocaleUtil.locale('半径1000米', 'key', [1000]) // => 半径1000米
```

`也可以通过直接修改window.lyrixiLocaleData修改国际化数据`

## lyrixi 内部国际化文件

目录: src/utils/LocaleUtil/resources/\*.json
文件:

- en_US
- zh_CN
- zh_HK
- vi_VN

## 示例

### LocaleUtil.locale

<code src="./demos/LocaleUtil.jsx">></code>

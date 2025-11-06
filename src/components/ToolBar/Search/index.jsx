import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Input } from 'lyrixi-mobile'
测试使用-end */

const Search = (
  {
    placeholder,
    // 其它属性
    className,
    ...props
  },
  ref
) => {
  return (
    <Input.Search
      ref={ref}
      leftIcon={<i className="lyrixi-toolbar-search-input-left-icon" />}
      {...props}
      className={DOMUtil.classNames('lyrixi-toolbar-search-input', className)}
      placeholder={placeholder || LocaleUtil.locale('搜索', 'lyrixi_search')}
    />
  )
}

export default forwardRef(Search)

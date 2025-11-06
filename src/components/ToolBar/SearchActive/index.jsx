import React, { forwardRef } from 'react'

import Search from './../Search'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

const SearchBar = ({ className, style, onCancel, searchProps, ...props }, ref) => {
  return (
    <div className={DOMUtil.classNames(`lyrixi-toolbar-search-bar`, className)} style={style}>
      {/* 文本框 */}
      <Search
        ref={ref}
        autoFocus
        {...props}
        {...searchProps}
        className={DOMUtil.classNames(`lyrixi-active`, searchProps?.className)}
      />

      {/* 取消按钮 */}
      <span
        className="lyrixi-toolbar-search-button-cancel"
        onClick={(e) => {
          onCancel && onCancel()
        }}
      >
        {LocaleUtil.locale('取消', 'lyrixi_cancel')}
      </span>
    </div>
  )
}

export default forwardRef(SearchBar)

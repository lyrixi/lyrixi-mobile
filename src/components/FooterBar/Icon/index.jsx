import React, { forwardRef } from 'react'
import MoreWrapper from './../MoreWrapper'

// 内库使用-start
import Icon from './../../Icon'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Icon, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 底部图标
const FooterBarIcon = forwardRef(({ size = 22, className, moreList, onClick, ...props }, ref) => {
  const icon = (
    <Icon
      ref={ref}
      size={size}
      className={DOMUtil.classNames('lyrixi-footerbar-icon', className)}
      {...props}
    />
  )

  if (moreList) {
    return (
      <MoreWrapper moreList={moreList} onClick={onClick}>
        {icon}
      </MoreWrapper>
    )
  }

  return React.cloneElement(icon, { onClick })
})

export default FooterBarIcon

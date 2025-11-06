import React, { forwardRef } from 'react'
import MoreWrapper from './../MoreWrapper'

// 内库使用-start
import Button from './../../Button'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Button, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 底部按钮
const FooterBarButton = forwardRef(
  (
    {
      color,
      backgroundColor = 'default',
      size = 'm',
      radius = 'm',
      border = 'none',
      className,
      moreList,
      onClick,
      ...props
    },
    ref
  ) => {
    const button = (
      <Button
        ref={ref}
        color={color}
        backgroundColor={backgroundColor}
        size={size}
        radius={radius}
        border={border}
        className={DOMUtil.classNames('lyrixi-footerbar-button', className)}
        {...props}
      />
    )

    if (moreList) {
      return (
        <MoreWrapper moreList={moreList} onClick={onClick}>
          {button}
        </MoreWrapper>
      )
    }

    return React.cloneElement(button, { onClick })
  }
)

export default FooterBarButton

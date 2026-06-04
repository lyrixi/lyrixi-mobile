import React, { type MouseEvent } from 'react'
import type { ModalNavBarModalCancelProps } from './Modal.NavBarModal.Cancel.types'

// 内库使用-start
import Icons from '../../../../icons'
import Icon from './../../../Icon'
import NavBar from './../../../NavBar'

// 内库使用-end

/* 测试使用-start
import { Icon, NavBar, Icons } from 'lyrixi-mobile'
测试使用-end */

const Cancel = ({ onClick, children }: ModalNavBarModalCancelProps) => {
  // 点击取消
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  if (children) {
    return <NavBar.Button onClick={handleClick}>{children}</NavBar.Button>
  }

  return (
    <NavBar.Button onClick={handleClick}>
      <Icon
        svg={Icons.Close}
        size="12px"
        style={{ padding: 4 }}
        radius="100%"
        backgroundColor="secondary"
      />
    </NavBar.Button>
  )
}

export default Cancel

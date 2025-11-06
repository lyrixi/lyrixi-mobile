import React, { useState } from 'react'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// More功能的包装组件
export default function MoreWrapper({ children, moreList, onClick, ...props }) {
  const [open, setOpen] = useState(false)

  function handleClick(e) {
    onClick && onClick(e)
    if (Array.isArray(moreList) && moreList.length) {
      setOpen(true)
    }
  }

  const hasMore = Array.isArray(moreList) && moreList.length

  return (
    <>
      {React.cloneElement(children, {
        ...props,
        onClick: handleClick
      })}

      {hasMore ? (
        <ActionSheet.Modal open={open} list={moreList} onClose={() => setOpen(false)} />
      ) : null}
    </>
  )
}

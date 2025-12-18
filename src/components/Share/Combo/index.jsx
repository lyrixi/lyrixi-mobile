import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import support from './../utils/support'
import Modal from './../Modal'
import share from './../utils/share'

// 内库使用-start
import Bridge from './../../../utils/Bridge'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// Combo
const Combo = (
  {
    // Value & Display Value
    shareTo, // {wechat|moments|miniprogram|wecom|dingtalk|lark: {title = '', description = '', imageUrl = '', url = ''}}

    // Style
    className,
    modalClassName,
    modalStyle,

    // Element
    portal,
    children,

    // Events
    onBeforeOpen,
    onError,
    onSuccess
  },
  ref
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef(null)
  const modalRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      ...modalRef.current,
      rootDOM: comboRef?.current,
      getRootDOM: () => {
        return comboRef?.current
      },
      modalDOM: modalRef?.current?.modalDOM,
      getModalDOM: modalRef?.current?.getModalDOM
    }
  })

  // 点击分享
  async function handleClick() {
    if (typeof onBeforeOpen === 'function') {
      let goOn = await onBeforeOpen()
      if (goOn === false) return
    }

    if (Bridge.platform === 'lark' && shareTo?.lark) {
      share(shareTo?.lark || {})
      return
    }
    if (Bridge.platform === 'dingtalk' && shareTo?.dingtalk) {
      share(shareTo?.dingtalk || {})
      return
    }
    setOpen(true)
  }

  // 显示项
  function getChildren() {
    if (support(shareTo)) {
      return children ? children : 'Share to'
    }
    return null
  }

  return (
    <>
      {/* Element: Combo Button */}
      <div
        ref={comboRef}
        // Style
        className={DOMUtil.classNames('lyrixi-share-button', className)}
        // Events
        onClick={handleClick}
      >
        {getChildren()}
      </div>

      {/* Element: Modal */}
      <Modal
        ref={modalRef}
        // Status
        open={open}
        // Style
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        // Element
        portal={portal}
        // Value & Display Value
        shareTo={shareTo}
        // Events
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onError={onError}
        onSuccess={onSuccess}
      />
    </>
  )
}

export default forwardRef(Combo)

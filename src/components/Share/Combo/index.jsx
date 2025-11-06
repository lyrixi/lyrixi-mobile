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
    // Combo
    onBeforeOpen,

    // Modal
    portal,
    modalClassName,
    modalStyle,

    // Main
    shareTo,
    /*
    {
      wechat|moments|miniprogram|wecom|dingtalk|lark: {
        title = '', // 分享标题
        description = '', // 分享描述
        imageUrl = '', // 分享图标
        url = '' // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      }
    }
    */
    onError,
    onSuccess,

    // Combo
    children,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false)

  const comboRef = useRef(null)
  const modalRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      ...modalRef.current,
      comboDOM: comboRef?.current,
      getComboDOM: () => {
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
      <div
        ref={comboRef}
        {...props}
        className={DOMUtil.classNames('share-button', props?.className)}
        onClick={handleClick}
      >
        {getChildren()}
      </div>

      <Modal
        ref={modalRef}
        portal={portal}
        className={modalClassName}
        style={modalStyle}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        // Main
        shareTo={shareTo}
        onError={onError}
        onSuccess={onSuccess}
      />
    </>
  )
}

export default forwardRef(Combo)

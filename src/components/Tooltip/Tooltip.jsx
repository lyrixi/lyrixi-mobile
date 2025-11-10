import React, { forwardRef, useRef, useEffect, useImperativeHandle, useState } from 'react'
import Combo from './../ActionSheet/Combo/Combo'
import Popup from './Popup'
import updatePositionByReferenceDOM from './api/updatePositionByReferenceDOM'

const Tooltip = forwardRef(
  (
    {
      // Combo
      // Combo: Style
      style,
      className,
      // Combo: Element
      comboRender,
      comboChildren,
      referenceDOM: externalReferenceDOM,

      // Modal
      // Modal: Status
      maskClosable = true,

      //  Modal: Style
      animation = 'slideDownLeft', // none | slideLeft | slideRight | slideUp | slideDown | zoom | fade
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      //  Modal: Element
      portal,
      children,

      //  Events
      onOpen,
      onClose
    },
    ref
  ) => {
    // 非受控显隐
    let [open, setOpen] = useState(null)
    const modalRef = useRef(null)
    const comboRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current
      }
    })

    // 受控显隐时, 需要更新容器位置
    useEffect(() => {
      if (open) {
        updatePosition()
      }
      if (open === null) return
      if (open) {
        typeof onOpen === 'function' && onOpen()
      } else {
        typeof onClose === 'function' && onClose()
      }
    }, [open]) // eslint-disable-line

    // 更新Modal位置
    function updatePosition(argReferenceDOM) {
      // 参考元素
      let referenceDOM =
        typeof externalReferenceDOM === 'function' ? externalReferenceDOM() : externalReferenceDOM
      if (argReferenceDOM) {
        referenceDOM = argReferenceDOM
      }

      if (!referenceDOM) {
        let comboDOM = comboRef?.current?.comboDOM
        if (!comboDOM && typeof comboRef?.current?.getComboDOM === 'function') {
          comboDOM = comboRef.current.getComboDOM()
        }
        referenceDOM = comboDOM
      }

      // 位移元素
      let modalDOM = modalRef?.current?.modalDOM ? modalRef?.current?.modalDOM : null

      if (referenceDOM && modalDOM) {
        // 没有自定义位置时生效
        if (!modalStyle?.left && !modalStyle?.top && !modalStyle?.right && !modalStyle?.bottom) {
          updatePositionByReferenceDOM(modalDOM, {
            referenceDOM: referenceDOM,
            animation: animation,
            offset: {
              top: 8,
              bottom: 8
            }
          })
        }
      }
    }

    // 非受控显隐, 为子元素增加点击事件显隐
    function handleOpen() {
      // 没有自定义位置时生效
      if (!modalStyle?.left && !modalStyle?.top && !modalStyle?.right && !modalStyle?.bottom) {
        updatePosition(e.currentTarget)
      }
      setOpen(!open)
    }

    // 获取 Combo 节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open: open,
          onClick: handleOpen
        })
      }

      // 如果有 comboChildren，渲染 comboChildren
      if (comboChildren) {
        return (
          <Combo ref={comboRef} style={style} className={className} onClick={handleOpen}>
            {comboChildren}
          </Combo>
        )
      }

      return null
    }

    return (
      <>
        {getComboNode()}
        <Popup
          ref={modalRef}
          // Modal: Status
          open={typeof open === 'boolean' ? open : open}
          maskClosable={maskClosable}
          //  Modal: Style
          animation={animation}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          //  Modal: Element
          portal={portal}
          // Events
          onClose={() => {
            setOpen(false)
          }}
        >
          {children}
        </Popup>
      </>
    )
  }
)

export default Tooltip

import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react'
import Modal, { type ModalRef } from './../Modal'
import getAnimation from './getAnimation'
import updatePositionByReferenceElement from './../../Tooltip/api/updatePositionByReferenceElement'


import type { DropdownModalProps } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Tooltip } from 'lyrixi-mobile'
测试使用-end */

// DropdownModal
const DropdownModal = forwardRef<ModalRef, DropdownModalProps>(
  (
    {
      // Status
      open,
      maskClosable,

      // Style
      safeArea,
      offset,
      left,
      right,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,
      referenceElement: externalReferenceElement,
      children,

      // Events
      onClose
    },
    ref
  ) => {
    // 构建动画
    const animation = getAnimation(left, right)


    const modalRef = useRef<ModalRef>(null)


    useEffect(() => {
      // 更新模态框位置对齐目标元素
      updateModalPosition()
      // eslint-disable-next-line
    }, [open])


    // 继续向外暴露与 Modal 相同的实例能力
    useImperativeHandle(ref, () => modalRef.current!)


    // 受控显隐时, 需要更新容器位置
    function updateModalPosition() {
      let maskElement = modalRef?.current?.maskElement

      // 参考元素
      let referenceElement =
        typeof externalReferenceElement === 'function'
          ? externalReferenceElement()
          : externalReferenceElement

      if (!referenceElement || !maskElement) return
      const topUnset = maskStyle?.top == null
      const bottomUnset = maskStyle?.bottom == null
      if (open && referenceElement && maskElement && topUnset && bottomUnset) {
        const parentEl =
          portal != null && typeof portal === 'object' && portal instanceof HTMLElement
            ? portal
            : null
        updatePositionByReferenceElement(maskElement, {
          referenceElement: referenceElement,
          parentElement: parentEl,
          animation: animation,
          offset: offset,
          left: maskStyle?.left,
          right: maskStyle?.right
        })
      }
    }


    return (
      <Modal
        ref={modalRef}
        safeArea={safeArea}
        portal={portal}
        open={open}
        animation={animation}
        // Style
        maskClosable={maskClosable}
        maskClassName={DOMUtil.classNames(
          maskClassName,
          left != null || right != null ? 'lyrixi-mask-dropdown-side' : 'lyrixi-mask-dropdown-center'
        )}
        maskStyle={{
          ...maskStyle,
          ...(left != null ? { left: left } : {}),
          ...(right != null ? { right: right } : {})
        }}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames(
          modalClassName,
          left != null || right != null ? 'lyrixi-modal-dropdown-side' : 'lyrixi-modal-dropdown-center'
        )}
        // Events
        onClose={onClose}
      >
        {children}
      </Modal>
    )
  }
)
export type { DropdownModalProps } from './types'

export default DropdownModal

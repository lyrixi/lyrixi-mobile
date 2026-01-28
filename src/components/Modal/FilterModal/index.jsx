import React, { forwardRef } from 'react'
import Modal from './../Modal'
import NavBar from './../NavBarModal/NavBar'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Page from './../../Page'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, NavBar } from 'lyrixi-mobile'
测试使用-end */

// 侧边查询
function FilterModal(
  {
    // Status
    open,
    maskClosable,

    // Style
    safeArea,
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,

    // Element
    portal,
    children,
    footerRender,

    // Events
    onClose,
    onCancel
  },
  ref
) {
  return (
    <Modal
      ref={ref}
      safeArea={safeArea}
      portal={portal}
      open={open}
      animation="slideLeft"
      // Style
      maskClosable={maskClosable}
      maskClassName={DOMUtil.classNames('lyrixi-filterModal-mask', maskClassName)}
      maskStyle={maskStyle}
      modalClassName={DOMUtil.classNames('lyrixi-filterModal', modalClassName)}
      modalStyle={modalStyle}
      // Events
      onClose={onClose}
    >
      <Page className="lyrixi-full lyrixi-bg-white">
        <Page.Header className="lyrixi-bg-default">
          <NavBar
            title={LocaleUtil.locale('筛选', 'lyrixi_c2fe6253c4ca802cf2230b0b5e15eb25')}
            cancelNode={LocaleUtil.locale('取消', 'lyrixi_625fb26b4b3340f7872b411f401e754c')}
            onCancel={(e) => {
              e.stopPropagation()

              onCancel && onCancel()
              onClose && onClose()
            }}
          />
        </Page.Header>
        <Page.Main>{children}</Page.Main>
        {/* 底部 */}
        {typeof footerRender === 'function' ? footerRender({ onClose }) : null}
      </Page>
    </Modal>
  )
}

export default forwardRef(FilterModal)

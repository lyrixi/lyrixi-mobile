import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Page from './../../Page'
import NavBar from './../../NavBar'
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
      maskClassName={DOMUtil.classNames('filterModal-mask', maskClassName)}
      maskStyle={maskStyle}
      modalClassName={DOMUtil.classNames('lyrixi-filterModal', modalClassName)}
      modalStyle={modalStyle}
      // Events
      onClose={onClose}
    >
      <Page className="lyrixi-full lyrixi-bg-white">
        <Page.Header className="lyrixi-bg-default">
          <NavBar>
            <NavBar.Button
              onClick={(e) => {
                e.stopPropagation()

                onCancel && onCancel()
                onClose && onClose()
              }}
            >
              {LocaleUtil.locale('取消', 'lyrixi.cancel')}
            </NavBar.Button>
            <NavBar.Title>{LocaleUtil.locale('筛选', 'lyrixi.filter')}</NavBar.Title>
            <NavBar.Button>&nbsp;&nbsp;</NavBar.Button>
          </NavBar>
        </Page.Header>
        <Page.Main>{children}</Page.Main>
        {/* 底部 */}
        {typeof footerRender === 'function'
          ? footerRender({ close: () => onClose && onClose() })
          : null}
      </Page>
    </Modal>
  )
}

export default forwardRef(FilterModal)

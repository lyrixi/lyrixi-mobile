import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import SpinFade from './../SpinFade'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-start */

const Loading = forwardRef(
  (
    {
      // Value & Display Value
      content,

      // Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,
      iconRender,
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // render icon
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender()
      }
      return <SpinFade />
    }

    const IconNode = getIconNode()

    // 组合Node
    let Node = (
      <div
        ref={rootRef}
        // Style
        className={DOMUtil.classNames(
          'lyrixi-loading-mask lyrixi-mask lyrixi-active',
          maskClassName
        )}
        style={maskStyle}
      >
        {/* Element: Children */}
        {children !== undefined ? (
          children
        ) : (
          <div className={DOMUtil.classNames('lyrixi-loading', modalClassName)} style={modalStyle}>
            {/* Element: Icon */}
            <div className="lyrixi-loading-icon">{IconNode}</div>
            {/* Value & Display Value: Content */}
            <div className="lyrixi-loading-content">
              {content || `${LocaleUtil.locale('加载中', 'lyrixi_refreshing')}...`}
            </div>
          </div>
        )}
      </div>
    )

    if (portal) {
      return createPortal(Node, portal)
    }
    return Node
  }
)

export default Loading

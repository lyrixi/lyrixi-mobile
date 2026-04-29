import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import SpinFade from './../SpinFade'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

interface LoadingProps {
  content?: React.ReactNode
  modalStyle?: React.CSSProperties
  modalClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  portal?: Element | DocumentFragment
  iconRender?: () => React.ReactNode
  children?: React.ReactNode
}

interface LoadingRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

const Loading = forwardRef<LoadingRef, LoadingProps>(
  (
    {
      content,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      iconRender,
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    function getIconNode(): React.ReactNode {
      if (typeof iconRender === 'function') {
        return iconRender()
      }
      return <SpinFade />
    }

    const IconNode = getIconNode()

    const Node = (
      <div
        ref={rootRef}
        className={DOMUtil.classNames(
          'lyrixi-mask-loading lyrixi-mask lyrixi-active',
          maskClassName
        )}
        style={maskStyle}
      >
        {children !== undefined ? (
          children
        ) : (
          <div className={DOMUtil.classNames('lyrixi-loading', modalClassName)} style={modalStyle}>
            <div className="lyrixi-loading-icon">{IconNode}</div>
            <div className="lyrixi-loading-content">
              {content ||
                `${LocaleUtil.locale('加载中', 'lyrixi_f013ea9dcba3f5ca1278aa850931fec8')}...`}
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

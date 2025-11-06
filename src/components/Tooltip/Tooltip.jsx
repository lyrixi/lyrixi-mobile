import React, { forwardRef, useRef, useEffect, useImperativeHandle, useState } from 'react'
import Popup from './Popup'
import updatePositionByReferenceDOM from './api/updatePositionByReferenceDOM'

const Tooltip = forwardRef(
  (
    {
      // 动画
      animation = 'slideDownLeft',
      style,
      referenceDOM: externalReferenceDOM,
      children,
      onOpen,
      onClose,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const childrenRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    // 非受控显隐
    let [open, setOpen] = useState(null)

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

    // 更新位置
    function updatePosition(argReferenceDOM) {
      // 参考元素
      let referenceDOM =
        typeof externalReferenceDOM === 'function' ? externalReferenceDOM() : externalReferenceDOM
      if (argReferenceDOM) {
        referenceDOM = argReferenceDOM
      }

      if (!referenceDOM) {
        let childrenDOM = childrenRef.current
        if (typeof childrenRef.current?.getRootDOM === 'function') {
          childrenDOM = childrenRef.current.getRootDOM()
        }
        referenceDOM = childrenDOM
      }

      // 位移元素
      let tooltipDOM =
        rootRef?.current?.children && rootRef?.current?.children[0]
          ? rootRef?.current?.children[0]
          : null

      if (referenceDOM && tooltipDOM) {
        // 没有自定义位置时生效
        if (!style?.left && !style?.top && !style?.right && !style?.bottom) {
          updatePositionByReferenceDOM(tooltipDOM, {
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
    let newChildren = React.Children.toArray(children)
    if (newChildren.length === 1) {
      newChildren = React.cloneElement(children, {
        ref: childrenRef,
        onClick: (e) => {
          // 没有自定义位置时生效
          if (!style?.left && !style?.top && !style?.right && !style?.bottom) {
            updatePosition(e.currentTarget)
          }
          setOpen(!open)
        }
      })
    } else {
      newChildren = children
    }

    return (
      <>
        <Popup
          animation={animation}
          style={style}
          open={typeof open === 'boolean' ? open : open}
          onClose={() => {
            setOpen(false)
          }}
          {...props}
          ref={rootRef}
        />
        {newChildren}
      </>
    )
  }
)

export default Tooltip

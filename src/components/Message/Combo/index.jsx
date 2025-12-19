import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import Header from './../Header'
import Main from './../Main'
import Footer from './../Footer'
import Icon from './../Icon'
import Title from './../Title'
import Button from './../Button'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const MessageCombo = forwardRef(
  (
    {
      children,
      iconRender,
      title,
      content,
      buttons,
      buttonsLayout = '', // vertical

      // 其它属性
      className,
      style
    },
    ref
  ) => {
    // 控制Modal显隐
    const [open, setOpen] = useState(null)

    const comboRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current,
        getElement: () => comboRef.current,
        ...modalRef.current,
        close: () => {
          setOpen(false)
        },
        open: () => {
          setOpen(true)
        }
      }
    })

    function handleClick() {
      setOpen(true)
    }

    // 获取图标节点
    function getIconNode() {
      if (typeof iconRender !== 'function') return null

      return <Icon>{iconRender()}</Icon>
    }
    const IconNode = getIconNode()

    return (
      <>
        <div
          ref={comboRef}
          style={style}
          className={DOMUtil.classNames('lyrixi-message-combo', className)}
          onClick={handleClick}
        >
          {children}
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          {(IconNode || title) && (
            <Header>
              {IconNode}
              {title && <Title>{title}</Title>}
            </Header>
          )}
          <Main>{content}</Main>
          {Array.isArray(buttons) && buttons.length && (
            <Footer layout={buttonsLayout}>
              {buttons.map((button, index) => {
                const { name, style, className, onClick } = button
                return (
                  <Button
                    key={button?.id ?? index}
                    style={style}
                    className={className}
                    onClick={async (e) => {
                      let newVisible = await onClick(e)
                      if (typeof newVisible === 'boolean') {
                        setOpen(!newVisible)
                      }
                    }}
                  >
                    {name}
                  </Button>
                )
              })}
            </Footer>
          )}
        </Modal>
      </>
    )
  }
)

export default MessageCombo

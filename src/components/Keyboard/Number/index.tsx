import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// 组件
import ButtonNumber from './ButtonNumber'
import ButtonAction from './ButtonAction'
import ButtonQuick from './ButtonQuick'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
import Page, { PageRef } from '../../Page'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil, SafeArea, Page, Icon } from 'lyrixi-mobile'
测试使用-end */

import type { KeyboardNumberProps, KeyboardNumberRef } from './types'

const KeyboardNumber = forwardRef<KeyboardNumberRef, KeyboardNumberProps>(
  (
    {
      safeArea = true,
      portal,
      value = '',
      onChange,
      dot,
      minus,
      okNode,
      okVisible,
      cancelNode,
      cancelVisible,
      onOk,
      onCancel,
      modalStyle,
      modalClassName,
      open,
      onOpen,
      onClose
    },
    ref
  ) => {
    const isDeleteInMainRef = useRef(false)

    const rootRef = useRef<PageRef | null>(null)


    useEffect(() => {
      if (open && onOpen) {
        onOpen()
      }
      // eslint-disable-next-line
    }, [open, onOpen])


    useEffect(() => {
      if (!open) return
      let openTime = Date.now()

      const handleOutsideClick = (event: MouseEvent) => {
        if (Date.now() - openTime < 100) return
        if (!rootRef.current?.element) return
        if (rootRef.current.element.contains(event.target as Node)) return
        if (onClose) {
          onClose()
        }
      }

      document.addEventListener('click', handleOutsideClick)

      return () => {
        document.removeEventListener('click', handleOutsideClick)
      }
    }, [open, onClose])


    useImperativeHandle(ref, () => ({
      element: rootRef.current?.element ?? null,
      getElement: () => rootRef.current?.element ?? null
    }))


    const handleNumber = (num: React.ReactNode) => {
      let newValue = value + String(num ?? '')
      if (onChange) {
        onChange(newValue, { action: 'number' })
      }
    }


    const handleDot = () => {
      const currentValue = value || ''
      const newValue = currentValue + '.'
      if (onChange) {
        onChange(newValue, { action: 'dot' })
      }
    }


    const handleMinus = () => {
      const currentValue = value || ''
      const newValue = currentValue + '-'
      if (onChange) {
        onChange(newValue, { action: 'minus' })
      }
    }


    const handleDelete = () => {
      let newValue = ''
      if (value.length > 0) {
        newValue = value.slice(0, -1)
      }
      if (onChange) {
        onChange(newValue, { action: 'delete' })
      }
    }


    const handleOk = async () => {
      if (onOk) {
        let goOn = await onOk(value)
        if (goOn === false) return
      }
      onClose?.()
    }


    const handleCancel = () => {
      if (onCancel) {
        onCancel()
      }
      if (onClose) {
        onClose()
      }
    }


    function renderOperateRow() {
      isDeleteInMainRef.current = true
      if (!okVisible && !dot && !minus) {
        return (
          <>
            <ButtonNumber className="lyrixi-keyboard-empty">{/* 空位 */}</ButtonNumber>
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }
      if (!okVisible && ((dot && !minus) || (!dot && minus))) {
        return (
          <>
            {dot && <ButtonNumber onClick={handleDot}>.</ButtonNumber>}
            {minus && <ButtonNumber onClick={handleMinus}>-</ButtonNumber>}
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }

      isDeleteInMainRef.current = false
      return (
        <>
          {dot ? (
            <ButtonNumber onClick={handleDot}>.</ButtonNumber>
          ) : (
            <ButtonNumber className="lyrixi-keyboard-empty"></ButtonNumber>
          )}
          <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
          {minus ? (
            <ButtonNumber onClick={handleMinus}>-</ButtonNumber>
          ) : (
            <ButtonNumber className="lyrixi-keyboard-empty"></ButtonNumber>
          )}
        </>
      )
    }


    const KeyboardNode = (
      <Page
        ref={rootRef}
        full={false}
        animation="slideUp"
        className={DOMUtil.classNames(
          'lyrixi-modal-animation lyrixi-bottom-center lyrixi-modal-keyboard-number',
          modalClassName,
          open ? 'lyrixi-active' : '',
          okVisible ? 'lyrixi-keyboard-has-ok' : ''
        )}
        style={modalStyle}
      >
        <Page.Header>
          {cancelVisible && (
            <ButtonQuick onClick={handleCancel}>
              {!cancelNode ? (
                <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-arrow-down" />
              ) : (
                cancelNode
              )}
            </ButtonQuick>
          )}
        </Page.Header>

        <Page full={false} layout="horizontal">
          <Page.Main>
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>1</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>2</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>3</ButtonNumber>
            </div>

            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>4</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>5</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>6</ButtonNumber>
            </div>

            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>7</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>8</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>9</ButtonNumber>
            </div>

            <div className="lyrixi-keyboard-main-row">{renderOperateRow()}</div>
          </Page.Main>

          <Page.Aside className="lyrixi-flex lyrixi-flex-vertical">
            {isDeleteInMainRef.current === false && (
              <ButtonAction className="lyrixi-delete" onClick={handleDelete}>
                <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-keyboard-delete" />
              </ButtonAction>
            )}

            {okVisible && (
              <ButtonAction className="lyrixi-ok" onClick={handleOk}>
                {okNode || LocaleUtil.locale('确定', 'lyrixi_38cf16f2204ffab8a6e0187070558721')}
              </ButtonAction>
            )}
          </Page.Aside>
        </Page>
        {safeArea && <SafeArea className="lyrixi-border-t" style={{ backgroundColor: 'white' }} />}
      </Page>
    )


    return createPortal(KeyboardNode, portal || document.getElementById('root') || document.body)
  }
)

export default KeyboardNumber

export type { KeyboardAction, KeyboardNumberProps, KeyboardNumberRef } from './types'

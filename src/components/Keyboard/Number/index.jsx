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
import Page from '../../Page'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil, SafeArea, Page, Icon } from 'lyrixi-mobile'
测试使用-end */

const KeyboardNumber = forwardRef(
  (
    {
      safeArea = true,
      portal,
      // 值控制
      value = '',
      onChange,

      // 按钮配置
      dot, // 小数点按钮
      minus, // 负号按钮
      ok,
      cancel,
      onOk,
      onCancel,

      // 遮罩配置
      modalStyle,
      modalClassName,

      // 显示控制
      open,
      onOpen,
      onClose
    },
    ref
  ) => {
    const isDeleteInMainRef = useRef(false)
    const rootRef = useRef(null)

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      ...rootRef.current
    }))

    // 处理open变化
    useEffect(() => {
      if (open && onOpen) {
        onOpen()
      }
      // eslint-disable-next-line
    }, [open, onOpen])

    // 处理点击键盘外部
    useEffect(() => {
      if (!open) return
      // 解决于click刚绑定就触发的问题, 因为click会冒泡到document上，所以刚绑定，冒泡后会触发click
      let openTime = Date.now()

      const handleOutsideClick = (event) => {
        // 忽略打开后 1秒 内的事件
        if (Date.now() - openTime < 100) return

        if (!rootRef.current?.rootDOM) return
        if (rootRef.current.rootDOM.contains(event.target)) return
        if (onClose) {
          onClose()
        }
      }

      // document.addEventListener('mousedown', handleOutsideClick)
      // document.addEventListener('touchend', handleOutsideClick)

      document.addEventListener('click', handleOutsideClick)

      return () => {
        // document.removeEventListener('mousedown', handleOutsideClick)
        // document.removeEventListener('touchend', handleOutsideClick)

        document.removeEventListener('click', handleOutsideClick)
      }
    }, [open, onClose])
    // 处理数字按键点击
    const handleNumber = (num) => {
      let newValue = value + num
      if (onChange) {
        onChange(newValue, { action: 'number' })
      }
    }

    // 处理小数点
    const handleDot = () => {
      const currentValue = value || ''
      const newValue = currentValue + '.'
      if (onChange) {
        onChange(newValue, { action: 'dot' })
      }
    }

    // 处理负号
    const handleMinus = () => {
      const currentValue = value || ''
      const newValue = currentValue + '-'
      if (onChange) {
        onChange(newValue, { action: 'minus' })
      }
    }

    // 处理删除按键
    const handleDelete = () => {
      let newValue = ''
      if (value.length > 0) {
        newValue = value.slice(0, -1)
      }
      if (onChange) {
        onChange(newValue, { action: 'delete' })
      }
    }

    // 处理确定按钮
    const handleOk = () => {
      if (onOk) {
        onOk(value)
      }
      if (onClose) {
        onClose()
      }
    }

    // 处理取消按钮
    const handleCancel = () => {
      if (onCancel) {
        onCancel()
      }
      if (onClose) {
        onClose()
      }
    }

    // 第四行 根据配置动态布局
    function getOperateRowNode() {
      isDeleteInMainRef.current = true
      // 当ok、dot、minus都没有时, 删除按钮放在右下角
      if (ok === null && !dot && !minus) {
        return (
          <>
            <ButtonNumber className="empty">{/* 空位 */}</ButtonNumber>
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }
      // 当没有ok, 但dot和minus有一个时, 删除按钮放在右下角, 其他按钮放在左下角
      if (ok === null && ((dot && !minus) || (!dot && minus))) {
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
      // 全都有时, 键盘区不显示删除按钮
      return (
        <>
          {dot ? (
            <ButtonNumber onClick={handleDot}>.</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
          <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
          {minus ? (
            <ButtonNumber onClick={handleMinus}>-</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
        </>
      )
    }

    // 构建键盘节点
    const KeyboardNode = (
      <Page
        ref={rootRef}
        animation="slideUp"
        className={DOMUtil.classNames(
          'lyrixi-modal-animation lyrixi-bottom-center lyrixi-keyboardNumberModal',
          modalClassName,
          open ? 'lyrixi-active' : '',
          ok !== null ? 'lyrixi-keyboard-has-ok' : ''
        )}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 顶部操作栏 */}
        <Page.Header>
          {cancel !== null && (
            <ButtonQuick onClick={handleCancel}>
              {cancel !== null ? (
                <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-arrow-down" />
              ) : (
                cancel
              )}
            </ButtonQuick>
          )}
        </Page.Header>

        {/* 键盘主体 */}
        <Page full={false} layout="horizontal">
          <Page.Main>
            {/* 第一行 1-3 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>1</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>2</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>3</ButtonNumber>
            </div>

            {/* 第二行 4-6 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>4</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>5</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>6</ButtonNumber>
            </div>

            {/* 第三行 7-9 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>7</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>8</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>9</ButtonNumber>
            </div>

            {/* 第四行 根据配置动态布局 */}
            <div className="lyrixi-keyboard-main-row">{getOperateRowNode()}</div>
          </Page.Main>

          <Page.Aside className="lyrixi-flex lyrixi-flex-vertical">
            {/* 删除键 - 只在有确定按钮时显示在侧边栏 */}
            {isDeleteInMainRef.current === false && (
              <ButtonAction className="lyrixi-delete" onClick={handleDelete}>
                <Icon className="lyrixi-keyboard-icon lyrixi-iconfont-keyboard-delete" />
              </ButtonAction>
            )}

            {/* 确定按钮 */}
            {ok !== null && (
              <ButtonAction className="lyrixi-ok" onClick={handleOk}>
                {ok || LocaleUtil.locale('确定', 'lyrixi_ok')}
              </ButtonAction>
            )}
          </Page.Aside>
        </Page>
        {safeArea && <SafeArea className="lyrixi-border-t" style={{ backgroundColor: 'white' }} />}
      </Page>
    )

    // 渲染到body
    return createPortal(KeyboardNode, portal || document.getElementById('root') || document.body)
  }
)

export default KeyboardNumber

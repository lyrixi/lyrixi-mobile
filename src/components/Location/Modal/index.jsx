import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Modal, SafeArea } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const LocationModal = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Status
      open,
      maskClosable,
      safeArea,
      allowClear,
      multiple,

      // Style
      modalClassName,
      modalStyle,
      maskStyle,
      maskClassName,

      // Element
      portal,
      config,
      getLocation,
      getAddress,

      // Events
      onOk,
      onChange,
      onClose
    },
    ref
  ) => {
    let [currentValue, setCurrentValue] = useState(value)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current,
        ...mainRef.current
      }
    })

    // 同步外部value到内部currentValue
    React.useEffect(() => {
      if (open) {
        setCurrentValue(value)
      }
    }, [open, value])

    async function handleOk() {
      // 触发 onOk
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Date) {
          currentValue = goOn
        }
      }

      onChange?.(currentValue)
      onClose?.()
    }

    async function handleClear() {
      currentValue = null
      handleOk()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue)
        }
        onClose && onClose()
      }
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Status
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        // Style
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-map-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Element
        portal={portal}
        title={
          open === 'choose'
            ? LocaleUtil.locale('选择地址', 'noKey_09365b9f2bfaf322a81c4e8c4e24f8fa')
            : LocaleUtil.locale('查看地址', 'noKey_f3b2bedbe2cae85daf7e3ad3a9d999ec')
        }
        // 选择模式下, 不允许清空显示右上角确定, 允许清空底部显示清空和确定
        okVisible={open === 'choose' && !allowClear ? true : false}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* Element: Main */}
        <Main
          ref={mainRef}
          // Status
          open={open}
          multiple={multiple}
          // Value & Display Value
          value={currentValue}
          // Element
          config={config}
          getLocation={getLocation}
          getAddress={getAddress}
          // Events
          onChange={handleChange}
          onOk={allowClear ? handleOk : null}
          onClear={allowClear ? handleClear : null}
        />
      </NavBarModal>
    )
  }
)

export default LocationModal

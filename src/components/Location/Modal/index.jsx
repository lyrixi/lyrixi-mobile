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
      cancel,
      config,
      getLocation,
      getAddress,

      // Events
      onChange,
      onClose
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(value)
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
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      onClose && onClose()
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
            ? LocaleUtil.locale('选择地址', 'lyrixi_choose_address')
            : LocaleUtil.locale('查看地址', 'lyrixi_view_address')
        }
        ok={open === 'choose' ? '' : null}
        cancel={cancel}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* Element: Main */}
        <Main
          ref={mainRef}
          // Status
          open={open}
          allowClear={allowClear}
          multiple={multiple}
          // Value & Display Value
          value={currentValue}
          // Element
          config={config}
          getLocation={getLocation}
          getAddress={getAddress}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default LocationModal

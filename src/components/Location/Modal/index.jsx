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
      // Modal
      open,
      onClose,
      onOpen,
      value,
      allowClear,
      multiple,
      onChange,

      modalClassName,
      modalStyle,

      // Main
      config,
      getLocation,
      getAddress,
      ...props
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
        title={
          open === 'choose'
            ? LocaleUtil.locale('选择地址', 'lyrixi_choose_address')
            : LocaleUtil.locale('查看地址', 'lyrixi_view_address')
        }
        {...props}
        ok={open === 'choose' ? '' : null}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
        modalClassName={DOMUtil.classNames('lyrixi-map-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          config={config}
          getLocation={getLocation}
          getAddress={getAddress}
        />
      </NavBarModal>
    )
  }
)

export default LocationModal

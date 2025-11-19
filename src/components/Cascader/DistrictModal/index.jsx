import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { formatType, compareType } from './../DistrictMain/utils'
import findDistrictLeafIndex from './../DistrictMain/utils/findDistrictLeafIndex'
import DistrictMain from './../DistrictMain'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// 级联选择
const DistrictModal = forwardRef(
  (
    {
      // Value & Display Value
      value,
      startType,
      type = 'street', // 'country', 'province', 'city', 'district', 'street'
      min = '',
      loadCountries,
      loadCountryRegions,
      loadStreets,
      editableOptions,

      // Status
      open,
      maskClosable,
      allowClear,
      multiple,

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      searchVisible,
      titleNode,
      okNode,
      cancelNode,
      cancelVisible,

      // Events
      onClose,
      onChange
    },
    ref
  ) => {
    // eslint-disable-next-line
    type = formatType(type)

    // 是否显示右上角确认按钮
    let [okVisible, setOkVisible] = useState(null)
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
        updateOkVisible(value)
      }
      // eslint-disable-next-line
    }, [open, value])

    // 根据min判断是否显示确定按钮
    function updateOkVisible(tabs) {
      // 没有值或者没有最小值限制, 则需要一直选到叶子节点, 不显示确定按钮
      if (!Array.isArray(tabs) || !tabs.length || !min) {
        setOkVisible(false)
        return
      }

      let newOkVisible = false

      // 比较类型, 判断是否显示确定按钮
      let currentTypes = tabs[tabs.length - 1]?.type
      if (currentTypes) {
        for (let currentType of currentTypes) {
          if (compareType(currentType, min) >= 0) {
            newOkVisible = true
            break
          }
        }
      }

      setOkVisible(newOkVisible)
    }

    // 加载完成后, 会更新value的值, 再更新Ok按钮显示状态
    function handleLoad() {
      updateOkVisible(currentValue)
    }

    // 下钻根据min更新Ok按钮显示状态
    function handleDrillDown(tabs) {
      updateOkVisible(tabs)
    }

    async function handleOk() {
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      onClose && onClose()
    }

    function handleChange(newValue, newArguments) {
      setCurrentValue(newValue)
      handleDrillDown(newValue)

      // 如果到达叶子节点，立即关闭
      if (!Array.isArray(newValue) || !newValue.length) return
      const leafIndex = findDistrictLeafIndex(newValue, type)
      if (typeof leafIndex === 'number') {
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
        // Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-cascader-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Element
        portal={portal}
        titleNode={titleNode}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        <DistrictMain
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          searchVisible={searchVisible}
          startType={startType}
          type={type}
          loadCountries={loadCountries}
          loadCountryRegions={loadCountryRegions}
          loadStreets={loadStreets}
          editableOptions={editableOptions}
          onLoad={handleLoad}
        />
      </NavBarModal>
    )
  }
)

export default DistrictModal

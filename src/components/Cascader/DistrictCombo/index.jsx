import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import {
  formatType,
  formatDistrictValue,
  findDistrictLeafIndex,
  testEditableOptions
} from './../DistrictMain/utils'
import DistrictModal from './../DistrictModal'

// 内库使用-start
import ArrayUtil from './../../../utils/ArrayUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 级联选择
const DistrictCombo = forwardRef(
  (
    {
      // Combo
      readOnly,

      // Modal
      portal,
      style,
      className,
      leftIcon,
      rightIcon,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      title,

      value,
      allowClear,
      multiple,
      onChange,

      min = '',
      searchVisible,

      // Main
      startType, // 开始于国家country, 省份province
      type = 'street', // 'country', 'province', 'city', 'district', 'street'
      loadCountries,
      loadCountryRegions,
      loadStreets,
      editableOptions,

      // Combo props
      clearRender,
      onBeforeOpen,
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line
    type = formatType(type)

    const [open, setOpen] = useState(false)
    // editableOptions需要根据list计算value的type, getList后才能计算value的type
    const listRef = useRef(null)
    let [readOnlyValue, setReadOnlyValue] = useState(null)
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        getReadOnlyValue: () => {
          return readOnlyValue
        },
        ...comboRef.current,
        ...modalRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    // 获取readOnlyValue
    useEffect(() => {
      if (_.isEmpty(value) || _.isEmpty(editableOptions)) return
      if (!comboRef.current?.getList) return

      // 查询列表后再更新readOnlyValue
      queryList()
      // eslint-disable-next-line
    }, [JSON.stringify(value)])

    async function queryList() {
      listRef.current = await comboRef.current?.getList(value)
      updateReadOnlyValue()
    }

    // 清空操作，保留只读项，清空非只读项
    async function updateReadOnlyValue() {
      if (_.isEmpty(value) || _.isEmpty(editableOptions) || !Array.isArray(listRef.current)) {
        return null
      }

      // 更新value的type属性
      // eslint-disable-next-line
      value = formatDistrictValue(value, listRef.current, type)

      // 清空只能清空非只读项
      let newValue = []
      for (let item of value) {
        let isEditable = testEditableOptions(item, {
          editableOptions
        })
        if (isEditable === false) {
          newValue.push(item)
        }
      }

      // 设置只读的值
      setReadOnlyValue(newValue)

      return newValue
    }

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    function handleChange(newValue, ...other) {
      // 清空操作，公能清空非只读项
      if (editableOptions && !newValue && Array.isArray(value) && value.length) {
        // 清空完成
        if (readOnlyValue?.length) {
          // eslint-disable-next-line
          newValue = readOnlyValue
        }
      }
      if (onChange) {
        onChange(newValue, ...other)
      }
    }

    return (
      <>
        <Input.Select
          ref={comboRef}
          {...props}
          style={style}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          value={value}
          onChange={handleChange}
          multiple={multiple}
          allowClear={allowClear}
          // 只读项与值一致, 并且已经下钻到最末经, 只读
          readOnly={(() => {
            if (!Array.isArray(readOnlyValue) || !Array.isArray(value)) return readOnly
            if (!ArrayUtil.isEqual(readOnlyValue, value)) return readOnly
            const leafIndex = findDistrictLeafIndex(value, type)
            return typeof leafIndex === 'number' ? true : readOnly
          })()}
          onClick={handleOpen}
          clearRender={(clearParams) => {
            let clearable = clearParams?.clearable

            // 只读项与值一致, 不允许清空
            if (Array.isArray(readOnlyValue) && ArrayUtil.isEqual(readOnlyValue, value)) {
              clearable = false
            }

            // 自定义显隐清空按钮
            if (typeof clearRender === 'function') {
              return clearRender({ ...clearParams, clearable: clearable })
            }

            // 默认清空按钮显隐
            return clearable === false ? null : undefined
          }}
        />
        <DistrictModal
          ref={modalRef}
          open={open}
          onClose={handleClose}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          portal={portal}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          className={modalClassName}
          style={modalStyle}
          title={title}
          startType={startType}
          type={type}
          min={min}
          searchVisible={searchVisible}
          loadCountries={loadCountries}
          loadCountryRegions={loadCountryRegions}
          loadStreets={loadStreets}
          editableOptions={editableOptions}
        />
      </>
    )
  }
)

export default DistrictCombo

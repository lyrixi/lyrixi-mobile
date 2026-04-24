import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, type CSSProperties, type ReactNode, type Ref } from 'react'
import { formatType } from './../DistrictMain/utils'
import updateOkVisible from './updateOkVisible'
import DistrictMain from './../DistrictMain'
import type { CascaderNode } from './../cascaderTypes'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

type LoadCountriesFn = () => Promise<import('../DistrictMain/utils/loadBaseData').ApiResult>
type LoadCountryRegionsFn = (id?: string | number) => Promise<import('../DistrictMain/utils/loadBaseData').ApiResult>
type LoadStreetsFn = (id: string | number, ctx?: { value?: CascaderNode[] }) => Promise<import('../DistrictMain/utils/loadBaseData').ApiResult>

export interface DistrictModalProps {
  value?: CascaderNode[] | null
  type?: string
  loadCountries?: LoadCountriesFn
  loadCountryRegions?: LoadCountryRegionsFn
  loadStreets?: LoadStreetsFn
  open?: boolean
  min?: string
  maskClosable?: boolean
  safeArea?: boolean
  listStyle?: CSSProperties
  listClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: string | boolean | HTMLElement | null
  searchVisible?: boolean
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  onClose?: () => void
  onOk?: (value: CascaderNode[] | null | undefined) => boolean | Promise<unknown> | void
  onChange?: (value: CascaderNode[]) => void
}

type DistrictMainHandle = { loadList: () => Promise<void>; list: unknown }

const DistrictModal = forwardRef<Record<string, unknown>, DistrictModalProps>(
  (
    {
      value,
      type: typeProp = 'street',
      loadCountries,
      loadCountryRegions,
      loadStreets,
      open,
      min = '',
      maskClosable,
      safeArea,
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      searchVisible,
      title,
      okNode,
      cancelNode,
      cancelVisible,
      onClose,
      onOk,
      onChange
    },
    ref
  ) => {
    const districtType = formatType(typeProp)

    const [okVisible, setOkVisible] = useState(false)
    const [currentValue, setCurrentValue] = useState<CascaderNode[] | null | undefined>(value as CascaderNode[] | null | undefined)
    const modalRef = useRef<unknown>(null)
    const mainRef = useRef<DistrictMainHandle | null>(null)

    useImperativeHandle(ref, () => {
      const a = (modalRef.current as Record<string, unknown> | null) ?? {}
      const b = (mainRef.current as Record<string, unknown> | null) ?? {}
      return { ...a, ...b }
    })

    useEffect(() => {
      setCurrentValue(value as CascaderNode[] | null | undefined)
    }, [value])

    useEffect(() => {
      setOkVisible(updateOkVisible(currentValue, min))
    }, [currentValue, min])

    function handleDrillDown(tabs: CascaderNode[] | null | undefined) {
      setOkVisible(updateOkVisible(tabs, min))
    }

    async function handleOk() {
      if (onOk) {
        const goOn = await onOk(currentValue)
        if (goOn === false) {
          return false
        }
      }

      onChange?.((currentValue ?? []) as CascaderNode[])
      onClose?.()
    }

    function handleChange(newValue: CascaderNode[]) {
      setCurrentValue(newValue)
      handleDrillDown(newValue)

      if (!Array.isArray(newValue) || !newValue.length) {
        return
      }
      const last = newValue[newValue.length - 1]
      if (last?.isLeaf || (Array.isArray(last?.type) && last.type.includes(districtType))) {
        onChange?.(newValue)
        onClose?.()
      }
    }

    return (
      <NavBarModal
        ref={modalRef as Ref<unknown> as never}
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-cascader', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        portal={portal}
        title={title}
        okNode={okNode}
        okVisible={okVisible}
        cancelNode={cancelNode}
        cancelVisible={cancelVisible}
        onClose={onClose}
        onOk={handleOk}
      >
        {open && (
          <DistrictMain
            ref={mainRef as Ref<DistrictMainHandle> as never}
            open={open}
            value={currentValue}
            type={districtType}
            loadCountries={loadCountries}
            loadCountryRegions={loadCountryRegions}
            loadStreets={loadStreets}
            listStyle={listStyle}
            listClassName={listClassName}
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            searchVisible={searchVisible}
            onChange={handleChange}
          />
        )}
      </NavBarModal>
    )
  }
)

export default DistrictModal

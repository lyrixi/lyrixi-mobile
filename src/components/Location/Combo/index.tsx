import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  Fragment
} from 'react'
import Modal from './../Modal'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import DOMUtil from './../../../utils/DOMUtil'
import Map from './../../Map'
import Input from './../../Input'
import LocaleUtil from './../../../utils/LocaleUtil'
import type { MapContainerProps } from './../../Map/components/MapContainer'
import type { MapPoint } from './../../Map/utils/coordsToWgs84'
import type { InputTextRef } from './../../Input/Text'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, DOMUtil, LocaleUtil, Input, Map } from 'lyrixi-mobile'
测试使用-end */

const {
  getAddress: defaultGetAddress,
  getLocation: defaultGetLocation,
  getSuperAddress: defaultGetSuperAddress,
  getSuperLocation: defaultGetSuperLocation,
  coordsToWgs84,
  wgs84ToCoords
} = Map

interface LocationValue {
  latitude?: number | string
  longitude?: number | string
  type?: string
  address?: string
  value?: string
  nearbyVisible?: boolean
  [key: string]: unknown
}

interface ComboProps {
  value?: LocationValue | null
  placeholder?: string
  type?: string
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  cacheExpires?: number
  mapConfig?: Record<string, unknown>
  autoSize?: boolean
  allowClear?: boolean
  disabled?: boolean
  editable?: boolean
  autoLocation?: boolean
  locationVisible?: boolean
  chooseVisible?: boolean | { nearbyVisible?: boolean }
  previewVisible?: boolean
  clickAction?: string
  className?: string
  modalClassName?: string
  modalStyle?: React.CSSProperties
  portal?: HTMLElement | null
  errorText?: string
  loadingText?: string
  onChange?: ((value: LocationValue | null) => void) | null
  onOpen?: (() => void) | null
  onClose?: (() => void) | null
  onLocationStatusChange?: ((status: string) => void) | null
  onError?: ((error: { status: string; message: string }) => void) | null
}

interface ComboRef {
  element: unknown
  getElement: () => unknown
}

type InputWithText = typeof Input & {
  Text: React.ComponentType<Record<string, unknown>>
}
const InputComp = Input as InputWithText

const LocationCombo = forwardRef<ComboRef, ComboProps>(
  (
    {
      value,
      placeholder,
      type = 'gcj02',
      getAddress,
      getLocation,
      cacheExpires,
      mapConfig,
      autoSize,
      allowClear,
      disabled = false,
      editable = false,
      autoLocation = false,
      locationVisible = true,
      chooseVisible = false,
      previewVisible = false,
      clickAction,
      className,
      modalClassName,
      modalStyle,
      portal = document.getElementById('root') || document.body,
      errorText = LocaleUtil.locale(
        '定位失败, 请检查定位权限是否开启',
        'lyrixi_a96a3989d602067144139bf31bf27121'
      ),
      loadingText = LocaleUtil.locale('定位中...', 'lyrixi_2c4006447f62bffd57686aabbdc3f5dd'),
      onChange,
      onOpen,
      onClose,
      onLocationStatusChange,
      onError
    },
    ref
  ) => {
    let address = value?.value || value?.address
    if (address && (!value?.value || !value?.address)) {
      value = { ...value, address, value: address }
    }

    const resolveGetAddress: NonNullable<MapContainerProps['getAddress']> =
      typeof getAddress === 'function'
        ? (getAddress as NonNullable<MapContainerProps['getAddress']>)
        : (cacheExpires ? defaultGetSuperAddress : defaultGetAddress) as NonNullable<
            MapContainerProps['getAddress']
          >
    const resolveGetLocation: NonNullable<MapContainerProps['getLocation']> =
      typeof getLocation === 'function'
        ? (getLocation as NonNullable<MapContainerProps['getLocation']>)
        : (cacheExpires ? defaultGetSuperLocation : defaultGetLocation) as NonNullable<
            MapContainerProps['getLocation']
          >

    const errMsgRef = useRef(errorText)

    let [locationStatus, setLocationStatus] = useState('1')

    const [modalOpen, setModalOpen] = useState('')

    const onChangeRef = useRef<((value: LocationValue | null) => void) | null | undefined>(onChange)
    onChangeRef.current = onChange
    const onErrorRef = useRef<((error: { status: string; message: string }) => void) | null | undefined>(onError)
    onErrorRef.current = onError

    const comboRef = useRef<InputTextRef | null>(null)
    useImperativeHandle(ref, () => {
      return {
        element: comboRef?.current?.getElement ? comboRef.current.getElement() : comboRef?.current,
        getElement: () => {
          let element: unknown = comboRef?.current
          if (comboRef?.current?.getElement) {
            element = comboRef.current.getElement()
          }
          return element
        }
      }
    })

    useEffect(() => {
      if (
        locationStatus === '0' &&
        value?.address &&
        value?.longitude &&
        value?.latitude &&
        value?.type
      ) {
        setLocationStatus('1')
      }
      // eslint-disable-next-line
    }, [value])

    useEffect(() => {
      if (modalOpen) {
        onOpen?.()
      } else if (modalOpen === '') {
        return
      } else {
        onClose?.()
      }
      // eslint-disable-next-line
    }, [modalOpen])

    useEffect(() => {
      if (autoLocation !== true) return
      handleAutoLocation()
      // eslint-disable-next-line
    }, [autoLocation])

    useEffect(() => {
      if (onLocationStatusChange) {
        onLocationStatusChange(locationStatus)
      }
      // eslint-disable-next-line
    }, [locationStatus])

    async function addAddress(val: LocationValue | null): Promise<LocationValue | string | null> {
      let newValue: LocationValue | string | null = val
      if (typeof newValue === 'object' && newValue?.longitude && newValue?.latitude) {
        const addrRes = await resolveGetAddress({
          cacheExpires,
          type: type,
          ...newValue
        })
        if (addrRes?.address) {
          newValue = {
            ...newValue,
            ...addrRes
          } as LocationValue
        } else {
          newValue = LocaleUtil.locale(
            '获取地址失败, 请稍后重试',
            'lyrixi_f1f199dd46c73946aa4b3140e98752a4'
          ) as string
        }
      }
      return newValue
    }

    async function handleAutoLocation() {
      if (value && value.latitude && value.longitude) {
        if (value.value || value.address) {
          if (onChangeRef?.current) {
            onChangeRef.current(value)
          }
        } else {
          locationStatus = '-1'
          setLocationStatus('-1')

          const newValue = await addAddress(value)
          updateValue(newValue)
        }
      } else {
        handleLocation('autoLocation')
      }
    }

    function handleClick(e: React.MouseEvent) {
      e.stopPropagation()
      if (locationStatus === '-1') return
      if (disabled) return

      if (editable) {
        if (locationStatus === '0') {
          locationStatus = '1'
          setLocationStatus('1')
        }
        return
      }

      if (clickAction === 'location') {
        handleLocation('clickInput')
        return
      }

      if (clickAction) {
        setModalOpen(clickAction)
        return
      }
    }

    function updateValue(_newValue: LocationValue | string | null) {
      let newValue: LocationValue | string | null =
        typeof _newValue === 'object' && _newValue?.longitude && _newValue?.latitude
          ? wgs84ToCoords(_newValue as LocationValue, type)
          : _newValue

      if (!newValue || typeof newValue === 'string' || !(newValue as LocationValue)?.longitude || !(newValue as LocationValue)?.latitude) {
        errMsgRef.current = typeof newValue === 'string' ? newValue : (errorText ?? '')
        if (onErrorRef?.current) {
          onErrorRef.current({
            status: 'error',
            message: `${errMsgRef.current}`
          })
        }
        locationStatus = '0'
        setLocationStatus('0')
        onChangeRef?.current && onChangeRef.current(null)
      } else {
        locationStatus = '1'
        setLocationStatus('1')

        const locVal = newValue as LocationValue
        if (locVal.address && !locVal.value) {
          locVal.value = locVal.address as string
        }
        onChangeRef?.current && onChangeRef.current(locVal)
      }
    }

    async function handleLocation(action: string) {
      locationStatus = '-1'
      setLocationStatus('-1')

      let newValue = (await resolveGetLocation({
        cacheExpires,
        action: action,
        type: type
      })) as LocationValue | null

      const withAddress = await addAddress(newValue)
      updateValue(withAddress)
    }

    function getRightIconNode(): React.ReactNode[] {
      if (disabled) return []
      const rightIconNode: React.ReactNode[] = []

      if (chooseVisible) {
        rightIconNode.push(
          <i
            key="choose"
            className={DOMUtil.classNames(
              'lyrixi-location-combo-icon',
              'lyrixi-location-combo-icon-choose',
              modalOpen === 'choose' ? 'lyrixi-active' : ''
            )}
            onClick={(e) => {
              e.stopPropagation()
              setModalOpen('choose')
            }}
          ></i>
        )
      }

      if (previewVisible) {
        rightIconNode.push(
          <i
            key="preview"
            className={DOMUtil.classNames(
              'lyrixi-location-combo-icon',
              'lyrixi-location-combo-icon-preview',
              ObjectUtil.isEmpty(value) ? 'lyrixi-disabled' : '',
              modalOpen === 'preview' ? 'lyrixi-active' : ''
            )}
            onClick={(e) => {
              e.stopPropagation()
              if (e.currentTarget.classList.contains('lyrixi-disabled')) return
              setModalOpen('preview')
            }}
          ></i>
        )
      }

      if (locationVisible) {
        rightIconNode.push(
          <i
            key="location"
            className={DOMUtil.classNames(
              'lyrixi-location-combo-icon',
              'lyrixi-location-combo-icon-location',
              locationStatus === '-1' ? 'lyrixi-active' : ''
            )}
            onClick={(e) => {
              e.stopPropagation()
              handleLocation('clickIcon')
            }}
          ></i>
        )
      }
      return rightIconNode
    }

    let statusNode: React.ReactNode = null
    if (locationStatus === '-1') {
      statusNode = (
        <div className="lyrixi-location-combo-positioning lyrixi-input-text">{loadingText}</div>
      )
    } else if (locationStatus === '0') {
      statusNode = (
        <div className="lyrixi-location-combo-error lyrixi-input-text">{errMsgRef.current}</div>
      )
    }

    const nearbyVisibleProp = typeof chooseVisible === 'object' ? chooseVisible?.nearbyVisible : undefined

    return (
      <Fragment>
        <InputComp.Text
          ref={comboRef}
          placeholder={placeholder}
          type={autoSize ? 'autoSize' : 'text'}
          rightIconNode={<>{getRightIconNode()}</>}
          inputRender={statusNode ? () => statusNode : undefined}
          value={value?.value || value?.address || ''}
          allowClear={allowClear}
          readOnly={!editable}
          disabled={disabled}
          className={DOMUtil.classNames(
            'lyrixi-location-combo-success',
            'lyrixi-location-combo',
            className,
            locationStatus === '-1' ? 'lyrixi-positioning' : ''
          )}
          onClick={handleClick}
          onChange={(address, event) => {
            if (event?.action === 'clickClear') {
              if (onChange) onChange(null)
              return
            }
            const newValue = ObjectUtil.cloneDeep(value) || ({} as LocationValue)
            newValue.value = address
            newValue.address = address
            if (onChange) onChange(newValue)
          }}
        />

        <Modal
          cacheExpires={cacheExpires}
          mapConfig={mapConfig}
          getAddress={resolveGetAddress}
          getLocation={resolveGetLocation}
          open={modalOpen}
          allowClear={allowClear}
          nearbyVisible={nearbyVisibleProp}
          modalClassName={modalClassName}
          modalStyle={modalStyle}
          portal={portal}
          value={value ? (coordsToWgs84(value as MapPoint, type) as LocationValue | null) : null}
          onClose={() => setModalOpen('')}
          onChange={(_newValue: LocationValue | null) => {
            const newValue = _newValue
              ? wgs84ToCoords(_newValue as MapPoint, type)
              : null

            if (newValue) {
              updateValue(newValue)
            } else {
              onChange && onChange(null)
            }
          }}
        />
      </Fragment>
    )
  }
)

export default LocationCombo

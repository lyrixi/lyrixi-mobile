import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  Fragment
} from 'react'
import _ from 'lodash'
import Modal from './../Modal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Map from './../../Map'
import Input from './../../Input'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Input, Map } from 'lyrixi-mobile'
测试使用-end */

const {
  getAddress: defaultGetAddress,
  getLocation: defaultGetLocation,
  coordsToWgs84,
  wgs84ToCoords
} = Map

// 定位控件
const LocationCombo = forwardRef(
  (
    {
      // 坐标类型
      type = 'gcj02',
      autoFit,
      // 地图加载修改
      config,
      // 获取定位和地址工具类
      getAddress,
      getLocation,
      // 显示定位按钮
      locationVisible = true,
      // 自动定位
      autoLocation = false,
      // 显示选择按钮
      chooseVisible = false,
      // 显示预览按钮
      previewVisible = false,
      // 提示信息配置
      failText = LocaleUtil.locale('定位失败, 请检查定位权限是否开启', 'lyrixi_location_failed'),
      loadingText = LocaleUtil.locale('定位中...', 'lyrixi_positioning'),

      // 点击整行触发的动作: location | choose | preview
      clickAction,
      disabled = false,
      editable = false,
      value, // {latitude: '纬度', longitude: '经度', value: '地址'}

      portal = document.getElementById('root') || document.body,
      onOpen,
      onClose,
      onLocationStatusChange,
      onChange,
      onError,

      // Modal
      modalClassName,
      modalStyle,

      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    let address = value?.value || value?.address
    // 格式化值
    if (address && (!value?.value || !value?.address)) {
      value.address = address
      value.value = address
    }

    // 获取定位和地址工具类
    // eslint-disable-next-line
    if (typeof getAddress !== 'function') getAddress = defaultGetAddress
    // eslint-disable-next-line
    if (typeof getLocation !== 'function') getLocation = defaultGetLocation

    // 错误信息
    const errMsgRef = useRef(failText)

    // 定位状态, -1.定位中; 0.定位失败时隐藏text框, 显示定位中或者定位失败的div; 1定位成功显示文本框
    let [locationStatus, setLocationStatus] = useState('1')

    // 显示预览preview、选择choose
    const [modalOpen, setModalOpen] = useState('')

    const onChangeRef = useRef()
    onChangeRef.current = onChange
    const onErrorRef = useRef()
    onErrorRef.current = onError

    // 节点
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef?.current,
        getComboDOM: () => {
          // div
          let comboDOM = comboRef?.current
          // Input.Text
          if (comboRef?.current?.getRootDOM) {
            comboDOM = comboRef.current.getRootDOM()
          }
          return comboDOM
        }
      }
    })

    // 失败后设置值, 可外部强制改为成功
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

    // 显隐回调
    useEffect(() => {
      if (modalOpen) {
        onOpen && onOpen()
      } else if (modalOpen === '') {
        // Don't trigger onClose on initial render
        return
      } else {
        onClose && onClose()
      }
      // eslint-disable-next-line
    }, [modalOpen])

    // 自动定位
    useEffect(() => {
      if (autoLocation !== true) return
      handleAutoLocation()
      // eslint-disable-next-line
    }, [autoLocation])

    // 定位状态
    useEffect(() => {
      if (onLocationStatusChange) {
        onLocationStatusChange(locationStatus)
      }
      // eslint-disable-next-line
    }, [locationStatus])

    // 获取位置
    async function addAddress(value) {
      let newValue = value
      if (typeof newValue === 'object' && newValue?.longitude && newValue?.latitude) {
        let addrRes = await getAddress({
          type: type,
          ...newValue
        })
        if (addrRes?.address) {
          newValue = {
            ...newValue,
            ...addrRes
          }
        } else {
          newValue = LocaleUtil.locale('获取地址失败, 请稍后重试', 'lyrixi_get_address_failed')
        }
      }
      return newValue
    }

    // 自动定位
    async function handleAutoLocation() {
      // 有经纬度, 补充address
      if (value && value.latitude && value.longitude) {
        // 有地址, 则定位完成
        if (value.value || value.address) {
          if (onChangeRef?.current) {
            onChangeRef.current(value)
          }
        }
        // 无地址, 则需要地址逆解析
        else {
          locationStatus = '-1'
          setLocationStatus('-1') // 定位中...

          let newValue = await addAddress(value)

          updateValue(newValue)
        }
      }
      // 定位并获取地址
      else {
        handleLocation('autoLocation')
      }
    }

    // 点击文本框
    function handleClick(e) {
      e.stopPropagation()
      // 正在定位不允许操作
      if (locationStatus === '-1') {
        return
      }

      // 禁用
      if (disabled) {
        return
      }

      // 点击输入
      if (editable) {
        if (locationStatus === '0') {
          // 非只读状态下, 点击错误面板, 允许手动输入位置
          locationStatus = '1'
          setLocationStatus('1')
        }
        return
      }

      // 点击整行定位
      if (clickAction === 'location') {
        handleLocation('clickInput')
        return
      }

      // 点击整行预览或选点
      if (clickAction) {
        setModalOpen(clickAction)
        return
      }
    }

    // Update new value
    function updateValue(_newValue) {
      // 转为国测局坐标
      let newValue =
        _newValue?.longitude && _newValue?.latitude ? wgs84ToCoords(_newValue, type) : _newValue

      // 定位失败
      if (!newValue?.longitude || !newValue?.latitude || typeof newValue === 'string') {
        errMsgRef.current = typeof newValue === 'string' ? newValue : failText
        if (onErrorRef?.current) {
          onErrorRef.current({
            errMsg: `getLocation:fail${errMsgRef.current}`
          })
        }
        locationStatus = '0'
        setLocationStatus('0')
        // 回调onChange
        onChangeRef?.current && onChangeRef.current(null)
      }
      // 定位成功
      else {
        locationStatus = '1'
        setLocationStatus('1')

        if (newValue.address && !newValue.value) {
          newValue.value = newValue.address
        }
        // 回调onChange
        onChangeRef?.current && onChangeRef.current(newValue)
      }
    }

    // 定位, isAutoLocation表示初始化时自动定位
    async function handleLocation(action) {
      // 定位中...
      locationStatus = '-1'
      setLocationStatus('-1')

      // 开始定位
      let newValue = await getLocation({
        action: action,
        type: type
      })

      // 获取地址信息
      newValue = await addAddress(newValue)

      updateValue(newValue)
    }

    // 定位和选择按钮
    function getRightIconNode() {
      if (disabled) return null
      let rightIconNode = []
      // 显示选择
      if (chooseVisible) {
        rightIconNode.push(
          <i
            key="choose"
            className={`lyrixi-location-combo-icon lyrixi-location-combo-icon-choose${
              modalOpen === 'choose' ? ' active' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setModalOpen('choose')
            }}
          ></i>
        )
      }
      // 显示预览
      if (previewVisible) {
        rightIconNode.push(
          <i
            key="preview"
            className={`lyrixi-location-combo-icon lyrixi-location-combo-icon-preview${
              _.isEmpty(value) ? ' disabled' : ''
            }${modalOpen === 'preview' ? ' active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              if (e.currentTarget.classList.contains('lyrixi-disabled')) return
              setModalOpen('preview')
            }}
          ></i>
        )
      }
      // 显示定位
      if (locationVisible) {
        rightIconNode.push(
          <i
            key="location"
            className={`lyrixi-location-combo-icon lyrixi-location-combo-icon-location${
              locationStatus === '-1' ? ' active' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation()
              handleLocation('clickIcon')
            }}
          ></i>
        )
      }
      return rightIconNode
    }

    // 加载和错误面板, 显示这些面板时将会隐藏文本框, 样式必须与文本框一致
    let statusNode = null
    if (locationStatus === '-1') {
      statusNode = (
        <div className={`lyrixi-location-combo-positioning lyrixi-input-text`}>{loadingText}</div>
      )
    } else if (locationStatus === '0') {
      statusNode = (
        <div className={`lyrixi-location-combo-error lyrixi-input-text`}>{errMsgRef.current}</div>
      )
    }

    return (
      <Fragment>
        <Input.Text
          type={autoFit ? 'autoFit' : 'text'}
          readOnly={!editable}
          disabled={disabled}
          onClick={handleClick}
          onChange={(address, event) => {
            if (event?.action === 'clickClear') {
              if (onChange) onChange(null)
              return
            }
            let newValue = _.cloneDeep(value)
            if (!newValue) {
              newValue = {}
            }
            newValue.value = address
            newValue.address = address
            if (onChange) onChange(newValue)
          }}
          value={value?.value || value?.address || ''}
          {...props}
          rightIcon={<>{getRightIconNode()}</>}
          className={DOMUtil.classNames(
            'lyrixi-location-combo-success',
            'lyrixi-location-combo',
            className,
            locationStatus === '-1' ? 'lyrixi-positioning' : ''
          )}
          inputRender={
            statusNode
              ? () => {
                  return statusNode
                }
              : null
          }
          ref={comboRef}
        />

        {/* 地图预览与选择 */}
        <Modal
          config={config}
          portal={portal}
          value={coordsToWgs84(value, type)}
          open={modalOpen}
          onOpen={() => {}}
          onClose={() => setModalOpen('')}
          onChange={(_newValue) => {
            // 转坐标
            let newValue = wgs84ToCoords(_newValue, type)

            // 选择地址后，更新显示状态
            if (newValue) {
              updateValue(newValue)
            }
            // 清空值
            else {
              onChange && onChange(null)
            }
          }}
          getAddress={getAddress}
          getLocation={getLocation}
          className={modalClassName}
          style={modalStyle}
        />
      </Fragment>
    )
  }
)

export default LocationCombo

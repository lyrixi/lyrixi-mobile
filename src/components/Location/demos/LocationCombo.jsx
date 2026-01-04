import React, { useRef, useState } from 'react'
import { Page, Location } from 'lyrixi-mobile'

// 底部
function LocationCombo() {
  const comboRef = useRef(null)
  const [value, setValue] = useState({
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '太平洋公园'

    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '天安门'

    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '天安门',

    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '南京烽火科技'
  })
  return (
    <Page>
      <Page.Main>
        <Location.Combo
          // editable
          // 获取定位和地址工具类
          type="wgs84"
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap'
          }}
          // config={{
          //   key: '',
          //   type: 'google'
          // }}
          // getLocation={({ type }) => {
          //   return { longitude: 116.397451, latitude: 39.909187, type: type }
          // }}
          // getAddress={(data) => {
          //   if (data?.value) {
          //     console.log(data)
          //     return data
          //   }
          //   return new Promise((resolve) => {
          //     setTimeout(() => {
          //       resolve({
          //         longitude: 118.74,
          //         latitude: 31.99,
          //         province: '江苏',
          //         provinceNumber: '',
          //         city: '南京',
          //         cityNumber: '',
          //         district: '建邺',
          //         districtNumber: '',
          //         street: '街道',
          //         streetNumber: '',
          //         address: '江苏省南京市建邺区云龙山路88号烽火科技大厦'
          //       })
          //     }, 1000)
          //   })
          // }}
          // modalProps={{
          //   safeArea: true,
          //   footer: ({ visible, triggerOk }) => {
          //     return visible === 'choose' ? (
          //       <Footer
          //         onOk={() => {
          //           triggerOk()
          //         }}
          //         onClear={() => {
          //           triggerOk(null)
          //         }}
          //       />
          //     ) : null
          //   },
          //   mainProps: {
          //     // autoLocation: false,
          //     zoom: 16
          //   }
          // }}
          // disabled
          allowClear
          autoFit
          // autoLocation
          clickAction="choose"
          // editable
          previewVisible
          chooseVisible
          // allowClear
          ref={comboRef}
          value={value}
          // 点击整行触发的动作: location | choose | preview
          onChange={(val) => {
            console.log('修改:', val)
            setValue(val)
          }}
          onVisibleChange={(visible) => {
            console.log('显隐:', visible)
          }}
          onLocationStatusChange={(status) => {
            console.log('定位状态:', status)
          }}
        />
      </Page.Main>
    </Page>
  )
}
export default LocationCombo

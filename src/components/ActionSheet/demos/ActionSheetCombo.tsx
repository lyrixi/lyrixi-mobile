import React, { useEffect, useState } from 'react'
import { Page, Device, ActionSheet, type ActionSheetItem } from 'lyrixi-mobile'

export default function ActionSheetComboDemo() {
  const list = [
    { id: '1', name: '测试Node' },
    { id: '2', name: '测试1' },
    { id: '3', name: '测试2' },
    { id: '4', name: '测试3' },
    { id: '5', name: '测试4' },
    { id: '6', name: '测试4' },
    { id: '7', name: '测试5' },
    { id: '8', name: '测试6' },
    { id: '9', name: '测试7' },
    { id: '10', name: '测试8' },
    { id: '11', name: '测试9' },
    { id: '12', name: '测试10' },
    { id: '13', name: '测试11' },
    { id: '14', name: '测试12' },
    { id: '15', name: '测试13' },
    { id: '16', name: '测试14' }
  ]
  const [value, setValue] = useState<ActionSheetItem | null>(null)

  useEffect(() => {
    if (Device.os === 'ios' && Device.compareVersion(Device.osVersion, '17') < 1) {
      alert('bad ios' + Device.osVersion)
    }
    if (Device.os === 'android' && Device.compareVersion(Device.osVersion, '9') < 1) {
      alert('bad android' + Device.osVersion)
    }
    if (Device.os === 'harmony' && Device.compareVersion(Device.osVersion, '19') < 1) {
      alert('bad harmony' + Device.osVersion)
    }
  }, [])

  return (
    <Page>
      <Page.Main>
        <ActionSheet.Combo
          placeholder="Please select"
          value={value}
          title="Please select"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
          // style={{ height: '100px', backgroundColor: '#f8f8f8' }}
          itemRender={(item, { onChange }) => {
            return (
              <ActionSheet.Item
                key={String(item?.id ?? '')}
                checked={item?.id === value?.id}
                disabled={item?.disabled}
                onClick={() => {
                  onChange(item)
                }}
              >
                Custom Node: {item.name}
              </ActionSheet.Item>
            )
          }}
        />
      </Page.Main>
    </Page>
  )
}

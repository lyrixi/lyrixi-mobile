import React, { useState } from 'react'
import { Page, Cascader, Loading, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '根节点',
      parentid: null
    },
    {
      id: '1-1',
      name: '子节点',
      parentid: '1'
    },
    {
      parentid: '1-1',
      name: '孙子节点',
      id: '1-1-1',
      isLeaf: true
    }
  ])

  // 加载街道
  function loadData(tabs) {
    return new Promise((resolve) => {
      console.log('loadData:', tabs)
      Loading.show()
      let lastTab = tabs?.[tabs?.length - 1]
      let streets = [
        {
          parentid: lastTab.id,
          name: '孙子节点',
          id: '1-1-1'
        }
      ]
      setTimeout(() => {
        Loading.hide()
      }, 100)
      resolve({
        status: 'success',
        list: streets
      })
    })
  }

  return (
    <Page>
      <Page.Main>
        <Cascader.Combo
          allowClear
          list={[
            {
              id: '1',
              name: '根节点',
              children: [
                {
                  id: '1-1',
                  name: '子节点'
                }
              ]
            }
          ]}
          loadData={loadData}
          value={value}
          placeholder={`Select`}
          onChange={(newValue) => {
            console.log('修改:', newValue)
            setValue(newValue)
          }}
          safeArea={true}
          title="级联选择"
          onClose={() => {
            console.log('onClose')
          }}
          clearRender={({ clearable, onClear }) => {
            return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
          }}
        />
      </Page.Main>
    </Page>
  )
}

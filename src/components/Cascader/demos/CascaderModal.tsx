import React, { useState } from 'react'
import { Page, Cascader, Loading } from 'lyrixi-mobile'
import type { CascaderNode, LoadDataResult } from './../cascaderTypes'

export default () => {
  const [value, setValue] = useState<CascaderNode[]>([
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

  function loadData(
    tabs: CascaderNode[],
    _ctx: { list: CascaderNode[] }
  ): Promise<LoadDataResult> {
    return new Promise((resolve) => {
      console.log('loadData:', tabs)
      Loading.show()
      const lastTab = tabs?.[tabs.length - 1]
      const leaves: CascaderNode[] = [
        {
          parentid: lastTab?.id,
          name: '孙子节点1',
          id: '1-1-1',
          isLeaf: true
        },
        {
          parentid: lastTab?.id,
          name: '孙子节点2',
          id: '1-1-2',
          isLeaf: true
        }
      ]
      setTimeout(() => {
        Loading.hide()
      }, 100)
      resolve({
        status: 'success',
        list: leaves
      })
    })
  }

  return (
    <Page>
      <Cascader.Modal
        open
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
        onChange={(newValue) => {
          console.log('修改:', newValue)
          setValue(newValue as CascaderNode[])
        }}
        safeArea
        title="级联选择"
      />
    </Page>
  )
}

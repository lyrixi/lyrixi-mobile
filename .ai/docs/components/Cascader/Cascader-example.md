# Cascader Example

以下示例位于本目录 `demos/`（由 `src/components/Cascader/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Cascader } from 'lyrixi-mobile'`

## demos/CascaderCombo.tsx

```tsx
import { useState } from 'react'

import { Page, Cascader, Loading, type CascaderItem, type LoadDataResult } from 'lyrixi-mobile'

export default function CascaderComboDemo() {
  const [value, setValue] = useState<CascaderItem[]>([
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
    tabs: CascaderItem[],
    _ctx: { list: CascaderItem[] }
  ): Promise<LoadDataResult> {
    return new Promise((resolve) => {
      console.log('loadData:', tabs)
      Loading.show()
      const lastTab = tabs?.[tabs.length - 1]
      const leaves: CascaderItem[] = [
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
      <Page.Main>
        <Cascader.Combo
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
          placeholder="Select"
          onChange={(newValue) => {
            console.log('修改:', newValue)
            setValue(newValue as CascaderItem[])
          }}
          safeArea
          title="级联选择"
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/CascaderModal.tsx

```tsx
import { useState } from 'react'

import { Page, Cascader, Loading, type CascaderItem, type LoadDataResult } from 'lyrixi-mobile'

export default function CascaderModalDemo() {
  const [value, setValue] = useState<CascaderItem[]>([
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
    tabs: CascaderItem[],
    _ctx: { list: CascaderItem[] }
  ): Promise<LoadDataResult> {
    return new Promise((resolve) => {
      console.log('loadData:', tabs)
      Loading.show()
      const lastTab = tabs?.[tabs.length - 1]
      const leaves: CascaderItem[] = [
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
          setValue(newValue as CascaderItem[])
        }}
        safeArea
        title="级联选择"
      />
    </Page>
  )
}
```

## demos/CascaderMain.tsx

```tsx
import { useState } from 'react'

import { Page, Cascader, Loading, type CascaderItem, type LoadDataResult } from 'lyrixi-mobile'

export default function CascaderMainDemo() {
  const [value, setValue] = useState<CascaderItem[]>([
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
    tabs: CascaderItem[],
    _ctx: { list: CascaderItem[] }
  ): Promise<LoadDataResult> {
    return new Promise((resolve) => {
      console.log('loadData:', tabs)
      Loading.show()
      const lastTab = tabs?.[tabs.length - 1]
      const leaves: CascaderItem[] = [
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
      <Cascader.Main
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
          setValue(newValue)
        }}
      />
    </Page>
  )
}
```

## demos/CascaderDistrictCombo.tsx

```tsx
import { useState, useEffect } from 'react'

import { Card, Divider, Page, Cascader, type CascaderItem } from 'lyrixi-mobile'

export default function CascaderDistrictComboDemo() {
  // 控件将会补充parentid和isDistrict, 所以顺序不能传错
  const [value1, setValue1] = useState<CascaderItem[]>([])
  const [value2, setValue2] = useState<CascaderItem[]>([])
  const [value3, setValue3] = useState<CascaderItem[]>([])
  const [value4, setValue4] = useState<CascaderItem[]>([])
  const [value5, setValue5] = useState<CascaderItem[]>([])
  const [value6, setValue6] = useState<CascaderItem[]>([])
  const [value7, setValue7] = useState<CascaderItem[]>([])
  const [value8, setValue8] = useState<CascaderItem[]>([])
  const [value9, setValue9] = useState<CascaderItem[]>([])

  useEffect(() => {
    setTimeout(() => {
      setValue1([
        {
          name: '中国',
          id: '86'
        },
        {
          name: '北京市',
          id: '110000'
        },
        {
          name: '东城区',
          id: '110101'
        },
        {
          name: 'Street1',
          id: '1'
        }
      ])
    }, 2000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>formatter</Divider>
          <Cascader.DistrictCombo
            // type={'country'}
            formatter={(value: unknown) => {
              const v = value as CascaderItem[] | undefined
              if (!v?.length) {
                return ''
              }
              console.log('formatter value: ', v)
              return v
                .filter((item) => {
                  const t = item.type
                  return !Array.isArray(t) || !(t as string[]).includes('country')
                })
                .map((item) => item.name)
                .join('-')
            }}
            value={value1}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue1(newValue as CascaderItem[])
            }}
            placeholder={'country'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>province</Divider>
          <Cascader.DistrictCombo
            type={'province'}
            value={value2}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue2(newValue as CascaderItem[])
            }}
            placeholder={'province'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>city</Divider>
          <Cascader.DistrictCombo
            type={'city'}
            value={value3}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue3(newValue as CascaderItem[])
            }}
            placeholder={'city'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>district</Divider>
          <Cascader.DistrictCombo
            type={'district'}
            value={value4}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue4(newValue as CascaderItem[])
            }}
            placeholder={'district'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>street</Divider>
          <Cascader.DistrictCombo
            type={'street'}
            value={value5}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue5(newValue as CascaderItem[])
            }}
            placeholder={'street'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>searchVisible</Divider>
          <Cascader.DistrictCombo
            searchVisible
            type="province"
            value={value6}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue6(newValue as CascaderItem[])
            }}
            placeholder={'searchVisible'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>disabled</Divider>
          <Cascader.DistrictCombo
            disabled
            value={value7}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue7(newValue as CascaderItem[])
            }}
            placeholder={'disabled'}
            allowClear
// ... 其余见 demos/CascaderDistrictCombo.tsx 全文
```

## demos/CascaderDistrictModal.tsx

```tsx
import { useState } from 'react'

import { Page, Cascader, type CascaderItem } from 'lyrixi-mobile'

export default function CascaderDistrictModalDemo() {
  const [value, setValue] = useState<CascaderItem[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Cascader.DistrictModal
          open
          value={value}
          onChange={(newValue) => {
            console.log('修改: ', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/CascaderDistrictMain.tsx

```tsx
import { useState } from 'react'

import { Page, Cascader, type CascaderItem } from 'lyrixi-mobile'

export default function CascaderDistrictMainDemo() {
  const [value, setValue] = useState<CascaderItem[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Cascader.DistrictMain
          value={value}
          onChange={(newValue) => {
            console.log('修改: ', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

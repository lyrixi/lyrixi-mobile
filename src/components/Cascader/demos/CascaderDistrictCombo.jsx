import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Card, Divider, Page, Cascader } from 'lyrixi-mobile'

export default () => {
  // 控件将会补充parentid和isDistrict, 所以顺序不能传错
  const [value1, setValue1] = useState([])
  const [value2, setValue2] = useState([])
  const [value3, setValue3] = useState([])
  const [value4, setValue4] = useState([])
  const [value5, setValue5] = useState([])
  const [value6, setValue6] = useState([])
  const [value7, setValue7] = useState([])
  const [value8, setValue8] = useState([])
  const [value9, setValue9] = useState([])

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
          name: '东华门街道',
          id: '110101001'
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
            type={'country'}
            formatter={(value) => {
              if (!value?.length) return ''
              console.log('formatter value: ', value)
              return value
                .filter((item) => !item?.type?.includes('country'))
                .map((item) => item.name)
                .join('-')
            }}
            value={value1}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue1(newValue)
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
              setValue2(newValue)
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
              setValue3(newValue)
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
              setValue4(newValue)
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
              setValue5(newValue)
            }}
            placeholder={'street'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>searchVisible</Divider>
          <Cascader.DistrictCombo
            searchVisible
            value={value6}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue6(newValue)
            }}
            placeholder={'searchVisible'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>disabled</Divider>
          <Cascader.DistrictCombo
            disabled={['country', 'province', 'city', 'district', 'street']}
            value={value7}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue7(newValue)
            }}
            placeholder={'disabled'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>min=&quot;city&quot;</Divider>
          <Cascader.DistrictCombo
            min="city"
            value={value8}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue8(newValue)
            }}
            placeholder={'min'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>zIndex</Divider>
          <Cascader.DistrictCombo
            value={value9}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue9(newValue)
            }}
            placeholder={'zIndex'}
            allowClear
            maskStyle={{ zIndex: '9' }}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}

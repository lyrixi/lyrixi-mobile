import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Card, Divider, Page, Cascader } from 'lyrixi-mobile'

export default () => {
  // 控件将会补充parentid和isDistrict, 所以顺序不能传错
  const [value, setValue] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setValue([
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
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'country'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>province</Divider>
          <Cascader.DistrictCombo
            type={'province'}
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'province'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>city</Divider>
          <Cascader.DistrictCombo
            type={'city'}
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'city'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>district</Divider>
          <Cascader.DistrictCombo
            type={'district'}
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'district'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>street</Divider>
          <Cascader.DistrictCombo
            type={'street'}
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'street'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>searchVisible</Divider>
          <Cascader.DistrictCombo
            searchVisible
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'searchVisible'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>disabled</Divider>
          <Cascader.DistrictCombo
            disabled={['country', 'province', 'city', 'district', 'street']}
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'disabled'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>min="city"</Divider>
          <Cascader.DistrictCombo
            min="city"
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
            }}
            placeholder={'min'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>zIndex</Divider>
          <Cascader.DistrictCombo
            value={value}
            onChange={(newValue) => {
              console.log('修改: ', newValue)
              setValue(newValue)
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

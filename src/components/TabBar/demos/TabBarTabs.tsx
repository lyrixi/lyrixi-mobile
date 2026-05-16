import React, { useState } from 'react'
import { Page, Divider, TabBar } from 'lyrixi-mobile'

import type { TabBarDemoTabsItemArg } from './TabBar.demos.types'

export default () => {
  const [value, setValue] = useState<TabBarDemoTabsItemArg>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarDemoTabsItemArg) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
        <TabBar.Tabs
          gap={12}
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>OverFlow</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Tabs
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Animal',
              name: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Tabs
          list={[
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <i className="lyrixi-iconfont-file-text"></i>,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}

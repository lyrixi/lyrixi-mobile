import React, { useState } from 'react'
import { Page, Divider, TabBar } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(value) {
    setValue(value)
  }
  return (
    <Page>
      <Page.Main>
        <Divider>OverFlow</Divider>
        <TabBar.Menus
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
        <TabBar.Menus
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
        <TabBar.Menus
          list={[
            {
              iconRender: () => (
                <i className="lyrixi-tabbar-menus-tab-icon lyrixi-icon-file-text"></i>
              ),
              id: 'Fruit'
            },
            {
              iconRender: () => (
                <i className="lyrixi-tabbar-menus-tab-icon lyrixi-icon-file-text"></i>
              ),
              id: 'Vegetable'
            },
            {
              iconRender: ({ checked }) =>
                checked ? (
                  <i className="lyrixi-tabbar-menus-tab-icon lyrixi-icon-close"></i>
                ) : (
                  <i className="lyrixi-tabbar-menus-tab-icon lyrixi-icon-plus"></i>
                ),
              id: 'Animal'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Menus
          list={[
            {
              iconRender: () => <i className="lyrixi-icon-file-text"></i>,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <i className="lyrixi-icon-file-text"></i>,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <i className="lyrixi-icon-file-text"></i>,
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

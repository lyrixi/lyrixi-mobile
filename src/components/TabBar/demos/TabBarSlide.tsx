import React, { useState } from 'react'
import { Page, Divider, TabBar, Icon, Icons, type TabBarItem } from 'lyrixi-mobile'

export default function TabBarSlideDemo() {
  const list = [
    {
      id: 'Fruit',
      name: 'Fruit'
    },
    { id: 'Vegetable', name: 'Vegetable', disabled: true },
    { id: 'Animal', name: 'Animal' }
  ]
  const [value, setValue] = useState<TabBarItem>({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(next: TabBarItem) {
    setValue(next)
  }
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Divider>OverFlow</Divider>
        <TabBar.Slide
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
        <TabBar.Slide
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
        <TabBar.Slide
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
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
        <TabBar.Slide
          list={[
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              iconRender: () => <Icon svg={Icons.FileText} size="xxxs" />,
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

        <Divider>Size s</Divider>
        <TabBar.Slide
          list={list}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
          className="lyrixi-s"
        />
      </Page.Main>
    </Page>
  )
}

import React, { useEffect } from 'react'
import { Button, Float, Page, Divider, Storage } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {}, [])

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Float</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Divider>Float</Divider>
        <Float
          draggable
          // gap={{
          //   top: 12,
          //   left: 0,
          //   right: 40,
          //   bottom: 80
          // }}
          style={{
            ...(Storage.getLocalStorage('pos') || {})
          }}
          // list={[
          //   {
          //     id: '1',
          //     iconRender: () => (
          //       <i className="lyrixi-float-button-icon lyrixi-float-button-icon-more"></i>
          //     )
          //   },
          //   {
          //     id: '2',
          //     name: '2',
          //     className: 'lyrixi-bg-primary lyrixi-color-white',
          //     iconRender: () => (
          //       <i className="lyrixi-icon lyrixi-iconfont-plus" style={{ opacity: '0.5' }}></i>
          //     )
          //   },
          //   {
          //     id: '3',
          //     name: '3',
          //     iconRender: () => <i className="lyrixi-icon lyrixi-iconfont-plus"></i>
          //   },
          //   {
          //     id: '4',
          //     name: '12345678',
          //     className: 'lyrixi-color-primary',
          //     children: [
          //       {
          //         id: '3-1',
          //         name: '3-1'
          //       }
          //     ]
          //   }
          // ]}
          onChange={(value) => {
            console.log(value)
          }}
          onDragEnd={(e) => {
            Storage.setLocalStorage('pos', e.position)
          }}
        >
          <Button
            color="white"
            backgroundColor="primary-lighten"
            iconClassName="lyrixi-iconfont-three-dots"
          >
            1
          </Button>
          <Button iconClassName="lyrixi-iconfont-plus">2</Button>
          <Button>3</Button>
        </Float>
      </Page.Main>
      <Page.Footer style={{ height: '100px' }}></Page.Footer>
    </Page>
  )
}

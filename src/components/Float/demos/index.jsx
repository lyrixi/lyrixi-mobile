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
          onDragEnd={(e) => {
            Storage.setLocalStorage('pos', e.position)
          }}
          className="lyrixi-flex-vertical"
        >
          <Button
            square
            size="l"
            radius="100%"
            color="white"
            iconPosition="top"
            backgroundColor="primary"
            borderColor="primary"
            iconClassName="lyrixi-iconfont-three-dots"
            onClick={(e) => {
              console.log(e)
            }}
          >
            1
          </Button>
          <Button
            square
            size="l"
            radius="100%"
            iconPosition="top"
            iconClassName="lyrixi-iconfont-plus"
            borderColor="default"
            onClick={(e) => {
              console.log(e)
            }}
            style={{
              marginTop: '16px'
            }}
          >
            2
          </Button>
          <Button
            square
            size="l"
            radius="100%"
            borderColor="default"
            onClick={(e) => {
              console.log(e)
            }}
            style={{
              marginTop: '16px'
            }}
          >
            3
          </Button>
        </Float>
      </Page.Main>
      <Page.Footer style={{ height: '100px' }}></Page.Footer>
    </Page>
  )
}

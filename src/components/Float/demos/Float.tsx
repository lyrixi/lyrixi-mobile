// @ts-nocheck
import React, { useEffect } from 'react'
import { Icon, Button, Float, Page, Divider, Storage, ActionSheet } from 'lyrixi-mobile'
import vconsole from 'vconsole'

new vconsole()

export default () => {
  useEffect(() => { }, [])

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
            sizeEqual
            direction="vertical"
            size="l"
            radius="100%"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Icon className="lyrixi-iconfont-three-dots" />1
          </Button>
          <Button
            sizeEqual
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
            <Icon className="lyrixi-iconfont-plus" />
            <Button.Text>2</Button.Text>
          </Button>
          <Button
            sizeEqual
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

        <Float
          draggable={true}
          gap={{ top: 8, right: 8, bottom: 88, left: 8 }}
          style={{
            left: 8
          }}
          portal={typeof document !== 'undefined' ? document.body : undefined}
        >
          <ActionSheet.Combo list={[{ id: '1', name: 'Sort by 1' }, { id: '2', name: 'Sort by 2' }]}
            comboRender={({ comboRef, onClick }) => {
              return <Button
                ref={comboRef}
                sizeEqual
                direction="vertical"
                size="xl"
                radius="100%"
                color="white"
                backgroundColor="primary"
                borderColor="primary"
                onClick={onClick}
              >
                <Icon className="lyrixi-iconfont-three-dots" />
              </Button>
            }}
            onChange={(newValue) => {
              console.log('onChange', newValue)
            }}
          />
        </Float>
      </Page.Main>
      <Page.Footer style={{ height: '100px' }}></Page.Footer>
    </Page>
  )
}

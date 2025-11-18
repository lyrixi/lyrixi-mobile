import React, { useState } from 'react'
import { Icon, Page, Divider, FooterBar } from 'lyrixi-mobile'

export default () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <FooterBar
          list={[
            {
              id: 'menu',
              name: '',

              iconClassName: 'lyrixi-iconfont-three-dots',
              children: [
                {
                  id: 'option1',
                  name: 'Option 1',
                  onClick: (e) => {
                    console.log('Option 1 clicked', e)
                  }
                },
                {
                  id: 'option2',
                  name: 'Option 2',
                  onClick: (e) => {
                    console.log('Option 2 clicked', e)
                  }
                }
              ]
            },
            {
              id: 'config',
              name: '',
              iconClassName: 'lyrixi-iconfont-config'
            },
            {
              id: 'ok',
              name: 'Ok',
              color: 'primary'
            },
            {
              id: 'cancel',
              name: 'Cancel',
              backgroundColor: 'transparent'
            }
          ]}
          onChange={(item) => {
            console.log('FooterBar item clicked:', item)
            setSelectedItem(item)
          }}
        />

        <Divider>Text Button disabled</Divider>
        <FooterBar
          list={[
            {
              id: 'menu-disabled',
              name: '',

              iconClassName: 'lyrixi-iconfont-three-dots',
              disabled: true,
              children: [
                {
                  id: 'option1',
                  name: 'Option 1',
                  onClick: (e) => {
                    console.log('Option 1 clicked', e)
                  }
                },
                {
                  id: 'option2',
                  name: 'Option 2',
                  onClick: (e) => {
                    console.log('Option 2 clicked', e)
                  }
                }
              ]
            },
            {
              id: 'config-disabled',
              name: '',

              iconClassName: 'lyrixi-iconfont-config',
              disabled: true
            },
            {
              id: 'ok-disabled',
              name: 'Ok',

              color: 'primary',
              disabled: true
            },
            {
              id: 'cancel-disabled',
              name: 'Cancel',

              disabled: true
            }
          ]}
          onChange={(item) => {
            console.log('FooterBar item clicked:', item)
          }}
        />

        <Divider>Button</Divider>
        <FooterBar
          list={[
            {
              id: 'more',
              name: 'More',

              iconClassName: 'lyrixi-iconfont-three-dots',
              children: [
                {
                  id: 'option1',
                  name: 'Option 1',
                  onClick: (e) => {
                    console.log('Option 1 clicked', e)
                  }
                },
                {
                  id: 'option2',
                  name: 'Option 2',
                  onClick: (e) => {
                    console.log('Option 2 clicked', e)
                  }
                }
              ]
            },
            {
              id: 'config-button',
              name: 'Config',

              iconClassName: 'lyrixi-iconfont-config'
            },
            {
              id: 'cancel-button',
              name: 'Cancel',
              backgroundColor: 'default'
            },
            {
              id: 'ok-button',
              name: 'Ok',
              backgroundColor: 'primary',
              color: 'white'
            }
          ]}
          onChange={(item) => {
            console.log('FooterBar item clicked:', item)
          }}
        />

        <Divider>Button disabled</Divider>
        <FooterBar
          list={[
            {
              id: 'more-disabled',
              name: 'More',

              iconClassName: 'lyrixi-iconfont-three-dots',
              disabled: true,
              children: [
                {
                  disabled: true,
                  id: 'option1',
                  name: 'Option 1',
                  onClick: (e) => {
                    console.log('Option 1 clicked', e)
                  }
                },
                {
                  id: 'option2',
                  name: 'Option 2',
                  onClick: (e) => {
                    console.log('Option 2 clicked', e)
                  }
                }
              ]
            },
            {
              id: 'config-disabled-button',
              name: 'Config',

              iconClassName: 'lyrixi-iconfont-config',
              disabled: true
            },
            {
              id: 'cancel-disabled-button',
              name: 'Cancel',

              disabled: true
            },
            {
              id: 'ok-disabled-button',
              name: 'Ok',
              backgroundColor: 'primary',
              color: 'white',
              disabled: true
            }
          ]}
          onChange={(item) => {
            console.log('FooterBar item clicked:', item)
          }}
        />
      </Page.Main>
    </Page>
  )
}

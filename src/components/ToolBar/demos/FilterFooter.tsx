import React from 'react'
import { Page, FooterBar, Icons, Button } from 'lyrixi-mobile'

export default function FilterFooterDemo() {
  return (
    <Page>
      <Page.Main>
        <FooterBar>
          <FooterBar.Button
            maskStyle={{ zIndex: 12 }}
            direction="vertical"
            fontSize="12px"
            list={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            <Button.Icon svg={Icons.ThreeDots} size="xxxs" />
            <Button.Text>More</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            direction="vertical"
            fontSize="12px"
            onClick={(e) => {
              console.log(e)
            }}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            <Button.Icon svg={Icons.Config} />
            <Button.Text>Config</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="filled"
            color="default"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="solid"
            color="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>
      </Page.Main>
    </Page>
  )
}
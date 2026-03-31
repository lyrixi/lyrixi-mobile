import React, { useRef } from 'react'
import { Page, ToolBar, Card } from 'lyrixi-mobile'

export default () => {
  const dropdownRef = useRef(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Dropdown</Card.Header>
          <Card.Main>
            <ToolBar>
              <ToolBar.Dropdown
                left={12}
                color="primary"
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown left
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={() => {
                return <div style={{ height: '300px' }}>Modal Content</div>
              }} ref={dropdownRef}>
                Dropdown ref
              </ToolBar.Dropdown>

              <ToolBar.Dropdown modalRender={() => {
                return <div style={{ height: '300px' }}>Modal Content</div>
              }}>Dropdown modal</ToolBar.Dropdown>

              <ToolBar.Dropdown
                right={12}
                modalRender={() => {
                  return <div style={{ height: '300px' }}>Modal Content</div>
                }}
              >
                Dropdown right
              </ToolBar.Dropdown>
            </ToolBar>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

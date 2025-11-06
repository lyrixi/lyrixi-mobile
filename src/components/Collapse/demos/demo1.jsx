import React, { useState } from 'react'
import { Divider, Page, Card, Button, Collapse } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Group(Controlled component)</Divider>
          <Button
            className="lyrixi-flex"
            color="primary"
            style={{ margin: '12px' }}
            onClick={() => setValue(2)}
          >
            Open Third
          </Button>
          {/* Group only allow single item appear */}
          <Collapse.Group value={value} style={{ margin: '0 12px' }} onChange={setValue}>
            <Collapse.Item title="One">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Two">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Three">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Four">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Collapse.Item>
          </Collapse.Group>
        </Card>

        <Card>
          <Divider>Group</Divider>
          {/* Group only allow single item appear */}
          <Collapse.Group style={{ margin: '0 12px' }}>
            <Collapse.Item title="One">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Two">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Three">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Four">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Collapse.Item>
          </Collapse.Group>
        </Card>

        <Card>
          <Divider>Item(Controlled component)</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              title="One"
              open={value === 0}
              onOpen={() => setValue(0)}
              onClose={() => setValue(null)}
            >
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Left Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item title="One" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item open={false} title="Two" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item open={false} title="Three" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item open={false} title="Four" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              arrowRender={() => <i className="lyrixi-icon lyrixi-icon-star-fill" />}
              title="Arrow ClassName"
            >
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Arrow ClassName
              </div>
            </Collapse.Item>
            <Collapse.Item
              open={false}
              arrowRender={() => {
                return (
                  <i
                    className="lyrixi-icon-star-fill"
                    style={{
                      fontSize: '14px',
                      color: '#f90'
                    }}
                  ></i>
                )
              }}
              title="Arrow Node"
            >
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Arrow Node
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              open={false}
              headerRender={({ open }) => {
                return (
                  <div
                    className="lyrixi-flex lyrixi-flex-middle"
                    style={{ height: 40, borderBottom: open ? '1px solid #e8e8e8' : 'none' }}
                  >
                    <div className="lyrixi-flex-1">Custom Header</div>
                    {open ? '^' : 'v'}
                  </div>
                )
              }}
            >
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Collapse.Item>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}

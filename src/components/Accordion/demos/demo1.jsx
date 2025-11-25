import React, { useState } from 'react'
import { Divider, Page, Card, Button, Accordion } from 'lyrixi-mobile'

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
          <Accordion.Group value={value} style={{ margin: '0 12px' }} onChange={setValue}>
            <Accordion.Item title="One">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Two">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Three">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Four">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Accordion.Item>
          </Accordion.Group>
        </Card>

        <Card>
          <Divider>Group</Divider>
          {/* Group only allow single item appear */}
          <Accordion.Group style={{ margin: '0 12px' }}>
            <Accordion.Item title="One">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Two">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Three">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Accordion.Item>
            <Accordion.Item title="Four">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Accordion.Item>
          </Accordion.Group>
        </Card>

        <Card>
          <Divider>Min Height</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion.Item title="Partial Collapse" open={false} minHeight={60}>
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 160 }}
              >
                Content keeps 60px visible when collapsed.
              </div>
            </Accordion.Item>
          </div>
        </Card>

        <Card>
          <Divider>Item(Controlled component)</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion.Item
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
            </Accordion.Item>
          </div>
        </Card>

        <Card>
          <Divider>Left Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion.Item title="One" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion.Item>
            <Accordion.Item open={false} title="Two" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Accordion.Item>
            <Accordion.Item open={false} title="Three" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Accordion.Item>
            <Accordion.Item open={false} title="Four" arrowPosition="left">
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Accordion.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion.Item
              arrowRender={({ open }) => <i className="lyrixi-icon lyrixi-iconfont-star-fill" />}
              title="Arrow ClassName"
            >
              <div
                className="lyrixi-flex lyrixi-flex-center lyrixi-flex-middle lyrixi-border-b"
                style={{ height: 100 }}
              >
                Arrow ClassName
              </div>
            </Accordion.Item>
            <Accordion.Item
              open={false}
              arrowRender={({ open }) => {
                return (
                  <i
                    className="lyrixi-iconfont-star-fill"
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
            </Accordion.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion.Item
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
            </Accordion.Item>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}

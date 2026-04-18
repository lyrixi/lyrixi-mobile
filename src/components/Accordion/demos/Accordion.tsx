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
            <Accordion ellipsis={{ expandText: 'Expand One', collapseText: 'Collapse One' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'Expand Two', collapseText: 'Collapse Two' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'Expand Three', collapseText: 'Collapse Three' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'Expand Four', collapseText: 'Collapse Four' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Accordion>
          </Accordion.Group>
        </Card>

        <Card>
          <Divider>Group</Divider>
          {/* Group only allow single item appear */}
          <Accordion.Group style={{ margin: '0 12px' }}>
            <Accordion ellipsis={{ expandText: 'View More', collapseText: 'Collapse' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'View More', collapseText: 'Collapse' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Second Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'View More', collapseText: 'Collapse' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Third Text
              </div>
            </Accordion>
            <Accordion ellipsis={{ expandText: 'View More', collapseText: 'Collapse' }}>
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Fourth Text
              </div>
            </Accordion>
          </Accordion.Group>
        </Card>

        <Card>
          <Divider>Min Height</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion
              open={false}
              minHeight={60}
              ellipsis={{ expandText: 'Expand', collapseText: 'Collapse' }}
            >
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 160 }}
              >
                Content keeps 60px visible when collapsed.
              </div>
            </Accordion>
          </div>
        </Card>

        <Card>
          <Divider>Accordion(Controlled component)</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion
              open={value === 0}
              onOpen={() => setValue(0)}
              onClose={() => setValue(null)}
              ellipsis={{ expandText: 'Open', collapseText: 'Close' }}
            >
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                First Text
              </div>
            </Accordion>
          </div>
        </Card>

        <Card>
          <Divider>Custom Ellipsis</Divider>
          <div style={{ margin: '0 12px' }}>
            <Accordion
              open={false}
              ellipsisRender={({ open, onClick }) => {
                return (
                  <div
                    className="lyrixi-flex lyrixi-flex-justify-center"
                    style={{
                      padding: '8px 0',
                      color: '#f90',
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}
                    onClick={onClick}
                  >
                    <i
                      className="lyrixi-iconfont-star-fill"
                      style={{ fontSize: '14px', marginRight: '4px' }}
                    />
                    {open ? 'Hide Content' : 'Show Content'}
                  </div>
                )
              }}
            >
              <div
                className="lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center lyrixi-border-b"
                style={{ height: 100 }}
              >
                Custom Ellipsis Render
              </div>
            </Accordion>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}

import React, { useRef, useState } from 'react'
import { Page, Calendar, Button } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default () => {
  const calendarRef = useRef(null)
  const [value, setValue] = useState()

  return (
    <Page>
      <Page.Main
        onTopRefresh={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 2000)
          })
        }}
      >
        <Calendar type="week" ref={calendarRef} value={value} onChange={setValue} />
        <Button
          className="lyrixi-flex"
          style={buttonStyle}
          onClick={() => {
            calendarRef.current.slidePrevious()
          }}
        >
          Previous
        </Button>
        <Button
          className="lyrixi-flex"
          style={buttonStyle}
          onClick={() => {
            calendarRef.current.slideNext()
          }}
        >
          Next
        </Button>
        <Button
          className="lyrixi-flex"
          style={buttonStyle}
          onClick={() => {
            calendarRef.current.slideExpand()
          }}
        >
          Expand
        </Button>
        <Button
          className="lyrixi-flex"
          style={buttonStyle}
          onClick={() => {
            calendarRef.current.slideCollapse()
          }}
        >
          Collapse
        </Button>
      </Page.Main>
    </Page>
  )
}

import React, { useRef, useState } from 'react'
import { Page, Calendar, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [rangeValue, setRangeValue] = useState(null)
  const [multipleValue, setMultipleValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>selectionMode range (Default)</Card.Header>
          <Card.Main>
            <Calendar value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>selectionMode range</Card.Header>
          <Card.Main>
            <Calendar selectionMode="range" value={rangeValue} onChange={setRangeValue} />
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>selectionMode multiple</Card.Header>
          <Card.Main>
            <Calendar selectionMode="multiple" value={multipleValue} onChange={setMultipleValue} />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

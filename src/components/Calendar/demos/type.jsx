import React, { useRef, useState } from 'react'
import { Page, Calendar, DateUtil, Card, Button } from 'lyrixi-mobile'

export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [weekValue, setWeekValue] = useState(null)
  const [monthValue, setMonthValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>type week</Card.Header>
          <Card.Main>
            <Calendar
              draggable={['horizontal']}
              type="week"
              value={weekValue}
              onChange={setWeekValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>type month</Card.Header>
          <Card.Main>
            <Calendar
              draggable={['horizontal']}
              type="month"
              value={monthValue}
              onChange={setMonthValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>weekStart: Sunday</Card.Header>
          <Card.Main>
            <Calendar weekStart="Sunday" value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

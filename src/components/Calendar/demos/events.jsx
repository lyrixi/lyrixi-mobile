import React, { useState } from 'react'
import { Page, Calendar, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [singleValue, setSingleValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>onChange</Card.Header>
          <Card.Main>
            <Calendar
              value={singleValue}
              onChange={(newValue, { action, currentDate }) => {
                console.log('修改:', { action, currentDate })
                setSingleValue(newValue)
              }}
            />
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>onPageChange</Card.Header>
          <Card.Main>
            <Calendar
              value={singleValue}
              onChange={setSingleValue}
              onPageChange={(drawDate, { type, pages }) => {
                console.log('视图变化:', { drawDate, type, pages })
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onError</Card.Header>
          <Card.Main>
            <Calendar
              min={DateUtil.add(new Date(), -2, 'year')}
              max={DateUtil.add(new Date(), 2, 'year')}
              value={singleValue}
              onChange={setSingleValue}
              onError={(error) => {
                console.log('错误:', error)
                Toast.show({ content: error.message })
                return false // 返回 false 阻止默认错误处理
              }}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

import React, { useState } from 'react'
import { Page, Calendar, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [singleValue, setSingleValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>onLoad</Card.Header>
          <Card.Main>
            <Calendar
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
              onLoad={(drawDate, { action, type, monthDates }) => {
                console.log('日历加载:', { drawDate, action, type, monthDates })
                Toast.show({ content: '日历加载完成' })
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onChange</Card.Header>
          <Card.Main>
            <Calendar
              selectionMode="single"
              value={singleValue}
              onChange={(newValue, { action, selectDate }) => {
                console.log('修改:', { action, selectDate })
                setSingleValue(newValue)
              }}
            />
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>onSlideChange</Card.Header>
          <Card.Main>
            <Calendar
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
              onSlideChange={(drawDate, { action, type, monthDates }) => {
                console.log('视图变化:', { drawDate, action, type, monthDates })
                Toast.show({ content: `视图变化: ${action}` })
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onError</Card.Header>
          <Card.Main>
            <Calendar
              min={new Date()}
              max={DateUtil.add(new Date(), 7, 'day')}
              selectionMode="single"
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

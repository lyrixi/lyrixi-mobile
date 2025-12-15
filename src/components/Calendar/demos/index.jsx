import React, { useRef, useState } from 'react'
import { Page, Calendar, DateUtil, Card, Button } from 'lyrixi-mobile'

export default () => {
  const [singleValue, setSingleValue] = useState(null)
  const [weekValue, setWeekValue] = useState(null)
  const [monthValue, setMonthValue] = useState(null)
  const [minMaxValue, setMinMaxValue] = useState(null)
  const [customValue, setCustomValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Week Type (周视图)</Card.Header>
          <Card.Main>
            <Calendar type="week" value={weekValue} onChange={setWeekValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month Type (月视图)</Card.Header>
          <Card.Main>
            <Calendar type="month" value={monthValue} onChange={setMonthValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>WeekStart: Sunday (周日开始)</Card.Header>
          <Card.Main>
            <Calendar weekStart="Sunday" value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Title Formatter (标题格式化)</Card.Header>
          <Card.Main>
            <Calendar titleFormatter="YYYY年MM月" value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Title Formatter (自定义标题格式化)</Card.Header>
          <Card.Main>
            <Calendar
              titleFormatter={(date, info) => {
                if (info.type === 'month') {
                  return DateUtil.format(date, 'YYYY年MM月')
                }
                return DateUtil.format(date, 'YYYY年MM月DD日 d 第W周')
              }}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>min & max (最小/最大日期)</Card.Header>
          <Card.Main>
            <Calendar
              min={new Date()}
              max={DateUtil.add(new Date(), 30, 'day')}
              value={minMaxValue}
              onChange={setMinMaxValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Draggable: horizontal only (仅水平拖动)</Card.Header>
          <Card.Main>
            <Calendar draggable={['horizontal']} value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Draggable: vertical only (仅垂直拖动)</Card.Header>
          <Card.Main>
            <Calendar draggable={['vertical']} value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Header Render (自定义头部渲染)</Card.Header>
          <Card.Main>
            <Calendar
              headerRender={({
                title,
                onPreviousMonth,
                onNextMonth,
                onPreviousYear,
                onNextYear
              }) => {
                return (
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}
                  >
                    <Button onClick={onPreviousYear}>Previous Year</Button>
                    <Button onClick={onPreviousMonth}>Previous Month</Button>
                    <span>{title}</span>
                    <Button onClick={onNextMonth}>Next Month</Button>
                    <Button onClick={onNextYear}>Next Year</Button>
                  </div>
                )
              }}
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Date Render (自定义日期渲染)</Card.Header>
          <Card.Main>
            <Calendar
              dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
                return (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#fff' : isCurrent ? '#1890ff' : '#000',
                      backgroundColor: isSelected ? '#1890ff' : 'transparent',
                      borderRadius: '4px'
                    }}
                  >
                    <div>{date.getDate()}</div>
                    {isCurrent && <div style={{ fontSize: '8px', color: '#1890ff' }}>今天</div>}
                  </div>
                )
              }}
              value={customValue}
              onChange={setCustomValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>allowClear false</Card.Header>
          <Card.Main>
            <Calendar allowClear={false} value={singleValue} onChange={setSingleValue} />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

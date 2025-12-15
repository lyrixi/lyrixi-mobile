import React, { useRef, useState } from 'react'
import { Page, Calendar, DateUtil, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const calendarRef = useRef(null)
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
            <Calendar
              type="week"
              selectionMode="single"
              value={weekValue}
              onChange={setWeekValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Month Type (月视图)</Card.Header>
          <Card.Main>
            <Calendar
              type="month"
              selectionMode="single"
              value={monthValue}
              onChange={setMonthValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>WeekStart: Sunday (周日开始)</Card.Header>
          <Card.Main>
            <Calendar
              weekStart="Sunday"
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Title Formatter (标题格式化)</Card.Header>
          <Card.Main>
            <Calendar
              titleFormatter="YYYY年MM月"
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
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
              selectionMode="single"
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
              selectionMode="single"
              value={minMaxValue}
              onChange={setMinMaxValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Draggable: horizontal only (仅水平拖动)</Card.Header>
          <Card.Main>
            <Calendar
              draggable={['horizontal']}
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Draggable: vertical only (仅垂直拖动)</Card.Header>
          <Card.Main>
            <Calendar
              draggable={['vertical']}
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
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
                    <button onClick={onPreviousYear}>上一年</button>
                    <button onClick={onPreviousMonth}>上一月</button>
                    <span>{title}</span>
                    <button onClick={onNextMonth}>下一月</button>
                    <button onClick={onNextYear}>下一年</button>
                  </div>
                )
              }}
              selectionMode="single"
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
              selectionMode="single"
              value={customValue}
              onChange={setCustomValue}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>onLoad (加载回调)</Card.Header>
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
          <Card.Header>onSlideChange (滑动变化回调)</Card.Header>
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
          <Card.Header>onError (错误回调)</Card.Header>
          <Card.Main>
            <Calendar
              min={new Date()}
              max={DateUtil.add(new Date(), 7, 'day')}
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
              onError={(error) => {
                console.log('错误:', error)
                Toast.show({ content: error.errMsg })
                return false // 返回 false 阻止默认错误处理
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Ref Methods (Ref 方法)</Card.Header>
          <Card.Main>
            <Calendar
              ref={calendarRef}
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  calendarRef.current?.slidePrevious()
                }}
              >
                上一月
              </button>
              <button
                onClick={() => {
                  calendarRef.current?.slideNext()
                }}
              >
                下一月
              </button>
              <button
                onClick={() => {
                  calendarRef.current?.slideExpand()
                }}
              >
                展开
              </button>
              <button
                onClick={() => {
                  calendarRef.current?.slideCollapse()
                }}
              >
                收起
              </button>
            </div>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>allowClear (允许清空)</Card.Header>
          <Card.Main>
            <Calendar
              allowClear={true}
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => {
                  setSingleValue(null)
                }}
              >
                清空选择
              </button>
            </div>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Style & ClassName (样式)</Card.Header>
          <Card.Main>
            <Calendar
              style={{ border: '2px solid #1890ff', borderRadius: '8px', padding: '10px' }}
              className="custom-calendar"
              selectionMode="single"
              value={singleValue}
              onChange={setSingleValue}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import dayjs from 'dayjs'
import {
  getTitle,
  formatDrawDate,
  isDisabledDate,
  isCurrentDate,
  slideX,
  slideY,
  sortRangeValue,
  Months,
  Weeks
} from './utils'
import Header from './Header'
import Body from './Body'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import DateUtil from './../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, DateUtil } from 'lyrixi-mobile'
测试使用-end */

const cellHeight = 40
const duration = 300

// 日历
const Calendar = (
  {
    // Modal: Status
    open,
    // Value & Display Value
    value,
    selectionMode, // single | multiple | range
    type = 'month', // week | month
    weekStart = 'Monday', // Monday | Sunday

    // Style
    style,
    className,

    // Status
    min, // 禁用之前日期
    max, // 禁用之后日期
    allowClear = true, // 是否允许清空
    draggable = ['horizontal', 'vertical'], // 是否允许垂直拖动

    // Elements
    titleFormatter = 'YYYY-MM', // 标题日期格式化 YYYY年MM月DD日 周E 第W周
    // 头部渲染
    headerRender,
    // 单个日期渲染
    dateRender,
    // Event: click date
    onChange,
    // Event: page change
    onPageChange,
    // Event: view change
    onError
  },
  ref
) => {
  // 容器
  const rootRef = useRef(null)

  // 当前日期，用于绘制日历
  let drawTypeRef = useRef(type)
  let [pages, setPages] = useState(null)
  let [drawDate, setDrawDate] = useState(null)

  // Expose Methods
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      slideCollapse: async () => {
        handleSlideY('collapse')
      },
      slideExpand: async () => {
        handleSlideY('expand')
      },
      slidePrevious: async () => {
        handlePreviousMonth()
      },
      slideNext: async () => {
        handleNextMonth()
      }
    }
  })

  // 视图
  useEffect(() => {
    drawTypeRef.current = type
    // eslint-disable-next-line
  }, [type])

  // 根据value重绘日历
  useEffect(() => {
    let newDrawDate = formatDrawDate(value, { min, max })
    setDrawDate(newDrawDate)
    // eslint-disable-next-line
  }, [value])

  // 根据drawDate重绘日历
  useEffect(() => {
    if (drawDate instanceof Date === false) {
      return
    }

    // 如果 drawDate 存在且在当前页，则不需要重新绘制日历
    if (pages && isCurrentDate(drawDate, pages?.[1])) {
      return
    }

    updatePages(drawDate)
    // eslint-disable-next-line
  }, [drawDate])

  // 重绘三页数据
  useEffect(() => {
    if (pages instanceof Array === false) {
      return
    }
    onPageChange?.(drawDate, {
      action: 'change',
      type: drawTypeRef.current,
      pages: pages
    })
    // eslint-disable-next-line
  }, [pages])

  // 上下滑动
  async function handleSlideY(action) {
    if (action === 'expand') {
      drawTypeRef.current = 'month'
    } else if (action === 'collapse') {
      drawTypeRef.current = 'week'
    }

    slideY(action, {
      duration: duration,
      currentPage: pages?.[1],
      cellHeight: cellHeight,
      bodyHeight: cellHeight * 6,
      drawDate: drawDate,
      body: rootRef.current?.querySelector?.('.lyrixi-calendar-body'),
      bodyY: rootRef.current?.querySelector?.('.lyrixi-calendar-body-y')
    })
  }

  // 左右滑动
  async function handleSlideX(action) {
    let newDrawDate = await slideX(action, {
      type: drawTypeRef.current,
      min: min,
      max: max,
      duration: duration,
      currentPage: pages?.[1],
      drawDate: drawDate,
      container: rootRef.current,
      bodyX: rootRef.current?.querySelector?.('.lyrixi-calendar-body-x'),
      bodyY: rootRef.current?.querySelector?.('.lyrixi-calendar-body-y'),
      cellHeight: cellHeight,
      onError: onError
    })

    return newDrawDate
  }

  // 更新视图后, 触发SlideChange
  // function triggerSlideChange(action, { drawDate: newDrawDate } = {}) {
  //   setDrawDate(newDrawDate)
  // }

  // Last month or week
  async function handlePreviousMonth(e) {
    e && e.stopPropagation()
    let newDrawDate = await handleSlideX('previous')
    // 重绘日历
    setDrawDate(newDrawDate)
  }

  // Next month or week
  async function handleNextMonth(e) {
    e && e.stopPropagation()
    let newDrawDate = await handleSlideX('next')
    // 重绘日历
    setDrawDate(newDrawDate)
  }

  // Last year
  function handlePreviousYear(e) {
    e && e.stopPropagation()
    let lastYear = dayjs(drawDate).subtract(1, 'year')
    let newDrawDate = lastYear.toDate()

    // 访问禁止日期
    let error = isDisabledDate(newDrawDate, { min, max })
    if (error) {
      console.log(error?.message)
      return
    }

    // 重绘日历
    setDrawDate(newDrawDate)
  }

  // Next year
  function handleNextYear(e) {
    e && e.stopPropagation()
    let nextYear = dayjs(drawDate).add(1, 'year')
    let newDrawDate = nextYear.toDate()

    // 访问禁止日期
    let error = isDisabledDate(newDrawDate, { min, max })
    if (error) {
      console.log(error?.message)
      return
    }

    // 重绘日历
    setDrawDate(newDrawDate)
  }

  // 更新三页数据, 以及选中日期
  function updatePages(newDrawDate) {
    if (!newDrawDate) {
      // eslint-disable-next-line
      newDrawDate = value || new Date()
    }

    let months = Months.getMonths(newDrawDate, { weekStart: weekStart })
    let newPages = Months.paginateMonths(months, {
      weekStart: weekStart,
      drawDate: newDrawDate,
      type: drawTypeRef.current
    })

    // 更新三页数据, 以及选中日期
    setPages(newPages)
  }

  return (
    <div
      ref={rootRef}
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-calendar',
        className,
        selectionMode ? `lyrixi-calendar-mode-${selectionMode}` : ''
      )}
    >
      {typeof headerRender === 'function' ? (
        headerRender({
          title: getTitle(drawDate, titleFormatter, { type: drawTypeRef.current }),
          onPreviousMonth: handlePreviousMonth,
          onNextMonth: handleNextMonth,
          onPreviousYear: handlePreviousYear,
          onNextYear: handleNextYear,
          drawDate,
          titleFormatter
        })
      ) : (
        <Header
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
          onPreviousYear={handlePreviousYear}
          onNextYear={handleNextYear}
        >
          {getTitle(drawDate, titleFormatter, { type: drawTypeRef.current })}
        </Header>
      )}
      <div className="lyrixi-calendar-days">
        {Weeks.getWeekNames(weekStart).map((dayName) => {
          return (
            <div key={dayName} className="lyrixi-calendar-day">
              {dayName}
            </div>
          )
        })}
      </div>
      <Body
        // Modal: Status
        open={open}
        // Value & Display Value
        pages={pages}
        selectionMode={selectionMode}
        value={value}
        // Status
        cellHeight={cellHeight}
        min={min}
        max={max}
        draggable={draggable}
        allowClear={allowClear}
        // Elements
        dateRender={dateRender}
        // Events
        onChange={(date, { action } = {}) => {
          // 清空
          if (action === 'clear') {
            // 多选模式, 仅清空当前点击日期, 不改变其他选中日期
            if (selectionMode === 'multiple') {
              onChange?.(
                (value || []).filter((selectedDate) => DateUtil.compare(selectedDate, date) !== 0),
                { currentDate: date, action: 'clear' }
              )
            }
            // 单选和range模式, 清空当前选中日期
            else {
              onChange?.(null, { currentDate: date, action: 'clear' })
            }
            return
          }
          // 选择日期
          let newValue = date
          let newDrawDate = date

          // Range select
          if (selectionMode === 'range') {
            newValue = sortRangeValue(date, value)
            newDrawDate = newValue[0]
            onChange && onChange(newValue, { currentDate: date, action: 'select' })
          }
          // Multiple select
          else if (selectionMode === 'multiple') {
            newValue = [...(value || []), date]
            onChange && onChange(newValue, { currentDate: date, action: 'select' })
          }
          // Date select
          else {
            onChange && onChange(newValue, { currentDate: date, action: 'select' })
          }
        }}
        // Event: view change
        onSlideX={async (action) => {
          if (action === 'previous') {
            handlePreviousMonth()
          } else if (action === 'next') {
            handleNextMonth()
          } else {
            handleSlideX('')
          }
        }}
        onSlideY={async (action) => {
          if (!action) {
            if (drawTypeRef.current === 'week') {
              // eslint-disable-next-line
              action = 'collapse'
            } else {
              // eslint-disable-next-line
              action = 'expand'
            }
          }
          if (action === 'expand') {
            handleSlideY('expand')
          } else if (action === 'collapse') {
            handleSlideY('collapse')
          }
        }}
        // Expand or collapse
        onToggle={(e) => {
          if (drawTypeRef.current === 'month') {
            handleSlideY('collapse')
          } else {
            handleSlideY('expand')
          }
          e.stopPropagation()
        }}
      />
    </div>
  )
}

export default forwardRef(Calendar)

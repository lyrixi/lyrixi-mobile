import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import dayjs from 'dayjs'
import {
  getTitle,
  formatDrawDate,
  isDisabledDate,
  isInCurrentPage,
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
import LocaleUtil from './../../utils/LocaleUtil'
import DateUtil from './../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, DateUtil } from 'lyrixi-mobile'
测试使用-end */

const cellHeight = 40
const duration = 300

// 日历
const Calendar = forwardRef(
  (
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
      // Event: listener the view change
      onLoad,
      // Event: click date
      onChange,
      // Event: view change
      onSlideChange,
      onError
    },
    ref
  ) => {
    console.log('value:', value)
    // 容器
    const rootRef = useRef(null)

    // 当前日期，用于绘制日历
    let pagesRef = useRef(null)
    let drawTypeRef = useRef(type)
    let [drawDate, setDrawDate] = useState(null)

    // Expose Methods
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        slideCollapse: async () => {
          handleCollapse()
        },
        slideExpand: async () => {
          handleExpand()
        },
        slidePrevious: async () => {
          handlePreviousMonth()
        },
        slideNext: async () => {
          handleNextMonth()
        }
      }
    })

    // 修改选中值时需要刷新日历的位置
    useEffect(() => {
      // 获取新的绘制日期
      let newDrawDate = formatDrawDate(value, { min, max })

      // 如果 drawDate 存在且在当前页，则不需要重新绘制日历
      if (pagesRef.current && isInCurrentPage(newDrawDate, pagesRef.current)) {
        setDrawDate(newDrawDate)
        return
      }

      // 更新pages
      updatePages(newDrawDate)

      // 第一次加载
      if (!drawDate) {
        drawTypeRef.current = type
        onLoad &&
          onLoad(newDrawDate, {
            action: 'load',
            type: drawTypeRef.current,
            monthDates: pagesRef.current?.[1]?.flat?.() || null
          })
      }

      // 更新Y轴位置会读取drawDate, 所以要先更新
      // eslint-disable-next-line
      drawDate = newDrawDate

      // 更新Y轴位置, X轴位置已经固定无需矫正
      if (drawTypeRef.current === 'month') {
        handleSlideY('expand')
      } else {
        handleSlideY('collapse')
      }

      // eslint-disable-next-line
    }, [JSON.stringify(value)])

    // 上下滑动
    async function handleSlideY(action) {
      let newType = ''
      if (action === 'expand') {
        newType = 'month'
      } else if (action === 'collapse') {
        newType = 'week'
      } else {
        newType = drawTypeRef.current
      }

      slideY(action, {
        duration: duration,
        currentPage: pagesRef.current[1],
        cellHeight: cellHeight,
        bodyHeight: cellHeight * 6,
        drawDate: drawDate,
        body: rootRef.current?.querySelector?.('.lyrixi-calendar-body'),
        bodyY: rootRef.current?.querySelector?.('.lyrixi-calendar-body-y')
      })

      return newType
    }

    // 左右滑动
    async function handleSlideX(action) {
      let newDrawDate = await slideX(action, {
        type: drawTypeRef.current,
        min: min,
        max: max,
        duration: duration,
        currentPage: pagesRef.current[1],
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
    function triggerSlideChange(action, { drawDate: newDrawDate } = {}) {
      if (newDrawDate) {
        updatePages(newDrawDate)
      }
      if (onSlideChange) {
        onSlideChange(newDrawDate || drawDate, {
          action: action,
          type: drawTypeRef.current,
          monthDates: pagesRef.current?.[1]?.flat?.() || null
        })
      }
    }

    // Last month or week
    async function handlePreviousMonth(e) {
      e && e.stopPropagation()
      let newDrawDate = await handleSlideX('previous')

      // 访问禁止日期
      if (DateUtil.compare(newDrawDate, drawDate) === 0) {
        // 是否需要校验
        let error = {
          code: 'CALENDAR_PREVIOUS_MONTH_ERROR',
          message: LocaleUtil.locale(
            `禁止访问${DateUtil.format(newDrawDate, 'YYYY年MM月DD日')}`,
            'lyrixi.access.error',
            [DateUtil.format(newDrawDate, 'YYYY年MM月DD日')]
          )
        }
        if (typeof onError === 'function') {
          let isOk = onError(error)
          if (isOk === true) error = null
        }
        if (error) {
          console.log(error.message)
          return
        }

        console.log(`禁止访问${DateUtil.format(newDrawDate, 'YYYY年MM月DD日')}`)
        return
      }

      // Trigger onSlideChange
      triggerSlideChange('previousMonth', { drawDate: newDrawDate })
    }
    // Next month or week
    async function handleNextMonth(e) {
      e && e.stopPropagation()
      let newDrawDate = await handleSlideX('next')

      // 访问禁止日期
      if (DateUtil.compare(newDrawDate, drawDate) === 0) {
        // 是否需要校验
        let error = {
          code: 'CALENDAR_NEXT_MONTH_ERROR',
          message: LocaleUtil.locale(
            `禁止访问${DateUtil.format(newDrawDate, 'YYYY年MM月DD日')}`,
            'lyrixi.access.error',
            [DateUtil.format(newDrawDate, 'YYYY年MM月DD日')]
          )
        }
        if (typeof onError === 'function') {
          let isOk = onError(error)
          if (isOk === true) error = null
        }
        if (error) {
          return
        }
      }

      // Trigger onSlideChange
      triggerSlideChange('nextMonth', { drawDate: newDrawDate })
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

      // Trigger onSlideChange
      triggerSlideChange('previousYear', { drawDate: newDrawDate })
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

      // Trigger onSlideChange
      triggerSlideChange('nextYear', { drawDate: newDrawDate })
    }
    // Collapse and expand
    async function handleCollapse() {
      let newDrawType = await handleSlideY('collapse')
      drawTypeRef.current = newDrawType

      // Trigger onSlideChange
      triggerSlideChange('collapse')
    }
    async function handleExpand() {
      let newDrawType = await handleSlideY('expand')
      drawTypeRef.current = newDrawType

      // Trigger onSlideChange
      triggerSlideChange('expand')
    }

    // 更新三页数据, 以及选中日期
    function updatePages(newDrawDate) {
      if (!newDrawDate) {
        // eslint-disable-next-line
        newDrawDate = value || new Date()
      }

      let months = Months.getMonths(newDrawDate, { weekStart: weekStart })
      let pages = Months.paginateMonths(months, {
        weekStart: weekStart,
        drawDate: newDrawDate,
        type: drawTypeRef.current
      })

      // 更新三页数据, 以及选中日期
      pagesRef.current = pages
      setDrawDate(newDrawDate)
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
          pages={pagesRef.current}
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
                  (value || []).filter(
                    (selectedDate) => DateUtil.compare(selectedDate, date) !== 0
                  ),
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

            // 跨月视图发生变化, 需要触发onSlideChange
            // if (DateUtil.compare(newDrawDate, drawDate, 'month') !== 0) {
            //   drawDate = newDrawDate
            //   triggerSlideChange('change', { drawDate: newDrawDate })

            //   // 更新Y轴位置, X轴位轴在Body组件内位移
            //   if (drawTypeRef.current === 'week') {
            //     handleSlideY('collapse')
            //   }
            // }
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
              handleExpand()
            } else if (action === 'collapse') {
              handleCollapse()
            }
          }}
          // Expand or collapse
          onToggle={(e) => {
            if (drawTypeRef.current === 'month') {
              handleCollapse()
            } else {
              handleExpand()
            }
            e.stopPropagation()
          }}
        />
      </div>
    )
  }
)

export default Calendar

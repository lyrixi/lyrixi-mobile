"use strict";(self.webpackChunklyrixi_mobile=self.webpackChunklyrixi_mobile||[]).push([[9049],{28273:function(e,n,t){t.r(n);function l(){for(var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=a.center,s=a.radius,c=s===void 0?1e3:s,u=a.count,d=u===void 0?110:u,r=(o==null?void 0:o.latitude)||31.990374883871525,g=(o==null?void 0:o.longitude)||118.73769931504451,m=[],i=0;i<d;i++){var p=Math.random()*Math.PI*2,f=Math.random()*c,y=r+f/111300*Math.sin(p),b=g+f/111300*Math.cos(p)/Math.cos(r*Math.PI/180);m.push({latitude:y,longitude:b,name:"\u968F\u673A\u70B9"+i,address:"\u968F\u673A\u5730\u5740".concat(i),type:"gcj02"})}return m}n.default=l},83633:function(e,n,t){t.r(n),n.default=[{avatar:"https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3",id:"Option",name:"Option",description:"Description",content:"Custom Content"},{name:"This is group title",children:[{id:"Group-Option",name:"Group-Option",description:"\u5206\u7EC4\u5185\u90E8\u63CF\u8FF0"},{id:"Group-Option2",name:"Group-Option2"}]},{id:"Option2",name:"Option2",content:"+86"},{id:"3",name:"Option5"},{id:"4",name:"Option5"},{id:"5",name:"Option5"},{id:"6",name:"Option6"},{id:"7",name:"Option7"},{id:"8",name:"Option8"},{id:"9",name:"Option9"},{id:"10",name:"Option10"},{id:"11",name:"Option11"},{id:"12",name:"Option12"},{id:"13",name:"Option13"},{id:"14",name:"Option14"},{id:"15",name:"Option15"},{id:"16",name:"Option16"},{id:"17",name:"Option17"},{id:"18",name:"Option18"},{id:"19",name:"Option19"},{id:"20",name:"Option20"},{id:"21",name:"Option21"}]},83109:function(e,n,t){t.r(n);var l=t(67294),a=t(36467),o=t(85893),s=a.Map.APILoader,c=a.Map.MapChoose,u=a.Map.coordsToWgs84;n.default=function(d){var r=d.map;return console.log("map:",r),(0,o.jsx)("div",{style:{position:"absolute",top:"100px",left:"100px",zIndex:"999",backgroundColor:"white"},children:"12342134"})}},64130:function(e,n,t){t.r(n);var l=t(67294),a=t(85893);n.default=[{allowClear:!0,id:"1",name:(0,a.jsx)("div",{children:"Option1"})},{id:"2",name:"Option2",style:{color:"red",padding:0,backgroundColor:"transparent"}},{id:"3",name:"Option3",disabled:!0},{id:"4",name:"Option4"},{id:"5",name:"Option5"},{id:"6",name:"Option6"},{id:"7",name:"Option7"},{id:"8",name:"Option8"},{id:"9",name:"Option9"},{id:"10",name:"Option10"},{id:"11",name:"Option11"},{id:"12",name:"Option12"},{id:"13",name:"Option13"},{id:"14",name:"Option14"},{id:"15",name:"Option15"}]},29908:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Item = ({ checked, disabled, style, className, onClick, children }) => {
  return (
    <div
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-actionsheet-option',
        className,
        disabled ? 'lyrixi-disabled' : '',
        checked ? 'lyrixi-checked' : ''
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

export default Item
`},62232:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Page, Device, ActionSheet, SafeArea } from 'lyrixi-mobile'

export default () => {
  const list = [
    { id: '1', name: '\u6D4B\u8BD5Node' },
    { id: '2', name: '\u6D4B\u8BD51' },
    { id: '3', name: '\u6D4B\u8BD52' },
    { id: '4', name: '\u6D4B\u8BD53' },
    { id: '5', name: '\u6D4B\u8BD54' },
    { id: '6', name: '\u6D4B\u8BD54' },
    { id: '7', name: '\u6D4B\u8BD55' },
    { id: '8', name: '\u6D4B\u8BD56' },
    { id: '9', name: '\u6D4B\u8BD57' },
    { id: '10', name: '\u6D4B\u8BD58' },
    { id: '11', name: '\u6D4B\u8BD59' },
    { id: '12', name: '\u6D4B\u8BD510' },
    { id: '13', name: '\u6D4B\u8BD511' },
    { id: '14', name: '\u6D4B\u8BD512' },
    { id: '15', name: '\u6D4B\u8BD513' },
    { id: '16', name: '\u6D4B\u8BD514' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (Device.os === 'ios' && Device.compareVersion(Device.osVersion, '17') < 1) {
      alert('bad ios' + Device.osVersion)
    }
    if (Device.os === 'android' && Device.compareVersion(Device.osVersion, '9') < 1) {
      alert('bad android' + Device.osVersion)
    }
    if (Device.os === 'harmony' && Device.compareVersion(Device.osVersion, '19') < 1) {
      alert('bad harmony' + Device.osVersion)
    }
  }, [])

  return (
    <Page>
      <Page.Main>
        <ActionSheet.Combo
          placeholder="Please select"
          value={value}
          title="Please select"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
          // style={{ height: '100px', backgroundColor: '#f8f8f8' }}
          itemRender={(item, { onChange }) => {
            return (
              <ActionSheet.Item
                key={item?.id || index}
                checked={item?.id === value?.id}
                disabled={item?.disabled}
                onClick={() => {
                  onChange(item)
                }}
              >
                Custom Node: {item.name}
              </ActionSheet.Item>
            )
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},5368:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Page, ActionSheet, SafeArea } from 'lyrixi-mobile'

export default () => {
  const list = [
    { id: '1', name: '\u6D4B\u8BD5Node' },
    { id: '2', name: '\u6D4B\u8BD51' },
    { id: '3', name: '\u6D4B\u8BD52' },
    { id: '4', name: '\u6D4B\u8BD53' },
    { id: '5', name: '\u6D4B\u8BD54' },
    { id: '6', name: '\u6D4B\u8BD54' },
    { id: '7', name: '\u6D4B\u8BD55' },
    { id: '8', name: '\u6D4B\u8BD56' },
    { id: '9', name: '\u6D4B\u8BD57' },
    { id: '10', name: '\u6D4B\u8BD58' },
    { id: '11', name: '\u6D4B\u8BD59' },
    { id: '12', name: '\u6D4B\u8BD510' },
    { id: '13', name: '\u6D4B\u8BD511' },
    { id: '14', name: '\u6D4B\u8BD512' },
    { id: '15', name: '\u6D4B\u8BD513' },
    { id: '16', name: '\u6D4B\u8BD514' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {}, [])

  return (
    <Page>
      <Page.Main>
        {JSON.stringify(value)}
        <ActionSheet.Modal
          open={true}
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},61206:function(e,n){n.Z=`import Combo from './Combo'
import Modal from './Modal'
import Item from './Item'

const ActionSheet = {
  Combo: Combo,
  Modal: Modal,
  Item: Item
}

export default ActionSheet
`},65127:function(e,n){n.Z=`import React from 'react'

import { Page, Divider, Button, Icon } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default () => {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Color & Background & Border</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button backgroundColor="white" radius="m" style={buttonStyle}>
            backgroundColor="white"
          </Button>
          <Button backgroundColor="white" radius="m" disabled style={buttonStyle}>
            disabled
          </Button>
          <br />
          <Button backgroundColor="default" border="none" radius="m" style={buttonStyle}>
            backgroundColor="default" border="none"
          </Button>
          <Button backgroundColor="default" border="solid" radius="m" style={buttonStyle}>
            backgroundColor="default" border="solid"
          </Button>
          <Button backgroundColor="default" border="dashed" radius="m" style={buttonStyle}>
            backgroundColor="default" border="dashed"
          </Button>
          <br />
          <Button backgroundColor="transparent" border="none" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="none"
          </Button>
          <Button backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="solid"
          </Button>
          <Button backgroundColor="transparent" border="dashed" radius="m" style={buttonStyle}>
            backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" radius="m" style={buttonStyle}>
            color="white" backgroundColor="primary"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="link" radius="m" style={buttonStyle}>
            color="white" backgroundColor="link"
          </Button>
          <br />
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten"
          </Button>
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten" border="solid"
          </Button>
          <Button
            color="link"
            backgroundColor="link-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="link-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="link"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="link"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="link"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="link" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="warning" radius="m" style={buttonStyle}>
            color="white" backgroundColor="warning"
          </Button>
          <br />
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten"
          </Button>
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten" border="solid"
          </Button>
          <Button
            color="warning"
            backgroundColor="warning-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="warning-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="warning"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="warning"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="warning"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="warning" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="danger" radius="m" style={buttonStyle}>
            color="white" backgroundColor="danger"
          </Button>
          <br />
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten"
          </Button>
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten" border="solid"
          </Button>
          <Button
            color="danger"
            backgroundColor="danger-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="danger-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="danger"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="danger" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="success" radius="m" style={buttonStyle}>
            color="white" backgroundColor="success"
          </Button>
          <br />
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten"
          </Button>
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten" border="solid"
          </Button>
          <Button
            color="success"
            backgroundColor="success-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="success-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="success"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="success" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <br />

        <Divider>Shape</Divider>
        <div>
          <Button square radius="m" color="white" backgroundColor="primary" style={buttonStyle}>
            Round
          </Button>
          <Button square radius="100%" size="s" style={buttonStyle}>
            <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
          </Button>
          <Button square size="s" radius="m" style={buttonStyle}>
            <Icon className="lyrixi-icons lyrixi-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button
            color="white"
            backgroundColor="primary"
            radius="m"
            className="lyrixi-flex"
            style={buttonStyle}
          >
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button color="white" backgroundColor="primary" size="xxs" radius="xxs" style={buttonStyle}>
          primary xxs
        </Button>
        <Button color="white" backgroundColor="primary" size="xs" radius="xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button color="white" backgroundColor="primary" size="s" radius="s" style={buttonStyle}>
          primary s
        </Button>
        <Button color="white" backgroundColor="primary" size="m" radius="m" style={buttonStyle}>
          primary m
        </Button>
        <Button color="white" backgroundColor="primary" size="l" radius="l" style={buttonStyle}>
          primary l
        </Button>
        <Button color="white" backgroundColor="primary" size="xl" radius="xl" style={buttonStyle}>
          primary xl
        </Button>
      </Page.Main>
    </Page>
  )
}
`},90142:function(e,n){n.Z=`// \u989C\u8272\u679A\u4E3E\u503C
const colorClasses = [
  'transparent',
  'white',
  'default',
  'secondary',
  'tertiary',
  'quaternary',
  'primary',
  'link',
  'warning',
  'danger',
  'success'
]
const backgroundColorClasses = [
  'transparent',
  'white',
  'default',
  'secondary',
  'tertiary',
  'quaternary',
  'primary',
  'link',
  'warning',
  'danger',
  'success'
]

// \u5C3A\u5BF8\u679A\u4E3E\u503C
const sizeClasses = ['xxs', 'xs', 's', 'm', 'l', 'xl']

// \u5706\u89D2\u679A\u4E3E\u503C
const radiusClasses = ['xxs', 'xs', 's', 'm', 'l', 'xl']

// \u5BFC\u51FA\u989C\u8272\u679A\u4E3E\u503C
export { colorClasses, backgroundColorClasses, sizeClasses, radiusClasses }
`},34586:function(e,n){n.Z=`import Button from './Button'

export default Button
`},13718:function(e,n){n.Z=`import React, { useRef, useState } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import { Page, Calendar } from 'lyrixi-mobile'
import DateUtil from '../../../utils/DateUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import Calendar from 'library/components/Calendar'
import { Page, DateUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const selectionMode = 'range' // range
const weekStart = 'Monday' // Monday

export default () => {
  const calendarRef = useRef(null)
  const [data, setData] = useState([])
  const [value, setValue] = useState()

  function handleChange(newValue) {
    console.log('\u4FEE\u6539', newValue)
    // \u8BBE\u7F6E\u4E00\u5468\u7684\u6570\u636E
    // if (Array.isArray(newValue) && newValue.length === 2) {
    //   let weekDates = Calendar.getWeekDates(newValue[0], weekStart)
    //   if (Calendar.isDisabledDate(weekDates[0], { min: new Date() })) {
    //     console.log('\u7981\u6B62\u8BBF\u95EE' + DateUtil.format(weekDates[0], 'YYYY\u5E74MM\u6708DD\u65E5') + '\u524D\u7684\u65E5\u671F')
    //     return
    //   }
    //   // eslint-disable-next-line
    //   newValue = [weekDates[0], weekDates[6]]
    // }
    setValue(newValue)
  }

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
        <Calendar
          type="week"
          // min={new Date()}
          // max={new Date('2024-12-17')}
          ref={calendarRef}
          weekStart={weekStart}
          // selectionMode={selectionMode}
          value={value}
          // titleFormatter="YYYY-MM-DD W\u5468"
          titleFormatter={(date, info) => {
            // if (Array.isArray(value) && value.length === 2) {
            //   return DateUtil.format(value[0], 'YYYY-W\u5468')
            // }
            if (info.type === 'month') {
              return DateUtil.format(date, 'YYYY\u5E74MM\u6708')
            }
            return DateUtil.format(date, \`YYYY\u5E74MM\u6708DD\u65E5 d \u7B2CW\u5468\`)
          }}
          dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
            console.log({ date, isSelected, isDisabled, isCurrent })
            return (
              <div className="lyrixi-calendar-date-num">
                {date.getDate()}
                {isCurrent && <span className="lyrixi-calendar-date-dot"></span>}
                {data[DateUtil.format(date, 'YYYY-MM-DD')] ? 'M' : ''}
              </div>
            )
          }}
          onChange={handleChange}
          onSlideChange={(drawDate, { action, type, monthDates }) => {
            console.log('\u89C6\u56FE\u53D8\u5316:', { data: drawDate, action, type, monthDates })
            setData({ '2024-04-10': '1' })
          }}
          onLoad={(drawDate, { action, type, monthDates }) => {
            console.log('\u65E5\u5386\u521D\u59CB\u5316', { data: drawDate, action, type, monthDates })
          }}
        />
        <div
          onClick={() => {
            calendarRef.current.slidePrevious()
          }}
        >
          \u4E0A\u4E00\u9875
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideNext()
          }}
        >
          \u4E0B\u4E00\u9875
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideExpand()
          }}
        >
          \u5C55\u5F00
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideCollapse()
          }}
        >
          \u6536\u7F29
        </div>
      </Page.Main>
    </Page>
  )
}
`},96384:function(e,n){n.Z=`import React from 'react'
import { Page, Card } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>1000</Card>
      </Page.Main>
    </Page>
  )
}
`},13391:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page, Cascader, Loading, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u6839\u8282\u70B9',
      parentid: null
    },
    {
      id: '1-1',
      name: '\u5B50\u8282\u70B9',
      parentid: '1'
    },
    {
      parentid: '1-1',
      name: '\u5B59\u5B50\u8282\u70B9',
      id: '1-1-1',
      isLeaf: true
    }
  ])

  // \u52A0\u8F7D\u8857\u9053
  function loadData(tabs) {
    return new Promise((resolve) => {
      if (!Array.isArray(tabs) || !tabs.length) {
        resolve(null)
        return
      }
      let lastTab = tabs[tabs.length - 1]
      if (lastTab.id !== '1-1') {
        resolve(null)
        return
      }
      Loading.show()
      let streets = [
        {
          parentid: lastTab.id,
          name: '\u5B59\u5B50\u8282\u70B9',
          id: '1-1-1'
        }
      ]
      setTimeout(() => {
        Loading.hide()
      }, 100)
      if (typeof streets === 'string') {
        Toast.show({ content: streets })
      }
      resolve(streets)
    })
  }

  return (
    <Page>
      <Page.Main>
        <Cascader.Combo
          allowClear
          // multiple={false}
          list={[
            {
              id: '1',
              name: '\u6839\u8282\u70B9',
              children: [
                {
                  id: '1-1',
                  name: '\u5B50\u8282\u70B9'
                }
              ]
            }
          ]}
          loadData={loadData}
          value={value}
          placeholder={\`Select\`}
          onChange={(newValue) => {
            console.log('\u4FEE\u6539:', newValue)
            setValue(newValue)
          }}
          safeArea={true}
          title="\u7EA7\u8054\u9009\u62E9"
          onClose={() => {
            console.log('onClose')
          }}
          clearRender={({ clearable, onClear }) => {
            return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},43969:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Card, Divider, Page, Cascader } from 'lyrixi-mobile'

export default () => {
  // \u63A7\u4EF6\u5C06\u4F1A\u8865\u5145parentid\u548CisDistrict, \u6240\u4EE5\u987A\u5E8F\u4E0D\u80FD\u4F20\u9519
  const [value, setValue] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setValue([
        // {
        //   name: '\u4E2D\u56FD',
        //   id: '86'
        // },
        {
          name: '\u5317\u4EAC\u5E02',
          id: '110000'
        },
        {
          name: '\u4E1C\u57CE\u533A',
          id: '110101'
        },
        {
          name: '\u4E1C\u534E\u95E8\u8857\u9053',
          id: '110101001'
        }
      ])
    }, 2000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>country</Divider>
          <Cascader.DistrictCombo
            type={'country'}
            startType={'country'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'country'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>province</Divider>
          <Cascader.DistrictCombo
            type={'province'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'province'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>city</Divider>
          <Cascader.DistrictCombo
            type={'city'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'city'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>district</Divider>
          <Cascader.DistrictCombo
            type={'district'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'district'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>street</Divider>
          <Cascader.DistrictCombo
            type={'street'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'street'}
            allowClear
          />
        </Card>

        <Card>
          <Divider>startType</Divider>
          <Cascader.DistrictCombo
            startType={'country'}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'startType'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>searchVisible</Divider>
          <Cascader.DistrictCombo
            searchVisible
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'searchVisible'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>editableOptions</Divider>
          <Cascader.DistrictCombo
            editableOptions={{
              country: { editable: false },
              province: { editable: false },
              city: { editable: true },
              district: { editable: true },
              street: { editable: true }
            }}
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'editableOptions'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>min="city"</Divider>
          <Cascader.DistrictCombo
            min="city"
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'min'}
            allowClear
          />
        </Card>
        <Card>
          <Divider>zIndex</Divider>
          <Cascader.DistrictCombo
            value={value}
            onChange={(newValue) => {
              console.log('\u4FEE\u6539: ', newValue)
              setValue(newValue)
            }}
            placeholder={'zIndex'}
            allowClear
            maskStyle={{ zIndex: '9' }}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
`},91816:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { Page, Divider, DatePicker, DateUtil, Message, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Limit</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="Limit"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onError</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="onError"
            value={value}
            onChange={setValue}
            onError={(error) => {
              Toast.show({ content: error.errMsg })
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            title="Custom Title"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
`},4918:function(e,n){n.Z=`import React, { useState } from 'react'
import { DatePicker, Toast } from 'lyrixi-mobile'

export default () => {
  const [mulValue, setMulValue] = useState([
    {
      id: 'start',
      description: 'Start',
      value: new Date()
      // disabled: true
    },
    {
      id: 'middle',
      description: 'Middle',
      value: new Date()
    },
    {
      id: 'end',
      description: 'End',
      value: new Date()
    }
  ])

  return (
    <>
      <DatePicker.MultipleCombo
        placeholder="Please select MultipleCombo"
        // defaultPickerValue={mulValue}
        value={mulValue}
        // year | quarter | month | date | time | datetime | week
        type="datetime"
        onChange={(newValue) => {
          console.log(newValue)
          setMulValue(newValue)
        }}
        // title="\u9009\u62E9\u65E5\u671F"
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
        allowClear
        min={new Date()}
        hourStep={5}
        minuteStep={5}
        onError={(err) =>
          Toast.show({
            content: err.errMsg || '',
            maskClickable: true
          })
        }
      />
    </>
  )
}
`},85238:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { Page, Divider, DatePicker, DateUtil, Message, Card, Toast } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)
  // const [value, setValue] = useState([new Date(), null])
  // const [value, setValue] = useState([null, null])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.RangeCombo
            // allowClear
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Quick Select</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Quick Select"
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Limit</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="Limit"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onError</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="onError"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            onError={(error) => {
              Toast.show({ content: error.errMsg })
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            title="Custom Title"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
`},34082:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { DatePicker, Page, DateUtil, LocaleUtil } from 'lyrixi-mobile'

export default () => {
  const [rangeId, setRangeId] = useState(null)
  const [value, setValue] = useState([new Date(), new Date()])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">\u65E5\u671F\u5FEB\u6377\u9009\u62E9</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <DatePicker.RangeMain
          // style={{ padding: 0 }}
          // allowClear
          // titles={{
          //   custom: '\u81EA\u5B9A\u4E49\u9009\u62E9',
          //   selector: '\u5FEB\u6377\u9009\u62E9'
          // }}
          // type="datetime"
          // ranges={{
          //   [LocaleUtil.locale('\u81EA\u5B9A\u4E49')]: 10
          // }}
          // ranges={{
          //   ['\u4ECA\u65E5']: [dayjs().toDate(), dayjs().toDate()],
          //   ['\u672A\u6765\u4E00\u4E2A\u6708']: [new Date(), dayjs().add(29, 'day').toDate()],

          //   ['\u672A\u6765\u4E09\u4E2A\u6708']: [new Date(), dayjs().add(89, 'day').toDate()],

          //   ['\u81EA\u5B9A\u4E49']: 365
          // }}
          // min={new Date('2023-08-08')}
          // max={new Date()}
          rangeId={rangeId}
          value={value}
          // onError={(error) => {
          //   console.log(error)
          // }}
          onChange={(newValue, { rangeId }) => {
            console.log('\u4FEE\u6539:', newValue, rangeId)
            setValue(newValue)
            setRangeId(rangeId)
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},60582:function(e,n){n.Z=`import React, { useState } from 'react'
import { DatePicker, LocaleUtil } from 'lyrixi-mobile'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(isoWeek)
dayjs.extend(quarterOfYear)
dayjs.extend(advancedFormat)

export default () => {
  const [value, setValue] = useState()

  return (
    <>
      <DatePicker.Types
        value={value}
        list={[
          {
            type: 'date',
            id: 'date',
            name: LocaleUtil.locale('\u65E5', 'datetype_unit_date')
          },
          {
            type: 'month',
            id: 'month',
            name: LocaleUtil.locale('\u6708', 'datetype_unit_month')
          },
          {
            type: 'quarter',
            id: 'quarter',
            name: LocaleUtil.locale('\u5B63', 'datetype_unit_quarter')
          },
          {
            type: 'year',
            id: 'year',
            name: LocaleUtil.locale('\u5E74', 'datetype_unit_year')
          },
          {
            type: 'week',
            id: 'week',
            name: LocaleUtil.locale('\u5468', 'datetype_unit_week')
          }
        ]}
        onChange={(newValue) => {
          console.log('\u4FEE\u6539:', newValue)
          setValue(newValue)
        }}
        // TabsProps={{ className: 'hide' }}
        contentProps={{ className: 'flex flex-left' }}
        // pickerRender={(tab, { onChange }) => {
        //   if (tab.type === 'week') {
        //     return <div onClick={() => onChange && onChange(new Date('2022-12-12'))}>\u70B9\u6211</div>
        //   }
        // }}
      />
    </>
  )
}
`},85093:function(e,n){n.Z=`import React, { useEffect, useRef, useState } from 'react'
import { DatePicker } from 'lyrixi-mobile'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(isoWeek)
dayjs.extend(advancedFormat)

export default () => {
  const date1Ref = useRef(null)
  const date2Ref = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    date1Ref.current.open()
  }, [])

  return (
    <>
      <DatePicker.WeekCombo
        ref={date1Ref}
        className="lyrixi-border-b"
        placeholder="Please select WeekCombo"
        type="datetime"
        allowClear
        // min={new Date()}
        // max={new Date()}
        // maskClosable={false}
        onBeforeOpen={() => {
          if (document.querySelector('.lyrixi-mask.lyrixi-active')) {
            date1Ref.current.close()
            date2Ref.current.close()
            return false
          }
          return true
        }}
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
        maskStyle={{
          zIndex: 999
        }}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        value={value}
        defaultPickerValue={new Date('2022-08-22 00:00')}
      />
    </>
  )
}
`},89649:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Footer = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose tools
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <footer
      {...props}
      className={DOMUtil.classNames('lyrixi-footerbar', props.className)}
      ref={rootRef}
    >
      {children}
    </footer>
  )
})

export default Footer
`},76593:function(e,n){n.Z=`import React, { useState } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import ActionSheet from './../../ActionSheet'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { ActionSheet } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// More\u529F\u80FD\u7684\u5305\u88C5\u7EC4\u4EF6
export default function MoreWrapper({ children, moreList, onClick, ...props }) {
  const [open, setOpen] = useState(false)

  function handleClick(e) {
    onClick && onClick(e)
    if (Array.isArray(moreList) && moreList.length) {
      setOpen(true)
    }
  }

  const hasMore = Array.isArray(moreList) && moreList.length

  return (
    <>
      {React.cloneElement(children, {
        ...props,
        onClick: handleClick
      })}

      {hasMore ? (
        <ActionSheet.Modal open={open} list={moreList} onClose={() => setOpen(false)} />
      ) : null}
    </>
  )
}
`},69253:function(e,n){n.Z=`import React from 'react'
import MoreWrapper from './../MoreWrapper'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u56FE\u6587\u7EC4\u5408
export default function FooterBarTab({
  disabled,
  name,
  iconRender,
  moreList,
  onClick,
  className,
  style
}) {
  const hasMore = Array.isArray(moreList) && moreList.length

  // \u83B7\u53D6\u56FE\u6807\u8282\u70B9
  function getIconNode() {
    if (typeof iconRender === 'function') {
      return iconRender()
    }

    // \u9ED8\u8BA4\u56FE\u6807
    if (hasMore) {
      return <i className="lyrixi-footerbar-tab-icon-more"></i>
    }

    return null
  }
  const IconNode = getIconNode()

  const tab = (
    <div
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-tab',
        className,
        disabled ? 'lyrixi-disabled' : ''
      )}
    >
      <span className={\`lyrixi-footerbar-tab-icon\`}>{IconNode}</span>
      <div className="lyrixi-footerbar-tab-name">{name}</div>
    </div>
  )

  if (moreList) {
    return (
      <MoreWrapper moreList={moreList} onClick={onClick}>
        {tab}
      </MoreWrapper>
    )
  }

  return React.cloneElement(tab, { onClick })
}
`},13590:function(e,n){n.Z=`import FooterBar from './FooterBar'
import Button from './Button'
import Icon from './Icon'
import Tab from './Tab'

FooterBar.Button = Button
FooterBar.Icon = Icon
FooterBar.Tab = Tab

export default FooterBar
`},6719:function(e,n){n.Z=`import React from 'react'
import { Page, Icon } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <p>Don't use lyrixi-icons, cause that className often changes</p>
        <Icon className="lyrixi-icons lyrixi-icon-signature" size={100}></Icon>
      </Page.Main>
    </Page>
  )
}
`},25906:function(e,n){n.Z=`import Icon from './Icon'

export default Icon
`},26362:function(e,n){n.Z=`import React, { Fragment, useEffect, useState } from 'react'
import { Page, IndexBar } from 'lyrixi-mobile'

export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    // Mock request list
    setTimeout(() => {
      let newList = queryList(['A', 'B', 'C'])
      setList(newList)
    }, 1000)

    // eslint-disable-next-line
  }, [])

  // \u83B7\u53D6A-Z
  function queryList(letter) {
    let newList = []
    for (let i = 0; i < letter.length; i++) {
      for (let j = 0; j < 15; j++) {
        newList.push({
          letter: letter[i],
          name: \`\${letter[i]}\u59D3\u4EBA\u540D\`
        })
      }
    }
    return newList
  }

  console.log('list:', list)

  // Render list
  function getListNodes() {
    let letter = {}
    return list.map((item, index) => {
      if (!letter[item.letter]) {
        letter[item.letter] = true
        return (
          <Fragment key={index}>
            <IndexBar.Anchor name={item.letter}>
              <li>{item.letter}</li>
            </IndexBar.Anchor>
            <li>{item.name}</li>
          </Fragment>
        )
      }
      return <li key={index}>{item.name}</li>
    })
  }
  return (
    <Page>
      <IndexBar>
        <Page.Main
          onBottomRefresh={() => {
            return new Promise((resolve) => {
              setTimeout(() => {
                let newList = queryList([
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J',
                  'K',
                  'L',
                  'M',
                  'N',
                  'O',
                  'P',
                  'Q',
                  'R',
                  'S',
                  'T',
                  'U',
                  'V',
                  'W',
                  'X',
                  'Y',
                  'Z'
                ])
                setList(newList)
                resolve(true)
              }, 2000)
            })
          }}
        >
          <ul>{getListNodes()}</ul>
        </Page.Main>
      </IndexBar>
    </Page>
  )
}
`},38713:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const AutoFit = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="autoFit" />
})

export default AutoFit
`},51689:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Clear = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`lyrixi-input-icon lyrixi-input-icon-clear\${
        props.className ? ' ' + props.className : ' lyrixi-right-icon'
      }\`}
      ref={ref}
    />
  )
})

export default Clear
`},57975:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const IconLeftArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`lyrixi-input-icon lyrixi-input-icon-left-arrow\${
        props.className ? ' ' + props.className : ' lyrixi-left-icon'
      }\`}
      ref={ref}
    />
  )
})

export default IconLeftArrow
`},92715:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const RightArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`lyrixi-input-icon lyrixi-input-icon-right-arrow\${
        props.className ? ' ' + props.className : ' lyrixi-right-icon'
      }\`}
      ref={ref}
    />
  )
})

export default RightArrow
`},94400:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { splitInputStyle, correctValue as _correctValue } from './../Text/utils'
import getClearNode from './../Text/getClearNode'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5185\u90E8\u663E\u793Adiv
const InputNode = (
  {
    type = 'text',
    id,
    style: externalStyle,
    className,

    // \u503C\u63A7\u5236
    value,
    onChange,
    onClick,
    onFocus,
    onBlur,

    // \u6570\u503C\u6821\u9A8C
    min,
    max,
    maxLength,
    trim,
    precision,

    // \u8F93\u5165\u6846\u914D\u7F6E
    formatter,
    placeholder,
    leftIcon,
    rightIcon,
    clearRender,
    allowClear,
    disabled,
    readOnly,

    // \u5149\u6807\u63A7\u5236\u5C5E\u6027, null: \u4E0D\u63A7\u5236, false: \u4E0D\u663E\u793A, true: \u663E\u793A
    cursor = null
  },
  ref
) => {
  let displayValue = typeof formatter === 'function' ? formatter(value) : null

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
        return inputRef.current
      },
      correctValue: correctValue,
      focus: () => {
        console.log('Input.Node please config setCursor to display cursor')
      },
      blur: () => {
        console.log('Input.Node please config setCursor to hide cursor')
      }
    }
  })

  // Initialize
  useEffect(() => {
    if (!value) return

    // \u77EB\u6B63\u4E3A\u6B63\u786E\u7684\u503C
    let val = correctValue(value)
    // eslint-disable-next-line
    if (val != value) {
      onChange(val)
    }
    // eslint-disable-next-line
  }, [])

  // onFocus & onBlur
  useEffect(() => {
    if (typeof cursor !== 'boolean') return

    if (cursor) {
      onFocus &&
        onFocus({
          target: inputRef.current,
          currentTarget: inputRef.current
        })
    } else {
      handleBlur()
    }
    // eslint-disable-next-line
  }, [cursor])

  function handleBlur() {
    if (readOnly || disabled) {
      return
    }

    let val = value

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // \u6570\u503C\u6846\u5931\u7126\u65F6\u9700\u8981\u77EB\u6B63\u6570\u503C
    if (type === 'number') {
      // \u6B63\u5E38\u8F93\u5165\uFF1A\u77EB\u6B63\u6700\u5927\u6700\u5C0F\u503C\u3001\u5C0F\u6570\u70B9\u3001\u6700\u5927\u957F\u5EA6
      if (val && !isNaN(val)) {
        // \u7EA0\u6B63\u6570\u5B57
        val = correctValue(val)
      }
      // \u8F93\u5165\u9519\u8BEF\u6216\u771F\u7684\u4E3A\u7A7A\uFF1A\u7528\u4E8E\u89E3\u51B3ios\u53EF\u4EE5\u8F93\u5165\u5B57\u6BCD\u4E2D\u6587\u7B49\u95EE\u9898
      else {
        val = ''
      }
    }

    // \u4FEE\u6539\u5B8C\u56DE\u8C03
    if (val !== value) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (onBlur)
      onBlur({
        target: inputRef.current,
        currentTarget: inputRef.current
      })
  }

  // \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u548C\u5C0F\u6570\u4F4D\u622A\u53D6
  function correctValue(val) {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  // \u70B9\u51FB\u6E05\u9664
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  return (
    <div
      id={id}
      style={style}
      className={DOMUtil.classNames(
        \`lyrixi-input\`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-disabled' : '',
        readOnly ? 'readonly' : ''
      )}
      onClick={(e) => {
        if (disabled) return
        onClick && onClick(e)
      }}
      ref={rootRef}
    >
      {/* Left */}
      {leftIcon}

      {/* Main */}
      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-disabled' : '',
          readOnly ? 'lyrixi-readOnly' : ''
        )}
      >
        <div
          ref={inputRef}
          className={DOMUtil.classNames(
            'lyrixi-input-text',
            // \u65E0\u503C\u4E14\u6CA1\u6709\u805A\u7126\u65F6, \u663E\u793Aplaceholder
            !value && placeholder && !cursor ? 'lyrixi-placeholder' : '',
            cursor ? 'lyrixi-focus' : ''
          )}
          style={inputStyle}
        >
          {typeof value === 'object' || !value || cursor ? placeholder : value}
        </div>

        {/* Blur display displayValue */}
        {displayValue ? <div className={\`lyrixi-input-formatter\`}>{displayValue}</div> : null}
      </div>

      {/* Clear Icon */}
      {disabled || !allowClear
        ? null
        : getClearNode({
            clearRender,
            allowClear,
            value,
            onClear: handleClear
          })}

      {/* Right */}
      {rightIcon}
    </div>
  )
}

export default forwardRef(InputNode)
`},70140:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import InputNumber from './../Number'

// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6570\u503C\u6846
const NumberBox = forwardRef(
  (
    {
      // \u52A0\u51CF\u53F7
      plusClassName,
      plusStyle,
      minusClassName,
      minusStyle,
      stepFocus, // \u70B9\u51FB\u52A0\u51CF\u6309\u94AE\u83B7\u53D6\u7126\u70B9

      // \u6587\u672C\u6846
      // \u5BB9\u5668
      type = 'text', // \u7C7B\u578B: text | number | tel | password
      autoFit, // \u81EA\u52A8\u9AD8\u5EA6\u6587\u672C\u6846
      readOnly,
      disabled,
      // \u6587\u672C\u6846
      value,
      formatter,
      // \u5C0F\u6570\u7CBE\u5EA6, \u53EA\u6709\u6570\u503C\u6846\u624D\u751F\u6548
      precision,
      // \u5C0F\u6570\u4F4D\u88650, true: \u4E0D\u88650; false: \u88650;
      trim,
      max,
      min,
      placeholder,
      maxLength,
      // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
      autoFocus, // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
      autoSelect, // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
      // \u5DE6\u53F3\u56FE\u6807
      leftIcon,
      rightIcon,
      // \u6E05\u9664\u6309\u952E
      clearRender,
      allowClear,
      // \u5B50\u5185\u5BB9
      children,
      // \u4E8B\u4EF6
      onClick,
      onCompositionStart, // \u8F93\u5165\u5F00\u59CB\u65F6
      onCompositionUpdate, // \u8F93\u5165\u8FDB\u884C\u4E2D
      onCompositionEnd, // \u8F93\u5165\u5B8C\u6210\u65F6
      onInput,
      onChange,
      onBlur,
      onFocus,

      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        inputDOM: inputRef?.current,
        getRootDOM: () => {
          return rootRef.current
        },
        getInputDOM: inputRef?.current?.getInputDOM,
        getInputRef: () => {
          return inputRef
        }
      }
    })

    useEffect(() => {
      let inputDOM = _getInputDOM()
      let val = (inputDOM?.value ? inputDOM.value : value) || ''
      updateState(val)
    }, [value]) // eslint-disable-line

    // \u83B7\u53D6\u6587\u672C\u6846
    function _getInputDOM() {
      if (inputRef?.current?.getInputDOM) {
        return inputRef.current.getInputDOM()
      }
      return null
    }

    // \u66F4\u65B0\u7981\u7528\u72B6\u6001
    function updateState(val) {
      let minus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-minus')
      let plus = rootRef.current?.querySelector?.('.lyrixi-numberbox-button-plus')
      if (!isNaN(min) && !isNaN(val) && Number(val) <= Number(min)) {
        minus.setAttribute('disabled', 'true')
      } else {
        minus.removeAttribute('disabled')
      }
      if (!isNaN(max) && !isNaN(val) && Number(val) >= Number(max)) {
        plus.setAttribute('disabled', 'true')
      } else {
        plus.removeAttribute('disabled')
      }
    }

    // \u4FEE\u6539\u503C\u56DE\u8C03
    function handleChange(val) {
      if (disabled) return
      let inputDOM = _getInputDOM()
      if (!inputDOM) return

      // \u975E\u53D7\u63A7\u7EC4\u4EF6\u9700\u8981\u64CD\u4F5CDOM
      if (value === undefined) {
        inputDOM.value = val
        updateState(val)
      }
      if (onChange) onChange(val)
    }

    // \u70B9\u51FB\u51CF
    function handleMinus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) - 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // \u70B9\u51FB\u52A0
    function handlePlus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      if (isNaN(inputDOM?.value)) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) + 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // render
    function getInputDOM() {
      return (
        <InputNumber
          ref={inputRef}
          className="lyrixi-numberbox-input"
          type="number"
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          formatter={formatter}
          precision={precision}
          trim={trim}
          max={max}
          min={min}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus} // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
          autoSelect={autoSelect} // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          allowClear={allowClear}
          clearRender={clearRender}
          onClick={onClick}
          onCompositionStart={onCompositionStart} // \u8F93\u5165\u5F00\u59CB\u65F6
          onCompositionUpdate={onCompositionUpdate} // \u8F93\u5165\u8FDB\u884C\u4E2D
          onCompositionEnd={onCompositionEnd} // \u8F93\u5165\u5B8C\u6210\u65F6
          onInput={onInput}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {children}
        </InputNumber>
      )
    }

    return (
      <div
        {...props}
        disabled={(!isNaN(min) && !isNaN(max) ? Number(min) >= Number(max) : false) || disabled}
        className={DOMUtil.classNames('lyrixi-numberbox', props.className)}
        ref={rootRef}
      >
        <div
          // disabled={minDisabled}
          style={minusStyle}
          type="button"
          className={DOMUtil.classNames(
            'lyrixi-numberbox-button',
            'lyrixi-numberbox-button-minus',
            minusClassName
          )}
          onClick={handleMinus}
        >
          <i className="lyrixi-numberbox-button-minus-icon"></i>
        </div>
        {getInputDOM()}
        <div
          // disabled={maxDisabled}
          style={plusStyle}
          type="button"
          className={DOMUtil.classNames(
            'lyrixi-numberbox-button',
            'lyrixi-numberbox-button-plus',
            plusClassName
          )}
          onClick={handlePlus}
        >
          <i className="lyrixi-numberbox-button-plus-icon"></i>
        </div>
      </div>
    )
  }
)

export default NumberBox
`},46992:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from '../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

/**
 * \u7EA0\u6B63\u8F93\u5165\u7684\u6570\u5B57
 * \u5982\u679C\u6570\u503C\u4E0D\u6B63\u786E\uFF0C\u901A\u8FC7\u622A\u53D6\u672B\u4F4D\u7684\u65B9\u5F0F\u7EA0\u6B63
 * \u82E5\u622A\u53D6\u672B\u4F4D\u4ECD\u4E0D\u6B63\u786E\u5219\u6E05\u7A7A
 * @param {string} val - \u8F93\u5165\u7684\u503C
 * @returns {string} - \u7EA0\u6B63\u540E\u7684\u503C
 */
function correctInputNumber(val) {
  // \u5982\u679C\u662F\u5408\u6CD5\u6570\u5B57\uFF0C\u76F4\u63A5\u8FD4\u56DE
  if (MathUtil.isNumber(val)) {
    return val
  }

  // \u5982\u679C\u4E0D\u662F\u5408\u6CD5\u6570\u5B57\uFF0C\u5C1D\u8BD5\u622A\u53D6\u672B\u4F4D
  if (val && val.length > 0) {
    const correctedVal = val.slice(0, -1)
    // \u68C0\u67E5\u622A\u53D6\u540E\u662F\u5426\u4E3A\u5408\u6CD5\u6570\u5B57
    if (MathUtil.isNumber(correctedVal)) {
      return correctedVal
    }
  }

  // \u622A\u53D6\u672B\u4F4D\u4ECD\u4E0D\u6B63\u786E\uFF0C\u5219\u6E05\u7A7A
  return ''
}

export default correctInputNumber
`},56165:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './../Text/utils'

import InputNode from './../Node'
import correctInputNumber from './correctInputNumber'

// \u5185\u5E93\u4F7F\u7528-start
import Keyboard from './../../Keyboard'
import MathUtil from '../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Keyboard, MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const NumberKeyboard = forwardRef(
  (
    {
      ok = null,
      // \u503C\u63A7\u5236
      value = '',
      onChange,
      onClick,
      onBlur,
      onFocus,

      // \u6570\u503C\u6821\u9A8C
      min,
      max,
      maxLength,
      trim,
      precision,

      // \u8F93\u5165\u6846\u914D\u7F6E
      inputMode,
      placeholder,
      formatter,
      leftIcon,
      rightIcon,
      clearRender,
      allowClear,
      disabled,
      readOnly,

      // \u4F20\u9012\u7ED9\u5BB9\u5668\u7684\u5C5E\u6027
      ...props
    },
    ref
  ) => {
    const inputRef = useRef(null)
    const [keyboardOpen, setKeyboardOpen] = useState(null)

    // Expose
    useImperativeHandle(ref, () => ({
      ...inputRef.current,
      focus: () => {
        setKeyboardOpen(true)
      },
      blur: () => {
        setKeyboardOpen(false)
      }
    }))

    // \u5904\u7406\u8F93\u5165\u6846\u70B9\u51FB
    const handleInputClick = (e) => {
      setKeyboardOpen(true)
    }

    const handleChange = (newValue) => {
      // \u4E0D\u80FD\u6821\u9A8C\u6700\u5C0F\u503C\uFF0C\u56E0\u4E3Amin={0.1}\u65F6\uFF0C\u65E0\u6CD5\u5220\u9664
      let val = minMaxFormatter(newValue, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = maxLengthFormatter(val, { maxLength })
      // \u8F93\u5165.\u4E0D\u89E6\u53D1onChange
      console.log('val', val, MathUtil.isNumber(val))
      onChange && onChange(correctInputNumber(val))
    }

    const handleClose = () => {
      if (readOnly) return
      setKeyboardOpen(false)
    }

    return (
      <>
        {/* \u8F93\u5165\u6846 */}
        <InputNode
          ref={inputRef}
          className="lyrixi-input-numberkeyboard"
          type="number"
          // \u503C\u63A7\u5236
          value={value}
          onChange={onChange}
          onClick={handleInputClick}
          onFocus={onFocus}
          onBlur={onBlur}
          // \u6570\u503C\u6821\u9A8C
          min={min}
          max={max}
          maxLength={maxLength}
          trim={trim}
          precision={precision}
          // \u8F93\u5165\u6846\u914D\u7F6E
          placeholder={placeholder}
          formatter={formatter}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          clearRender={clearRender}
          allowClear={allowClear}
          disabled={disabled}
          readOnly={readOnly}
          cursor={keyboardOpen} // \u952E\u76D8\u6253\u5F00\u65F6\u663E\u793A\u5149\u6807
          {...props}
        />

        {/* \u6570\u5B57\u952E\u76D8 */}
        <Keyboard.Number
          ok={ok}
          value={value}
          onChange={handleChange}
          open={keyboardOpen}
          onClose={handleClose}
          dot={precision === 0 ? null : true}
          minus={min >= 0 ? null : true}
        />
      </>
    )
  }
)

export default NumberKeyboard
`},16611:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useState } from 'react'
import InputNode from './../Node'
import Keyboard from './../../Keyboard'

const InputNumber = forwardRef(
  ({ values, disabled, readOnly, onChange, onKeyDown, onPaste }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [keyboardOpen, setKeyboardOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => ({
      focus: (index) => {
        if (index >= 0 && index < values.length) {
          setCurrentIndex(index)
          setKeyboardOpen(true)
        }
      },
      blur: () => {
        setKeyboardOpen(false)
      }
    }))

    // \u5904\u7406\u8F93\u5165\u6846\u70B9\u51FB
    const handleInputClick = (index) => {
      if (!disabled && !readOnly) {
        setCurrentIndex(index)
        setKeyboardOpen(true)
      }
    }

    // \u5904\u7406\u952E\u76D8\u5173\u95ED
    const handleKeyboardClose = () => {
      setKeyboardOpen(false)
    }

    return (
      <>
        {values.map((value, index) => (
          <InputNode
            key={index}
            value={value || ''}
            disabled={disabled}
            readOnly={readOnly}
            className={\`lyrixi-input-otp-item\${
              currentIndex === index && keyboardOpen ? ' active' : ''
            }\`}
            onClick={() => handleInputClick(index)}
            cursor={keyboardOpen && currentIndex === index}
          />
        ))}

        <Keyboard.Number
          value={values[currentIndex]}
          onChange={(val, { action }) => {
            if (action === 'delete') {
              onKeyDown && onKeyDown('Backspace', currentIndex)
              // \u5982\u679C\u5F53\u524D\u9879\u6CA1\u6709\u503C, \u5219\u5C06\u4E0A\u4E00\u9879\u6E05\u7A7A
              if (!values[currentIndex] && currentIndex !== 0) {
                onChange(currentIndex - 1, '')
              }
              // \u5982\u679C\u5F53\u524D\u9879\u6709\u503C\uFF0C\u5219\u5148\u6E05\u9664\u5F53\u524D\u9879
              else {
                onChange(currentIndex, '')
              }
              return
            }
            // \u66FF\u6362\u8001\u503C, \u53EA\u4FDD\u7559\u65B0\u503C
            onChange(currentIndex, val.replace(values[currentIndex], ''))
          }}
          ok={null}
          onClose={handleKeyboardClose}
          open={keyboardOpen}
          precision={0}
        />
      </>
    )
  }
)

export default InputNumber
`},23485:function(e,n){n.Z=`import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const InputText = forwardRef(
  ({ values, disabled, readOnly, onChange, onKeyDown, onPaste }, ref) => {
    const inputRefs = useRef([])

    // Expose
    useImperativeHandle(ref, () => ({
      focus: (index) => {
        if (inputRefs.current.length === 0 || !inputRefs.current?.[index]) return
        const input = inputRefs.current[index]
        if (input?.focus) {
          input.focus()
          // \u9009\u4E2D\u6240\u6709\u6587\u672C\uFF0C\u8FD9\u6837\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u66FF\u6362
          input.select()
        }
      },
      blur: () => {
        if (inputRefs.current.length === 0) return
        for (let input of inputRefs.current) {
          if (input?.blur) {
            input.blur()
          }
        }
      }
    }))

    return (
      <>
        {values.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={value || ''}
            disabled={disabled}
            readOnly={readOnly}
            className="lyrixi-input-otp-item"
            onChange={(e) => {
              // \u66FF\u6362\u8001\u503C, \u53EA\u4FDD\u7559\u65B0\u503C
              onChange(index, e.target.value.replace(value, ''))
            }}
            onKeyDown={(e) => onKeyDown(e.key, index)}
            onPaste={onPaste}
            onClick={(e) => {
              // \u70B9\u51FB\u65F6\u9009\u4E2D\u6240\u6709\u6587\u672C
              const input = e.target
              input.select()
            }}
            autoComplete="off"
          />
        ))}
      </>
    )
  }
)

export default InputText
`},49812:function(e,n){n.Z=`function formatValue(value, maxLength = 6) {
  let values = Array(maxLength).fill('')
  if (!Array.isArray(value)) {
    return values
  }

  for (let i = 0; i < values.length; i++) {
    if (typeof value[i] === 'string') {
      values[i] = value[i]
    } else if (typeof value[i] === 'number') {
      values[i] = String(value[i])
    }
  }

  return values
}

export default formatValue
`},33688:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import InputText from './InputText'
import InputNumber from './InputNumber'
import formatValue from './formatValue'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const InputOTP = forwardRef(
  (
    {
      // \u503C\u63A7\u5236
      value = [],
      onChange,
      onComplete,

      // OTP\u914D\u7F6E
      maxLength = 6,
      type = 'number', // 'text' \u6216 'number'
      disabled = false,
      readOnly = false,

      // \u6837\u5F0F\u914D\u7F6E
      className,
      style,

      // \u5176\u4ED6\u5C5E\u6027
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line
    value = formatValue(value, maxLength)

    const rootRef = useRef(null)
    const inputRef = useRef([])

    // Expose
    useImperativeHandle(ref, () => ({
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      focus: focus,
      blur: blur
    }))

    // \u83B7\u7126
    function focus(itemIndex) {
      inputRef.current?.focus?.(itemIndex || 0)
    }

    // \u5931\u7126
    function blur() {
      inputRef.current?.blur?.()
    }

    // \u7C98\u8D34\u503C, \u66F4\u65B0\u6570\u7EC4\u503C
    function textToValue(text) {
      if (typeof text === 'number') {
        // eslint-disable-next-line
        text = text.toString()
      }
      if (!text) return

      const newValue = Array(maxLength).fill('')
      for (let i = 0; i < Math.min(text.length, maxLength); i++) {
        newValue[i] = text[i]
      }

      if (onChange) {
        onChange(newValue)
      }

      if (newValue.join('').length === maxLength && onComplete) {
        onComplete(newValue)
      }

      // \u6700\u540E\u4E00\u4E2A\u6709\u503C\u7684\u8F93\u5165\u6846\u83B7\u7126
      const lastIndex = Math.min(newValue.join('').length, maxLength) - 1
      focus(lastIndex)
    }

    // \u4FEE\u6539\u9879, \u66F4\u65B0\u6570\u7EC4\u503C
    function updateItem(itemIndex, newItemValue) {
      const newValue = [...value]
      newValue[itemIndex] = newItemValue

      if (onChange) {
        onChange(newValue)
      }

      if (newValue.join('').length === maxLength && onComplete) {
        onComplete(newValue)
      }
    }

    // \u5904\u7406\u8F93\u5165\u53D8\u5316
    const handleChange = (itemIndex, newItemValue) => {
      console.log('handleChange', itemIndex, newItemValue)
      if (disabled || readOnly) return

      // \u66F4\u65B0\u5206\u5272\u503C\u548C\u5B8C\u6574\u503C
      updateItem(itemIndex, newItemValue)

      // \u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u8F93\u5165\u6846
      if (newItemValue) {
        focus(itemIndex + 1)
      }
    }

    // \u5904\u7406\u952E\u76D8\u4E8B\u4EF6
    const handleKeyDown = (key, itemIndex) => {
      if (disabled || readOnly) return

      // \u5904\u7406\u9000\u683C\u952E
      if (key === 'Backspace') {
        // \u5F53\u524D\u9879\u6CA1\u6709\u503C\u65F6, \u83B7\u7126\u4E0A\u4E00\u4E2A\u8F93\u5165\u6846
        if (!value[itemIndex] && itemIndex > 0) {
          focus(itemIndex - 1)
        }
      }

      // \u5904\u7406\u65B9\u5411\u952E
      if (key === 'ArrowLeft' && itemIndex > 0) {
        focus(itemIndex - 1)
      }
      if (key === 'ArrowRight' && itemIndex < maxLength - 1) {
        focus(itemIndex + 1)
      }
    }

    // \u5904\u7406\u7C98\u8D34
    const handlePaste = (e) => {
      if (disabled || readOnly) return
      e.preventDefault()

      const pastedText = e.clipboardData.getData('text')
      textToValue(pastedText)
    }

    const InputComponent = type === 'number' ? InputNumber : InputText
    return (
      <div
        ref={rootRef}
        className={DOMUtil.classNames(
          'lyrixi-input-otp',
          className,
          disabled ? 'lyrixi-disabled' : '',
          readOnly ? 'readonly' : ''
        )}
        style={style}
        {...props}
      >
        <InputComponent
          values={value}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={inputRef}
        />
      </div>
    )
  }
)

export default InputOTP
`},99045:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const InputPassword = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="password" />
})

export default InputPassword
`},78935:function(e,n){n.Z=`function getStrength(password) {
  if (password.length === 0) return 0

  let matches = 0
  password.match(/[a-z]/g) && matches++
  password.match(/[A-Z]/g) && matches++
  password.match(/[0-9]/g) && matches++
  password.match(/[^a-zA-Z0-9]/g) && matches++

  if (matches === 3) {
    return 2
  }

  if (matches > 3) {
    if (password.length > 8) return 3
    return 2
  }

  return 1
}

export default getStrength
`},1745:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getStrength from './getStrength'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const PasswordStrength = ({ value = '', ...props }, ref) => {
  let strength = getStrength(value)

  const rootRef = useRef(null)
  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getStrength: (newValue) => {
        return getStrength(newValue || value)
      }
    }
  })

  return (
    <ul
      {...props}
      className={\`lyrixi-input-password-strength level\${strength}\${
        props.className ? ' ' + props.className : ''
      }\`}
      ref={rootRef}
    >
      <li className="lyrixi-input-password-strength-item lyrixi-level1">
        <div className="lyrixi-input-password-strength-progress"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('\u5F31', 'lyrixi_password_weak')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level2">
        <div className="lyrixi-input-password-strength-progress lyrixi-level2"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('\u4E2D', 'lyrixi_password_medium')}
        </span>
      </li>
      <li className="lyrixi-input-password-strength-item lyrixi-level3">
        <div className="lyrixi-input-password-strength-progress lyrixi-level3"></div>
        <span className="lyrixi-input-password-strength-text">
          {LocaleUtil.locale('\u5F3A', 'lyrixi_password_strong')}
        </span>
      </li>
    </ul>
  )
}

export default forwardRef(PasswordStrength)
`},86980:function(e,n){n.Z=`// \u5F53\u524D\u503C\u6240\u5360\u767E\u5206\u6BD4
function getPercent({ min, max, value }) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof value !== 'number') {
    return 0
  }

  let percent = ((value - min) / (max - min)) * 100
  return percent
}

export default getPercent
`},73914:function(e,n){n.Z=`function hideTooltip(tooltipDOM) {
  tooltipDOM.style.visibility = 'hidden'
}

export default hideTooltip
`},15273:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import getPercent from './getPercent'
import showTooltip from './showTooltip'
import hideTooltip from './hideTooltip'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Range = forwardRef(
  ({ value = 0, min = 0, max = 100, step = 1, readOnly, disabled, onChange, ...props }, ref) => {
    const rootRef = useRef(null)
    const tooltipRef = useRef(null)
    const handleRef = useRef(null)
    const railRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    useEffect(() => {
      updateContainer()
      hideTooltip(tooltipRef.current)
      // eslint-disable-next-line
    }, [])

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }

      // \u66F4\u65B0\u4F4D\u7F6E
      updateContainer(newValue)
    }

    // \u663E\u793Atooltip
    function handleTouchStart() {
      updateContainer()
      showTooltip(tooltipRef.current)
    }

    function handleTouchEnd() {
      hideTooltip(tooltipRef.current)
    }

    function updateContainer(newValue) {
      let currentValue = newValue ?? value ?? 0
      let percent = getPercent({ min, max, value: currentValue })
      handleRef.current.style.left = \`calc(\${percent}% - 8px)\`
      tooltipRef.current.style.left = \`calc(\${percent}% - 12px)\`
      railRef.current.style.width = \`\${percent}%\`
      tooltipRef.current.innerHTML = currentValue
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-input-range',
          props?.className,
          readOnly ? 'lyrixi-readOnly' : '',
          disabled ? 'lyrixi-disabled' : ''
        )}
        ref={rootRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={\`lyrixi-input-range-input\`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <div className="lyrixi-input-range-rail">
          <div className="lyrixi-input-range-rail-active" ref={railRef}></div>
        </div>
        <div ref={handleRef} className="lyrixi-input-range-handle">
          <div className="lyrixi-input-range-handle-icon"></div>
        </div>
        <div ref={tooltipRef} className={\`lyrixi-input-range-tooltip\`}>
          {value}
        </div>
      </div>
    )
  }
)

export default Range
`},10396:function(e,n){n.Z=`function showToolTip(tooltipDOM) {
  tooltipDOM.style.visibility = 'visible'
}

export default showToolTip
`},41560:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u8BC4\u5206\u7EC4\u4EF6
const Rate = forwardRef(
  (
    { iconRender, value = 0, min = 0, max = 5, step = 0.5, readOnly, disabled, onChange, ...props },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }
    }

    function getItemActiveWidth(itemValue) {
      // \u5F53\u524D\u9879\u4F4D\u4E8E\u6574\u6570\u4F4D
      if (itemValue <= value) {
        return '100%'
      }
      // \u5F53\u524D\u9879\u4F4D\u4E8E\u5C0F\u6570\u4F4D
      if (itemValue === Math.ceil(value)) {
        return \`\${(value - Math.floor(value)) * 100}%\`
      }
      // \u5F53\u524D\u9879\u8D85\u51FA
      return '0%'
    }

    // \u83B7\u53D6\u56FE\u6807\u8282\u70B9
    function getIconNode(index, isActive = false) {
      if (typeof iconRender === 'function') {
        return iconRender({
          className: isActive
            ? 'lyrixi-input-rate-item-icon-active'
            : 'lyrixi-input-rate-item-icon',
          style: isActive ? { width: getItemActiveWidth(index + 1) } : undefined
        })
      }

      // \u9ED8\u8BA4\u56FE\u6807
      return (
        <div
          className={
            isActive
              ? 'lyrixi-input-rate-item-icon-active default'
              : 'lyrixi-input-rate-item-icon default'
          }
          style={isActive ? { width: getItemActiveWidth(index + 1) } : undefined}
        ></div>
      )
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-input-rate',
          props.className,
          readOnly ? 'lyrixi-readOnly' : '',
          disabled ? 'lyrixi-disabled' : ''
        )}
        ref={rootRef}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={\`lyrixi-input-rate-input\`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />

        {new Array(max).fill(1).map((item, index) => {
          const IconNode = getIconNode(index, false)
          const ActiveIconNode = getIconNode(index, true)

          return (
            <div className="lyrixi-input-rate-item" key={index}>
              {IconNode}
              {ActiveIconNode}
            </div>
          )
        })}
      </div>
    )
  }
)

export default Rate
`},98210:function(e,n){n.Z=`import React, { forwardRef, useState, useEffect } from 'react'
import InputText from './../Text'

const Search = forwardRef(({ value, onChange, onSearch, ...props }, ref) => {
  // No onChange, use keyword
  const [keyword, setKeyword] = useState(value)

  useEffect(() => {
    setKeyword(value)
    // eslint-disable-next-line
  }, [value])

  return (
    <InputText
      ref={ref}
      // \u79FB\u52A8\u7AEF\u4F18\u5316\u5C5E\u6027
      {...props}
      enterKeyHint="search"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      onPressEnter={(e) => {
        props?.onPressEnter && props.onPressEnter(e)
        e?.target?.blur?.()
        onSearch && onSearch(typeof onChange === 'function' ? value : keyword)
      }}
      value={typeof onChange === 'function' ? value : keyword}
      onChange={typeof onChange === 'function' ? onChange : setKeyword}
      type="search"
    />
  )
})

export default Search
`},99170:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6807\u7B7E
const Tag = ({ style, className, name, readOnly, disabled, allowClear, onEdit, onDelete }) => {
  return (
    <div
      className={DOMUtil.classNames('lyrixi-select-tags-item', className)}
      style={style}
      onClick={
        readOnly || disabled
          ? undefined
          : (e) => {
              onEdit && onEdit()
              e.stopPropagation()
            }
      }
    >
      {name}
      {readOnly || disabled || !allowClear ? null : (
        <i
          className="lyrixi-select-tags-item-clear"
          onClick={(e) => {
            onDelete && onDelete()
            e.stopPropagation()
          }}
        ></i>
      )}
    </div>
  )
}

export default Tag
`},68536:function(e,n){n.Z=`import React, { Fragment } from 'react'
import Tag from './Tag'
import InputNode from './../../Node'

// \u6807\u7B7E\u6A21\u5F0F
const Tags = ({
  // \u5206\u9694\u7B26
  separator,
  // \u5DE6\u53F3\u56FE\u6807
  leftIcon,
  rightIcon,
  clearRender,
  className,
  style,
  placeholder,
  readOnly,
  disabled,
  allowClear,
  value,
  onAdd,
  onEdit,
  onChange
}) => {
  return (
    <InputNode
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      style={style}
      onClick={onAdd}
      value={value}
      onChange={onChange}
      allowClear={allowClear}
      clearRender={clearRender}
      placeholder={placeholder}
      formatter={() => {
        if (Array.isArray(value)) {
          return value.map((item, index) => {
            return (
              <Fragment key={item.id || index}>
                <Tag
                  className={item.className}
                  style={item.style}
                  name={item.name}
                  readOnly={item.readOnly}
                  disabled={item.disabled}
                  allowClear={item.allowClear}
                  onEdit={() => {
                    onEdit && onEdit(item)
                  }}
                  onDelete={() => {
                    let currentValue = value.filter((valueItem) => valueItem.id !== item.id)
                    onChange && onChange(currentValue, { action: 'clickDelete' })
                  }}
                />
                {index < value.length - 1 && separator ? separator : null}
              </Fragment>
            )
          })
        }
        return null
      }}
    />
  )
}

export default Tags
`},87306:function(e,n){n.Z=`import _ from 'lodash'
// \u663E\u793A\u540D\u79F0
function getDisplayValue(value, { separator } = {}) {
  if (typeof value !== 'object') {
    return value
  }
  // \u7EAF\u5BF9\u8C61
  if (_.isPlainObject(value)) {
    return value?.name || ''
  }
  // \u6570\u7EC4
  else if (Array.isArray(value)) {
    let displayValues = value.map((item) => item?.name || '')
    displayValues = displayValues.filter((item) => item)
    return displayValues.join(separator && typeof separator === 'string' ? separator : ',')
  }

  return ''
}

export default getDisplayValue
`},56916:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import InputText from './../Text'
import InputAutoFit from './../AutoFit'
import IconRightArrow from './../Icon/RightArrow'
import IconClear from './../Icon/Clear'
import Tags from './Tags'

// \u5185\u5E93\u4F7F\u7528-start
import ObjectUtil from './../../../utils/ObjectUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { ObjectUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u57FA\u7840Combo: \u4EC5\u6E32\u67D3Input
const Combo = forwardRef(
  (
    {
      // Style
      style,
      className,

      // \u56FE\u6807
      leftIcon,
      rightIcon,
      clearRender: customClearRender,

      // \u503C
      value,
      allowClear,
      readOnly,
      disabled,
      placeholder,

      // Display Value
      formatter,
      autoSize,
      separator,
      mode,

      // \u4E8B\u4EF6
      onChange,
      onClick
    },
    ref
  ) => {
    // \u663E\u793A\u6587\u672C\u683C\u5F0F\u5316
    if (typeof formatter !== 'function') {
      // eslint-disable-next-line
      formatter = getDisplayValue
    }
    let displayValue = formatter(value, { separator })

    // Expose methods
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        // \u663E\u793A\u6587\u672C
        displayValue: displayValue,
        getDisplayValue: (newValue) => {
          return displayValue
        },
        comboDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
        getComboDOM: () => {
          // div
          let comboDOM = comboRef?.current
          // Input.Text
          if (comboRef?.current?.getRootDOM) {
            comboDOM = comboRef.current.getRootDOM()
          }
          return comboDOM
        }
      }
    })

    // \u70B9\u51FB\u6587\u672C\u6846
    function handleInputClick(e) {
      e.stopPropagation()
      if (readOnly || disabled) return
      onClick && onClick(e)
    }

    // \u6E32\u67D3\u6E05\u7A7A\u6309\u94AE
    function clearRender({ clearable, onClear }) {
      // \u53EA\u8BFB\u4E0D\u663E\u793A\u6E05\u7A7A\u6309\u94AE
      if (readOnly || disabled) {
        return null
      }

      // \u81EA\u5B9A\u4E49\u6E05\u7A7A\u6309\u94AE
      if (typeof customClearRender === 'function') {
        return customClearRender({ clearable, onClear })
      }

      return ObjectUtil.isEmpty(value) || !allowClear ? (
        <IconRightArrow />
      ) : (
        <IconClear onClick={onClear} />
      )
    }

    // \u6587\u672C\u6846
    let InputNode = InputText
    if (autoSize) {
      InputNode = InputAutoFit
    }

    if (mode === 'tags') {
      return (
        <Tags
          separator={separator}
          readOnly={readOnly}
          disabled={disabled}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          className={className}
          style={style}
          clearRender={clearRender}
          placeholder={placeholder}
          allowClear={allowClear}
          value={value}
          onAdd={handleInputClick}
          onEdit={handleInputClick}
          onChange={onChange}
        />
      )
    }

    return (
      <InputNode
        disabled={disabled}
        readOnly
        allowClear={allowClear}
        value={displayValue}
        placeholder={placeholder}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        style={style}
        clearRender={clearRender}
        onClick={handleInputClick}
        // \u5F3A\u5236\u53EA\u8BFB\u7684\u63A7\u4EF6, \u53EA\u4F1A\u6E05\u7A7A\u65F6\u89E6\u53D1
        onChange={onChange}
        ref={comboRef}
      />
    )
  }
)

export default Combo
`},40542:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const InputTel = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="tel" />
})

export default InputTel
`},24226:function(e,n){n.Z=`import _ from 'lodash'
import React from 'react'
import IconClear from './../Icon/Clear'

// \u6E32\u67D3\u6E05\u9664\u6309\u94AE
function getClearNode({ clearRender, allowClear, value, onClear, onTouchStart }) {
  let clearable = !_.isEmpty(value) || typeof value === 'number' ? true : false

  // \u81EA\u5B9A\u4E49\u6E32\u67D3\u6E05\u7A7A\u6309\u94AE
  if (typeof clearRender === 'function') {
    let clearNode = clearRender({
      allowClear,
      clearable: clearable,
      onClear: onClear,
      // \u89E3\u51B3\u70B9\u51FB\u5931\u7126\u540E\u89E6\u53D1onBlur\u7684\u95EE\u9898
      onTouchStart: onTouchStart
    })

    if (clearNode !== undefined) return clearNode
  }

  // \u9ED8\u8BA4\u6E32\u67D3
  if (!clearable) return null
  return <IconClear onTouchStart={onTouchStart} onClick={onClear} />
}

export default getClearNode
`},49660:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import {
  splitInputStyle,
  maxLengthFormatter,
  minMaxFormatter,
  precisionFormatter,
  correctValue as _correctValue
} from './utils'
import getClearNode from './getClearNode'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import MathUtil from '../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const InputText = (
  {
    // \u5BB9\u5668
    id,
    type = 'text', // \u7C7B\u578B: text | number | tel | password | search | autoFit
    style: externalStyle,
    className,
    readOnly,
    disabled,
    // \u6587\u672C\u6846
    name,
    value = '',
    inputMode,
    enterKeyHint,
    autoComplete,
    autoCorrect,
    spellCheck,
    formatter, // \u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F
    // \u5C0F\u6570\u7CBE\u5EA6, \u53EA\u6709\u6570\u503C\u6846\u624D\u751F\u6548
    precision,
    // [Number\u6846]\u5C0F\u6570\u4F4D\u88650, true: \u4E0D\u88650; false: \u88650\u3002 [Text\u6846]\u5F71\u54CD\u5DE6\u53F3\u7A7A\u683C;
    trim,
    max,
    min,
    placeholder,
    maxLength,
    // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    autoFocus, // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    autoSelect, // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
    // \u5DE6\u53F3\u56FE\u6807
    leftIcon,
    rightIcon,
    // \u81EA\u5B9A\u4E49\u6E32\u67D3\u6587\u672C\u6846
    inputRender,
    // \u6E05\u9664\u6309\u952E
    clearRender,
    allowClear,
    // events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,

    // \u6269\u5C55\u5C5E\u6027
    ...props
  },
  ref
) => {
  // \u8F93\u5165\u6846\u5C55\u793A\u503C
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
        return inputRef.current
      },
      correctValue: correctValue,
      focus: focus
    }
  })

  useEffect(() => {
    if (!inputRef.current) return
    // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    if (autoFocus) {
      focus()
    }

    if (!value) return

    let val = ''

    // \u77EB\u6B63\u4E3A\u6B63\u786E\u7684\u503C
    val = correctValue(value)

    // \u77EB\u6B63\u540E\u7684\u503C\u548C\u77EB\u6B63\u524D\u7684\u503C\u4E0D\u4E00\u81F4, \u9700\u8981\u5F3A\u5236\u4FEE\u6539\u6587\u672C\u6846\u5185\u7684\u503C
    if (val !== value) {
      onChange(val)
    }
  }, []) // eslint-disable-line

  // \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u548C\u5C0F\u6570\u4F4D\u622A\u53D6
  function correctValue(val) {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  // \u83B7\u53D6\u7126\u70B9
  function focus() {
    if (disabled || readOnly || !inputRef.current) return
    inputRef.current.focus()
    // \u53EA\u6709\u83B7\u53D6\u7126\u70B9\u4EE5\u540E\u624D\u80FD\u9009\u4E2D
    if (autoSelect) {
      inputRef.current.select()
    }
    // \u8BBE\u7F6E\u5149\u6807\u4F4D\u7F6E\u5230\u6587\u672C\u672B\u5C3E(number\u6846\u4E0D\u652F\u6301)
    else if (inputRef.current.value.length && inputRef.current.setSelectionRange) {
      const length = inputRef.current.value.length
      try {
        inputRef.current.setSelectionRange(length, length)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // \u83B7\u53D6\u7126\u70B9\u65F6, \u5982\u679CreadOnly\u6216\u8005disabled\u65F6, \u9700\u8981\u7ACB\u5373\u5931\u53BB\u7126\u70B9, \u89E3\u51B3ios\u4F1A\u51FA\u73B0\u5E95\u680F\u7684\u95EE\u9898
  function handleFocus(e) {
    if (readOnly || disabled) {
      e.target.blur()
      return
    }
    if (onFocus) onFocus(e)
  }

  // \u4FEE\u6539\u503C
  async function handleChange(e) {
    let target = e.target
    let val = target.value
    // \u6B64\u5904\u4E0D\u5B9C\u7528target?.validity?.badInput\u77EB\u6B63\u6570\u503C, \u56E0\u4E3Aios\u4E0A.\u4E5F\u8FD4\u56DE\u7A7A

    // \u77EB\u6B63maxLength\u548C\u5C0F\u6570\u70B9\u4F4D\u6570(\u4E0D\u80FD\u77EB\u6B63\u5176\u5B83\u6846\uFF0C\u56E0\u4E3A\u77EB\u6B63\u5C06\u65E0\u6CD5\u8F93\u5165\u4E2D\u6587)
    if (val && type === 'number') {
      // \u4E0D\u80FD\u6821\u9A8C\u6700\u5C0F\u503C\uFF0C\u56E0\u4E3Amin={0.1}\u65F6\uFF0C\u65E0\u6CD5\u5220\u9664
      val = minMaxFormatter(val, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = MathUtil.extractNumber(val)
      val = maxLengthFormatter(val, { maxLength })
      if (target.value !== val) {
        target.value = val
      }
    }

    // \u89E6\u53D1onChange: \u4F7F\u7528defaultValue\u65F6, \u5220\u9664\u5230\u70B9\u65F6\u4F1A\u76F4\u63A5\u628A\u70B9\u6E05\u7A7A
    if (onChange) onChange(val, { action: 'change' })
  }

  // \u6570\u503C\u6846\u5931\u53BB\u7126\u70B9, \u6821\u9A8C\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C
  function handleBlur(e) {
    if (readOnly || disabled) {
      return
    }
    let target = e.target
    let val = target.value

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // \u6570\u503C\u6846\u5931\u7126\u65F6\u9700\u8981\u77EB\u6B63\u6570\u503C
    if (type === 'number') {
      // \u6B63\u5E38\u8F93\u5165\uFF1A\u77EB\u6B63\u6700\u5927\u6700\u5C0F\u503C\u3001\u5C0F\u6570\u70B9\u3001\u6700\u5927\u957F\u5EA6
      if (val && !isNaN(val)) {
        // \u7EA0\u6B63\u6570\u5B57
        val = correctValue(val)
      }
      // \u8F93\u5165\u9519\u8BEF\u6216\u771F\u7684\u4E3A\u7A7A\uFF1A\u7528\u4E8E\u89E3\u51B3ios\u53EF\u4EE5\u8F93\u5165\u5B57\u6BCD\u4E2D\u6587\u7B49\u95EE\u9898
      else {
        val = ''
      }

      target.value = val
    }

    // \u4FEE\u6539\u5B8C\u56DE\u8C03
    if (val !== value) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (!inputRef.current?.preventBlur) {
      if (onBlur) onBlur(e)
    }
  }

  // \u70B9\u51FB\u6E05\u9664(blur\u751F\u6548)
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // \u5220\u9664\u963B\u6B62blur
    delete inputRef?.current?.preventBlur

    // \u83B7\u53D6\u7126\u70B9
    focus()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  function handleKeyDown(e) {
    onKeyDown && onKeyDown(e)
    if (typeof onPressEnter !== 'function') return
    // \u76D1\u542C Enter \u952E\uFF08keyCode 13 \u6216 'Enter'\uFF09
    if (e.key === 'Enter' || e.keyCode === 13) {
      // \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF08\u9632\u6B62\u8868\u5355\u63D0\u4EA4\u5BFC\u81F4\u7684\u9875\u9762\u5237\u65B0\uFF09
      e.preventDefault()

      // \u5931\u7126\u6536\u8D77\u952E\u76D8\uFF08\u79FB\u52A8\u7AEF\uFF09
      e.target.blur()

      // \u6267\u884C\u641C\u7D22
      onPressEnter(e)
    }
  }

  // render
  function getInputNode() {
    if (typeof inputRender === 'function') {
      return inputRender({
        inputRef,
        id,
        name,
        inputMode,
        enterKeyHint,
        autoComplete,
        autoCorrect,
        spellCheck,
        autoFocus,
        value,
        maxLength,
        readOnly,
        disabled,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown
      })
    }

    // autoFit\u7C7B\u578B
    if (type === 'autoFit') {
      return (
        <div className={\`lyrixi-input-autofit\`}>
          <textarea
            ref={inputRef}
            name={name}
            inputMode={inputMode}
            enterKeyHint={enterKeyHint}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
            autoFocus={autoFocus}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            style={inputStyle}
            className={\`lyrixi-input-autofit-textarea\`}
          ></textarea>
          <pre className={\`lyrixi-input-autofit-pre\`} style={inputStyle}>
            <span>{value}</span>
          </pre>
        </div>
      )
    }
    // textarea\u7C7B\u578B
    if (type === 'textarea') {
      // \u5982\u679C\u503C\u7ED1\u5B9A\u5C5E\u6027,\u5219\u53EA\u6709\u901A\u8FC7\u7236\u7EC4\u4EF6\u7684prop\u6765\u6539\u53D8\u503C
      return (
        <textarea
          ref={inputRef}
          name={name}
          inputMode={inputMode}
          enterKeyHint={enterKeyHint}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          spellCheck={spellCheck}
          autoFocus={autoFocus}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className={\`lyrixi-input-textarea\`}
          style={inputStyle}
        ></textarea>
      )
    }

    // \u5176\u5B83\u7C7B\u578B
    return (
      <input
        ref={inputRef}
        name={name}
        type={type} // number\u7C7B\u578B\u9700\u8981text\uFF0C\u5426\u5219focus\u65E0\u6CD5\u8BBE\u7F6E\u5149\u6807\u5230\u672B\u5C3E
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        value={value}
        min={typeof min === 'number' ? min : ''}
        max={typeof max === 'number' ? max : ''}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        style={inputStyle}
        className={\`lyrixi-input-text\`}
      />
    )
  }

  return (
    <div
      {...props}
      id={id}
      style={style}
      className={DOMUtil.classNames(
        \`lyrixi-input\`,
        className,
        displayValue ? 'lyrixi-has-formatter' : '',
        disabled ? 'lyrixi-disabled' : '',
        readOnly ? 'readonly' : ''
      )}
      onClick={onClick}
      ref={rootRef}
    >
      {/* Left */}
      {leftIcon}

      <div
        className={DOMUtil.classNames(
          'lyrixi-input-node',
          disabled ? 'lyrixi-disabled' : '',
          readOnly ? 'lyrixi-readOnly' : ''
        )}
      >
        {/* Main */}
        {getInputNode()}

        {/* Blur display value */}
        {displayValue ? (
          <div
            className={\`lyrixi-input-formatter\`}
            style={inputStyle}
            // Click to focus text
            onClick={() => {
              focus()
            }}
          >
            {displayValue}
          </div>
        ) : null}
      </div>

      {/* Clear Icon */}
      {disabled || !allowClear
        ? null
        : getClearNode({
            clearRender,
            allowClear,
            value,
            onClear: handleClear,
            onTouchStart: (e) => {
              inputRef.current.preventBlur = true
            }
          })}

      {/* Right */}
      {rightIcon}
    </div>
  )
}

export default forwardRef(InputText)
`},53522:function(e,n){n.Z=`import maxLengthFormatter from './maxLengthFormatter'
import minMaxFormatter from './minMaxFormatter'
import precisionFormatter from './precisionFormatter'

// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from '../../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u548C\u5C0F\u6570\u4F4D\u622A\u53D6
function correctValue(value, { type, min, max, maxLength, trim, precision }) {
  let val = value
  if (val === undefined || val === '') return val
  if (typeof val !== 'string' && typeof val !== 'number') return ''

  // \u6700\u5927\u6700\u5C0F\u503C\u77EB\u6B63
  val = minMaxFormatter(val, { min, max })

  // \u5C0F\u6570\u4F4D\u622A\u53D6
  val = precisionFormatter(val, { precision, trim })

  // \u6700\u5927\u957F\u5EA6\u8F7D\u53D6
  val = maxLengthFormatter(val, { maxLength })

  if (type === 'number') {
    val = MathUtil.extractNumber(val)
  }

  return val
}

export default correctValue
`},85216:function(e,n){n.Z=`import splitInputStyle from './splitInputStyle'
import maxLengthFormatter from './maxLengthFormatter'
import minMaxFormatter from './minMaxFormatter'
import precisionFormatter from './precisionFormatter'
import correctValue from './correctValue'

export { splitInputStyle, maxLengthFormatter, minMaxFormatter, precisionFormatter, correctValue }
`},51714:function(e,n){n.Z=`// \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u4E0E\u5C0F\u6570\u4F4D
function maxLengthFormatter(val, { maxLength }) {
  // eslint-disable-next-line
  if (typeof val === 'number') val = String(val)

  // \u6700\u5927\u957F\u5EA6
  if (maxLength && val && val.length > maxLength) {
    // eslint-disable-next-line
    val = val.substring(0, maxLength)
  }
  return val
}

export default maxLengthFormatter
`},49661:function(e,n){n.Z=`// \u77EB\u6B63\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C
function minMaxFormatter(val, { min, max }) {
  if (val && !isNaN(val) && val !== (null || '')) {
    if (typeof max === 'number') {
      // eslint-disable-next-line
      if (Number(val) > max) val = max
    }
    if (typeof min === 'number') {
      // eslint-disable-next-line
      if (Number(val) < min) val = min
    }
  }
  return val
}

export default minMaxFormatter
`},15760:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from './../../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u77EB\u6B63\u5C0F\u6570\u4F4D\u622A\u53D6
function precisionFormatter(value, { precision, trim }) {
  let val = value
  // \u7B26\u5408\u622A\u53D6\u6761\u4EF6\u65F6
  if (typeof precision === 'number' && !isNaN(val) && val !== (null || '')) {
    if (trim) {
      val = Number(val || 0)
    }
    val = MathUtil.fixed(val, precision)
  }
  return val
}

export default precisionFormatter
`},94532:function(e,n){n.Z=`function splitStyle(externalStyle) {
  const {
    color,
    fontSize,
    height,
    lineHeight,
    minHeight,
    maxHeight,
    textAlign,
    textIndent,
    ...style
  } = externalStyle || {}

  const inputStyle = {}
  if (color) {
    inputStyle.color = color
  }
  if (fontSize) {
    inputStyle.fontSize = fontSize
  }
  if (height) {
    inputStyle.height = height
  }
  if (minHeight) {
    inputStyle.minHeight = minHeight
  }
  if (maxHeight) {
    inputStyle.maxHeight = maxHeight
  }
  if (textAlign) {
    inputStyle.textAlign = textAlign
  }
  if (textIndent) {
    inputStyle.textIndent = textIndent
  }
  if (lineHeight) {
    inputStyle.lineHeight = lineHeight
  }

  return {
    style: style,
    inputStyle: inputStyle
  }
}

export default splitStyle
`},64193:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const Textarea = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="textarea" />
})

export default Textarea
`},97510:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Toast from './../../Toast'
// \u4F7F\u7528Message\u4EE3\u66FFModal
import Message from './../../Message'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil, Clipboard, Toast, Message } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Url = forwardRef(
  (
    {
      onClick,
      onPreview, // \u662F\u5426\u652F\u6301\u5355\u51FB\u9884\u89C8, readOnly\u4E3Atrue\u65F6\u624D\u751F\u6548
      type,
      ...props
    },
    ref
  ) => {
    function copyLink(url) {
      Clipboard.copy(url, {
        onSuccess: () => {
          Toast.show({
            content: LocaleUtil.locale('\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F', 'lyrixi_link_copy_success')
          })
        },
        onError: () => {
          Message.open({
            maskStyle: {
              zIndex: 100
            },
            title: LocaleUtil.locale('\u63D0\u793A', 'lyrixi_alert_title'),
            content:
              LocaleUtil.locale('\u94FE\u63A5\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25, \u8BF7\u957F\u6309\u590D\u5236', 'lyrixi_link_copy_error') +
              \`<br/>\${url}\`,
            buttons: [
              {
                name: '\u786E\u5B9A',
                className: 'primary',
                onClick: () => true
              }
            ]
          })
        }
      })
    }

    const handleClick = async (e) => {
      // \u53EA\u8BFB\u624D\u53EF\u4EE5\u590D\u5236\u8FDE\u63A5
      if (!props?.readOnly && !props?.disabled) return

      // \u7F51\u5740\u4E0D\u518D\u9700\u8981\u534F\u8BAE\u524D\u7F00 \u6709\u524D\u7F00\u5219\u4FDD\u7559\uFF0C\u65E0\u524D\u7F00\u5219\u624B\u52A8\u62FC\u63A5http\u534F\u8BAE\u4F5C\u4E3A\u524D\u7F00
      let value = e.target.value
      let url = /^(https|http)?:\\/\\//.test(value) ? value : \`http://\${value}\`

      // \u81EA\u5B9A\u4E49\u9884\u89C8
      if (typeof onPreview === 'function') {
        let goOn = await onPreview(value)
        if (goOn === false) return
      }

      copyLink(url)
    }

    return <InputText ref={ref} {...props} onClick={handleClick} type="url" />
  }
)

export default Url
`},57939:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page, Divider, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          style={{ maxHeight: '100px', backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('\u89E6\u53D1blur')
          }}
        />

        <Divider>Formatter</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          formatter={(newValue) => {
            return '$' + newValue
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('\u89E6\u53D1blur')
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},29592:function(e,n){n.Z=`import React, { useEffect, useState, useRef } from 'react'
import { Page, MathUtil, Input } from 'lyrixi-mobile'
// import VConsole from 'vconsole'

// const vConsole = new VConsole()

export default () => {
  const inputNumberRef = useRef(null)
  const [value, setValue] = useState('1a')

  useEffect(() => {
    console.log(inputNumberRef.current)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Input.Number
          ref={inputNumberRef}
          inputMode="numeric"
          // inputMode="decimal"
          // pattern="[0-9]+"
          placeholder="Input"
          value={value}
          // precision={0}
          maxLength={18}
          trim={true}
          allowClear
          clearRender={({ clearable, onClear }) => {
            return clearable ? <Input.IconClear onClick={onClear} /> : <Input.IconRightArrow />
          }}
          // formatter={(currentValue) => {
          //   return '$' + MathUtil.thousands(currentValue)
          // }}
          onChange={(val) => {
            console.log('\u5F97\u5230\u7684\u503C:', val)
            setValue(val)
          }}
        />

        <Input.Number
          value={value}
          onChange={setValue}
          formatter={(currentValue) => {
            return '$' + MathUtil.thousands(currentValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},34951:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page, MathUtil, Divider, Card, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('2.10')
  return (
    <Page>
      <Page.Main>
        <Divider>Size XS</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xs"
            placeholder="Size xs"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size S</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-s"
            placeholder="Size s"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size M</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-radius-m"
            placeholder="Size m"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
            formatter={(num) => {
              return '$' + MathUtil.thousands(Number(num).toFixed(2))
            }}
            // onChange={(val) => {
            //   console.log('\u5F97\u5230\u7684\u503C:', val)
            //   setValue(val)
            // }}
          />
        </Card>

        <Divider>Size L</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-l"
            placeholder="Size l"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size XL</Divider>
        <Card className="lyrixi-padding-horizontal-l lyrixi-padding-vertical-l">
          <Input.NumberBox
            className="lyrixi-xl"
            placeholder="Size xl"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
`},44515:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Password
        placeholder="Select"
        value={value}
        allowClear
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},55243:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},51829:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Range
        style={{ marginTop: '50px' }}
        value={value}
        // disabled
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},22342:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Tel
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},30522:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Page, Divider, Input, Card, Button } from 'lyrixi-mobile'

export default () => {
  const inputTextRef = useRef(null)
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')

  useEffect(() => {
    console.log('Input.Text ref:', inputTextRef.current)
  }, [])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>\u57FA\u7840\u7528\u6CD5</Divider>
          <Input.Text
            ref={inputTextRef}
            placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
            value={value}
            onChange={(val) => {
              console.log('\u5F97\u5230\u7684\u503C:', val)
              setValue(val)
            }}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: {value || '\u7A7A'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u5E26\u6E05\u9664\u6309\u94AE</Divider>
          <Input.Text placeholder="\u5E26\u6E05\u9664\u6309\u94AE" value={value2} allowClear onChange={setValue2} />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: {value2 || '\u7A7A'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u683C\u5F0F\u5316\u663E\u793A</Divider>
          <Input.Text
            placeholder="\u683C\u5F0F\u5316\u663E\u793A"
            value={value3}
            formatter={(currentValue) => {
              return currentValue ? '$' + currentValue : ''
            }}
            onChange={setValue3}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: {value3 || '\u7A7A'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u6700\u5927\u957F\u5EA6\u9650\u5236</Divider>
          <Input.Text
            placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26"
            value={value4}
            maxLength={10}
            onChange={setValue4}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: {value4 || '\u7A7A'} ({value4.length}/10)
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u7981\u7528\u72B6\u6001</Divider>
          <Input.Text
            placeholder="\u7981\u7528\u72B6\u6001"
            value="\u8FD9\u662F\u7981\u7528\u72B6\u6001\u7684\u6587\u672C"
            disabled={true}
            onChange={setValue5}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u53EA\u8BFB\u72B6\u6001</Divider>
          <Input.Text
            placeholder="\u53EA\u8BFB\u72B6\u6001"
            value="\u8FD9\u662F\u53EA\u8BFB\u72B6\u6001\u7684\u6587\u672C"
            readOnly={true}
            onChange={setValue5}
          />
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u5E26\u5DE6\u53F3\u56FE\u6807</Divider>
          <Input.Text
            placeholder="\u5E26\u5DE6\u53F3\u56FE\u6807"
            value={value5}
            leftIcon={<span style={{ color: '#999' }}>\u{1F50D}</span>}
            rightIcon={({ value }) => {
              return value ? (
                <Input.IconClear onClick={() => setValue5('')} />
              ) : (
                <Input.IconRightArrow />
              )
            }}
            onChange={setValue5}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: {value5 || '\u7A7A'}
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u81EA\u52A8\u53BB\u9664\u7A7A\u683C</Divider>
          <Input.Text
            placeholder="\u81EA\u52A8\u53BB\u9664\u9996\u5C3E\u7A7A\u683C"
            value={value}
            trim={true}
            onChange={setValue}
          />
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            \u5F53\u524D\u503C: "{value || '\u7A7A'}"
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u64CD\u4F5C\u6309\u94AE</Divider>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button onClick={() => inputTextRef.current?.focus()}>\u805A\u7126\u8F93\u5165\u6846</Button>
            <Button onClick={() => inputTextRef.current?.blur()}>\u5931\u7126\u8F93\u5165\u6846</Button>
            <Button onClick={() => setValue('')}>\u6E05\u7A7A\u6240\u6709\u503C</Button>
          </div>
        </Card>

        <Card style={{ marginTop: '20px' }}>
          <Divider>\u529F\u80FD\u8BF4\u660E</Divider>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
            <p>\u2022 \u652F\u6301\u6587\u672C\u8F93\u5165\u548C\u7F16\u8F91</p>
            <p>\u2022 \u652F\u6301placeholder\u63D0\u793A</p>
            <p>\u2022 \u652F\u6301\u6E05\u9664\u6309\u94AE</p>
            <p>\u2022 \u652F\u6301\u683C\u5F0F\u5316\u663E\u793A</p>
            <p>\u2022 \u652F\u6301\u6700\u5927\u957F\u5EA6\u9650\u5236</p>
            <p>\u2022 \u652F\u6301\u5DE6\u53F3\u56FE\u6807</p>
            <p>\u2022 \u652F\u6301\u81EA\u52A8\u53BB\u9664\u9996\u5C3E\u7A7A\u683C</p>
            <p>\u2022 \u652F\u6301disabled\u548CreadOnly\u72B6\u6001</p>
            <p>\u2022 \u652F\u6301ref\u64CD\u4F5C\uFF08focus\u3001blur\u7B49\uFF09</p>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},39900:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Textarea
        value={value}
        allowClear
        formatter={(newValue) => {
          return '$' + newValue
        }}
        style={{ backgroundColor: '#f8f8f8' }}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},37018:function(e,n){n.Z=`import AutoFit from './AutoFit'
import Number from './Number'
import NumberBox from './NumberBox'
import NumberKeyboard from './NumberKeyboard'
import OTP from './OTP'
import Password from './Password'
import PasswordStrength from './PasswordStrength'
import Range from './Range'
import Rate from './Rate'
import Tel from './Tel'
import Text from './Text'
import Node from './Node'
import Search from './Search'
import Select from './Select'
import Textarea from './Textarea'

import Url from './Url'
import IconClear from './Icon/Clear'
import IconRightArrow from './Icon/RightArrow'
import IconLeftArrow from './Icon/LeftArrow'

// eslint-disable-next-line
export default {
  AutoFit: AutoFit,
  Number: Number,
  NumberBox: NumberBox,
  NumberKeyboard: NumberKeyboard,
  OTP: OTP,
  Password: Password,
  PasswordStrength: PasswordStrength,
  Range: Range,
  Rate: Rate,
  Tel: Tel,
  Text: Text,
  Node: Node,
  Search: Search,
  Select: Select,
  Textarea: Textarea,
  Url: Url,
  IconClear: IconClear,
  IconRightArrow: IconRightArrow,
  IconLeftArrow: IconLeftArrow
}
`},3837:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from '../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const ButtonAction = ({ onClick, className = '', children }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-keyboard-button lyrixi-keyboard-button-action',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonAction
`},25188:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from '../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */
const ButtonNumber = ({ children, onClick, className = '' }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(children)
    }
  }

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-keyboard-button lyrixi-keyboard-button-number',
        className
      )}
      onTouchStart={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonNumber
`},19859:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from '../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const ButtonQuick = ({ onClick, className = '', children }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={DOMUtil.classNames('lyrixi-keyboard-button-quick', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonQuick
`},70974:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// \u7EC4\u4EF6
import ButtonNumber from './ButtonNumber'
import ButtonAction from './ButtonAction'
import ButtonQuick from './ButtonQuick'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
import Page from '../../Page'
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil, DOMUtil, SafeArea, Page, Icon } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const KeyboardNumber = forwardRef(
  (
    {
      safeArea = true,
      portal,
      // \u503C\u63A7\u5236
      value = '',
      onChange,

      // \u6309\u94AE\u914D\u7F6E
      dot, // \u5C0F\u6570\u70B9\u6309\u94AE
      minus, // \u8D1F\u53F7\u6309\u94AE
      ok,
      cancel,
      onOk,
      onCancel,

      // \u906E\u7F69\u914D\u7F6E
      modalStyle,
      modalClassName,

      // \u663E\u793A\u63A7\u5236
      open,
      onOpen,
      onClose
    },
    ref
  ) => {
    const isDeleteInMainRef = useRef(false)
    const rootRef = useRef(null)

    // \u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5
    useImperativeHandle(ref, () => ({
      ...rootRef.current
    }))

    // \u5904\u7406open\u53D8\u5316
    useEffect(() => {
      if (open && onOpen) {
        onOpen()
      }
      // eslint-disable-next-line
    }, [open, onOpen])

    // \u5904\u7406\u70B9\u51FB\u952E\u76D8\u5916\u90E8
    useEffect(() => {
      if (!open) return
      // \u89E3\u51B3\u4E8Eclick\u521A\u7ED1\u5B9A\u5C31\u89E6\u53D1\u7684\u95EE\u9898, \u56E0\u4E3Aclick\u4F1A\u5192\u6CE1\u5230document\u4E0A\uFF0C\u6240\u4EE5\u521A\u7ED1\u5B9A\uFF0C\u5192\u6CE1\u540E\u4F1A\u89E6\u53D1click
      let openTime = Date.now()

      const handleOutsideClick = (event) => {
        // \u5FFD\u7565\u6253\u5F00\u540E 1\u79D2 \u5185\u7684\u4E8B\u4EF6
        if (Date.now() - openTime < 100) return

        if (!rootRef.current?.rootDOM) return
        if (rootRef.current.rootDOM.contains(event.target)) return
        if (onClose) {
          onClose()
        }
      }

      // document.addEventListener('mousedown', handleOutsideClick)
      // document.addEventListener('touchend', handleOutsideClick)

      document.addEventListener('click', handleOutsideClick)

      return () => {
        // document.removeEventListener('mousedown', handleOutsideClick)
        // document.removeEventListener('touchend', handleOutsideClick)

        document.removeEventListener('click', handleOutsideClick)
      }
    }, [open, onClose])
    // \u5904\u7406\u6570\u5B57\u6309\u952E\u70B9\u51FB
    const handleNumber = (num) => {
      let newValue = value + num
      if (onChange) {
        onChange(newValue, { action: 'number' })
      }
    }

    // \u5904\u7406\u5C0F\u6570\u70B9
    const handleDot = () => {
      const currentValue = value || ''
      const newValue = currentValue + '.'
      if (onChange) {
        onChange(newValue, { action: 'dot' })
      }
    }

    // \u5904\u7406\u8D1F\u53F7
    const handleMinus = () => {
      const currentValue = value || ''
      const newValue = currentValue + '-'
      if (onChange) {
        onChange(newValue, { action: 'minus' })
      }
    }

    // \u5904\u7406\u5220\u9664\u6309\u952E
    const handleDelete = () => {
      let newValue = ''
      if (value.length > 0) {
        newValue = value.slice(0, -1)
      }
      if (onChange) {
        onChange(newValue, { action: 'delete' })
      }
    }

    // \u5904\u7406\u786E\u5B9A\u6309\u94AE
    const handleOk = () => {
      if (onOk) {
        onOk(value)
      }
      if (onClose) {
        onClose()
      }
    }

    // \u5904\u7406\u53D6\u6D88\u6309\u94AE
    const handleCancel = () => {
      if (onCancel) {
        onCancel()
      }
      if (onClose) {
        onClose()
      }
    }

    // \u7B2C\u56DB\u884C \u6839\u636E\u914D\u7F6E\u52A8\u6001\u5E03\u5C40
    function getOperateRowNode() {
      isDeleteInMainRef.current = true
      // \u5F53ok\u3001dot\u3001minus\u90FD\u6CA1\u6709\u65F6, \u5220\u9664\u6309\u94AE\u653E\u5728\u53F3\u4E0B\u89D2
      if (ok === null && !dot && !minus) {
        return (
          <>
            <ButtonNumber className="empty">{/* \u7A7A\u4F4D */}</ButtonNumber>
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="lyrixi-keyboard-icon lyrixi-icon-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }
      // \u5F53\u6CA1\u6709ok, \u4F46dot\u548Cminus\u6709\u4E00\u4E2A\u65F6, \u5220\u9664\u6309\u94AE\u653E\u5728\u53F3\u4E0B\u89D2, \u5176\u4ED6\u6309\u94AE\u653E\u5728\u5DE6\u4E0B\u89D2
      if (ok === null && ((dot && !minus) || (!dot && minus))) {
        return (
          <>
            {dot && <ButtonNumber onClick={handleDot}>.</ButtonNumber>}
            {minus && <ButtonNumber onClick={handleMinus}>-</ButtonNumber>}
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="lyrixi-keyboard-icon lyrixi-icon-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }

      isDeleteInMainRef.current = false
      // \u5168\u90FD\u6709\u65F6, \u952E\u76D8\u533A\u4E0D\u663E\u793A\u5220\u9664\u6309\u94AE
      return (
        <>
          {dot ? (
            <ButtonNumber onClick={handleDot}>.</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
          <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
          {minus ? (
            <ButtonNumber onClick={handleMinus}>-</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
        </>
      )
    }

    // \u6784\u5EFA\u952E\u76D8\u8282\u70B9
    const KeyboardNode = (
      <Page
        ref={rootRef}
        animation="slideUp"
        className={DOMUtil.classNames(
          'lyrixi-modal-animation lyrixi-bottom-center lyrixi-keyboardNumberModal',
          modalClassName,
          open ? 'lyrixi-active' : '',
          ok !== null ? 'lyrixi-keyboard-has-ok' : ''
        )}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* \u9876\u90E8\u64CD\u4F5C\u680F */}
        <Page.Header>
          {cancel !== null && (
            <ButtonQuick onClick={handleCancel}>
              {cancel !== null ? (
                <Icon className="lyrixi-keyboard-icon lyrixi-icon-arrow-down" />
              ) : (
                cancel
              )}
            </ButtonQuick>
          )}
        </Page.Header>

        {/* \u952E\u76D8\u4E3B\u4F53 */}
        <Page full={false} layout="horizontal">
          <Page.Main>
            {/* \u7B2C\u4E00\u884C 1-3 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>1</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>2</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>3</ButtonNumber>
            </div>

            {/* \u7B2C\u4E8C\u884C 4-6 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>4</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>5</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>6</ButtonNumber>
            </div>

            {/* \u7B2C\u4E09\u884C 7-9 */}
            <div className="lyrixi-keyboard-main-row">
              <ButtonNumber onClick={handleNumber}>7</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>8</ButtonNumber>
              <ButtonNumber onClick={handleNumber}>9</ButtonNumber>
            </div>

            {/* \u7B2C\u56DB\u884C \u6839\u636E\u914D\u7F6E\u52A8\u6001\u5E03\u5C40 */}
            <div className="lyrixi-keyboard-main-row">{getOperateRowNode()}</div>
          </Page.Main>

          <Page.Aside className="lyrixi-flex lyrixi-flex-vertical">
            {/* \u5220\u9664\u952E - \u53EA\u5728\u6709\u786E\u5B9A\u6309\u94AE\u65F6\u663E\u793A\u5728\u4FA7\u8FB9\u680F */}
            {isDeleteInMainRef.current === false && (
              <ButtonAction className="lyrixi-delete" onClick={handleDelete}>
                <Icon className="lyrixi-keyboard-icon lyrixi-icon-keyboard-delete" />
              </ButtonAction>
            )}

            {/* \u786E\u5B9A\u6309\u94AE */}
            {ok !== null && (
              <ButtonAction className="lyrixi-ok" onClick={handleOk}>
                {ok || LocaleUtil.locale('\u786E\u5B9A', 'lyrixi_ok')}
              </ButtonAction>
            )}
          </Page.Aside>
        </Page>
        {safeArea && <SafeArea className="lyrixi-border-t" style={{ backgroundColor: 'white' }} />}
      </Page>
    )

    // \u6E32\u67D3\u5230body
    return createPortal(KeyboardNode, portal || document.getElementById('root') || document.body)
  }
)

export default KeyboardNumber
`},43042:function(e,n){n.Z=`import Number from './Number'

const Keyboard = {
  Number
}

export default Keyboard
`},35364:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import SpinFade from './../SpinFade'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

const Loading = forwardRef(
  ({ portal, maskClassName, maskStyle, iconRender, content, children, ...props }, ref) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // render icon
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender()
      }
      return <SpinFade />
    }

    const IconNode = getIconNode()

    // \u7EC4\u5408Node
    let Node = (
      <div
        className={DOMUtil.classNames(\`lyrixi-loading-mask mask lyrixi-active\`, maskClassName)}
        style={maskStyle}
        ref={rootRef}
      >
        {children !== undefined ? (
          children
        ) : (
          <div className="lyrixi-loading" {...props}>
            <div className="lyrixi-loading-icon">{IconNode}</div>
            <div className="lyrixi-loading-content">
              {content || \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'lyrixi_refreshing')}...\`}
            </div>
          </div>
        )}
      </div>
    )

    if (portal) {
      return createPortal(Node, portal)
    }
    return Node
  }
)

export default Loading
`},15375:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const SpinFade = (props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })
  return (
    <div
      {...props}
      className={\`lyrixi-loading-spinfade\${props?.className ? ' ' + props.className : ''}\`}
      ref={rootRef}
    >
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
      <div className="lyrixi-loading-spinfade-item"></div>
    </div>
  )
}

export default forwardRef(SpinFade)
`},10356:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import { Page } from 'lyrixi-mobile'
// import { Loading } from 'lyrixi-mobile'
import Loading from './../../Loading/index.jsx'

export default () => {
  const [open, setOpen] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     Loading.show({
  //       captionProps: {
  //         caption: ''
  //       },
  //       onOpen: () => {
  //         console.log('open:', true)
  //         setTimeout(() => {
  //           Loading.hide()
  //         }, 3000)
  //       },
  //       onClose: () => {
  //         console.log('open:', false)
  //       }
  //     })
  //   }, 2000)
  // }, [])

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Loading.SpinFade />
        <Loading.Ouroboros />
        <Loading.BallWave />
        <Loading
          // \u81EA\u5B9A\u4E49\u56FE\u6807\u548C\u5185\u5BB9
          icon={<Loading.Ouroboros />}
          content="\u81EA\u5B9A\u4E49\u5185\u5BB9"
        />
      </Page.Main>
    </Page>
  )
}
`},40475:function(e,n){n.Z=`import React from 'react'
import { Page, Loading } from 'lyrixi-mobile'

export default () => {
  function handleToggle() {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.hide</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
`},5673:function(e,n){n.Z=`import React from 'react'
import { Page } from 'lyrixi-mobile'
import { Loading } from 'lyrixi-mobile'

export default () => {
  function handleToggle() {
    // Loading.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }

    let loading = Loading.show({
      style: { backgroundColor: 'blue' },
      maskStyle: { backgroundColor: 'red' },
      className: 'abc',
      content: '\u81EA\u5B9A\u4E49\u52A0\u8F7D'
    })
    console.log(loading)
    setTimeout(() => {
      Loading.show()
    }, 3000)
    setTimeout(() => {
      Loading.hide()
    }, 6000)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.show</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
`},56433:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import { Bridge, Location, Input } from 'lyrixi-mobile'
import VConsole from 'vconsole'
import Footer from './Footer'
// window.getAddressDefault = function (data) {
//   if (data?.value) {
//     console.log(data)
//     return data
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         longitude: 118.74,
//         latitude: 31.99,
//         province: '\u6C5F\u82CF',
//         provinceNumber: '',
//         city: '\u5357\u4EAC',
//         cityNumber: '',
//         district: '\u5EFA\u90BA',
//         districtNumber: '',
//         street: '\u8857\u9053',
//         streetNumber: '',
//         address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u5EFA\u90BA\u533A\u4E91\u9F99\u5C71\u8DEF88\u53F7\u70FD\u706B\u79D1\u6280\u5927\u53A6'
//       })
//     }, 1000)
//   })
// }

export default () => {
  // Bridge.debug = true
  const comboRef = useRef(null)
  const [value, setValue] = useState({
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '\u592A\u5E73\u6D0B\u516C\u56ED'

    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '\u5929\u5B89\u95E8'

    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '\u5929\u5B89\u95E8',

    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
  })
  // const [value, setValue] = useState({
  //   errMsg: 'getLocation:ok',
  //   longitude: 118.74,
  //   latitude: 31.99,
  //   longitude: '116.397451',
  //   latitude: '39.909187',
  //   title: '\u5929\u5B89\u95E8',
  //   value: '\u5317\u4EAC\u5E02\u4E1C\u57CE\u533A\u4E2D\u534E\u8DEF\u753210\u53F7\u4E2D\u56FD\u5929\u5B89\u95E8\u5E7F\u573A\u5357\u8FB9100\u7C73\u5DE6\u53F3'
  //   // longitude: 118.73,
  //   // latitude: 31.98,
  //   // value: '\u5357\u4EAC\u5E02\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED'
  // })
  useEffect(() => {
    new VConsole()
    Bridge.ready(() => {
      console.log('\u52A0\u8F7D\u6865\u63A5')
    })
  }, [])

  return (
    <>
      <Location.Combo
        // editable
        // \u83B7\u53D6\u5B9A\u4F4D\u548C\u5730\u5740\u5DE5\u5177\u7C7B
        type="wgs84"
        config={{
          key: '7b6e260fc45a67b31a265e22575f1c5e',
          type: 'bmap'
        }}
        // config={{
        //   key: '',
        //   type: 'google'
        // }}
        // getLocation={({ type }) => {
        //   return { longitude: 116.397451, latitude: 39.909187, type: type }
        // }}
        // getAddress={(data) => {
        //   if (data?.value) {
        //     console.log(data)
        //     return data
        //   }
        //   return new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve({
        //         longitude: 118.74,
        //         latitude: 31.99,
        //         province: '\u6C5F\u82CF',
        //         provinceNumber: '',
        //         city: '\u5357\u4EAC',
        //         cityNumber: '',
        //         district: '\u5EFA\u90BA',
        //         districtNumber: '',
        //         street: '\u8857\u9053',
        //         streetNumber: '',
        //         address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u5EFA\u90BA\u533A\u4E91\u9F99\u5C71\u8DEF88\u53F7\u70FD\u706B\u79D1\u6280\u5927\u53A6'
        //       })
        //     }, 1000)
        //   })
        // }}
        safeArea={true}
        mainProps={{
          // autoLocation: false,
          zoom: 16
        }}
        // disabled
        allowClear
        autoFit
        // autoLocation
        clickAction="choose"
        // editable
        previewVisible
        chooseVisible
        // allowClear
        ref={comboRef}
        value={value}
        // \u70B9\u51FB\u6574\u884C\u89E6\u53D1\u7684\u52A8\u4F5C: location | choose | preview
        onChange={(val) => {
          console.log('\u4FEE\u6539:', val)
          setValue(val)
        }}
        onOpen={() => {
          console.log('\u663E\u9690:', true)
        }}
        onClose={() => {
          console.log('\u663E\u9690:', false)
        }}
        onLocationStatusChange={(status) => {
          console.log('\u5B9A\u4F4D\u72B6\u6001:', status)
        }}
      />
      <Input.Text value="aaaa" />
    </>
  )
}
`},49240:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import { Bridge, Location } from 'lyrixi-mobile'

export default () => {
  Bridge.debug = true
  const comboRef = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    // \u5EF6\u8FDF\u8BBE\u7F6E\u503C
    setTimeout(() => {
      setValue({
        address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
        value: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
        longitude: 118.7979252979065,
        latitude: 31.968667296242337
      })
    }, 5000)
  }, [])
  return (
    <>
      <div>1</div>
      <Location.Main
        ref={comboRef}
        ak={''}
        style={{ height: '400px' }}
        type="choose"
        autoLocation={false}
        value={value}
        onChange={(val) => {
          console.log('\u4FEE\u6539:', val)
          setValue(val)
        }}
      />
    </>
  )
}
`},69047:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Map, Bridge } from 'lyrixi-mobile'
const { APILoader, MapChoose, coordsToWgs84 } = Map

// \u751F\u6210\u968F\u673A\u70B9
// import getPoints from './getPoints'

export default ({ map }) => {
  console.log('map:', map)

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
        zIndex: '999',
        backgroundColor: 'white'
      }}
    >
      12342134
    </div>
  )
}
`},61991:function(e,n){n.Z=`// \u751F\u6210\u968F\u673A\u70B9
/*
points = getPoints({
  center: value,
  // \u534A\u5F845000000\u7C73
  radius: 1000,
  // \u751F\u621010\u4E07\u4E2A\u70B9
  count: 100
})
*/
function getPoints({ center, radius = 1000, count = 110 } = {}) {
  let latitude = center?.latitude || 31.990374883871525
  let longitude = center?.longitude || 118.73769931504451

  const points = []

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2 // \u968F\u673A\u89D2\u5EA6
    const distance = Math.random() * radius // \u968F\u673A\u534A\u5F84
    const lat = latitude + (distance / 111300) * Math.sin(angle) // \u7EAC\u5EA6\u53D8\u5316
    const lng =
      longitude + ((distance / 111300) * Math.cos(angle)) / Math.cos((latitude * Math.PI) / 180) // \u7ECF\u5EA6\u53D8\u5316
    points.push({
      latitude: lat,
      longitude: lng,
      name: '\u968F\u673A\u70B9' + i,
      address: \`\u968F\u673A\u5730\u5740\${i}\`,
      type: 'gcj02'
    })
  }

  return points
}

export default getPoints
`},67979:function(e,n){n.Z=`import React, { useRef, useState } from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Page, Map, Loading } from 'lyrixi-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Map from 'library/components/Map'

const { APILoader, MapChoose, coordsToWgs84 } = Map
import CustomChild from './CustomChild'

// \u751F\u6210\u968F\u673A\u70B9
// import getPoints from './getPoints'
// const points = getPoints()

export default () => {
  const mapRef = useRef(null)
  // Bridge.debug = true
  let [value, setValue] = useState({
    // address: '\u7F8E\u56FD\u767D\u5BAB',
    // latitude: 38.8976763,
    // longitude: -77.0365298,
    // type: 'wgs84'
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '\u592A\u5E73\u6D0B\u516C\u56ED'
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '\u5929\u5B89\u95E8'
    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '\u5929\u5B89\u95E8'
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
  })
  /*
  useState()
  useState({
    latitude: 39.907783490367706,
    longitude: 116.39120737493609,
    address: '\u5929\u5B89\u95E8'
  })
  */

  return (
    <Page>
      <Page.Main>
        <APILoader
          loading={<Loading content="Loading..." />}
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png\`,
                iconRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png\`,
                shadowUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`
              },
              markerIcon: {
                iconUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon.png\`,
                iconRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon-2x.png\`,
                shadowUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`
              }
            }
          }}
          // config={{
          //   key: '',
          //   type: 'google'
          // }}
          onSuccess={() => {
            console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
          }}
          // onError={(error) => {
          //   console.log('\u5730\u56FE\u52A0\u8F7D\u5931\u8D25', error)
          //   return <div>{error.errMsg}</div>
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapChoose
              ref={mapRef}
              // readOnly
              // autoLocation={false}
              zoom={16}
              value={coordsToWgs84(value)}
              onChange={(newValue) => {
                console.log('newValue:', newValue)
                setValue(newValue)
              }}
              onMarkerClick={(e) => {
                console.log('\u70B9\u51FBmarker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  iconRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  shadowUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: false })
              }}
              // getLocation={(data) => {
              //   console.log(data)
              //   return { latitude: 35.689487, longitude: 139.691706 }
              // }}
              // getAddress={(data) => {
              //   return new Promise((resolve) => {
              //     setTimeout(() => {
              //       resolve({
              //         ...data,
              //         province: '\u6C5F\u82CF\u7701',
              //         provinceNumber: 100010,
              //         address: '\u6C5F\u82CF\u770111'
              //       })
              //     }, 1000)
              //   })
              // }}
              // queryNearby={({ map, keyword, longitude, latitude, radius }) => {
              //   console.log('\u641C\u7D22\u9644\u8FD1:', map, keyword, longitude, latitude, radius)
              //   return [
              //     {
              //       address: '\u4E0A\u6D77\u5E02\u5357\u4EAC\u4E1C\u8DEF831\u53F7',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '\u5E02\u767E\u4E00\u5E97'
              //     },
              //     {
              //       address: '\u4E0A\u6D77\u5E02\u5357\u4EAC\u4E1C\u8DEF832\u53F7',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '\u5E02\u767E\u4E8C\u5E97'
              //     }
              //   ]
              // }}
              // \u751F\u6210\u968F\u673A\u70B9
              // queryNearby={() => points}
            />
          </div>
        </APILoader>
      </Page.Main>
    </Page>
  )
}
`},46973:function(e,n){n.Z=`import React, { useRef, useState, useEffect } from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Page, Map, Button } from 'lyrixi-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Map from 'library/components/Map'

// \u751F\u6210\u968F\u673A\u70B9
const { APILoader, MapMarkers, LocationControl, Circles, coordsToWgs84 } = Map
import getPoints from './getPoints'

// \u968F\u673A\u751F\u6210\u70B9, \u7528\u4E8E\u6D4B\u8BD5\u6027\u80FD
// const currentPoints = coordsToWgs84(
//   getPoints({
//     center: {
//       latitude: 39.907783490367706,
//       longitude: 116.39120737493609
//     },
//     // \u534A\u5F845000000\u7C73
//     radius: 1000,
//     // \u751F\u6210\u70B9\u6570
//     count: 101
//   })
// )

// This coordsToWgs84 just example, no practical use
const points = coordsToWgs84([
  {
    icon: {
      iconUrl: \`https://cdn-icons-png.flaticon.com/128/13484/13484859.png\`,
      iconRetinaUrl: \`https://cdn-icons-png.flaticon.com/128/13484/13484859.png\`
      // html: '<div style="background-color:red;color:white;">1</div>'
    },
    type: 'gcj02',
    latitude: '31.982723',
    longitude: '118.735298',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: \`https://cdn-icons-png.flaticon.com/128/10096/10096738.png\`,
      iconRetinaUrl: \`https://cdn-icons-png.flaticon.com/128/10096/10096738.png\`
      // html: '<div style="background-color:yellow;color:white;">2</div>'
    },
    type: 'gcj02',
    latitude: '31.982594',
    longitude: '118.735184',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: \`https://cdn-icons-png.flaticon.com/128/14463/14463613.png\`,
      iconRetinaUrl: \`https://cdn-icons-png.flaticon.com/128/14463/14463613.png\`
      // html: '<div style="background-color:green;color:white;">3</div>'
    },
    type: 'gcj02',
    latitude: '31.98266',
    longitude: '118.735237',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  },
  {
    icon: {
      iconUrl: \`https://cdn-icons-png.flaticon.com/128/15047/15047495.png\`,
      iconRetinaUrl: \`https://cdn-icons-png.flaticon.com/128/15047/15047495.png\`
      // html: '<div style="background-color:black;color:white;">4</div>'
    },
    type: 'gcj02',
    latitude: '31.982693',
    longitude: '118.73526',
    inChinaTo: 'bd09',
    outChinaTo: 'wgs84',
    isInChina: true
  }
])

export default () => {
  const mapRef = useRef(mapRef)
  // const [points, setPoints] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPoints(currentPoints)
  //   }, 5000)
  // }, [])

  function handleFocusPoint() {
    mapRef.current.markersRef.current.focus(points[0])
  }

  function handleBlurPoint() {
    mapRef.current.markersRef.current.blur()
  }

  return (
    <Page>
      <Page.Header>
        <Button onClick={handleFocusPoint}>Focus point</Button>
        <Button onClick={handleBlurPoint}>Blur point</Button>
      </Page.Header>
      <Page.Main>
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png\`,
                iconRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-custom-shop.png\`,
                shadowUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`
              },
              markerIcon: {
                iconUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon.png\`,
                iconRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-icon-2x.png\`,
                shadowUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//https://lyrixi.github.io/lyrixi-mobile/assets/images/plugin/leaflet/images/marker-shadow.png\`
              }
            }
          }}
          onSuccess={() => {
            console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
          }}
          // onError={(errMsg) => {
          //   console.log('\u5730\u56FE\u52A0\u8F7D\u5931\u8D25:', errMsg)
          //   return '\u9519\u8BEF\u5730\u5740'
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapMarkers
              ref={mapRef}
              // \u8F6C\u6362\u4E3Awgs84\u5750\u6807
              ZoomControlProps={{
                style: { bottom: '20px' }
              }}
              // \u6807\u6CE8
              markers={points}
              // \u6298\u7EBF
              // polyline={points}
              // PolylineProps={{
              //   color: '#ff8800'
              // }}
              // \u5706\u5708
              // circles={[
              //   {
              //     latitude: 31.981827992209773,
              //     longitude: 118.73498038509915,
              //     type: 'gcj02',
              //     radius: 500
              //     // color: '#ff8800'
              //   }
              // ]}
              // CirclesProps={{
              //   color: '#ff8800'
              // }}
              onMarkerClick={(e) => {
                console.log('\u70B9\u51FBmarker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  iconRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  shadowUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: true })
              }}
              // onMarkerClick={(e) => {
              //   console.log('\u70B9\u51FBmarker:', e)
              //   // e.remove()
              //   let newMarkerIcon = window.L.icon({
              //     active: true,
              //     iconUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
              //     iconRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-icon.bak.png\`,
              //     shadowUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
              //     shadowRetinaUrl: \`https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/images/marker-shadow.png\`,
              //     shadowSize: [33, 33],
              //     iconSize: [20, 33],
              //     iconAnchor: [10, 16]
              //   })
              //   e.setIcon(newMarkerIcon, { multiple: false })

              //   console.log(mapRef.current.leafletMap)
              //   let popup = window.L.popup()
              //     .setLatLng([e.latitude, e.longitude])
              //     .setContent('I am a standalone popup.')
              //     .openOn(mapRef.current.leafletMap)
              // }}
              onLoad={(map) => {
                let currentZoom = map.getZoom()
                map.setZoom(currentZoom - 1)
              }}
            >
              <LocationControl
                style={{ bottom: '20px' }}
                onChange={(result) => {
                  mapRef.current.panTo(result)
                }}
              />
            </MapMarkers>
          </div>
        </APILoader>
      </Page.Main>
    </Page>
  )
}
`},17847:function(e,n){n.Z=`import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Button = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={DOMUtil.classNames('lyrixi-message-button', props.className)}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

// Component Name, for compact
Button.componentName = 'ToolBar.Button'

export default Button
`},90675:function(e,n){n.Z=`import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import Header from './../Header'
import Main from './../Main'
import Footer from './../Footer'
import Icon from './../Icon'
import Title from './../Title'
import Button from './../Button'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const MessageCombo = forwardRef(
  (
    {
      children,
      iconRender,
      title,
      content,
      buttons,
      buttonsLayout = '', // vertical
      ...props
    },
    ref
  ) => {
    // \u63A7\u5236Modal\u663E\u9690
    const [open, setOpen] = useState(null)

    const comboRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current,
        getComboDOM: () => comboRef.current,
        ...modalRef.current,
        close: () => {
          setOpen(false)
        },
        open: () => {
          setOpen(true)
        }
      }
    })

    function handleClick() {
      setOpen(true)
    }

    // \u83B7\u53D6\u56FE\u6807\u8282\u70B9
    function getIconNode() {
      if (typeof iconRender !== 'function') return null

      return <Icon>{iconRender()}</Icon>
    }
    const IconNode = getIconNode()

    return (
      <>
        <div
          ref={comboRef}
          {...props}
          className={DOMUtil.classNames('lyrixi-message-combo', props.className)}
          onClick={handleClick}
        >
          {children}
        </div>
        <Modal open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
          {(IconNode || title) && (
            <Header>
              {IconNode}
              {title && <Title>{title}</Title>}
            </Header>
          )}
          <Main>{content}</Main>
          {Array.isArray(buttons) && buttons.length && (
            <Footer layout={buttonsLayout}>
              {buttons.map((button, index) => {
                const { name, onClick, ...buttonProps } = button
                return (
                  <Button
                    key={button?.id ?? index}
                    {...buttonProps}
                    onClick={async (e) => {
                      let newVisible = await onClick(e)
                      if (typeof newVisible === 'boolean') {
                        setOpen(!newVisible)
                      }
                    }}
                  >
                    {name}
                  </Button>
                )
              })}
            </Footer>
          )}
        </Modal>
      </>
    )
  }
)

export default MessageCombo
`},21064:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Footer = forwardRef(({ layout = 'horizontal', children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose tools
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <footer
      {...props}
      data-layout={layout}
      className={DOMUtil.classNames('lyrixi-message-footer', props.className)}
      ref={rootRef}
    >
      {children}
    </footer>
  )
})

export default Footer
`},67868:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Header = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <header
      {...props}
      className={DOMUtil.classNames('lyrixi-message-header', props.className)}
      ref={rootRef}
    >
      {children}
    </header>
  )
})

export default Header
`},97018:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

const ConfirmIcon = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={DOMUtil.classNames('lyrixi-message-icon', props.className)}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

export default ConfirmIcon
`},20332:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u4E0B\u62C9\u5237\u65B0\u5BB9\u5668
const Main = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose api
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <main
      {...props}
      className={DOMUtil.classNames('lyrixi-message-main', props.className)}
      ref={rootRef}
    >
      {children}
    </main>
  )
})

export default Main
`},72300:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'

// \u5185\u5E93\u4F7F\u7528-start
import getClassNameByAnimation from './../../Modal/api/getClassNameByAnimation'
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const getClassNameByAnimation = Modal.getClassNameByAnimation
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5BF9\u8BDD\u6846
const Message = forwardRef(
  (
    {
      // Modal
      portal,
      maskClosable,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      open,
      onOpen,
      onClose,
      animation = 'zoom',
      children,
      ...props
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => maskRef.current,
        modalDOM: modalRef.current,
        getModalDOM: () => modalRef.current
      }
    })

    // \u70B9\u51FB\u906E\u7F69
    function handleMaskClick(e) {
      if (maskClosable && onClose) onClose()
      e.stopPropagation()
    }

    // \u70B9\u51FB\u6A21\u6001\u6846
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // \u83B7\u53D6\u6FC0\u6D3B\u72B6\u6001\u6837\u5F0F
    function getActiveClass() {
      return open ? ' active' : ''
    }

    return createPortal(
      <div
        className={DOMUtil.classNames('mask message-mask', maskClassName, getActiveClass())}
        style={maskStyle}
        onClick={handleMaskClick}
        ref={maskRef}
      >
        <section
          {...props}
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-message-modal',
            modalClassName,
            getClassNameByAnimation(animation),
            getActiveClass()
          )}
          style={modalStyle}
          data-animation={animation}
          ref={modalRef}
          onClick={handleModalClick}
        >
          {children}
        </section>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Message
`},80881:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

const ConfirmTitle = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={DOMUtil.classNames('lyrixi-message-title', props.className)}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

export default ConfirmTitle
`},19092:function(e,n){n.Z=`import destroy from './destroy'

// Message.close() - \u5173\u95ED\u5F53\u524D\u6253\u5F00\u7684Message\u5BF9\u8BDD\u6846
export default function close() {
  return destroy()
}`},21199:function(e,n){n.Z=`import globalMessageId from './globalMessageId'

// \u79FB\u9664Message Modal
function destroy(mask) {
  if (!mask) {
    // eslint-disable-next-line
    mask = document.getElementById(globalMessageId)
  }
  if (mask) {
    // \u52A8\u753B\u79FB\u9664
    mask.classList.remove('lyrixi-active')
    mask.querySelector('.lyrixi-message-modal').classList.remove('lyrixi-active')

    // DOM\u79FB\u9664
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
    }, 300)
  }
}

export default destroy
`},21469:function(e,n){n.Z=`// \u5168\u5C40MessageModal\u7684id
export default 'lyrixi_Global_MessageModal_' + new Date().getTime()
`},53389:function(e,n){n.Z=`import destroy from './destroy'
import showMask from './showMask'
import updateAttribute from './updateAttribute'

// \u5F39\u51FAMessage\u5BF9\u8BDD\u6846
export default function open({
  onOpen,
  onClose,

  // Modal
  portal,
  maskClassName,
  maskStyle,
  maskClosable = true,

  // \u56FE\u6807
  icon,

  // \u6807\u9898
  title,
  titleClassName,
  titleStyle,

  // \u5185\u5BB9
  content,
  contentClassName,
  contentStyle,

  // \u5E95\u90E8
  footerClassName,
  footerStyle,

  // \u6309\u94AE\u5E03\u5C40: vertical | horizontal
  buttonsLayout = 'horizontal',

  // \u6309\u94AE\u6570\u7EC4: [{name: string, onClick: function, className?: string, style?: object}]
  buttons = []
}) {
  let mask = null

  // \u70B9\u51FB\u906E\u7F69
  function handleMaskClick(e) {
    e.stopPropagation()

    // \u70B9\u51FB\u6309\u94AE
    if (e.target.classList.contains('lyrixi-message-button')) {
      handleButtonClick(e)
      return
    }

    // \u70B9\u51FB\u906E\u7F69
    if (e.target.classList.contains('lyrixi-mask')) {
      // \u8BFB\u53D6\u66F4\u65B0\u540E\u7684\u5C5E\u6027
      const maskClosable = mask?.maskClosable
      const onClose = mask?.onClose

      if (maskClosable) {
        if (onClose) onClose()
        destroy(e.currentTarget)
      }
    }
  }

  // \u70B9\u51FB\u6309\u94AE
  function handleButtonClick(e) {
    const buttonId = e.target.id
    const buttonIndex = parseInt(buttonId.replace('lyrixi-message-button-', ''))
    const buttons = mask?.buttons || []
    const button = buttons[buttonIndex]

    if (button && typeof button.onClick === 'function') {
      const result = button.onClick()
      // \u5982\u679ConClick\u8FD4\u56DEfalse\uFF0C\u4E0D\u5173\u95ED\u5F39\u7A97
      if (result !== false) {
        const onClose = mask?.onClose
        if (onClose) onClose()
        destroy(e.currentTarget.closest('.message-mask'))
      }
    } else {
      const onClose = mask?.onClose
      if (onClose) onClose()
      destroy(e.currentTarget.closest('.message-mask'))
    }
    e.stopPropagation()
  }

  // \u6E32\u67D3\u4E0E\u7ED1\u5B9A\u4E8B\u4EF6
  mask = showMask({
    portal,
    onMaskClick: handleMaskClick
  })

  // \u66F4\u65B0\u5C5E\u6027
  updateAttribute(mask, {
    portal,

    maskClosable,
    onOpen,
    onClose,

    // \u906E\u7F69
    maskClassName,
    maskStyle,

    // \u56FE\u6807
    icon,

    // \u6807\u9898
    title,
    titleClassName,
    titleStyle,

    // \u5185\u5BB9
    content,
    contentClassName,
    contentStyle,

    // \u5E95\u90E8
    footerClassName,
    footerStyle,

    // \u6309\u94AE\u5E03\u5C40
    buttonsLayout,

    // \u6309\u94AE\u6570\u7EC4
    buttons
  })

  // Trigger onOpen
  if (onOpen) onOpen()

  return mask
}
`},85150:function(e,n){n.Z=`import globalMessageId from './globalMessageId'

// \u6E32\u67D3Message\u906E\u7F69
function showMask({ portal, onMaskClick }) {
  // \u5982\u679C\u6CA1\u751F\u6210\u6210\u529F, \u5219\u5F3A\u5236\u751F\u6210
  let mask = document.querySelector('#' + globalMessageId)
  if (!mask) {
    // \u521B\u5EFAdom
    mask = document.createElement('div')
    mask.setAttribute('class', \`mask message-mask\`)
    mask.setAttribute('id', globalMessageId)
    mask.innerHTML = \`
      <div class="modal-animation message-modal middle" data-animation="zoom">
        <div class="message-header hide">
          <div class="message-icon hide"></div>
          <div class="message-title hide"></div>
        </div>
        <div class="message-main"></div>
        <div class="message-footer hide">
        </div>
      </div>
    \`

    // \u6DFB\u52A0\u5230dom\u4E0A
    ;(portal || document.getElementById('root') || document.body).appendChild(mask)

    // \u7ED1\u5B9A\u4E8B\u4EF6
    mask.removeEventListener('click', onMaskClick, false)
    mask.addEventListener('click', onMaskClick, false)
  }

  // \u6E32\u67D3\u5B8C\u6210\u540E\u8865\u5145active, \u89E3\u51B3\u6E32\u67D3\u540E\u52A8\u753B\u4E0D\u751F\u6548\u7684\u95EE\u9898
  setTimeout(() => {
    mask = document.querySelector('#' + globalMessageId)
    if (!mask) return
    // \u5982\u679C\u6B63\u5728\u79FB\u9664\uFF0C\u5219\u505C\u6B62\u79FB\u9664
    if (mask.timeout) {
      window.clearTimeout(mask.timeout)
    }
    // \u52A8\u753B\u663E\u793A
    mask.classList.add('lyrixi-active')
    mask.querySelector('.lyrixi-message-modal').classList.add('lyrixi-active')
  }, 10)

  return mask
}

export default showMask
`},92593:function(e,n){n.Z=`import updateStyle from './updateStyle'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u66F4\u65B0Message\u5C5E\u6027
function updateAttribute(
  mask,
  {
    maskClosable,
    onOpen,
    onClose,

    // Modal
    portal,
    maskClassName,
    maskStyle,

    // \u56FE\u6807
    icon,

    // \u6807\u9898
    title,
    titleClassName,
    titleStyle,

    // \u5185\u5BB9
    content,
    contentClassName,
    contentStyle,

    // \u5E95\u90E8
    footerClassName,
    footerStyle,

    // \u6309\u94AE\u5E03\u5C40
    buttonsLayout = 'horizontal', // vertical | horizontal

    // \u6309\u94AE\u6570\u7EC4
    buttons = []
  }
) {
  // \u66F4\u65B0\u906E\u7F69
  updateStyle(mask, {
    className: maskClassName,
    style: maskStyle,
    baseClassName: 'mask message-mask'
  })

  // \u66F4\u65B0header
  let headerDOM = mask.querySelector('.lyrixi-message-header')
  let hasHeaderContent = false

  // \u66F4\u65B0\u56FE\u6807
  let iconDOM = mask.querySelector('.lyrixi-message-icon')
  if (icon) {
    hasHeaderContent = true
    iconDOM?.classList?.remove?.('hide')
    iconDOM.className = DOMUtil.classNames('lyrixi-message-icon', icon)
  } else {
    iconDOM?.classList?.add?.('hide')
    iconDOM.className = 'lyrixi-message-icon lyrixi-hide'
  }

  // \u66F4\u65B0\u6807\u9898
  let titleDOM = mask.querySelector('.lyrixi-message-title')
  updateStyle(titleDOM, {
    className: titleClassName,
    style: titleStyle,
    baseClassName: 'message-title'
  })
  if (title) {
    hasHeaderContent = true
    titleDOM?.classList?.remove?.('lyrixi-hide')
    titleDOM.innerHTML = title
  } else {
    titleDOM?.classList?.add?.('lyrixi-hide')
  }

  // \u663E\u793A\u6216\u9690\u85CFheader
  if (hasHeaderContent) {
    headerDOM?.classList?.remove?.('lyrixi-hide')
  } else {
    headerDOM?.classList?.add?.('lyrixi-hide')
  }

  // \u66F4\u65B0\u5185\u5BB9
  let contentDOM = mask.querySelector('.lyrixi-message-main')
  updateStyle(contentDOM, {
    className: contentClassName,
    style: contentStyle,
    baseClassName: 'message-main'
  })
  if (content) {
    if (typeof content === 'string') {
      contentDOM.innerHTML = content
    } else {
      // \u5982\u679Ccontent\u662FReact\u5143\u7D20\uFF0C\u6211\u4EEC\u9700\u8981\u7279\u6B8A\u5904\u7406
      contentDOM.innerHTML = content
    }
  } else {
    contentDOM.innerHTML = ''
  }

  // \u66F4\u65B0\u5E95\u90E8
  let footerDOM = mask.querySelector('.lyrixi-message-footer')
  updateStyle(footerDOM, {
    className: footerClassName,
    style: footerStyle,
    baseClassName: \`lyrixi-message-footer \${
      buttonsLayout === 'vertical' ? 'lyrixi-vertical' : 'lyrixi-horizontal'
    }\`
  })

  // \u8BBE\u7F6E\u6309\u94AE\u5E03\u5C40
  footerDOM.setAttribute('data-layout', buttonsLayout)

  // \u6E32\u67D3\u6309\u94AE
  if (Array.isArray(buttons) && buttons.length > 0) {
    footerDOM?.classList?.remove?.('lyrixi-hide')
    let buttonsHTML = ''
    buttons.forEach((button, index) => {
      const { name, className = '', style = {} } = button
      const buttonId = \`lyrixi-message-button-\${index}\`
      const styleString = Object.entries(style || {})
        .map(([key, value]) => \`\${key}: \${value}\`)
        .join('; ')
      buttonsHTML += \`<div class="lyrixi-message-button \${className}" id="\${buttonId}" style="\${styleString}">\${name}</div>\`
    })
    footerDOM.innerHTML = buttonsHTML

    // \u7ED1\u5B9A\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6
    buttons.forEach((button, index) => {
      const buttonDOM = footerDOM.querySelector(\`#lyrixi-message-button-\${index}\`)
      if (buttonDOM && button.onClick) {
        buttonDOM.onclick = button.onClick
      }
    })
  } else {
    footerDOM?.classList?.add?.('hide')
    footerDOM.innerHTML = ''
  }

  // \u66F4\u65B0\u4E8B\u4EF6\u4E2D\u7528\u5230\u7684\u5C5E\u6027
  mask.maskClosable = maskClosable
  mask.onOpen = onOpen
  mask.onClose = onClose
  mask.buttons = buttons

  // dom\u900F\u4F20
  if (toString.call(portal).indexOf('HTML') !== -1) {
    portal.appendChild(mask)
  } else {
    ;(document.getElementById('root') || document.body).appendChild(mask)
  }
}

export default updateAttribute
`},61981:function(e,n){n.Z=`// \u66F4\u65B0class\u548Cstyle
function updateStyle(target, { style, className, baseClassName }) {
  if (!target) return

  // \u8FD8\u539F\u6837\u5F0F
  target.setAttribute('style', '')
  target.setAttribute('class', baseClassName)

  // \u589E\u52A0\u6837\u5F0F
  if (style) {
    for (let stylePropName in style) {
      target.style[stylePropName] = style[stylePropName]
    }
  }
  if (className) {
    target.className = \`\${baseClassName}\${className ? ' ' + className : ''}\`
  }
}

export default updateStyle`},49519:function(e,n){n.Z=`import Combo from './Combo'
import Modal from './Modal'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import Icon from './Icon'
import Title from './Title'
import Button from './Button'

import open from './api/open'
import close from './api/close'

const Message = {
  Combo,
  Modal,

  Header,
  Main,
  Footer,

  Icon,
  Title,
  Button,

  // JS API
  open,
  close
}

export default Message
`},93340:function(e,n){n.Z=`import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import getClassNameByAnimation from './../api/getClassNameByAnimation'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea, Tooltip } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Modal = forwardRef(
  (
    {
      safeArea,
      open,
      animation = 'zoom', // none | slideLeft | slideRight | slideUp | slideDown | zoom | fade

      // Modal
      portal,
      maskClosable = true,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,

      // Components
      children,

      // Events
      onClose
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => {
          return maskRef.current
        },
        modalDOM: modalRef.current,
        getModalDOM: () => {
          return modalRef.current
        }
      }
    })

    // \u6784\u5EFA\u52A8\u753B
    let animationClassName = getClassNameByAnimation(animation)

    // \u70B9\u51FB\u906E\u7F69
    function handleMaskClick(e) {
      if (maskClosable) {
        onClose && onClose(e)
      }
      e.stopPropagation()
    }

    // \u70B9\u51FB\u6A21\u6001\u6846
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // \u83B7\u53D6\u6FC0\u6D3B\u72B6\u6001\u6837\u5F0F
    function getActiveClass() {
      return open ? ' active' : ''
    }

    let ModalNode = (
      <div
        data-animation={animation}
        style={maskStyle}
        className={DOMUtil.classNames('mask modal-mask', maskClassName, getActiveClass())}
        onClick={handleMaskClick}
        ref={maskRef}
      >
        <div
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-modal',
            animationClassName ? ' ' + animationClassName : '',
            modalClassName,
            getActiveClass()
          )}
          style={modalStyle}
          data-animation={animation}
          onClick={handleModalClick}
          ref={modalRef}
        >
          {children}
          {safeArea === true && <SafeArea />}
        </div>
      </div>
    )

    if (portal === null || portal === false) {
      return ModalNode
    }
    return createPortal(ModalNode, portal || document.getElementById('root') || document.body)
  }
)

export default Modal
`},7146:function(e,n){n.Z=`// \u6839\u636E\u52A8\u753B\u5224\u5B9A\u65B9\u5411
function getClassNameByAnimation(animation) {
  // \u6784\u5EFA\u52A8\u753B
  let position = ''
  switch (animation) {
    case 'slideLeft':
      position = 'right-middle'
      break
    case 'slideRight':
      position = 'left-middle'
      break
    case 'slideUp':
      position = 'bottom-center'
      break
    case 'slideDown':
      position = 'top-center'
      break
    case 'zoom':
      position = 'middle'
      break
    case 'fade':
      position = 'middle'
      break
    // Tooltip\u5F39\u7A97\u7279\u6709\u5C5E\u6027
    case 'slideUpLeft':
    case 'zoomUpLeft':
    case 'fadeUpLeft':
      position = 'bottom-left'
      break
    case 'slideDownLeft':
    case 'zoomDownLeft':
    case 'fadeDownLeft':
      position = 'top-left'
      break
    case 'slideUpRight':
    case 'zoomUpRight':
    case 'fadeUpRight':
      position = 'bottom-right'
      break
    case 'slideDownRight':
    case 'zoomDownRight':
    case 'fadeDownRight':
      position = 'top-right'
      break
    default:
      position = 'middle'
  }
  return position
}

export default getClassNameByAnimation
`},28242:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil,SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Aside = forwardRef(({ safeArea, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // \u8282\u70B9
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <aside
      {...props}
      className={DOMUtil.classNames('lyrixi-page-aside', props.className)}
      ref={rootRef}
    >
      {children}
      {safeArea === true && <SafeArea />}
    </aside>
  )
})

export default Aside
`},20393:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import LocaleUtil from './../../../utils/LocaleUtil'

const TopContainer = forwardRef((props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return rootRef.current
  })
  return (
    <div ref={rootRef} className="lyrixi-page-main-pull-push">
      <div className="lyrixi-page-main-pull-push-wrapper">
        <div className="lyrixi-page-main-pull-push-icon"></div>
        <div className="lyrixi-page-main-pull-push-text">
          {LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi_pull_down_refresh')}
        </div>
      </div>
    </div>
  )
})

export default TopContainer
`},96499:function(e,n){n.Z=`// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5728\u5E95\u90E8
function isBottom(container) {
  if (!container) return false

  let clientHeight = container.clientHeight // || window.innerHeight
  let scrollHeight = container.scrollHeight
  let scrollTop =
    container === document.body ? document.documentElement.scrollTop : container.scrollTop
  // console.log(clientHeight + ':' + scrollHeight + ':' + scrollTop)
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    return true
  }
  return false
}
export default isBottom
`},47409:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u5237\u65B0\u5B8C\u6210
function topRefreshOk(topContainer, isOk) {
  return new Promise((resolve) => {
    let topText = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-text')

    // \u5B8C\u6210\u63D0\u793A\u4FE1\u606F
    let finishMsg = ''
    // \u5931\u8D25
    if (isOk === false) {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u5931\u8D25', 'lyrixi_refresh_failed')
    }
    // \u81EA\u5B9A\u4E49\u63D0\u793A\u4FE1\u606F
    else if (typeof isOk === 'string') {
      finishMsg = isOk
    }
    // \u6210\u529F
    else {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u6210\u529F', 'lyrixi_refresh_success')
    }
    if (topText) topText.innerHTML = finishMsg

    setTimeout(() => {
      // \u91CD\u7F6E\u6837\u5F0F
      let topIcon = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-icon')
      if (topIcon) {
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-loading')
      }
      if (topContainer) topContainer.style.height = '0'

      resolve(true)
    }, 1000)
  })
}

export default topRefreshOk
`},24467:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// [safeArea] true: \u81EA\u52A8\u5B89\u5168\u533A; false: \u5F3A\u5236\u53D6\u6D88\u5B89\u5168\u533A
const Page = forwardRef(({ safeArea, animation, full = true, layout, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <section
      {...props}
      className={DOMUtil.classNames(
        'lyrixi-page',
        full ? 'lyrixi-full' : '',
        layout ? \`lyrixi-flex-\${layout}\` : '',
        props.className
      )}
      data-animation={animation}
      ref={rootRef}
    >
      {children}
      {safeArea === true && <SafeArea />}
    </section>
  )
})

export default Page
`},65332:function(e,n){n.Z=`import Page from './Page'

import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

Page.Header = Header
Page.Aside = Aside
Page.Main = Main
Page.Footer = Footer

export default Page
`},81910:function(e,n){n.Z=`import React, { useEffect, useRef, useState } from 'react'
import { Picker } from 'lyrixi-mobile'

export default () => {
  const pickerRef = useRef(null)
  const [list, setList] = useState([])
  // const list = [
  //   { id: '1', name: '1' },
  //   { id: '2', name: '2' },
  //   { id: '3', name: '3' },
  //   { id: '4', name: '4' },
  //   { id: '5', name: '5' },
  //   { id: '6', name: '6' },
  //   { id: '7', name: '7' },
  //   { id: '8', name: '8' },
  //   { id: '9', name: '9' },
  //   { id: '10', name: '10' }
  // ]
  const [value, setValue] = useState(null)
  useEffect(() => {
    // pickerRef.current.open()
    setTimeout(() => {
      console.log('pickerRef:', pickerRef)
      setList([
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '10', name: '10' }
      ])
      setValue([{ id: '2', name: '2' }])
    }, 2000)
  }, [])
  return (
    <>
      <Picker.Combo
        ref={pickerRef}
        allowClear
        safeArea={true}
        title="\u6807\u9898"
        cancel={null}
        ok=""
        placeholder="Please select"
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
      />
    </>
  )
}
`},40215:function(e,n){n.Z=`import React, { useState } from 'react'
import { Picker } from 'lyrixi-mobile'

export default () => {
  const list = [
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ]
  const [value, setValue] = useState(null)
  return (
    <>
      <Picker.Main
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
`},29538:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Picker } from 'lyrixi-mobile'

export default () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          name: '0507-\u6253\u5370',
          id: '8571532967972181136'
        },
        {
          name: '0507-\u6253\u5370_\u526F\u672C',
          id: '8421508242493921754'
        }
      ])
    }, 3000)
  }, [])
  return (
    <>
      <Picker.Modal
        open={true}
        value={'8571532967972181136'}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          // setValue(newValue)
        }}
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
      />
    </>
  )
}
`},78939:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import { QRCode } from 'lyrixi-mobile'

const Logo = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '50px',
  height: '50px',
  marginLeft: '-25px',
  marginTop: '-25px'
}
export default () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setUrl('abc')
    }, 1000)
  }, [])
  return (
    <>
      <QRCode text={url} style={{ width: '300px', height: '300px' }}>
        <img
          style={Logo}
          alt=""
          src="https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png"
        />
      </QRCode>
    </>
  )
}
`},51970:function(e,n){n.Z=`import React from 'react'

import { Page, Divider, Row } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>Each row has twenty-four columns</Divider>
        <Row>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>
      </Page.Main>
    </Page>
  )
}
`},83303:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5B89\u5168\u533A\u57DF
const SafeArea = forwardRef(({ safeArea, className, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={DOMUtil.classNames(
        safeArea === 'auto' ? 'auto-safe-area' : 'lyrixi-safe-area',
        'lyrixi-height-bottom',
        className
      )}
      ref={rootRef}
    ></div>
  )
})

export default SafeArea
`},80658:function(e,n){n.Z=`import React, { useEffect } from 'react'
import { SafeArea } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {}, [])

  return (
    <div
      className="lyrixi-flex lyrixi-position-absolute lyrixi-full"
      data-safe-area="auto-border-bottom"
      style={{ backgroundColor: 'green', borderColor: 'red' }}
    >
      You can test it on mobile, if you can see a red rectangle, the mobile needs a safe area
      <SafeArea style={{ backgroundColor: 'red' }} />
      Use root stage safe area
      <div>{\`If you want to test to the safe area, you can invoke: SafeArea.debug()\`}</div>
    </div>
  )
}
`},51389:function(e,n){n.Z=`import SafeArea from './SafeArea'

SafeArea.debug = () => {
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-bottom', '34px')
}

export default SafeArea
`},46902:function(e,n){n.Z=`import React, { useState, useRef } from 'react'
import _ from 'lodash'
import { Page, Divider, Select, List, Checkbox, Message, Card, ToolBar } from 'lyrixi-mobile'
import list from './listSimple'
import listData from './listData'

export default () => {
  const [keyword, setKeyword] = useState('')
  const [value, setValue] = useState([
    {
      allowClear: true,
      id: '1',
      // name: 'Option',
      name: <div>Option1</div>
    },
    {
      id: '2',
      name: 'Option2',
      style: {
        color: 'red',
        padding: 0,
        backgroundColor: 'transparent'
      }
    },
    {
      id: '3',
      name: 'Option3',
      disabled: true,
      allowClear: true
    }
  ])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Single Select</Divider>
          <Select.Combo
            title="Select"
            // \u6709\u4E9B\u4E1A\u52A1\u5F39\u7A97\u540E\u5C31\u4F1A\u53D8\u7684\u5F02\u5E38\u5361\u987F, \u89E3\u51B3\u65B9\u5F0F\u5982\u4E0B:
            // 1.visibility\u6539\u4E3Adisplay\u80FD\u89E3\u51B3
            // 2.\u4E0D\u7528root\u6362\u4EFB\u610F\u4E00\u4E2Adiv\u90FD\u662F\u597D\u7684, root\u5E94\u8BE5\u88AB\u6076\u610F\u4FEE\u6539\u5BFC\u81F4
            // 3.\u6302\u8F7D\u5230body\u4E0B\u4E5F\u80FD\u89E3\u51B3
            portal={document.body}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Single Select, allow modal clear</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select separator</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            separator="|"
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Single tags</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple={false}
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags separator</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            separator=","
            multiple
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Checkbox</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
            checkboxRender={({ checked }) => {
              return <Checkbox checked={checked} />
            }}
            checkable="left"
          />
        </Card>

        <Card>
          <Divider>Layout</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Layout"
            multiple={false}
            title="Select"
            allowClear
            value={value}
            list={list}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>List count more than 15, show Search</Divider>
          <Select.Combo
            title="Select"
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            allowClear
            value={value}
            list={listData}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            title="Select"
            headerRender={() => {
              return (
                <ToolBar invert>
                  <ToolBar.Search
                    value={keyword}
                    onSearch={(newKeyword) => {
                      setKeyword(newKeyword)
                    }}
                  />
                </ToolBar>
              )
            }}
            allowClear
            value={value}
            list={List.searchList(list, keyword)}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setValue(newValue)
            }}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
`},47321:function(e,n){n.Z=`export default [
  {
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3',
    id: 'Option',
    name: 'Option',
    description: 'Description',
    content: 'Custom Content'
  },
  {
    name: 'This is group title',
    // description: '\u5206\u7EC4\u63CF\u8FF0',
    children: [
      {
        id: 'Group-Option',
        name: 'Group-Option',
        description: '\u5206\u7EC4\u5185\u90E8\u63CF\u8FF0'
      },
      {
        id: 'Group-Option2',
        name: 'Group-Option2'
      }
    ]
  },
  {
    id: 'Option2',
    name: 'Option2',
    content: '+86'
  },
  {
    id: '3',
    name: 'Option5'
  },
  {
    id: '4',
    name: 'Option5'
  },
  {
    id: '5',
    name: 'Option5'
  },
  {
    id: '6',
    name: 'Option6'
  },
  {
    id: '7',
    name: 'Option7'
  },
  {
    id: '8',
    name: 'Option8'
  },
  {
    id: '9',
    name: 'Option9'
  },
  {
    id: '10',
    name: 'Option10'
  },
  {
    id: '11',
    name: 'Option11'
  },
  {
    id: '12',
    name: 'Option12'
  },
  {
    id: '13',
    name: 'Option13'
  },
  {
    id: '14',
    name: 'Option14'
  },
  {
    id: '15',
    name: 'Option15'
  },
  {
    id: '16',
    name: 'Option16'
  },
  {
    id: '17',
    name: 'Option17'
  },
  {
    id: '18',
    name: 'Option18'
  },
  {
    id: '19',
    name: 'Option19'
  },
  {
    id: '20',
    name: 'Option20'
  },
  {
    id: '21',
    name: 'Option21'
  }
]
`},83398:function(e,n){n.Z=`import React from 'react'
export default [
  {
    allowClear: true,
    id: '1',
    name: <div>Option1</div>
  },
  {
    id: '2',
    name: 'Option2',
    style: {
      color: 'red',
      padding: 0,
      backgroundColor: 'transparent'
    }
  },
  {
    id: '3',
    name: 'Option3',
    disabled: true
  },
  {
    id: '4',
    name: 'Option4'
  },
  {
    id: '5',
    name: 'Option5'
  },
  {
    id: '6',
    name: 'Option6'
  },
  {
    id: '7',
    name: 'Option7'
  },
  {
    id: '8',
    name: 'Option8'
  },
  {
    id: '9',
    name: 'Option9'
  },
  {
    id: '10',
    name: 'Option10'
  },
  {
    id: '11',
    name: 'Option11'
  },
  {
    id: '12',
    name: 'Option12'
  },
  {
    id: '13',
    name: 'Option13'
  },
  {
    id: '14',
    name: 'Option14'
  },
  {
    id: '15',
    name: 'Option15'
  }
]
`},75560:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])
  return (
    <>
      <Select.Main
        ref={selectRef}
        multiple={false}
        value={value}
        list={[
          {
            id: '1',
            name: '\u9009\u98791'
          },
          {
            id: '2',
            name: '\u9009\u98792'
          }
        ]}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
`},24980:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])
  return (
    <>
      <Select.Modal
        ref={selectRef}
        value={value}
        list={[
          {
            id: '1',
            name: '\u9009\u98791'
          },
          {
            id: '2',
            name: '\u9009\u98792'
          }
        ]}
        open={true}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
      />
    </>
  )
}
`},96e3:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page, Selector, Divider } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])

  const [value2, setValue2] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])

  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>\u57FA\u7840\u793A\u4F8B</Divider>
        <Selector
          columns={3}
          // multiple
          allowClear
          placeholder="Please select"
          value={value}
          list={[
            {
              id: '1',
              name: '\u9009\u98791'
            },
            {
              id: '2',
              name: 'Option 2 is very very very very very long'
            },
            {
              id: '3',
              name: '\u9009\u98793'
            },
            {
              id: '4',
              name: '\u9009\u98794'
            },
            {
              id: '5',
              name: '\u9009\u98795'
            }
          ]}
          // multiple={true}
          onChange={setValue}
        />

        <Divider>\u5E26\u7701\u7565\u529F\u80FD</Divider>
        <Selector
          columns={3}
          allowClear
          placeholder="Please select"
          value={value2}
          list={[
            {
              id: '1',
              name: '\u9009\u98791'
            },
            {
              id: '2',
              name: '\u9009\u98792'
            },
            {
              id: '3',
              name: '\u9009\u98793'
            },
            {
              id: '4',
              name: '\u9009\u98794'
            },
            {
              id: '5',
              name: '\u9009\u98795'
            },
            {
              id: '6',
              name: '\u9009\u98796'
            },
            {
              id: '7',
              name: '\u9009\u98797'
            },
            {
              id: '8',
              name: '\u9009\u98798'
            },
            {
              id: '9',
              name: '\u9009\u98799'
            },
            {
              id: '10',
              name: '\u9009\u987910'
            }
          ]}
          ellipsis={{ max: 5 }}
          onChange={setValue2}
        />
      </Page.Main>
    </Page>
  )
}
`},79326:function(e,n){n.Z=`import React, { useRef } from 'react'
import { Share, Page } from 'lyrixi-mobile'

export default () => {
  const shareComboRef = useRef(null)
  console.log(shareComboRef)
  return (
    <Page>
      <Page.Header>When this platform is not supported, nothing will appear</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Share.Combo
          ref={shareComboRef}
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},57826:function(e,n){n.Z=`import React from 'react'
import { Share, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Share To</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Share.Main
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},81616:function(e,n){n.Z=`import React from 'react'
import { Share, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Share To</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Share.Modal
          open
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},50114:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Signature, Page, Toast, Device, Bridge } from 'lyrixi-mobile'

// Test safe area
// import { SafeArea } from 'lyrixi-mobile'
// SafeArea.debug()

export default () => {
  const [value, setValue] = useState(
    'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.ready()
  }, [])

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">\u624B\u5199\u7B7E\u540D</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Combo
          // color="#000000"
          // backgroundColor="white"
          // disabled={true}
          value={value}
          safeArea="auto"
          onChange={(newVal) => {
            console.log(newVal)
            setValue(newVal)
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},84848:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Signature, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">\u624B\u5199\u7B7E\u540D</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Main
          style={{ height: 400 }}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},458:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Signature, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">\u624B\u5199\u7B7E\u540D</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Modal
          open={true}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},90515:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.Detail />
    </>
  )
}
`},97214:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.Edit />
    </>
  )
}
`},75167:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.List divider="line" animated={false} />
    </>
  )
}
`},44982:function(e,n){n.Z=`import React from 'react'
import { Page, Divider, Space } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>Space</Divider>
        <Space>1000</Space>
      </Page.Main>
    </Page>
  )
}
`},52701:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page, Divider, Switch } from 'lyrixi-mobile'

export default () => {
  const [checked, setChecked] = useState(false)
  return (
    <Page>
      <Page.Main>
        <Divider>Size m</Divider>
        <Switch
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          // disabled
          checked={checked}
          on="On On On On"
          off="Off"
          onChange={setChecked}
        />
        <Divider>Size s</Divider>
        <Switch
          size="s"
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          size="s"
          // disabled
          checked={checked}
          on="On"
          off="Off"
          onChange={setChecked}
        />
      </Page.Main>
    </Page>
  )
}
`},45909:function(e,n){n.Z=`// \u79FB\u9664Toast
function hide(props) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId)

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      props?.onClose && props?.onClose()
    }, 300)
  }
}

export default hide
`},90752:function(e,n){n.Z=`import show from './show'
import hide from './hide'

const Toast = {
  show,
  hide
}

export default Toast
`},20349:function(e,n){n.Z=`import hide from './hide'

// \u663E\u793AToast
// eslint-disable-next-line
function show(props) {
  const {
    // Visible duration
    duration,
    maskClickable,
    // Pop position: top\u3001middle\u3001bottom
    position,
    portal,
    id,
    maskClassName,
    maskStyle,
    className,
    style,
    // Content html text
    content,
    onOpen,
    onClose
  } = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  // \u6E32\u67D3
  function render() {
    let toastId = id || '__lyrixi_toast_el__'
    // \u5982\u679C\u6CA1\u751F\u6210\u6210\u529F, \u5219\u5F3A\u5236\u751F\u6210
    let mask = document.getElementById(toastId)
    if (!mask) {
      // Create mask
      mask = document.createElement('div')

      mask.innerHTML = \`<div class="lyrixi-toast">
        <div class="lyrixi-toast-wrapper">
          <div class="lyrixi-toast-content"></div>
        </div>
      </div>\`
      // \u6DFB\u52A0\u5230dom\u4E0A
      ;(portal || document.getElementById('root') || document.body).appendChild(mask)
    }

    // Update mask
    mask.setAttribute(
      'class',
      \`lyrixi-mask lyrixi-toast-mask\${maskClassName ? ' ' + maskClassName : ''}\${
        maskClickable !== false ? ' lyrixi-toast-propagation' : ''
      }\`
    )
    mask.setAttribute('id', toastId)
    mask.setAttribute('style', '')
    for (let key in maskStyle || {}) {
      mask.style[key] = maskStyle[key]
    }

    // Update container
    let container = mask.querySelector('.lyrixi-toast')
    if (container) {
      container?.setAttribute('class', \`lyrixi-toast \${position || 'lyrixi-middle'}\`)
    }

    // Update wrapper
    let wrapper = mask.querySelector('.lyrixi-toast-wrapper')
    if (wrapper) {
      wrapper?.setAttribute('class', \`toast-wrapper \${className ? ' ' + className : ''}\`)
      wrapper?.setAttribute('style', '')
      for (let key in style || {}) {
        wrapper.style[key] = style[key]
      }
    }

    // Update content
    let contentDOM = mask.querySelector('.lyrixi-toast-content')
    if (contentDOM) {
      contentDOM.innerHTML = content || ''
    }

    // Open toast
    mask.classList.add('lyrixi-active')
    mask.childNodes[0].classList.add('lyrixi-active')

    if (typeof onOpen === 'function') {
      onOpen()
    }

    // \u663E\u793A\u6570\u79D2\u540E\u9690\u85CF
    if (mask.showTimeout) window.clearTimeout(mask.showTimeout)
    mask.showTimeout = setTimeout(
      () => {
        hide({ onClose: onClose })
      },
      typeof duration === 'number' ? duration : 2000
    )

    // \u8FD4\u56DE\u8282\u70B9
    return mask
  }
  return render()
}

export default show
`},40176:function(e,n){n.Z=`import React from 'react'
import { Tooltip } from 'lyrixi-mobile'

export default () => {
  return (
    <>
      <Tooltip
        content={<p>123412341234</p>}
        onOpen={() => {
          console.log('open:', true)
        }}
        onClose={() => {
          console.log('open:', false)
        }}
      >
        <div style={{ margin: 100 }}>\u70B9\u51FB</div>
      </Tooltip>
    </>
  )
}
`},14529:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Page, Button } from 'lyrixi-mobile'
import { Transfer } from 'lyrixi-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const transferRef = useRef(null)
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Combo</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title">Transfer Combo</div>
        <Transfer.Combo
          ref={transferRef}
          className="lyrixi-border-b"
          placeholder="Select"
          allowClear
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' },
            { id: '7', name: '7' },
            { id: '8', name: '8' },
            { id: '9', name: '9' },
            { id: '10', name: '10' },
            { id: '11', name: '11' },
            { id: '12', name: '12' },
            { id: '13', name: '13' },
            { id: '14', name: '14' },
            { id: '15', name: '15' },
            { id: '16', name: '16' },
            { id: '17', name: '17' },
            { id: '18', name: '18' },
            { id: '19', name: '19' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            setValue(newValue)
          }}
          mainProps={{
            titles: { selected: '\u6807\u98981', unSelected: '\u6807\u98982' }
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},26018:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'
import { Transfer } from 'lyrixi-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Main</Page.Header>
      <div className="demo-title">Transfer List</div>
      <Transfer.Main
        list={[
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
          { id: '4', name: '4' },
          { id: '5', name: '5' },
          { id: '6', name: '6' }
        ]}
        value={value}
        titles={['\u6807\u98981', '\u6807\u98982']}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue)
        }}
      />
    </Page>
  )
}
`},3304:function(e,n){n.Z=`import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'
import { Transfer } from 'lyrixi-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Modal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title">Transfer Modal</div>
        <Transfer.Modal
          open={true}
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' }
          ]}
          value={value}
          titles={['\u6807\u98981', '\u6807\u98982']}
          onChange={(newValue) => {
            console.log('newValue:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
        />
      </Page.Main>
    </Page>
  )
}
`},25468:function(e,n){n.Z=`import React, { useRef, useEffect } from 'react'
import { Page, VideoPlayer, Button } from 'lyrixi-mobile'

export default () => {
  const videoPlayerRef = useRef(null)
  return (
    <Page>
      <Page.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'}
          src={'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4'}
          autoPlay={false}
          headerRender={() => (
            <div
              className="lyrixi-videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          )}
        />
      </Page.Main>
      <Page.Footer>
        <Button
          onClick={() => {
            videoPlayerRef.current.play()
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            videoPlayerRef.current.pause()
          }}
        >
          Pause
        </Button>
      </Page.Footer>
    </Page>
  )
}
`},77041:function(e,n){n.Z=`// \u83B7\u53D6\u6587\u4EF6\u6269\u5C55\u540D
function getFileExtension(src) {
  if (typeof src !== 'string') {
    return ''
  }
  // \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u63D0\u53D6\u6587\u4EF6\u6269\u5C55\u540D
  const match = src.match(/\\.([a-zA-Z0-9]+)(?:\\?.*)?$/)
  return match ? match[1] : null
}

export default getFileExtension
`},56354:function(e,n){n.Z=`import getFileExtension from './getFileExtension'
import loadJs from './loadJs'
import loadImage from './loadImage'

const AssetUtil = {
  getFileExtension: getFileExtension,
  loadJs: loadJs,
  loadImage: loadImage
}

export default AssetUtil
`},35310:function(e,n){n.Z=`// \u52A8\u6001\u52A0\u8F7Dscript\u7684\u65B9\u6CD5
function loadImage(src, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src

    const handleLoad = () => {
      resolve(true)
      // \u652F\u6301\u65B0\u7684 onSuccess
      if (typeof onSuccess === 'function') onSuccess(img)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
    const handleError = (error) => {
      resolve(false)
      // \u652F\u6301\u65B0\u7684 onError
      if (typeof onError === 'function') onError(error)

      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)
  })
}

export default loadImage
`},35476:function(e,n){n.Z=`// \u52A8\u6001\u52A0\u8F7Dscript\u7684\u65B9\u6CD5
function loadJs(
  src,
  {
    async,
    charset,
    text,
    type,
    // \u52A8\u6001\u5C5E\u6027
    id,
    defer,
    crossorigin,
    integrity,
    referrerPolicy,
    onError,
    onSuccess
  } = {}
) {
  let attrs = {}
  if (id) attrs.id = id
  if (defer) attrs.defer = defer
  if (crossorigin) attrs.crossorigin = crossorigin
  if (integrity) attrs.integrity = integrity
  if (referrerPolicy) attrs.referrerPolicy = referrerPolicy

  return new Promise((resolve) => {
    const loadScript = require('./loadscript.js')
    loadScript(
      src,
      {
        async: async,
        charset: charset,
        text: text,
        type: type,
        attrs: attrs
      },
      (error, script) => {
        if (error) {
          resolve(null)
          // \u652F\u6301\u65B0\u7684 onError
          if (typeof onError === 'function') onError(error)
        } else {
          resolve(script)
          // \u652F\u6301\u65B0\u7684 onSuccess
          if (typeof onSuccess === 'function') onSuccess(script)
        }
      }
    )
  })
}

export default loadJs
`},7870:function(e,n){n.Z=`// https://github.com/eldargab/load-script
module.exports = function load(src, opts, cb) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let script = document.createElement('script')

  if (typeof opts === 'function') {
    // eslint-disable-next-line
    cb = opts
    // eslint-disable-next-line
    opts = {}
  }

  // eslint-disable-next-line
  opts = opts || {}
  // eslint-disable-next-line
  cb = cb || function () {}

  script.type = opts.type || 'text/javascript'
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  let onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb)
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (let attr in attrs) {
    script.setAttribute(attr, attrs[attr])
  }
}

function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}
`},10665:function(e,n){n.Z=`// Clipboard \u526A\u8D34\u677F
import LocaleUtil from './../LocaleUtil' // \u56FD\u9645\u5316\u6570\u636E

const Clipboard = {
  // \u9009\u62E9\u5143\u7D20\u7684\u5185\u5BB9
  selectContent: function (element) {
    // \u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u8303\u56F4
    let rangeToSelect = document.createRange()
    rangeToSelect.selectNodeContents(element)

    // \u9009\u62E9\u5185\u5BB9
    let selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(rangeToSelect)
  },
  // \u4E3AexecCommand\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5143\u7D20
  createElementForExecCommand: function (textToClipboard) {
    let forExecElement = document.createElement('div')
    // \u653E\u7F6E\u5728\u53EF\u89C1\u533A\u57DF\u4E4B\u5916
    forExecElement.style.position = 'absolute'
    forExecElement.style.left = '-10000px'
    forExecElement.style.top = '-10000px'
    // \u5C06\u5FC5\u8981\u7684\u6587\u672C\u5199\u5165\u5143\u7D20\u5E76\u8FFD\u52A0\u5230\u6587\u6863\u4E2D
    forExecElement.textContent = textToClipboard
    document.body.appendChild(forExecElement)
    // contentEditable\u6A21\u5F0F\u5BF9\u4E8EFirefox\u4E2D\u7684execCommand\u65B9\u6CD5\u662F\u5FC5\u9700\u7684
    forExecElement.contentEditable = true

    return forExecElement
  },
  // \u590D\u5236\u5230\u526A\u8D34\u677F
  copy: function (input, params = {}) {
    let textToClipboard = input

    let success = true
    if (window.clipboardData) {
      // Internet Explorer
      window.clipboardData.setData('Text', textToClipboard)
    } else {
      // \u4E3AexecCommand\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5143\u7D20
      let forExecElement = this.createElementForExecCommand(textToClipboard)

      // \u9009\u62E9\u5143\u7D20\u7684\u5185\u5BB9 ('copy'\u65B9\u6CD5\u7684execCommand\u5728\u9009\u62E9\u4E0A\u8D77\u4F5C\u7528)
      this.selectContent(forExecElement)

      // UniversalXPConnect\u662FFirefox\u4E2D\u526A\u8D34\u677F\u8BBF\u95EE\u6240\u5FC5\u9700\u7684
      try {
        if (window.netscape && window.netscape.security) {
          window.netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')
        }
        // \u5C06\u9009\u5B9A\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F
        // \u9002\u7528\u4E8EFirefox\u548CSafari 5\u4E4B\u524D\u7684\u7248\u672C
        success = document.execCommand('copy', false, null)
      } catch (e) {
        success = false
      }

      // \u5220\u9664\u4E34\u65F6\u5143\u7D20
      document.body.removeChild(forExecElement)
    }

    if (success) {
      if (params?.onSuccess)
        params.onSuccess({
          status: 'success',
          message: LocaleUtil.locale('\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F', 'lyrixi_copy_clipboard_success')
        })
    } else {
      if (params?.onError)
        params.onError({
          status: 'error',
          message:
            params.errorMsg ||
            LocaleUtil.locale('\u5F53\u524D\u8BBE\u5907\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F', 'lyrixi_copy_clipboard_refuse')
        })
    }
  }
}

export default Clipboard
`},14947:function(e,n){n.Z=`import Clipboard from './Clipboard.js'

export default Clipboard
`},91111:function(e,n){n.Z=`const hasOwn = {}.hasOwnProperty

export default function classNames() {
  let classes = ''

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

function parseValue(arg) {
  if (typeof arg === 'string') {
    return arg.trim()
  }

  if (typeof arg !== 'object') {
    return ''
  }

  if (Array.isArray(arg)) {
    return classNames.apply(null, arg)
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString()
  }

  let classes = ''

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function appendClass(value, newClass) {
  if (!newClass) {
    return value
  }

  return value ? value + ' ' + newClass : newClass
}
`},44148:function(e,n){n.Z=`/**
 * \u83B7\u53D6\u4E8B\u4EF6\u7684\u5750\u6807\u4F4D\u7F6E(\u517C\u5BB9touch\u548Cmouse\u4E8B\u4EF6)
 * @param {Event} e - \u4E8B\u4EF6\u5BF9\u8C61
 * @returns {{clientX: number, clientY: number}} \u5750\u6807\u5BF9\u8C61
 */
function getEventPosition(e) {
  if (e.changedTouches && e.changedTouches[0]) {
    return {
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY
    }
  }
  return {
    clientX: e.clientX,
    clientY: e.clientY
  }
}

export default getEventPosition
`},64575:function(e,n){n.Z=`import preventDefault from './preventDefault'
import getEventPosition from './getEventPosition'
import classNames from './classNames'

const DOMUtil = {
  preventDefault: preventDefault,
  getEventPosition: getEventPosition,
  classNames: classNames
}

export default DOMUtil
`},61242:function(e,n){n.Z=`function preventDefault(e) {
  e.preventDefault()
}

export default preventDefault
`},49738:function(e,n){n.Z=`import dayjs from 'dayjs'

// type: 'year|quarter|month|week|date|day|hour|minute|second'
function add(date, count, type) {
  if (count === 0 || typeof count !== 'number') return date

  if (type === 'date') {
    // eslint-disable-next-line
    type = 'day'
  }

  if (count > 0) {
    return dayjs(date).add(count, type).toDate()
  }

  return dayjs(date).subtract(Math.abs(count), type).toDate()
}

export default add
`},59032:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareDate(d1, d2) {
  const year1 = d1.getFullYear()
  const month1 = d1.getMonth() // \u6CE8\u610F\uFF1A\u6708\u662F\u4ECE0\u5F00\u59CB\u7684
  const day1 = d1.getDate()

  const year2 = d2.getFullYear()
  const month2 = d2.getMonth()
  const day2 = d2.getDate()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else if (month1 !== month2) {
    return month1 > month2 ? 1 : -1
  } else {
    if (day1 === day2) return 0
    return day1 > day2 ? 1 : -1
  }
}

export default compareDate
`},58141:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareHour(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setMinutes(0, 0, 0)
  date2.setMinutes(0, 0, 0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareHour
`},84567:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\u5206\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareMinute(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setSeconds(0, 0)
  date2.setSeconds(0, 0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareMinute
`},49717:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareMonth(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let month1 = d1.getMonth()
  let month2 = d2.getMonth()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (month1 === month2) return 0
    return month1 > month2 ? 1 : -1
  }
}

export default compareMonth
`},70017:function(e,n){n.Z=`import quarter from '../quarter'
// \u6BD4\u8F83\u5E74\u5B63\u5EA6,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareQuarter(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let q1 = quarter(d1)
  let q2 = quarter(d2)

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (q1 === q2) return 0
    return q1 > q2 ? 1 : -1
  }
}

export default compareQuarter
`},42932:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\u5206\u79D2\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareSecond(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setMilliseconds(0)
  date2.setMilliseconds(0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareSecond
`},7823:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u6BD4\u8F83\u5468\u6570,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareWeek(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let week1 = dayjs(d1).week()
  let week2 = dayjs(d2).week()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (week1 === week2) return 0
    return week1 > week2 ? 1 : -1
  }
}

export default compareWeek
`},27622:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u4EFD,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareYear(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()

  if (year1 === year2) return 0
  return year1 > year2 ? 1 : -1
}

export default compareYear
`},29822:function(e,n){n.Z=`import compareYear from './compareYear'
import compareQuarter from './compareQuarter'
import compareMonth from './compareMonth'
import compareWeek from './compareWeek'
import compareDate from './compareDate'
import compareHour from './compareHour'
import compareMinute from './compareMinute'
import compareSecond from './compareSecond'
// Partial compare
import partCompareHourMinute from './partCompareHourMinute'

// \u6BD4\u8F83\u5E74\u6708\u65E5,d1\u5927\u4E8Ed2\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1, compareUnit: 'year|quarter|month|week|date|day|hour|minute|second|partHourMinute'
function compare(d1, d2, compareUnit) {
  if (d1 instanceof Date === false || d2 instanceof Date === false) {
    return undefined
  }
  if (compareUnit === 'year') {
    return compareYear(d1, d2)
  }
  if (compareUnit === 'quarter') {
    return compareQuarter(d1, d2)
  }
  if (compareUnit === 'month') {
    return compareMonth(d1, d2)
  }
  if (compareUnit === 'week') {
    return compareWeek(d1, d2)
  }
  if (compareUnit === 'date') {
    return compareDate(d1, d2)
  }
  if (compareUnit === 'hour') {
    return compareHour(d1, d2)
  }
  if (compareUnit === 'minute' || compareUnit === 'datetime') {
    return compareMinute(d1, d2)
  }
  if (compareUnit === 'second') {
    return compareSecond(d1, d2)
  }
  // Partial compare hour minute
  if (compareUnit === 'partHourMinute' || compareUnit === 'time') {
    return partCompareHourMinute(d1, d2)
  }

  return compareDate(d1, d2)
}

export default compare
`},82537:function(e,n){n.Z=`// \u6BD4\u8F83\u65F6\u5206,\u683C\u5F0F:hh:mm,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareTime(d1, d2) {
  let hour1 = d1.getHours()
  let hour2 = d2.getHours()
  let minute1 = d1.getMinutes()
  let minute2 = d2.getMinutes()

  if (hour1 !== hour2) {
    return hour1 > hour2 ? 1 : -1
  } else {
    if (minute1 === minute2) return 0
    return minute1 > minute2 ? 1 : -1
  }
}

export default compareTime
`},24114:function(e,n){n.Z=`import compare from './compare'

/**
 * \u6BD4\u8F83\u4E24\u4E2A\u65F6\u95F4\u6BB5\u8303\u56F4\u662F\u5426\u5305\u542B
 * @param {*} range1 [startDate, endDate], \u5747\u4E3A Date \u7C7B\u578B
 * @param {*} range2 [startDate, endDate], \u5747\u4E3A Date \u7C7B\u578B
 * @param {*} compareUnit
 * @returns \u82E5range1\u7B49\u4E8Erange2\u5219\u8FD4\u56DE0\uFF0C\u82E5range1\u5305\u542Brange2\u5219\u8FD4\u56DE1\uFF0C\u82E5range1\u4E0D\u5305\u542Brange2\u5219\u8FD4\u56DE-1
 */

function compareRange(range1, range2, compareUnit) {
  if (
    !Array.isArray(range1) ||
    !Array.isArray(range2) ||
    range1.length !== 2 ||
    range2.length !== 2 ||
    !(range1[0] instanceof Date) ||
    !(range1[1] instanceof Date) ||
    !(range2[0] instanceof Date) ||
    !(range2[1] instanceof Date)
  ) {
    return undefined
  }

  let [start1, end1] = range1
  let [start2, end2] = range2

  // \u683C\u5F0F\u5316range1\u548Crange2\uFF1A\u82E5\u8D77\u6B62\u987A\u5E8F\u98A0\u5012\uFF0C\u5219\u4EA4\u6362
  if (start1.getTime() > end1.getTime()) {
    const tmp = start1
    start1 = end1
    end1 = tmp
  }
  if (start2.getTime() > end2.getTime()) {
    const tmp = start2
    start2 = end2
    end2 = tmp
  }

  // \u6BD4\u8F83\u8303\u56F4
  const startCompare = compare(start1, start2, compareUnit)
  const endCompare = compare(end1, end2, compareUnit)
  if (startCompare === undefined || endCompare === undefined) return undefined

  // \u76F8\u7B49
  if (startCompare === 0 && endCompare === 0) return 0

  // \u5305\u542B
  if ((startCompare === 0 || startCompare === -1) && (endCompare === 0 || endCompare === 1))
    return 1

  // \u4E0D\u5305\u542B
  return -1
}

export default compareRange
`},34896:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffDate(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'day')
}

export default diffDate
`},24013:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffHour(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'hour')
}

export default diffHour
`},4896:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffMinute(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'minute')
}

export default diffMinute
`},85971:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffMonth(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'month')
}

export default diffMonth
`},9316:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffQuarter(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'quarter')
}

export default diffQuarter
`},29094:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffSecond(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'second')
}

export default diffSecond
`},4101:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffYear(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'year')
}

export default diffYear
`},3346:function(e,n){n.Z=`import diffYear from './diffYear'
import diffQuarter from './diffQuarter'
import diffMonth from './diffMonth'
import diffDate from './diffDate'
import diffHour from './diffHour'
import diffMinute from './diffMinute'
import diffSecond from './diffSecond'
// Partial diff
import partDiffHourMinute from './partDiffHourMinute'

// \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1, diffUnit: 'year|quarter|month|week|date|day|hour|minute|second|partHourMinute'
function diff(d1, d2, diffUnit) {
  if (d1 instanceof Date === false || d2 instanceof Date === false) {
    return undefined
  }
  if (diffUnit === 'year') {
    return diffYear(d1, d2)
  }
  if (diffUnit === 'quarter') {
    return diffQuarter(d1, d2)
  }
  if (diffUnit === 'month') {
    return diffMonth(d1, d2)
  }
  if (diffUnit === 'hour') {
    return diffHour(d1, d2)
  }
  if (diffUnit === 'minute' || diffUnit === 'datetime') {
    return diffMinute(d1, d2)
  }
  if (diffUnit === 'second') {
    return diffSecond(d1, d2)
  }
  // Partial diff hour minute
  if (diffUnit === 'partHourMinute' || diffUnit === 'time') {
    return partDiffHourMinute(d1, d2)
  }

  return diffDate(d1, d2)
}

export default diff
`},67901:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffTime(d1, d2) {
  let date1 = new Date(d1)
  date1.setYear(0)
  date1.setMonth(0, 0)
  date1.setSeconds(0, 0)

  let date2 = new Date(d2)
  date2.setYear(0)
  date2.setMonth(0, 0)
  date2.setSeconds(0, 0)

  return dayjs(date1).diff(dayjs(date2), 'minute')
}

export default diffTime
`},65962:function(e,n){n.Z=`// \u683C\u5F0F\u5316\u6587\u6863\u53C2\u8003: https://momentjs.cn/docs/#/displaying/

import dayjs from 'dayjs'

// \u5165\u53E3: \u683C\u5F0F\u5316\u65E5\u671F
function format(date, type) {
  if (date instanceof Date === false) {
    return ''
  }
  if (!type || typeof type !== 'string') {
    return dayjs(date).format('YYYY-MM-DD')
  }

  if (type === 'year') {
    return dayjs(date).format('YYYY')
  } else if (type === 'quarter') {
    return dayjs(date).format('YYYY-[Q]Q')
  } else if (type === 'month') {
    return dayjs(date).format('YYYY-MM')
  } else if (type === 'date') {
    return dayjs(date).format('YYYY-MM-DD')
  } else if (type === 'datetime') {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
  } else if (type === 'time') {
    return dayjs(date).format('HH:mm')
  } else if (type === 'week') {
    return dayjs(date).format('YYYY-wo')
  }

  return dayjs(date).format(type)
}

export default format
`},19692:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u6708\u5929\u6570
function getDaysInMonth(date) {
  const currentDate = new Date(date instanceof Date ? date : null)
  const year = currentDate.getFullYear() // \u83B7\u53D6\u5F53\u524D\u5E74\u4EFD
  const month = currentDate.getMonth() // \u83B7\u53D6\u5F53\u524D\u6708\u4EFD\uFF080-11\uFF09

  // \u521B\u5EFA\u4E0B\u4E2A\u6708\u7684\u7B2C\u4E00\u5929\uFF0C\u5E76\u8BBE\u7F6E\u65E5\u671F\u4E3A0\uFF0C\u8FD9\u6837\u53EF\u4EE5\u83B7\u53D6\u4E0A\u4E2A\u6708\u7684\u6700\u540E\u4E00\u5929
  const lastDayOfCurrentMonth = new Date(year, month + 1, 0)

  // \u8FD4\u56DE\u5F53\u6708\u7684\u5929\u6570
  return lastDayOfCurrentMonth.getDate()
}

export default getDaysInMonth
`},4602:function(e,n){n.Z=`// const minuteMillisecond = 60 * 1000
// const hourMillisecond = 60 * 60 * 1000
const dayMillisecond = 24 * 60 * 60 * 1000
// const weekMillisecond = 7 * 24 * 60 * 60 * 1000

// \u6708\u6570\u636E, \u5F53\u524D\u6708isCurrent\u4E3Atrue, \u8FD4\u56DE6\u884C7\u5217\u4E8C\u7EF4\u6570\u7EC4(\u670D\u52A1\u65E5\u5386\u63A7\u4EF6)
function getMonthDates(currentDate, weekStart) {
  let date = new Date(currentDate)
  // \u83B7\u5F97\u672C\u6708\u65E5\u5386, \u8FD4\u56DE42\u5929
  // \u6708\u5934\u7684\u4F4D\u7F6E, \u5468\u65E5\u4E3A0
  date.setDate(1)
  let firstDayIndex = date.getDay()

  // \u8D77\u59CB\u70B9\u5982\u679C\u662F\u5468\u4E00, \u5219\u5468\u4E00\u4E3A0
  if (weekStart === 'Monday') {
    // \u5468\u65E5\u7D22\u5F15\u4E3A6
    if (firstDayIndex === 0) {
      firstDayIndex = 6
    }
    // \u5176\u5B83\u51CF1, \u4FDD\u8BC1\u5468\u4E00\u662F0
    else {
      firstDayIndex = firstDayIndex - 1
    }
  }

  // \u6839\u636E\u8D77\u59CB\u6BEB\u79D2\u6570\uFF0C\u9010\u5929\u589E\u52A0\u5929\u6570
  let startMillisecond = date.getTime() - dayMillisecond * firstDayIndex

  // \u751F\u6210\u6708
  let rows = []
  let data = []
  for (let i = 0; i < 42; i++) {
    // \u8BBE\u7F6E\u65E5\u671F
    data.push(new Date())
    if (i === 0) data[0].setTime(startMillisecond)
    else data[i].setTime(data[i - 1].getTime() + dayMillisecond)
    // \u8BBE\u7F6E\u5F53\u6708\u6807\u8BC6isCurrent
    data[i].isCurrent = false
    if (data[i].getMonth() === currentDate.getMonth()) data[i].isCurrent = true

    // \u6BCF7\u521B\u5EFA\u4E00\u4E2A\u65B0\u7EC4
    if (i % 7 === 0) {
      rows.push([])
    }
    // \u5C06\u5F53\u524D\u5143\u7D20\u52A0\u5165\u6700\u65B0\u7684\u7EC4
    rows[rows.length - 1].push(data[i])
  }

  return rows
}

export default getMonthDates
`},42777:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u54687\u5929
function getWeekDates(currentDate, weekStart = 'Monday') {
  if (currentDate instanceof Date === false) return null

  const weekData = []
  const startOfWeek = new Date(currentDate)
  const dayOfWeek = startOfWeek.getDay() // \u83B7\u53D6\u5F53\u524D\u65E5\u671F\u662F\u661F\u671F\u51E0

  // \u8BA1\u7B97\u672C\u5468\u7684\u5468\u4E00
  if (weekStart === 'Monday') {
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
    startOfWeek.setDate(currentDate.getDate() + mondayOffset)
  }
  // \u8BBE\u5B9A\u4E3A\u672C\u5468\u7684\u7B2C\u4E00\u5929\uFF08\u5468\u65E5\uFF09
  else {
    startOfWeek.setDate(currentDate.getDate() - dayOfWeek)
  }

  for (let i = 0; i < 7; i++) {
    const weekDay = new Date(startOfWeek)
    weekDay.setDate(startOfWeek.getDate() + i)
    weekData.push(weekDay)
  }

  return weekData
}

export default getWeekDates
`},53338:function(e,n){n.Z=`import plugin from './plugin'
// \u901A\u7528\u65B9\u6CD5
import toDate from './toDate'
import startOrEnd from './startOrEnd'
import add from './add'
import compare from './compare'
import diff from './diff'
import format from './format'
import compareRange from './compareRange'

// \u5B9A\u5236\u65B9\u6CD5
import getWeekDates from './getWeekDates'
import previousWeek from './previousWeek'
import nextWeek from './nextWeek'
import getMonthDates from './getMonthDates'
import previousMonth from './previousMonth'
import nextMonth from './nextMonth'
import getDaysInMonth from './getDaysInMonth'
import quarter from './quarter'
// \u4E0Eadd\u529F\u80FD\u91CD\u590D, \u4F46\u4E3A\u4E86\u517C\u5BB9\u65E7\u7248\u672C, \u4FDD\u7559

// \u65F6\u533A\u65B9\u6CD5
import betweenTimeZones from './utc/betweenTimeZones.js'
import utcToTimeZone from './utc/utcToTimeZone.js'
import timeZoneToUtc from './utc/timeZoneToUtc.js'
import utcOffset from './utc/utcOffset'
import parseUtcOffset from './utc/parseUtcOffset'
import stringifyUtcOffset from './utc/stringifyUtcOffset'

// \u521D\u59CB\u5316\u63D2\u4EF6, \u6CA1\u6709\u63D2\u4EF6\u65E0\u6CD5\u4F7F\u7528\u6B64\u5E93
plugin()

// \u65E5\u671F\u5DE5\u5177\u7C7B
const dateUtil = {
  plugin: plugin,
  // \u901A\u7528\u65B9\u6CD5
  // \u901A\u7528\u65B9\u6CD5: \u8F6C\u4E3A\u65E5\u671F\u683C\u5F0F
  toDate: toDate,
  // \u901A\u7528\u65B9\u6CD5: \u8FB9\u754C\u65F6\u95F4, \u652F\u6301: 'year', 'quarter', 'month', 'week', 'date'
  startOrEnd: startOrEnd,
  // \u901A\u7528\u65B9\u6CD5: \u589E\u52A0\u65E5\u671F, 'year', 'quarter', 'month', 'week', 'date'
  add: add,
  // \u901A\u7528\u65B9\u6CD5: \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1,\u9519\u8BEF\u8FD4\u56DEundefined
  compare: compare,
  // \u901A\u7528\u65B9\u6CD5: \u6BD4\u8F83\u4E24\u4E2A\u65F6\u95F4\u8303\u56F4\uFF0C1\u5305\u542B\uFF0C0\u76F8\u7B49\uFF0C-1\u4E0D\u5305\u542B
  compareRange: compareRange,
  // \u901A\u7528\u65B9\u6CD5: \u65E5\u671F\u76F8\u5DEE'year|quarter|month|week|date|day|hour|minute|second|partHourMinute'
  diff: diff,
  // \u901A\u7528\u65B9\u6CD5: \u683C\u5F0F\u5316\u65E5\u671F
  format: format,

  // \u5B9A\u5236\u65B9\u6CD5
  // \u5B9A\u5236\u65B9\u6CD5: \u83B7\u53D6\u6307\u5B9A\u54687\u5929\u7684\u65E5\u671F
  getWeekDates: getWeekDates,
  previousWeek: previousWeek,
  nextWeek: nextWeek,
  // \u5B9A\u5236\u65B9\u6CD5: \u83B7\u53D6\u6307\u5B9A\u670842\u5929\u7684\u65E5\u671F, \u5F53\u524D\u6708isCurrent\u4E3Atrue
  getMonthDates: getMonthDates,
  previousMonth: previousMonth,
  nextMonth: nextMonth,
  // \u5B9A\u5236\u65B9\u6CD5: \u83B7\u53D6\u6708\u5929\u6570
  getDaysInMonth: getDaysInMonth,
  // \u5B9A\u5236\u65B9\u6CD5: \u83B7\u53D6\u5F53\u524D\u5B63\u5EA6
  quarter: quarter,

  // \u65F6\u533A\u65B9\u6CD5
  // \u65F6\u533A\u65B9\u6CD5: \u83B7\u53D6\u5F53\u524D\u65F6\u533A\u5730\u5740\u540D\u79F0
  timeZonePlaceName: () => {
    return typeof Intl?.DateTimeFormat === 'function'
      ? new Intl.DateTimeFormat().resolvedOptions().timeZone
      : ''
  },
  // \u65F6\u533A\u65B9\u6CD5: \u83B7\u53D6\u5F53\u524DUTC\u504F\u79FB\u91CF, \u5206\u949F\u6570\u662F\u56FD\u9645\u65F6\u533A\u6807\u51C6
  utcOffset: utcOffset,
  // \u65F6\u533A\u65B9\u6CD5: \u5C06 UTC \u8F6C\u4E3A\u6307\u5B9A\u65F6\u533A
  utcToTimeZone: (utcDate, offset) => {
    if (utcDate && typeof offset === 'number') {
      return utcToTimeZone(utcDate, offset)
    }
    return utcDate || new Date()
  },
  // \u65F6\u533A\u65B9\u6CD5: \u5728\u4E24\u4E2A\u65F6\u533A\u95F4\u8F6C\u6362
  betweenTimeZones: (utcDate, fromOffset, toOffset) => {
    if (utcDate && typeof fromOffset === 'number' && typeof toOffset === 'number') {
      return betweenTimeZones(utcDate, fromOffset, toOffset)
    }
    return utcDate || new Date()
  },
  // \u65F6\u533A\u65B9\u6CD5: \u5C06\u6307\u5B9A\u65F6\u533A\u65F6\u95F4\u8F6C\u4E3A UTC
  timeZoneToUtc: (date, offset) => {
    if (date && typeof offset === 'number') {
      return timeZoneToUtc(date, offset)
    }
    return date || new Date()
  },
  // \u65F6\u533A\u65B9\u6CD5: \u89E3\u6790UTC\u504F\u79FB\u91CF
  parseUtcOffset: parseUtcOffset,
  // \u65F6\u533A\u65B9\u6CD5: \u65F6\u533A\u5B57\u7B26\u4E32\u5316
  stringifyUtcOffset: stringifyUtcOffset
}

export default dateUtil
`},1624:function(e,n){n.Z=`// \u4E0B\u4E00\u6708
function nextMonth(currentDate) {
  const nextMonthDate = new Date(currentDate)
  nextMonthDate.setMonth(currentDate.getMonth() + 1)

  // \u5982\u679C\u7ED3\u679C\u65E5\u671F\u4E0D\u662F\u6709\u6548\u7684\u65E5\u671F\uFF0C\u8BBE\u7F6E\u4E3A\u4E0B\u6708\u6700\u540E\u4E00\u5929
  if (nextMonthDate.getDate() !== currentDate.getDate()) {
    nextMonthDate.setDate(0)
  }

  return nextMonthDate
}

export default nextMonth
`},52736:function(e,n){n.Z=`// \u4E0B\u5468
function nextWeek(currentDate) {
  const nextWeekDate = new Date(currentDate)
  nextWeekDate.setDate(currentDate.getDate() + 7)
  return nextWeekDate
}

export default nextWeek
`},18488:function(e,n){n.Z=`import dayjs from 'dayjs'
// dayjs\u56FD\u9645\u5316, \u5E38\u7528\u63D2\u4EF6: https://day.js.org/docs/en/plugin/plugin
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import utc from 'dayjs/plugin/utc'

// Add plugin
function plugin() {
  if (!window.dayjsPlugin) window.dayjsPlugin = []
  if (window.dayjsPlugin.includes('isoWeek')) return

  dayjs.extend(isoWeek) // \u7528\u4E8E\u89E3\u51B3format\u65F6\u62A5\u9519:isoWeek
  dayjs.extend(weekOfYear) // \u7528\u4E8E\u89E3\u51B3format\u65F6\u62A5\u9519:week
  dayjs.extend(quarterOfYear)
  dayjs.extend(advancedFormat) // \u652F\u6301\u9AD8\u7EA7format
  dayjs.extend(utc)
  window.dayjsPlugin.push('isoWeek', 'weekOfYear', 'quarterOfYear', 'advancedFormat')
}

export default plugin
`},17901:function(e,n){n.Z=`// \u4E0A\u4E00\u6708
function previousMonth(currentDate) {
  const previousMonthDate = new Date(currentDate)
  previousMonthDate.setMonth(currentDate.getMonth() - 1)

  // \u5982\u679C\u7ED3\u679C\u65E5\u671F\u4E0D\u662F\u6709\u6548\u7684\u65E5\u671F\uFF0C\u8BBE\u7F6E\u4E3A\u4E0A\u6708\u6700\u540E\u4E00\u5929
  if (previousMonthDate.getDate() !== currentDate.getDate()) {
    previousMonthDate.setDate(0)
  }

  return previousMonthDate
}

export default previousMonth
`},86292:function(e,n){n.Z=`// \u4E0A\u5468
function previousWeek(currentDate) {
  const previousWeekDate = new Date(currentDate)
  previousWeekDate.setDate(currentDate.getDate() - 7)
  return previousWeekDate
}

export default previousWeek
`},54537:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u524D\u5B63\u5EA6
function quarter(date) {
  if (date instanceof Date === false) {
    return undefined
  }
  return Math.ceil((date.getMonth() + 1) / 3)
}

export default quarter
`},15361:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u8FB9\u754C\u65F6\u95F4: 00:00:00\u621623:59:59
function startOrEnd(date, type, boundary = 'start') {
  if (boundary === 'start') {
    if (['year', 'quarter', 'month'].includes(type)) {
      return dayjs(date).startOf(type).toDate()
    }
    if (type === 'week') {
      return dayjs(date).startOf('isoWeek').toDate()
    }
    if (type === 'date') {
      return dayjs(date).startOf('day').toDate()
    }
    if (type === 'datetime') {
      date.setSeconds(0)
      return date
    }
    return date
  }

  if (boundary === 'end') {
    if (['year', 'quarter', 'month'].includes(type)) {
      return dayjs(date).endOf(type).toDate()
    }
    if (type === 'week') {
      return dayjs(date).endOf('isoWeek').toDate()
    }
    if (type === 'date') {
      return dayjs(date).endOf('day').toDate()
    }
    if (type === 'datetime') {
      date.setSeconds(59)
      return date
    }
    return date
  }

  return date
}

export default startOrEnd
`},80287:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u8F6C\u4E3A\u65E5\u671F\u683C\u5F0F
function toDate(date) {
  if (!date) return null

  // If date is time, convert to date with current date
  if (typeof date === 'string' && /^(\\d{1,2}:\\d{2})(:\\d{2})?$/.test(date)) {
    return dayjs(\`\${dayjs().format('YYYY-MM-DD')} \${date}\`).toDate()
  }
  return dayjs(date).toDate()
}

export default toDate
`},13491:function(e,n){n.Z=`// \u5728\u4E24\u4E2A\u65F6\u533A\u95F4\u8F6C\u6362
function betweenTimeZones(utcDate, fromOffset, toOffset) {
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof fromOffset !== 'number' || typeof toOffset !== 'number') {
    return utcDate
  }

  const offsetDiff = toOffset - fromOffset

  const result = new Date(utcDate.getTime())
  result.setMinutes(result.getMinutes() + offsetDiff)

  return result
}

export default betweenTimeZones
`},18514:function(e,n){n.Z=`// \u89E3\u6790UTC\u504F\u79FB\u91CF
function parseUtcOffset(utcDescription) {
  const match = /^UTC([+-])(\\d{2}):(\\d{2})$/.exec(utcDescription)
  if (!match) {
    return null
  }
  const sign = match[1] === '+' ? 1 : -1
  const hours = parseInt(match[2], 10)
  const minutes = parseInt(match[3], 10)
  return sign * (hours * 60 + minutes)
}

export default parseUtcOffset
`},43213:function(e,n){n.Z=`// \u65F6\u533A\u5B57\u7B26\u4E32\u5316
function stringifyUtcOffset(utcOffset) {
  // \u6B63\u5411\u6216\u53CD\u5411\u504F\u79FB
  const sign = utcOffset >= 0 ? '+' : '-'

  // \u6BEB\u79D2\u6570\u8F6C\u6210\u65F6\u5206
  const totalMinutes = utcOffset
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  // \u683C\u5F0F\u5316\u8F93\u51FA\uFF08\u82E5\u5206\u949F\u4E3A0\u5219\u7701\u7565\uFF09UTC+08:00
  return \`UTC\${sign}\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}\`
}
export default stringifyUtcOffset
`},43968:function(e,n){n.Z=`// \u5C06\u6307\u5B9A\u65F6\u533A\u65F6\u95F4\u8F6C\u4E3A UTC
function timeZoneToUtc(utcDate, offset) {
  // \u68C0\u67E5\u53C2\u6570
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof offset !== 'number') {
    return utcDate
  }

  // \u590D\u5236\u539F date\uFF0C\u907F\u514D\u4FEE\u6539\u539F\u59CB\u5BF9\u8C61
  const result = new Date(utcDate.getTime())

  // \u8C03\u6574\u65F6\u95F4
  result.setMinutes(result.getMinutes() - offset)

  return result
}

export default timeZoneToUtc
`},8010:function(e,n){n.Z=`import dayjs from 'dayjs'
// UTC\u504F\u79FB\u91CF: \u5206\u949F\u6570\u662F\u56FD\u9645\u65F6\u533A\u6807\u51C6
function utcOffset() {
  return dayjs().utcOffset()
}

export default utcOffset
`},76691:function(e,n){n.Z=`// \u5C06 UTC \u8F6C\u4E3A\u6307\u5B9A\u65F6\u533A
function utcToTimeZone(utcDate, offset) {
  // \u68C0\u67E5\u53C2\u6570
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof offset !== 'number') {
    return utcDate
  }

  // \u590D\u5236\u539F date\uFF0C\u907F\u514D\u4FEE\u6539\u539F\u59CB\u5BF9\u8C61
  const result = new Date(utcDate.getTime())

  // \u8C03\u6574\u65F6\u95F4
  result.setMinutes(result.getMinutes() + offset)

  return result
}

export default utcToTimeZone
`},35988:function(e,n){n.Z=`// \u4ECEuserAgent\u4E2D\u83B7\u53D6\u8BED\u8A00
function getLanguage() {
  let language =
    window.lyrixiLocaleLanguage ||
    navigator.userAgent.match(/lyrixiLanguage\\/([\\w.]*)/)?.[1] ||
    'zh_CN'
  return language
}

export default getLanguage
`},51118:function(e,n){n.Z=`import languageMap from './languageMap'
import locale from './locale'
import setLocale from './setLocale'
import getLanguage from './getLanguage'
import loadLocale from './loadLocale'

const LocaleUtil = {
  languageMap: languageMap,
  locale: locale,
  setLocale: setLocale,
  getLanguage: getLanguage,
  loadLocale: loadLocale
}

export default LocaleUtil
`},95601:function(e,n){n.Z=`// United language list
// dayjs: https://github.com/iamkun/dayjs/tree/dev/src/locale
const languageMap = {
  // \u963F\u62C9\u4F2F\u8BED
  ar_EG: { dayjs: 'ar', translate: { google: 'ar', bing: 'ar' } },
  // \u963F\u585E\u62DC\u7586\u8BED
  az_AZ: { dayjs: 'az', translate: { google: 'az', bing: 'az' } },
  // \u4FDD\u52A0\u5229\u4E9A\u8BED
  bg_BG: { dayjs: 'bg', translate: { google: 'bg', bing: 'bg' } },
  // \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09
  bn_BD: { dayjs: 'bn', translate: { google: 'bn', bing: 'bn' } },
  // \u767D\u4FC4\u7F57\u65AF\u8BED
  by_BY: { dayjs: 'by', translate: { google: 'by', bing: 'by' } },
  // \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED
  ca_ES: { dayjs: 'ca', translate: { google: 'ca', bing: 'ca' } },
  // \u6377\u514B\u8BED
  cs_CZ: { dayjs: 'cs', translate: { google: 'cs', bing: 'cs' } },
  // \u4E39\u9EA6\u8BED
  da_DK: { dayjs: 'da', translate: { google: 'da', bing: 'da' } },
  // \u5FB7\u8BED
  de_DE: { dayjs: 'de', translate: { google: 'de', bing: 'de' } },
  // \u5E0C\u814A\u8BED
  el_GR: { dayjs: 'el', translate: { google: 'el', bing: 'el' } },
  // \u82F1\u8BED
  en_GB: { dayjs: 'en-gb', translate: { google: 'en', bing: 'en' } },
  // \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09
  en_US: { dayjs: 'en', translate: { google: 'en', bing: 'en' } },
  // \u897F\u73ED\u7259\u8BED
  es_ES: { dayjs: 'es', translate: { google: 'es', bing: 'es' } },
  // \u5DF4\u65AF\u514B\u8BED
  eu_ES: { dayjs: 'eu', translate: { google: 'eu', bing: 'eu' } },
  // \u7231\u6C99\u5C3C\u4E9A\u8BED
  et_EE: { dayjs: 'et', translate: { google: 'et', bing: 'et' } },
  // \u6CE2\u65AF\u8BED
  fa_IR: { dayjs: 'fa', translate: { google: 'fa', bing: 'fa' } },
  // \u82AC\u5170\u8BED
  fi_FI: { dayjs: 'fi', translate: { google: 'fi', bing: 'fi' } },
  // \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  fr_BE: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09
  fr_CA: { dayjs: 'fr-ca', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09
  fr_FR: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u7231\u5C14\u5170\u8BED
  ga_IE: { dayjs: 'ga', translate: { google: 'ga', bing: 'ga' } },
  // \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09
  gl_ES: { dayjs: 'gl', translate: { google: 'gl', bing: 'gl' } },
  // \u5E0C\u4F2F\u6765\u8BED
  he_IL: { dayjs: 'he', translate: { google: 'he', bing: 'he' } },
  // \u5370\u5730\u8BED
  hi_IN: { dayjs: 'hi', translate: { google: 'hi', bing: 'hi' } },
  // \u514B\u7F57\u5730\u4E9A\u8BED
  hr_HR: { dayjs: 'hr', translate: { google: 'hr', bing: 'hr' } },
  // \u5308\u7259\u5229\u8BED
  hu_HU: { dayjs: 'hu', translate: { google: 'hu', bing: 'hu' } },
  // \u4E9A\u7F8E\u5C3C\u4E9A
  hy_AM: { dayjs: 'hy', translate: { google: 'hy', bing: 'hy' } },
  // \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED
  id_ID: { dayjs: 'id', translate: { google: 'id', bing: 'id' } },
  // \u610F\u5927\u5229\u8BED
  it_IT: { dayjs: 'it', translate: { google: 'it', bing: 'it' } },
  // \u51B0\u5C9B\u8BED
  is_IS: { dayjs: 'is', translate: { google: 'is', bing: 'is' } },
  // \u65E5\u8BED
  ja_JP: { dayjs: 'ja', translate: { google: 'ja', bing: 'ja' } },
  // \u683C\u9C81\u5409\u4E9A\u8BED
  ka_GE: { dayjs: 'ka', translate: { google: 'ka', bing: 'ka' } },
  // \u9AD8\u68C9\u8BED
  km_KH: { dayjs: 'km', translate: { google: 'km', bing: 'km' } },
  // \u5317\u5E93\u5C14\u5FB7\u8BED
  kmr_IQ: { dayjs: 'kmr', translate: { google: 'kmr', bing: 'kmr' } },
  // \u5361\u7EB3\u8FBE\u8BED
  kn_IN: { dayjs: 'kn', translate: { google: 'kn', bing: 'kn' } },
  // \u54C8\u8428\u514B\u8BED
  kk_KZ: { dayjs: 'kk', translate: { google: 'kk', bing: 'kk' } },
  // \u97E9\u8BED/\u671D\u9C9C\u8BED
  ko_KR: { dayjs: 'ko', translate: { google: 'ko', bing: 'ko' } },
  // \u7ACB\u9676\u5B9B\u8BED
  lt_LT: { dayjs: 'lt', translate: { google: 'lt', bing: 'lt' } },
  // \u62C9\u8131\u7EF4\u4E9A\u8BED
  lv_LV: { dayjs: 'lv', translate: { google: 'lv', bing: 'lv' } },
  // \u9A6C\u5176\u987F\u8BED
  mk_MK: { dayjs: 'mk', translate: { google: 'mk', bing: 'mk' } },
  // \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED
  ml_IN: { dayjs: 'ml', translate: { google: 'ml', bing: 'ml' } },
  // \u8499\u53E4\u8BED
  mn_MN: { dayjs: 'mn', translate: { google: 'mn', bing: 'mn' } },
  // \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)
  ms_MY: { dayjs: 'ms', translate: { google: 'ms', bing: 'ms' } },
  // \u7F05\u7538\u8BED
  my_MM: { dayjs: 'my', translate: { google: 'my', bing: 'my' } },
  // \u632A\u5A01\u8BED
  nb_NO: { dayjs: 'nb', translate: { google: 'nb', bing: 'nb' } },
  // \u5C3C\u6CCA\u5C14\u8BED
  ne_NP: { dayjs: 'ne', translate: { google: 'ne', bing: 'ne' } },
  // \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  nl_BE: { dayjs: 'nl-be', translate: { google: 'nl', bing: 'nl' } },
  // \u8377\u5170\u8BED
  nl_NL: { dayjs: 'nl', translate: { google: 'nl', bing: 'nl' } },
  // \u6CE2\u5170\u8BED
  pl_PL: { dayjs: 'pl', translate: { google: 'pl', bing: 'pl' } },
  // \u8461\u8404\u7259\u8BED(\u5DF4\u897F)
  pt_BR: { dayjs: 'pt-br', translate: { google: 'pt', bing: 'pt' } },
  // \u8461\u8404\u7259\u8BED
  pt_PT: { dayjs: 'pt', translate: { google: 'pt', bing: 'pt' } },
  // \u7F57\u9A6C\u5C3C\u4E9A\u8BED
  ro_RO: { dayjs: 'ro', translate: { google: 'ro', bing: 'ro' } },
  // \u4FC4\u7F57\u65AF\u8BED
  ru_RU: { dayjs: 'ru', translate: { google: 'ru', bing: 'ru' } },
  // \u50E7\u4F3D\u7F57\u8BED
  si_LK: { dayjs: 'si', translate: { google: 'si', bing: 'si' } },
  // \u65AF\u6D1B\u4F10\u514B\u8BED
  sk_SK: { dayjs: 'sk', translate: { google: 'sk', bing: 'sk' } },
  // \u585E\u5C14\u7EF4\u4E9A\u8BED
  sr_RS: { dayjs: 'sr', translate: { google: 'sr', bing: 'sr' } },
  // \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED
  sl_SI: { dayjs: 'sl', translate: { google: 'sl', bing: 'sl' } },
  // \u745E\u5178\u8BED
  sv_SE: { dayjs: 'sv', translate: { google: 'sv', bing: 'sv' } },
  // \u6CF0\u7C73\u5C14\u8BED
  ta_IN: { dayjs: 'ta', translate: { google: 'ta', bing: 'ta' } },
  // \u6CF0\u8BED
  th_TH: { dayjs: 'th', translate: { google: 'th', bing: 'th' } },
  // \u571F\u8033\u5176\u8BED
  tr_TR: { dayjs: 'tr', translate: { google: 'tr', bing: 'tr' } },
  // \u571F\u5E93\u66FC
  tk_TK: { dayjs: 'tk', translate: { google: 'tk', bing: 'tk' } },
  // \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)
  ur_PK: { dayjs: 'ur', translate: { google: 'ur', bing: 'ur' } },
  // \u4E4C\u514B\u5170\u8BED
  uk_UA: { dayjs: 'uk', translate: { google: 'uk', bing: 'uk' } },
  // \u4E4C\u5179\u522B\u514B\u8BED\uFF08\u62C9\u4E01\u5B57\u6BCD\uFF09
  uz_UZ: { dayjs: 'uz', translate: { google: 'uz', bing: 'uz' } },
  // \u8D8A\u5357\u8BED
  vi_VN: { dayjs: 'vi', translate: { google: 'vi', bing: 'vi' } },
  // \u7B80\u4F53\u4E2D\u6587
  zh_CN: { dayjs: 'zh-cn', translate: { google: 'zh-CN', bing: 'zh-CN' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
  zh_HK: { dayjs: 'zh-hk', translate: { google: 'zh-HK', bing: 'zh-HK' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
  zh_TW: { dayjs: 'zh-tw', translate: { google: 'zh-TW', bing: 'zh-TW' } }
}

module.exports = languageMap
`},27340:function(e,n){n.Z=`import getLanguage from './../getLanguage'

// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7D\u56FD\u9645\u5316\u6587\u4EF6, localeFileMap: {zh_CN: 'url', en_US: 'url'}
function loadLocale(localeFileMap) {
  const language = getLanguage()
  let localeFileUrl = localeFileMap[language]
  return AssetUtil.loadJs(localeFileUrl)
}

export default loadLocale
`},84593:function(e,n){n.Z=`import { isValidElement } from 'react'

// Whether has React Node
function hasNode(nodes) {
  if (Array.isArray(nodes) && nodes.length) {
    for (let node of nodes) {
      if (isValidElement(node)) return true
    }
    return false
  }
  return isValidElement(nodes)
}

export default hasNode
`},8624:function(e,n){n.Z=`import React from 'react'
import hasNode from './hasNode'
import splitValue from './splitValue'

// values ['text', 'variable:0'], variables [1000], replace variable to text1000
function valuesToText(values, variables) {
  return values.map((value) => {
    // Replace variable
    if (value.startsWith('variable:')) {
      let variableName = value.replace('variable:', '')
      let newValue = variables?.[variableName]
      if (typeof newValue === 'number' || typeof newValue === 'boolean') {
        newValue = String(newValue)
      }
      return newValue || ''
    }

    // \u5982\u679C\u4E0D\u662Fvariable, \u76F4\u63A5\u8FD4\u56DE
    return value
  })
}

/**
 * \u56FD\u9645\u5316\u51FD\u6570
 * @param {String} remark '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875'
 * @param {String} key resources\u4E2D\u7684key
 * @param {Array} variables {0: <div><div>}
 * @return {Node} \u8FD4\u56DEreactDOM
 */
function locale(remark, key, variables) {
  // Get key's value
  let localeData = window.lyrixiLocaleData || {}
  let value = key && typeof key === 'string' ? localeData[key || ''] : ''
  if (!value && typeof remark === 'string') {
    value = remark
  }

  // If no key's value, return the original remark
  if (!value) {
    return remark
  }

  // Split value('text{0}') to ['text', 'variable:0']
  let values = splitValue(value)

  // No node, return string
  if (!hasNode(variables)) {
    return valuesToText(values, variables).join('')
  }

  // Has node, return node
  return <>{valuesToText(values, variables)}</>
}

export default locale
`},89866:function(e,n){n.Z=`/**
 * Split value by variable: {0}{1}...
 * @param {String} value '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875, \u6BCF\u9875{0}\u4E2A\u5546\u54C1'
 * @return {String} ['\u5171\u6709', 'variable:0', '\u4E2A\u5546\u54C1, \u5171\u67E5\u5230', 'variable:1', '\u9875, \u6BCF\u9875', 'variable:0', '\u4E2A\u5546\u54C1']
 */
function splitValue(value) {
  // \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u6240\u6709\u7684 {\u5B57\u6BCD\u6570\u503C}\uFF0C\u5E76\u5C06\u5176\u66FF\u6362\u4E3A variable:\u5B57\u6BCD\u6570\u503C
  const result = value.split(/{(\\d+)}/).map((part, index) => {
    if (index % 2 === 1) {
      // \u5982\u679C\u662F\u5360\u4F4D\u7B26\u90E8\u5206\uFF0C\u683C\u5F0F\u5316\u4E3A 'variable:\u5B57\u6BCD\u6570\u503C'
      return \`variable:\${part}\`
    }
    // \u5982\u679C\u662F\u666E\u901A\u6587\u672C\u90E8\u5206\uFF0C\u4FDD\u6301\u539F\u6837
    return part
  })
  return result
}

export default splitValue
`},9446:function(e,n){n.Z=`import languageMap from '../languageMap'

// Set locale
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.lyrixiLocaleLanguage = language
    window.lyrixiLocaleData = data
  }
}

export default setLocale
`},63261:function(e,n){n.Z=`// \u662F\u5426\u4E3A\u5408\u6CD5\u6570\u503C
function isNumber(str) {
  if (str === '-') return true

  // 1. \u57FA\u7840\u68C0\u67E5\uFF1A\u7A7A\u503C/\u7A7A\u767D\u5B57\u7B26
  if (typeof str !== 'string' || str.trim() === '') return false

  // 2. \u6B63\u5219\u5339\u914D\u6570\u503C\u683C\u5F0F\uFF08\u542B\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF09
  const numericRegex = /^[-+]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?$/
  if (!numericRegex.test(str)) return false

  // 3. \u8F6C\u6362\u540E\u9A8C\u8BC1\uFF08\u6392\u9664BigInt\u548C\u7279\u6B8A\u503C\uFF09
  const num = Number(str)
  return !isNaN(num) && isFinite(num)
}

// \u63D0\u53D6\u6570\u503C
function extractNumber(str) {
  // \u5339\u914D\u5305\u542B\u5C0F\u6570\u70B9\u7684\u8FDE\u7EED\u6570\u503C
  const match = str.match(/-?\\d+(?:\\.\\d+)?/)
  return match ? match[0] : ''
}

/**
 * \u6570\u5B57\u5343\u5206\u4F4D/\u5C0F\u6570\u4F4D\u8865\u5145\u4E24\u4F4D
 * @param {Number} number
 * @param {Boolean} decimalThousands \u5C0F\u6570\u662F\u5426\u9700\u8981\u5343\u5206\u4F4D
 */
function thousands(number, decimalThousands) {
  // \u5C0F\u6570\u4F4D\u4E5F\u8981\u5343\u5206\u4F4D
  if (decimalThousands) {
    return String(number).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  }
  // \u5C0F\u6570\u4F4D\u4E0D\u8981\u5343\u5206\u4F4D
  let parts = String(number).split('.')
  parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  return parts.join('.')
}

/**
 * \u5C0F\u6570\u56DB\u820D\u4E94\u5165 fixed(1.005, 2) = 1.00
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function fixed(number, precision) {
  let numStr = String(number)
  let decimalIndex = numStr.indexOf('.')
  if (decimalIndex !== -1) {
    // Truncate to specified number of decimal places
    numStr = numStr.substring(0, decimalIndex + precision + 1)
  }
  return numStr
}

/**
 * \u5C0F\u6570\u56DB\u820D\u4E94\u5165 round(1.005, 2) = 1.01
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function round(number, precision) {
  return Math.round(+number + 'e' + precision) / Math.pow(10, precision)
}

/**
 * \u6570\u5B57\u7CBE\u5EA6\u4E22\u5931
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function strip(number, precision = 12) {
  return +parseFloat(number.toPrecision(precision))
}

/**
 * \u53CD\u5343\u5206\u4F4D
 * @param {Number} number
 * @returns
 */
function antiThousands(number) {
  return \`\${number || ''}\`.replace(/,/g, '')
}

/**
 * \u8BA1\u7B97\u60EF\u6027
 * @param {Number} cellSize \u5355\u9879\u9AD8\u5EA6
 * @param {Number} distance \u6EDA\u52A8\u7684\u603B\u8DDD\u79BB, \u8D1F\u6570\u4E3A\u53CD\u5411\u6ED1\u52A8
 * @param {Number} duration \u6EDA\u52A8\u7684\u603B\u65F6\u957F
 * @param {Number} currentPosition \u5F53\u524D\u4F4D\u7F6E
 * @param {Number} minPosition \u6700\u5C0F\u4F4D\u7F6E
 * @param {Number} maxPosition \u6700\u5927\u4F4D\u7F6E
 * @returns
 */
function inertia({ cellSize, distance, duration, currentPosition, minPosition, maxPosition }) {
  // \u6469\u64E6\u529B
  let friction = 0.002

  // \u60EF\u6027\u52A8\u753B\u65F6\u957F: \u6ED1\u52A8\u65F6\u957F \u548C \u6ED1\u52A8\u8DDD\u79BB
  let inertiaDuration = Math.abs((2 * distance) / duration / friction)

  // \u60EF\u6027\u8DDD\u79BB: \u4F7F\u7528\u516C\u5F0F\u7B97\u51FAoffset(\u65B0\u8DDD\u79BB)
  let inertiaRange = (friction / 2) * (inertiaDuration * inertiaDuration)
  if (distance < 0) {
    inertiaRange = -inertiaRange
  }

  // \u60EF\u6027\u4F4D\u7F6E: \u5F53\u524D\u4F4D\u7F6E + \u60EF\u6027\u8DDD\u79BB
  let inertiaPosition = Number(Math.abs(currentPosition)) + Number(inertiaRange || 0)

  // \u77EB\u6B63\u4F4D\u7F6E\u4E0E\u65F6\u957F
  // \u6700\u4E0A\u9762
  if (typeof minPosition === 'number' && inertiaPosition < minPosition) {
    // Math.abs(Math.round(inertiaPosition)) - Math.abs(Math.round(minPosition))
    inertiaDuration = 300
    inertiaPosition = minPosition
  }
  // \u6700\u4E0B\u9762
  else if (typeof maxPosition === 'number' && inertiaPosition > maxPosition) {
    inertiaDuration = 300
    inertiaPosition = maxPosition
  }
  // \u5728\u4E2D\u95F4
  else {
    let remainder = inertiaPosition % cellSize
    if (remainder !== 0) {
      // \u7B97\u51FA\u6BD4\u4F8B
      let divided = Math.round(inertiaPosition / cellSize)
      // \u5BF9\u51C6\u4F4D\u7F6E
      inertiaPosition = cellSize * divided
    }
  }

  // \u8FD4\u56DE\u503C
  return {
    duration: Math.round(inertiaDuration),
    position: Math.round(inertiaPosition),
    index: Math.abs(inertiaPosition / cellSize)
  }
}

// eslint-disable-next-line
const MathUtil = { isNumber, extractNumber, round, fixed, strip, thousands, antiThousands, inertia }

export default MathUtil
`},74698:function(e,n){n.Z=`import MathUtil from './MathUtil.js'

export default MathUtil
`},93149:function(e,n){n.Z=`import isEmpty from './isEmpty'
import randomUUID from './randomUUID'

const ObjectUtil = {
  isEmpty,
  randomUUID
}

export default ObjectUtil
`},9006:function(e,n){n.Z=`import _ from 'lodash'

function isEmpty(value) {
  // \u5904\u7406 Date \u7C7B\u578B\uFF1A\u68C0\u67E5\u662F\u5426\u4E3A\u65E0\u6548\u65E5\u671F
  if (value instanceof Date) {
    return isNaN(value.getTime())
  }
  // \u5176\u4ED6\u7C7B\u578B\u4F7F\u7528 Lodash \u7684\u9ED8\u8BA4\u903B\u8F91
  return _.isEmpty(value)
}

export default isEmpty
`},9763:function(e,n){n.Z=`const randomUUID = () => {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16) // eslint-disable-line
  })
  return uuid
}

export default randomUUID
`}}]);

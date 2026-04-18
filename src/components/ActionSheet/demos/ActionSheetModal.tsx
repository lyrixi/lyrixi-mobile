// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Page, ActionSheet, SafeArea } from 'lyrixi-mobile'

export default () => {
  const list = [
    { id: '1', name: '测试Node' },
    { id: '2', name: '测试1' },
    { id: '3', name: '测试2' },
    { id: '4', name: '测试3' },
    { id: '5', name: '测试4' },
    { id: '6', name: '测试4' },
    { id: '7', name: '测试5' },
    { id: '8', name: '测试6' },
    { id: '9', name: '测试7' },
    { id: '10', name: '测试8' },
    { id: '11', name: '测试9' },
    { id: '12', name: '测试10' },
    { id: '13', name: '测试11' },
    { id: '14', name: '测试12' },
    { id: '15', name: '测试13' },
    { id: '16', name: '测试14' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => { }, [])

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

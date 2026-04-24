import React, { useEffect, useState } from 'react'
import { Picker, Page } from 'lyrixi-mobile'

type Row = { name: string; id: string }

export default () => {
  const [list, setList] = useState<Row[]>([])
  const [value, setValue] = useState<unknown>(null)

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          name: '0507-打印',
          id: '8571532967972181136'
        },
        {
          name: '0507-打印_副本',
          id: '8421508242493921754'
        }
      ])
    }, 3000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Picker.Modal
          open
          value="8571532967972181136"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
        />
      </Page.Main>
    </Page>
  )
}

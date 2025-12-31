import React, { useEffect, useState } from 'react'
import { Picker } from 'lyrixi-mobile'

export default () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState(null)

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

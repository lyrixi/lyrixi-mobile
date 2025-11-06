import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '选项1'
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
            name: '选项1'
          },
          {
            id: '2',
            name: '选项2'
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

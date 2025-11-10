import React from 'react'
import { Tooltip } from 'lyrixi-mobile'

export default () => {
  return (
    <>
      <Tooltip
        onOpen={() => {
          console.log('open:', true)
        }}
        onClose={() => {
          console.log('open:', false)
        }}
        comboChildren={<div style={{ margin: 100 }}>Combo</div>}
      >
        <p>This is Content</p>
      </Tooltip>
    </>
  )
}

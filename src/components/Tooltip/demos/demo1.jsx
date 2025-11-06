import React from 'react'
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
        <div style={{ margin: 100 }}>点击</div>
      </Tooltip>
    </>
  )
}

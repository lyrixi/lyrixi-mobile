import 'lyrixi-mobile/assets/index.less'
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
        modalRender={() => {
          return <div style={{ margin: 100 }}>Modal Content</div>
        }}
      >
        <div style={{ margin: 100 }}>Combo</div>
      </Tooltip>
    </>
  )
}

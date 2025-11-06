import React, { useState } from 'react'
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
          titles={['标题1', '标题2']}
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

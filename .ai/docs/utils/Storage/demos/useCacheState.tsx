import React from 'react'
import { Storage, Page, Button } from 'lyrixi-mobile'

import type { StorageDemoCacheState } from './Storage.demos.types'

export default function UseCacheStateDemo() {
  const [data, setData] = Storage.useCacheState<StorageDemoCacheState>(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Page>
      <Page.Main>
        <h1>Cache State</h1>
        <p>{JSON.stringify(data)}</p>
        <Button
          className="lyrixi-flex lyrixi-primary"
          onClick={() => {
            setData({ name: 'morpheus' })
          }}
        >
          Set Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            setData(null)
          }}
        >
          Remove Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            alert(JSON.stringify(data))
          }}
        >
          Get Cache
        </Button>
      </Page.Main>
    </Page>
  )
}

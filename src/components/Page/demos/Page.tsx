import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Page } from 'lyrixi-mobile'

type Row = { id: number; name: string }

const list: Row[] = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default () => {
  const { Header, Footer, Aside, Main } = Page
  useEffect(() => {
    const root = document.getElementById('root')
    root?.parentElement?.removeChild(root)
  }, [])

  function handleBottomRefresh() {
    console.log('底部加载')
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 5000)
    })
  }

  return createPortal(
    <Page>
      <Header style={{ height: '44px', backgroundColor: '#7dbcea' }}>Header</Header>
      <Page full={false} layout="horizontal">
        <Aside style={{ width: '80px', backgroundColor: '#3ba0e9' }}>Aside</Aside>
        <Main
          safeArea
          style={{ backgroundColor: 'rgba(16, 142, 233, 1)' }}
          onBottomRefresh={handleBottomRefresh}
        >
          {list.map((item, index) => {
            return <div key={index}>{item.name}</div>
          })}
        </Main>
      </Page>
      <Footer safeArea style={{ height: '44px', backgroundColor: '#7dbcea' }}>
        Footer
      </Footer>
    </Page>,
    document.body
  )
}

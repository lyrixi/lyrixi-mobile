import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { SafeArea, Page } from 'lyrixi-mobile'

const list = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default () => {
  const { Header, Footer, Aside, Main } = Page
  useEffect(() => {
    document.getElementById('root').parentElement.removeChild(document.getElementById('root'))
  }, [])

  function handleBottomRefresh() {
    console.log('底部加载')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 5000)
    })
  }

  return createPortal(
    // <div id="root" style={{ height: '300px', position: 'relative' }}>
    <Page>
      <Header style={{ height: '44px', backgroundColor: '#7dbcea' }}>Header</Header>
      {/* <Main style={{ backgroundColor: 'rgba(16, 142, 233, 1)' }}>Main</Main> */}
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
    // </div>
    document.body
  )
}

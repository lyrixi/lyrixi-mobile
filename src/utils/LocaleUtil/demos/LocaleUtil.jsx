import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Page, LocaleUtil, Divider, Card } from 'lyrixi-mobile'

export default () => {
  const [result, setResult] = useState(null)
  useEffect(() => {
    initLocale()
  }, [])

  // 初始化国际化
  async function initLocale() {
    let newResult = await LocaleUtil.loadLocale('en_US')
    if (newResult.status === 'success') {
      console.log('加载成功')
    } else {
      console.log('加载失败')
    }
    setResult(newResult)
  }

  if (result?.status !== 'success') {
    return null
  }
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Node with variables</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('近{0}日', 'noKey_7243810e4577ec95db8f7315c52ebe66', [
              <span key={'0'} style={{ color: 'red' }}>
                7
              </span>
            ])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>String with variables</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('近{0}日', 'noKey_7243810e4577ec95db8f7315c52ebe66', ['7'])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>No key use static value</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('近{0}日', '', ['7'])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Remark Node</Card.Header>
          <Card.Main>
            {LocaleUtil.locale(<div>Node</div>)}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Remark Number</Card.Header>
          <Card.Main>
            {LocaleUtil.locale(7)}
          </Card.Main>
        </Card>


        <Card>
          <Card.Header>Dayjs locale</Card.Header>
          <Card.Main>
            {dayjs().format('YYYY-wo')}
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

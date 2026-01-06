import React from 'react'
import { Page, List, Card } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>InfiniteScroll</Card.Header>
          <Card.Main>
            <List.InfiniteScroll />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

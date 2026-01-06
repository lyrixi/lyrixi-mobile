import React from 'react'
import { Page, List, Card } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>ListItem</Card.Header>
          <Card.Main>
            <List.Item
              _raw={{
                id: '1',
                title: 'Title',
                description: 'Description',
                content: 'Content'
              }}
              avatarUrl="https://api.dicebear.com/7.x/miniavs/svg"
              title="Title"
              description="Description"
              content="Content"
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

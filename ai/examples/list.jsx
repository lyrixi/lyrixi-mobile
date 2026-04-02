import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import ToolBar from 'lyrixi-mobile/components/ToolBar'
import ListPagination from 'lyrixi-mobile/components/ListPagination'

export default function ListExample() {
  return (
    <Page>
      <Page.Header>
        <ToolBar>
          <ToolBar.Search />
          <ToolBar.Filter />
        </ToolBar>
      </Page.Header>
      <Page.Main>
        <ListPagination />
      </Page.Main>
    </Page>
  )
}

import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarSearchDemo() {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Search placeholder="Search" value="" onSearch={() => {}} />
      </Page.Main>
    </Page>
  )
}

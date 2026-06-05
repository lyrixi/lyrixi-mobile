import { Page, ToolBar } from 'lyrixi-mobile'

export default function ToolBarFilterDemo() {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Filter
          modalRender={() => {
            return <div>Modal Content</div>
          }}
          footerRender={({ onClose }) => {
            return <div>Footer Content</div>
          }}
        />
      </Page.Main>
    </Page>
  )
}

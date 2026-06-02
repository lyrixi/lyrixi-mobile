# Attach Example

以下示例位于本目录 `demos/`（由 `src/components/Attach/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Attach } from 'lyrixi-mobile'`

## demos/Attach.tsx

```tsx
import { useEffect, useState, useRef } from 'react'

import { Toast, Page, Divider, Bridge, Button, Attach } from 'lyrixi-mobile'
import type { AttachListItem, AttachRef } from 'lyrixi-mobile'

export default function AttachDemo() {
  const uploadRef = useRef<AttachRef | null>(null)
  const [list, setList] = useState<AttachListItem[]>([
    {
      fileName: '1',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      status: 'error'
    },
    {
      fileName: '2',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
    }
  ])

  const [customList, setCustomList] = useState<AttachListItem[]>([])

  useEffect(() => {
    Bridge.load({ onSuccess: () => console.log('加载桥接') })
  }, [])

  // 异步上传
  async function handleAsyncUpload() {
    const isOK = Attach.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({
        content: typeof isOK === 'string' ? isOK : String(isOK ?? '')
      })
      const el = uploadRef.current
      if (el) {
        const result = await el.uploadList(undefined, { action: 'upload' })
        console.log('上传结果：', result)
      }
      return
    }
  }

  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Default Attach</Divider>
        <Attach
          ref={uploadRef}
          reUpload={false}
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={list}
          maxCount={9}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
          onUpload={(item) => {
            console.log(item)
            return item
          }}
        />
        <Divider>Custom Attach</Divider>
        <Attach
          className="custom-upload"
          reUpload={false}
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={customList}
          maxCount={9}
          onChange={(newList) => {
            console.log('修改:', newList)
            setCustomList(newList)
          }}
          onUpload={(item) => {
            console.log(item)
            return item
          }}
        >
          {Array.isArray(customList) && customList.length ? (
            <Attach.List
              list={customList}
              onPreview={() => {
                console.log('preview')
                return false
              }}
            />
          ) : (
            'Custom Attach Render'
          )}
        </Attach>
      </Page.Main>
      <Page.Footer>
        <Button className="lyrixi-flex" color="primary" onClick={handleAsyncUpload}>
          Sync Attach
        </Button>
      </Page.Footer>
    </Page>
  )
}
```

## demos/AttachList.tsx

```tsx
import { Page, Attach } from 'lyrixi-mobile'

export default function AttachListDemo() {
  return (
    <Page>
      <Page.Main>
        <Attach.List list={[]} onChange={() => {}} />
      </Page.Main>
    </Page>
  )
}
```

## demos/AttachButton.tsx

```tsx
import { Page, Attach } from 'lyrixi-mobile'

export default function AttachButtonDemo() {
  return (
    <Page>
      <Page.Main>
        <Attach.Button
          className="demo-attach-button"
          style={{}}
          uploadingRender={({ uploadingType }) => <span>{uploadingType}</span>}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/AttachUploading.tsx

```tsx
import { Page, Attach } from 'lyrixi-mobile'

export default function AttachUploadingDemo() {
  return (
    <Page>
      <Page.Main>
        <Attach.Uploading
          uploadingType="demo"
          className="demo-attach-uploading"
          uploadingRender={({ uploadingType }) => <span>{uploadingType}</span>}
        />
      </Page.Main>
    </Page>
  )
}
```

# Media Example

以下示例位于本目录 `demos/`（由 `src/components/Media/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Media } from 'lyrixi-mobile'`

## demos/Media.tsx

```tsx
import { useEffect, useState, useRef, type CSSProperties } from 'react'

import { Page, Divider, Bridge, Media, type MediaProps, type MediaRef, type MediaItem } from 'lyrixi-mobile'
import HistoryUtil from './../../../utils/HistoryUtil/HistoryUtil'
// import VConsole from 'vconsole'
// new VConsole()

export default function MediaDemo() {
  const imageUploaderRef = useRef<MediaRef | null>(null)

  const [list, setList] = useState<MediaItem[]>([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=1',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=1',
      fileType: 'image',
      status: 'error'
    },
    {
      id: '2',
      fileThumbnail: 'https://macqj.oss-cn-beijing.aliyuncs.com/2024/12/248300cfc75e100.jpg',
      fileUrl: 'https://macqj.oss-cn-beijing.aliyuncs.com/2024/12/248300cfc75e100.jpg',
      fileType: 'image'
      // status: 'uploading'
    },
    {
      id: '3',
      fileThumbnail: 'https://thumbs.dreamstime.com/z/mobile-phone-wallpaper-serene-forest-path-sunlight-vibrant-greenery-354017056.jpg?ct=jpeg',
      fileUrl: 'https://thumbs.dreamstime.com/z/mobile-phone-wallpaper-serene-forest-path-sunlight-vibrant-greenery-354017056.jpg?ct=jpeg',
      fileType: 'image'
      // status: 'uploading'
    },
    {
      id: '4',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=4',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=4',
      fileType: 'image'
    },
    {
      id: '5',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=5',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4?id=5',
      fileType: 'video',
      status: 'success'
    },
    {
      id: '6',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png?id=6',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4?id=6',
      fileType: 'video',
      status: 'error'
    }
  ])

  useEffect(() => {
    Bridge.load(
      {
        onSuccess: () => {
          console.log('加载桥接')
        }
      } as Record<string, unknown>
    )
  }, [])

  const mediaVarsStyle = {
    '--cell-width': '32px',
    '--cell-height': '32px',
    '--cell-radius': '6px',
    '--count-font-size': '12px',
    '--choose-icon-size': '12px'
  } as unknown as CSSProperties

  return (
    <Page>
      <Page.Main>
        <Divider>Default Media</Divider>
        <Media
          // async
          // reUpload={false}

          // Default
          allowClear
          allowChoose
          uploadPosition="start"
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          maxCount={9}
          onFileChange={(localFile) => {
            console.log('localFile:', localFile)
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
        />

        <Divider>Preview Operate</Divider>
        <Media
          ref={imageUploaderRef}
          allowChoose={list?.length ? false : true}
          ellipsis={{ count: 1 }}
          style={mediaVarsStyle}
          previewAllowChoose={true}
          previewAllowClear={true}
          onPreview={(_item, _index) => {
            HistoryUtil.navigate('imagePreview=1', {
              onBack: () => {
                imageUploaderRef.current?.setPreviewVisible(null)
              }
            })
            return 'browser'
          }}
          // Preview operate: end
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          maxCount={9}
          // onFileChange和onChoose的返回值一致, 都是数组
          onFileChange={((localFile: unknown) => {
            return [
              {
                status: 'choose',
                localFile: localFile,
                fileThumbnail: (localFile as { fileUrl?: string }).fileUrl,
                fileUrl: (localFile as { fileUrl?: string }).fileUrl,
                fileType: (localFile as { fileType?: string }).fileType
              }
            ]
          }) as unknown as MediaProps['onFileChange']}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/MediaList.tsx

```tsx
import { Page, Media } from 'lyrixi-mobile'

export default function MediaListDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.List list={[]} />
      </Page.Main>
    </Page>
  )
}
```

## demos/MediaPreviewModal.tsx

```tsx
import { Page, Media } from 'lyrixi-mobile'

export default function MediaPreviewModalDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.PreviewModal open={false} list={[]} />
      </Page.Main>
    </Page>
  )
}
```

## demos/MediaPreviewMain.tsx

```tsx
import { Page, Media } from 'lyrixi-mobile'

export default function MediaPreviewMainDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.PreviewMain list={[]} open={false} />
      </Page.Main>
    </Page>
  )
}
```

## demos/MediaMark.tsx

```tsx
import { Page, Media } from 'lyrixi-mobile'

export default function MediaMarkDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.Mark />
      </Page.Main>
    </Page>
  )
}
```

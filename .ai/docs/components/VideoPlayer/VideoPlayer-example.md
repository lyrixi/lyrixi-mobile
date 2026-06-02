# VideoPlayer Example

以下示例位于本目录 `demos/`（由 `src/components/VideoPlayer/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { VideoPlayer } from 'lyrixi-mobile'`

## demos/VideoPlayer.tsx

```tsx
import { useRef } from 'react'

import { Page, VideoPlayer, Button, type VideoPlayerRef } from 'lyrixi-mobile'

export default function VideoPlayerDemo() {
  const videoPlayerRef = useRef<VideoPlayerRef | null>(null)
  return (
    <Page>
      <Page.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'}
          src={'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4'}
          autoPlay={false}
          headerRender={() => (
            <div
              className="lyrixi-videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          )}
        />
      </Page.Main>
      <Page.Footer>
        <Button
          onClick={() => {
            videoPlayerRef.current?.play()
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            videoPlayerRef.current?.pause()
          }}
        >
          Pause
        </Button>
      </Page.Footer>
    </Page>
  )
}
```

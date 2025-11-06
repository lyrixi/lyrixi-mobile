import React, { useRef, useEffect } from 'react'
import { Page, VideoPlayer, Button } from 'lyrixi-mobile'

export default () => {
  const videoPlayerRef = useRef(null)
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
            videoPlayerRef.current.play()
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            videoPlayerRef.current.pause()
          }}
        >
          Pause
        </Button>
      </Page.Footer>
    </Page>
  )
}

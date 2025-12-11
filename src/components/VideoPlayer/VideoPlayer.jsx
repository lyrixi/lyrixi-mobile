import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import ReactPlayer from 'react-player'

// 内库使用-start
import LocaleUtil from './../../utils/LocaleUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 视频预览
const VideoPlayer = forwardRef(
  (
    {
      // Value & Display Value
      src,
      autoPlay = false,

      // Style
      style,
      className,

      // Elements
      portal,
      poster = '',
      children,

      // Events
      onError
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const playerRef = useRef(null)

    // Playing status: true: playing, false: paused
    const [playing, setPlaying] = useState(autoPlay)

    // Expose methods via ref
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        pause: () => {
          setPlaying(false)
        },
        play: () => {
          setPlaying(true)
        }
      }
    })

    // Handle player error
    const handleError = (err) => {
      const errorMsg = LocaleUtil.locale('视频加载失败, 请稍后再试', 'lyrixi.video.load.failed')
      onError?.({ status: 'error', message: errorMsg, error: err })
    }

    console.log('src:', src)
    const DOM = (
      <div
        className={DOMUtil.classNames('lyrixi-videoplayer-page', className)}
        style={style}
        ref={rootRef}
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        <ReactPlayer
          ref={playerRef}
          src={src}
          controls={true}
          playing={playing}
          style={{ width: '100%', height: '100%' }}
          onReady={() => {
            if (autoPlay) {
              setPlaying(true)
            }
          }}
          onError={handleError}
        />
        {children}
      </div>
    )

    if (portal) {
      return createPortal(DOM, portal)
    }
    return DOM
  }
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer

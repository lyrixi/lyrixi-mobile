import React, { forwardRef, useRef, useImperativeHandle, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

export interface VideoPlayerProps {
  src?: string
  autoPlay?: boolean
  style?: React.CSSProperties
  className?: string
  portal?: Element
  poster?: string
  children?: React.ReactNode
  /** 顶部区域（如关闭按钮），在内容区上方渲染 */
  headerRender?: () => ReactNode
  onError?: (err: { status: string; message: string; error: unknown }) => void
}

export interface VideoPlayerRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  pause: () => void
  play: () => void
}

// 视频预览
const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
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
      headerRender,

      // Events
      onError
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    // Playing status: true: playing, false: paused
    const [playing, setPlaying] = useState(autoPlay)

    // Expose methods via ref
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current,
        pause: () => {
          setPlaying(false)
        },
        play: () => {
          setPlaying(true)
        }
      }
    })

    const Node = (
      <div
        className={DOMUtil.classNames('lyrixi-videoplayer-page', className)}
        style={style}
        ref={rootRef}
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        {headerRender ? headerRender() : null}
        not support react-player
        {children}
      </div>
    )

    if (portal) {
      return createPortal(Node, portal)
    }
    return Node
  }
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer

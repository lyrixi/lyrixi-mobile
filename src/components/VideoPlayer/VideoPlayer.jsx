import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import loadSdk from './loadSdk'
import updatePlayerId from './updatePlayerId'
import getSkinLayout from './getSkinLayout'

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
      autoPlay = true,

      // Style
      style,
      className,

      // Elements
      portal,
      poster = '',
      headerRender, // 状态栏
      children,

      // Events
      onError
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const instance = useRef(null)

    // Controller bar visible
    const [barVisible, setBarVisible] = useState(false)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        pause: () => {
          if (instance.current) {
            instance.current.pause()
          }
        },
        play: () => {
          if (instance.current) {
            instance.current.play()
          }
        }
      }
    })

    useEffect(() => {
      // Update Player Id
      if (instance.current) return
      debugger
      initInstance()

      return () => {
        if (instance.current) instance.current.dispose()
      }
      // eslint-disable-next-line
    }, [])

    // 实例化
    async function initInstance(playerId) {
      if (!src) {
        console.error(LocaleUtil.locale('请传入视频源', 'lyrixi.no.video.src.error'))
        if (onError)
          onError({ message: LocaleUtil.locale('请传入视频源', 'lyrixi.no.video.src.error') })
        return
      }
      if (!(await loadSdk())) {
        console.error(
          LocaleUtil.locale('加载播放器库出错, 请稍后再试', 'lyrixi.video.sdk.load.failed')
        )
        if (onError)
          onError({
            status: 'error',
            message: LocaleUtil.locale(
              '加载播放器库出错, 请稍后再试',
              'lyrixi.video.sdk.load.failed'
            )
          })
        return
      }
      if (!window.Aliplayer) {
        debugger
        onError({
          status: 'error',
          message: LocaleUtil.locale('加载播放器库出错, 请稍后再试', 'lyrixi.video.sdk.load.failed')
        })
        return
      }
      debugger
      // const width = rootRef.current.clientWidth;
      // const height = rootRef.current.clientHeight;
      // 构建参数
      let data = {
        id: playerId,
        source: src,
        // 样式设置
        width: '100%',
        height: '100%',
        videoWidth: '100%',
        videoHeight: '100%',
        skinLayout: getSkinLayout(isLive),
        // 控件设置
        autoplay: autoPlay,
        controlBarVisibility: 'click',
        showBarTime: 3000,
        // 播放设置
        isLive: isLive,
        preload: true,
        playsinline: navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
          ? true
          : false,
        showBuffer: true,
        defaultDefinition: 'FD',
        useH5Prism: true,
        useFlashPrism: false,
        cover: poster,
        x5_type: 'h5',
        x5_fullscreen: false,
        ...params
      }
      instance.current = new window.Aliplayer(data, function (player) {
        player.on('hideBar', () => {
          setBarVisible(false)
        })
        player.on('showBar', () => {
          setBarVisible(true)
        })

        if (autoPlay) {
          player.play()
        }
      })
    }

    const DOM = (
      <div
        className={DOMUtil.classNames('lyrixi-videoplayer-page', className)}
        style={style}
        ref={rootRef}
      >
        <div
          id="_lyrixi_videoplayer_player_"
          x5-video-player-type="h5"
          className="videoplayer-page-player prism-player"
          webkit-playsinline="true"
          playsInline={true}
          style={{ width: '100%', height: '100%' }}
        ></div>
        {barVisible && headerRender ? headerRender() : null}
        {children}
      </div>
    )
    if (portal) {
      return createPortal(DOM, portal)
    }
    return DOM
  }
)

export default VideoPlayer

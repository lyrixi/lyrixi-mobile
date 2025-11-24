import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import support from './../utils/support'
import WeChat from './WeChat'
import WeCom from './WeCom'
import Lark from './Lark'
import DingTalk from './DingTalk'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Bridge from './../../../utils/Bridge'
import Result from './../../Result'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Bridge, Result } from 'lyrixi-mobile'
测试使用-end */

// 分享, shareTo: {extensions: [{isVisible: ({ shareTo }) => ture|false, render: ({ shareTo }) => Node, }]}
function Main(
  {
    // Value & Display Value
    shareTo,

    // Style
    className,
    style
  },
  ref
) {
  const mainRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current,
      support: (externalShareTo) => {
        return support(externalShareTo || shareTo)
      }
    }
  })

  function getShareNodes() {
    if (Bridge.platform === 'wechat') {
      return <WeChat shareTo={shareTo} />
    }
    if (Bridge.platform === 'wecom') {
      return <WeCom shareTo={shareTo} />
    }
    if (Bridge.platform === 'lark') {
      return <Lark shareTo={shareTo} />
    }
    if (Bridge.platform === 'dingtalk') {
      return <DingTalk shareTo={shareTo} />
    }

    // Custom Extension Items
    if (Array.isArray(shareTo?.extensions) && shareTo?.extensions.length) {
      for (let extension of shareTo.extensions) {
        if (typeof extension?.render === 'function') {
          let ExtensionNode = extension.render({ shareTo })
          if (ExtensionNode) return ExtensionNode
        }
      }
    }

    return null
  }

  let isSupport = support(shareTo)
  return (
    <div
      ref={mainRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-share', className, !isSupport ? 'lyrixi-error' : null)}
    >
      {isSupport ? (
        getShareNodes()
      ) : (
        <Result
          className="lyrixi-share-main-result"
          status="empty"
          title={LocaleUtil.locale('此平台暂不支持分享', 'lyrixi.share.no.support')}
        />
      )}
    </div>
  )
}

export default forwardRef(Main)

import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function Type({ type, onClick }) {
  return (
    <div className="lyrixi-share-item" onClick={onClick}>
      <i className={DOMUtil.classNames('lyrixi-share-item-icon', `lyrixi-bg-${type}-logo`)}></i>
      <p className="lyrixi-share-item-label">
        {type === 'wechat' && LocaleUtil.locale('微信', 'lyrixi.wechat')}
        {type === 'moments' && LocaleUtil.locale('朋友圈', 'lyrixi.weMoment')}
        {type === 'miniprogram' && LocaleUtil.locale('小程序', 'lyrixi.weMiniProgram')}
        {type === 'wecom' && LocaleUtil.locale('企业微信', 'lyrixi.weCom')}
        {type === 'dingtalk' && LocaleUtil.locale('钉钉', 'lyrixi.dingTalk')}
        {type === 'lark' && LocaleUtil.locale('飞书', 'lyrixi.lark')}
      </p>
    </div>
  )
}

export default Type

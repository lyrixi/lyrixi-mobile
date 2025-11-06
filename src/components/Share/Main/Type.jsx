import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function Type({ type, onClick }) {
  return (
    <div className="lyrixi-share-item" onClick={onClick}>
      <i className={`lyrixi-share-item-icon${type}`}></i>
      <p className="share-item-label">
        {type === 'wechat' && LocaleUtil.locale('微信', 'lyrixi_we_chat')}
        {type === 'moments' && LocaleUtil.locale('朋友圈', 'lyrixi_we_moment')}
        {type === 'miniprogram' && LocaleUtil.locale('小程序', 'lyrixi_we_mini_program')}
        {type === 'wecom' && LocaleUtil.locale('企业微信', 'lyrixi_we_com')}
        {type === 'dingtalk' && LocaleUtil.locale('钉钉', 'lyrixi_ding_talk')}
        {type === 'lark' && LocaleUtil.locale('飞书', 'lyrixi_lark')}
      </p>
    </div>
  )
}

export default Type

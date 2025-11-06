import React, { useState } from 'react'
import Type from './../Type'
import Guide from './Guide'

// 内库使用-start
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { Toast } from 'lyrixi-mobile'
测试使用-end */

// 微信只支持分享到微信和朋友圈
function WeChat({ shareTo }) {
  const [open, setOpen] = useState(false)
  if (shareTo?.wechat) {
    let { title, description, url, imageUrl, onSuccess, onError } = shareTo?.wechat || {}
    return (
      <>
        <Type
          type="wechat"
          onClick={() => {
            window.top.wx.updateAppMessageShareData({
              title: title || '',
              desc: description || '',
              link: url || '',
              imgUrl: imageUrl || '',
              onSuccess: function (res) {
                setOpen(true)
                onSuccess && onSuccess()
              },
              onError: function (err) {
                console.log('WeChat Share onError:', err)
                Toast.show({
                  content: err?.errMsg || '分享失败'
                })
                onError &&
                  onError({
                    message: err?.errMsg || '分享失败'
                  })
              }
            })
          }}
        />
        <Guide open={open} onClose={() => setOpen(false)} />
      </>
    )
  }
  return null
}

export default WeChat

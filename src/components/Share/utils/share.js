// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 分享至
function share(params) {
  let { title, description, url, imageUrl, onSuccess, onError } = params || {}

  if (Bridge.platform === 'lark') {
    window.top.tt.share({
      channelType: ['wx', 'wx_timeline', 'system'],
      contentType: 'url',
      title: title,
      content: description,
      url: url,
      image: imageUrl,
      success() {
        onSuccess && onSuccess()
      },
      fail(err) {
        console.log('Lark Share onError:', err)

        onError &&
          onError({
            message: err?.message || LocaleUtil.locale('分享失败', 'lyrixi_share_failed')
          })
      }
    })
  } else if (Bridge.platform === 'dingtalk') {
    window.top.dd.biz.util.share({
      type: 0, // 分享类型，0:全部组件 默认；1:只能分享到钉钉；2:不能分享，只有刷新按钮
      url: url,
      title: title,
      content: description,
      image: imageUrl,
      onSuccess: function () {
        onSuccess && onSuccess()
      },
      onFail: function (err) {
        console.log('DingTalk Share onError:', err)
        onError &&
          onError({
            message: err?.errMsg || LocaleUtil.locale('分享失败', 'lyrixi_share_failed')
          })
      }
    })
  }
}

export default share

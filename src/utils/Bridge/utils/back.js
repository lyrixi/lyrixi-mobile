// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Device from './../../Device'
import Message from './../../../components/Message'
// 内库使用-end

/* 测试使用-start
import { Device, Message, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 客户端默认返回控制
async function back(delta = -1, { closeWindow, goHome }) {
  // 返回操作对象与返回层级
  let isFromApp = Device.getUrlParameter('isFromApp') || ''

  if (isFromApp === '1') {
    closeWindow()
    return true
  }
  // 返回首页
  else if (isFromApp === 'home') {
    goHome()
    return true
  }
  // 提示后，关闭返回，或者历史返回
  else if (isFromApp.indexOf('confirm-close') !== -1 || isFromApp.indexOf('confirm') !== -1) {
    // 默认提示信息
    let confirmContent = LocaleUtil.locale('您确定要离开此页面吗?', 'lyrixi.quit.page.confirm')
    // 地址栏动态提示信息
    if (isFromApp.indexOf('confirm-close:') !== -1) {
      let newConfirmContent = isFromApp.replace('confirm-close:', '')
      if (newConfirmContent) {
        confirmContent = decodeURIComponent(decodeURIComponent(newConfirmContent))
      }
    } else if (isFromApp.indexOf('confirm:') !== -1) {
      let newConfirmContent = isFromApp.replace('confirm:', '')
      if (newConfirmContent) {
        confirmContent = decodeURIComponent(decodeURIComponent(newConfirmContent))
      }
    }

    Message.open({
      content: confirmContent,
      buttons: [
        {
          name: LocaleUtil.locale('取消', 'lyrixi.cancel'),
          onClick: () => {
            return true
          }
        },
        {
          name: LocaleUtil.locale('确定', 'lyrixi.confirm'),
          className: 'lyrixi-primary',
          onClick: () => {
            // 提示后关闭当前页面
            if (isFromApp.indexOf('confirm-close') !== -1) {
              console.log('back:confirm-close')
              closeWindow()
            }
            // 提示后返回上一页
            else {
              console.log('confirm')
              window.history.go(delta)
            }
            return true
          }
        }
      ]
    })
  }
  // 返回上一页
  else {
    window.history.go(delta)
  }
}

export default back

import Clipboard from './Clipboard'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
import Toast from './../../components/Toast'
import Message from './../../components/Message'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast, Message } from 'lyrixi-mobile'
测试使用-end */

function copyText(url, { successMessage, errorMessage } = {}) {
  Clipboard.copy(url, {
    onSuccess: () => {
      Toast.show({
        content:
          successMessage || LocaleUtil.locale('链接已复制到剪贴板', 'lyrixi.link.copy.success')
      })
    },
    onError: () => {
      Message.open({
        maskStyle: {
          zIndex: 100
        },
        title: LocaleUtil.locale('提示', 'lyrixi.alert.title'),
        content:
          (errorMessage ||
            LocaleUtil.locale('链接复制到剪贴板失败, 请长按复制', 'lyrixi.link.copy.error')) +
          `<br/>${url}`,
        buttons: [
          {
            name: '确定',
            className: 'lyrixi-primary',
            onClick: () => true
          }
        ]
      })
    }
  })
}

export default copyText

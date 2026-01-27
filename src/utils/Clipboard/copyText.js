import Clipboard from './Clipboard'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
import Toast from './../../components/Toast'
import Message from './../../components/Message'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast, Message } from 'lyrixi-mobile'
测试使用-end */

// 复制连接
function copyText(url, { onSuccess, onError } = {}) {
  Clipboard.copy(url, {
    onSuccess: () => {
      onSuccess
        ? onSuccess()
        : Toast.show({
            content: LocaleUtil.locale(
              '链接已复制到剪贴板',
              'noKey_deb26c26fbaafab1dfa6c902a0ffad75'
            )
          })
    },
    onError: () => {
      onError
        ? onError()
        : Message.open({
            maskStyle: {
              zIndex: 100
            },
            title: LocaleUtil.locale('提示', 'noKey_02d9819ddaaaeb1b7b22b12608c7e5ca'),
            content: `${LocaleUtil.locale(
              '链接复制到剪贴板失败, 请长按复制',
              'noKey_8c1958b63a87bd3e1fa1e550c058ffe1'
            )}
          <br/>${url}`,
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

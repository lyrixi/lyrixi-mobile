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
function copyText(
  url: string,
  opts?: { onSuccess?: () => void; onError?: () => void }
) {
  const { onSuccess, onError } = opts || {}
  Clipboard.copy(url, {
    onSuccess: () => {
      if (onSuccess) {
        onSuccess()
      } else {
        Toast.show({
          content: LocaleUtil.locale(
            '链接已复制到剪贴板',
            'lyrixi_deb26c26fbaafab1dfa6c902a0ffad75',
            undefined
          ) as string
        })
      }
    },
    onError: () => {
      if (onError) {
        onError()
      } else {
        Message.open({
          maskStyle: {
            zIndex: 100
          },
          title: LocaleUtil.locale('提示', 'lyrixi_02d9819ddaaaeb1b7b22b12608c7e5ca', undefined),
          content: `${LocaleUtil.locale(
            '链接复制到剪贴板失败, 请长按复制',
            'lyrixi_8c1958b63a87bd3e1fa1e550c058ffe1',
            undefined
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
    }
  })
}

export default copyText

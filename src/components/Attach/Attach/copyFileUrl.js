// 内库使用-start
import Clipboard from './../../../utils/Clipboard'
import LocaleUtil from './../../../utils/LocaleUtil'
import Message from './../../Message'
import Toast from './../../Toast'
// 内库使用-end

/* 测试使用-start
import { Clipboard, LocaleUtil, Message, Toast } from 'lyrixi-mobile'
测试使用-end */

function copyFileUrl(fileUrl) {
  Clipboard.copy(fileUrl, {
    onSuccess: () => {
      Toast.show({
        content: LocaleUtil.locale(
          '文件链接已复制到剪贴板，请粘贴到系统浏览器上下载',
          'lyrixi.clipboard.success'
        )
      })
    },
    onError: () => {
      Message.open({
        content: LocaleUtil.locale(
          `文件链接复制到剪贴板失败, 请长按复制<br/>${fileUrl}`,
          'lyrixi.clipboard.fail.confirm',
          [fileUrl]
        ),
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

export default copyFileUrl

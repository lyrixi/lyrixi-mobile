import React, { forwardRef } from 'react'
import InputText from './../Text'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Toast from './../../Toast'
// 使用Message代替Modal
import Message from './../../Message'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, Toast, Message } from 'lyrixi-mobile'
测试使用-end */

const Url = forwardRef(
  (
    {
      readOnly,
      disabled,
      onClick,
      onPreview, // 是否支持单击预览, readOnly为true时才生效
      type,
      ...props
    },
    ref
  ) => {
    function copyLink(url) {
      Clipboard.copy(url, {
        onSuccess: () => {
          Toast.show({
            content: LocaleUtil.locale('链接已复制到剪贴板', 'lyrixi_link_copy_success')
          })
        },
        onError: () => {
          Message.open({
            maskStyle: {
              zIndex: 100
            },
            title: LocaleUtil.locale('提示', 'lyrixi_alert_title'),
            content:
              LocaleUtil.locale('链接复制到剪贴板失败, 请长按复制', 'lyrixi_link_copy_error') +
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

    const handleClick = async (e) => {
      // 只读才可以复制连接
      if (!readOnly && !disabled) return

      // 网址不再需要协议前缀 有前缀则保留，无前缀则手动拼接http协议作为前缀
      let value = e.target.value
      let url = /^(https|http)?:\/\//.test(value) ? value : `http://${value}`

      // 自定义预览
      if (typeof onPreview === 'function') {
        let goOn = await onPreview(value)
        if (goOn === false) return
      }

      copyLink(url)
    }

    return <InputText ref={ref} {...props} onClick={handleClick} type="url" />
  }
)

export default Url

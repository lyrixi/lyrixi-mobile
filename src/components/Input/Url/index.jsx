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
      id,
      name,

      // Value & Display Value
      value = '',
      placeholder,
      formatter,

      // Status
      readOnly,
      disabled,
      allowClear,
      autoFocus,
      autoSelect,

      // Style
      style,
      className,

      // Element
      inputRender,
      leftIconNode,
      rightIconNode,
      clearRender,

      // Validate
      precision, // 小数精度, 只有数值框才生效
      trim, // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
      max,
      min,
      maxLength,

      // input属性
      inputMode,
      enterKeyHint,
      autoComplete,
      autoCorrect,
      spellCheck,

      // Events
      onClick,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onPressEnter,
      // 是否支持单击预览, readOnly为true时才生效
      onPreview
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
            titleNode: LocaleUtil.locale('提示', 'lyrixi_alert_title'),
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

    return (
      <InputText
        ref={ref}
        id={id}
        name={name}
        type="url"
        // Value & Display Value
        value={value}
        placeholder={placeholder}
        formatter={formatter}
        // Status
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        autoFocus={autoFocus}
        autoSelect={autoSelect}
        // Style
        style={style}
        className={className}
        // Element
        inputRender={inputRender}
        leftIconNode={leftIconNode}
        rightIconNode={rightIconNode}
        clearRender={clearRender}
        // Validate
        precision={precision}
        trim={trim}
        max={max}
        min={min}
        maxLength={maxLength}
        // input属性
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        // Events
        onClick={handleClick}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onPressEnter={onPressEnter}
      />
    )
  }
)

export default Url

import React from 'react'

/* 内库使用-start
import LocaleUtil from './../../../LocaleUtil'
import Button from './../../../Button'
内库使用-end */

// 测试使用-start
import { LocaleUtil, Button } from 'seedsui-react'
// 测试使用-end

// 暂无数据或者错误
const RetryButton = ({ status, errorRetry, emptyRetry, onClick }) => {
  if (status === 'error') {
    if (!errorRetry) {
      return null
    }
    return (
      <Button className="result-button" color="primary" onClick={onClick}>
        {LocaleUtil.locale('重试', 'SeedsUI_retry')}
      </Button>
    )
  }
  if (status === 'empty') {
    if (!emptyRetry) {
      return null
    }
    return (
      <Button className="result-button" color="primary" onClick={onClick}>
        {LocaleUtil.locale('刷新', 'SeedsUI_refresh')}
      </Button>
    )
  }
  return null
}

export default RetryButton

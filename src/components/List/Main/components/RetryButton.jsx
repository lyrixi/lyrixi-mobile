import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Button from './../../../Button'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Button } from 'lyrixi-mobile'
测试使用-end */

// 暂无数据或者错误
const RetryButton = ({ status, errorRetry, emptyRetry, onClick }) => {
  if (status === 'error') {
    if (!errorRetry) {
      return null
    }
    return (
      <Button
        className="lyrixi-result-button"
        color="white"
        backgroundColor="primary"
        onClick={onClick}
      >
        {LocaleUtil.locale('重试', 'lyrixi.retry')}
      </Button>
    )
  }
  if (status === 'empty') {
    if (!emptyRetry) {
      return null
    }
    return (
      <Button
        className="lyrixi-result-button"
        color="white"
        backgroundColor="primary"
        onClick={onClick}
      >
        {LocaleUtil.locale('刷新', 'lyrixi.refresh')}
      </Button>
    )
  }
  return null
}

export default RetryButton

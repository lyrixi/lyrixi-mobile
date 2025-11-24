import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function getStatusDefault(status) {
  if (status === 'empty') {
    return {
      title: LocaleUtil.locale('暂无数据', 'lyrixi.no.data'),
      image: <div className="lyrixi-result-image lyrixi-result-image-empty"></div>
    }
  }
  if (status === '500') {
    return {
      title: LocaleUtil.locale('获取数据失败，请稍后再试！', 'lyrixi.query.data.error'),
      image: <div className="lyrixi-result-image lyrixi-result-image-500"></div>
    }
  }
  return null
}

export default getStatusDefault

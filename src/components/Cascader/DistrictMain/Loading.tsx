import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Page from './../../Page'
import Skeleton from './../../Skeleton'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, Skeleton } from 'lyrixi-mobile'
测试使用-end */

const DistrictMainResult = ({ result, onReload, style, className }) => {
  return (
    <Page full={false} className="lyrixi-cascader-page">
      <div style={style} className={DOMUtil.classNames('lyrixi-cascader-main', className)}>
        <Skeleton.List animated={false} />
      </div>
    </Page>
  )
}

export default DistrictMainResult

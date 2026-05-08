import React from 'react'


import type { CascaderDistrictMainLoadingProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Page from './../../Page'
import Skeleton from './../../Skeleton'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, Skeleton } from 'lyrixi-mobile'
测试使用-end */

const DistrictMainLoading = ({ result: _result, onReload: _onReload, style, className }: CascaderDistrictMainLoadingProps) => {
  return (
    <Page full={false} className="lyrixi-cascader-page">
      <div style={style} className={DOMUtil.classNames('lyrixi-cascader-main', className)}>
        <Skeleton.List animated={false} />
      </div>
    </Page>
  )
}

export default DistrictMainLoading

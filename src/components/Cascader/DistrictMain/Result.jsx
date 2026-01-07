import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Button from './../../Button'
import Result from './../../Result'
import Page from './../../Page'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Button, Result, Page } from 'lyrixi-mobile'
测试使用-end */

const DistrictMainResult = ({ result, onReload, style, className }) => {
  return (
    <Page full={false} className="lyrixi-cascader-page">
      <div
        style={style}
        className={DOMUtil.classNames('lyrixi-cascader-main', className)}
        ref={ref}
      >
        <Result title={result?.message} status={result?.status} full>
          {result?.status === 'error' ? (
            <Button className="lyrixi-result-button" color="primary" onClick={onReload}>
              {LocaleUtil.locale('重新加载', 'lyrixi.reload')}
            </Button>
          ) : null}
        </Result>
      </div>
    </Page>
  )
}

export default DistrictMainResult

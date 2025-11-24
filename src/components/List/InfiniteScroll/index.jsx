import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Loading from './../../Loading'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading } from 'lyrixi-mobile'
测试使用-end */

// status: loading | noMore | [error|自定义错误信息]
const InfiniteScroll = ({
  // Status
  status,

  // Elements
  content
}) => {
  function getStatusNode() {
    if (!status || typeof status !== 'string') return null

    if (status === 'loading') {
      return (
        <div className="lyrixi-list-infinitescroll-wrapper">
          <div className="lyrixi-list-infinitescroll-text">
            {content || LocaleUtil.locale('加载中', 'lyrixi.refreshing')}
          </div>
          <div className="lyrixi-list-infinitescroll-icon">
            <Loading.BallWave />
          </div>
        </div>
      )
    }
    if (status === 'noMore') {
      return (
        <div className="lyrixi-list-infinitescroll-wrapper">
          <div className="lyrixi-list-infinitescroll-text">
            {content || LocaleUtil.locale('没有更多了', 'lyrixi.no.more.data')}
          </div>
        </div>
      )
    }

    return (
      <div className="lyrixi-list-infinitescroll-wrapper">
        <div className="lyrixi-list-infinitescroll-text">
          {content || LocaleUtil.locale('获取数据失败，请稍后再试！', 'lyrixi.query.data.error')}
        </div>
      </div>
    )
  }

  return <div className="lyrixi-list-infinitescroll">{getStatusNode()}</div>
}

export default InfiniteScroll

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
            {content || LocaleUtil.locale('加载中', 'noKey_f013ea9dcba3f5ca1278aa850931fec8')}
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
            {content || LocaleUtil.locale('没有更多了', 'noKey_1fe9009c96c23be837d9d52feda9c23e')}
          </div>
        </div>
      )
    }

    return (
      <div className="lyrixi-list-infinitescroll-wrapper">
        <div className="lyrixi-list-infinitescroll-text">
          {content ||
            LocaleUtil.locale(
              '获取数据失败，请稍后再试！',
              'noKey_f4ae45effbbfb4b71e6690bd1ce12904'
            )}
        </div>
      </div>
    )
  }

  return <div className="lyrixi-list-infinitescroll">{getStatusNode()}</div>
}

export default InfiniteScroll

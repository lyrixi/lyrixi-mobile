import React from 'react'
import MoreWrapper from './../MoreWrapper'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 图文组合
export default function FooterBarTab({
  disabled,
  name,
  iconRender,
  moreList,
  onClick,
  className,
  style
}) {
  const hasMore = Array.isArray(moreList) && moreList.length

  // 获取图标节点
  function getIconNode() {
    if (typeof iconRender === 'function') {
      return iconRender()
    }

    // 默认图标
    if (hasMore) {
      return <i className="lyrixi-footerbar-tab-icon-more"></i>
    }

    return null
  }
  const IconNode = getIconNode()

  const tab = (
    <div
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-tab',
        className,
        disabled ? 'lyrixi-disabled' : ''
      )}
    >
      <span className={`lyrixi-footerbar-tab-icon`}>{IconNode}</span>
      <div className="lyrixi-footerbar-tab-name">{name}</div>
    </div>
  )

  if (moreList) {
    return (
      <MoreWrapper moreList={moreList} onClick={onClick}>
        {tab}
      </MoreWrapper>
    )
  }

  return React.cloneElement(tab, { onClick })
}

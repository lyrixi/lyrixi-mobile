import React, { forwardRef } from 'react'
// 第三方库导入
import { ListAsync } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import mainLoadingRender from './mainLoadingRender'

// 普通列表
const Main = (
  {
    // 虚拟滚动条(不常用)
    virtual,
    // 加载完成事件(不常用)
    onLoad,
    // 必传参数
    loadData
  },
  ref
) => {
  return (
    <ListAsync
      ref={ref}
      className="lyrixi-list-pageName"
      virtual={virtual}
      loadingRender={mainLoadingRender}
      loadData={loadData}
      onLoad={onLoad}
    />
  )
}

export default forwardRef(Main)

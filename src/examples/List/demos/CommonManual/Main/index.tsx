import React, { forwardRef, type Ref } from 'react'
// 第三方库导入
import { ListAsync } from 'lyrixi-mobile'
import type { ListAsyncRef } from '../../../../../components/ListAsync'

// 公共组件导入

// 内部组件导入
import mainLoadingRender from './mainLoadingRender'
import type { MainProps } from './types'

// 普通列表
const Main = (
  { virtual, onLoad, onChange, loadData }: MainProps,
  ref: Ref<ListAsyncRef>
) => {
  return (
    <ListAsync
      ref={ref}
      className="lyrixi-list-pageName"
      virtual={virtual}
      loadingRender={mainLoadingRender}
      loadData={loadData}
      onLoad={onLoad}
      onChange={onChange}
    />
  )
}

export default forwardRef<ListAsyncRef, MainProps>(Main)

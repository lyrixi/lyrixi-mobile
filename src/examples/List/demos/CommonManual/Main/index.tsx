import React, { forwardRef, type Ref } from 'react'
// 第三方库导入
import { ListAsync } from 'lyrixi-mobile'
import type { ListAsyncRef, LoadResult } from '../../../../../components/ListAsync'
import type { VirtualOptions } from '../../../../../components/ListAsync/VirtualList'

// 公共组件导入

// 内部组件导入
import mainLoadingRender from './mainLoadingRender'

type MainProps = {
  virtual?: VirtualOptions
  onLoad?: (ctx: { result: LoadResult | null; action: string }) => void
  onChange?: (value: unknown) => void
  loadData: (ctx: { previousResult: LoadResult | null; action: string }) => Promise<LoadResult>
}

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

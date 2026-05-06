import type { CSSProperties, ReactNode } from 'react'

import type { ListProps } from './../../List/List/types'
import type { PageMainProps, PageMainRef } from './../../Page/Main/types'

export type MainRef = PageMainRef

export interface MainProps extends ListProps {
  virtual?: boolean
  className?: string
  style?: CSSProperties
  prependRender?: (options: {
    list?: ListProps['list']
    value?: ListProps['value']
    onChange?: ListProps['onChange']
  }) => ReactNode
  appendRender?: (options: {
    list?: ListProps['list']
    value?: ListProps['value']
    onChange?: ListProps['onChange']
  }) => ReactNode
  children?: ReactNode
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
  safeArea?: boolean
}

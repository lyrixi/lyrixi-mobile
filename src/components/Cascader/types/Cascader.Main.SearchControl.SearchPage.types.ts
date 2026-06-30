import type { ReactNode } from 'react'

import type { CascaderItem } from './Cascader.common.types'
import type { ToolBarSearchActiveProps } from '../../ToolBar/types'

export type CascaderMainSearchPagePathNode = CascaderItem & { path?: CascaderItem[] }

export interface CascaderMainSearchPageResultItem {
  path: CascaderItem[]
  name?: ReactNode
  id?: string | number
  [key: string]: unknown
}

export interface CascaderMainSearchPageSearchResult {
  status: string
  message?: ReactNode
  list: CascaderMainSearchPageResultItem[]
}

export interface CascaderMainSearchPageProps {
  list: CascaderItem[]
  onSearch?: (
    keyword: string,
    options: { list: CascaderItem[] }
  ) =>
    | void
    | CascaderMainSearchPageSearchResult
    | Promise<CascaderMainSearchPageSearchResult | void>
  onChange?: (v: CascaderItem[]) => void
  onClose?: () => void
}

/** 与 ToolBar.SearchActive 的 props 一致 */
export interface CascaderMainSearchPageSearchActiveBarProps extends ToolBarSearchActiveProps {}

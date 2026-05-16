import type { ReactNode } from 'react'

import type { CascaderNode } from './Cascader.common.types'
import type { ToolBarSearchActiveProps } from './../ToolBar/types'

export type CascaderMainSearchPagePathNode = CascaderNode & { path?: CascaderNode[] }

export interface CascaderMainSearchPageResultItem {
  path: CascaderNode[]
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
  list: CascaderNode[]
  onSearch?: (
    keyword: string,
    ctx: { list: CascaderNode[] }
  ) =>
    | void
    | CascaderMainSearchPageSearchResult
    | Promise<CascaderMainSearchPageSearchResult | void>
  onChange?: (v: CascaderNode[]) => void
  onClose?: () => void
}

/** 与 ToolBar.SearchActive 的 props 一致 */
export type CascaderMainSearchPageSearchActiveBarProps = ToolBarSearchActiveProps

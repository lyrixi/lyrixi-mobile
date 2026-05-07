import type { QueryParamsState } from '../types'

export type SearchBarProps = {
  queryParams: QueryParamsState
  onQuery: (params: Record<string, unknown>) => void
}

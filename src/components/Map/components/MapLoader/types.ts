import type { ReactNode } from 'react'

export interface LoadResult {
  status: 'success' | 'error'
  message?: string | ReactNode
  data?: unknown
  [key: string]: unknown
}

export interface MapLoaderProps {
  config?: {
    key?: string
    type?: string
    leaflet?: { css?: string; js?: string }
    [key: string]: unknown
  }
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: ((...args: unknown[]) => unknown) | null
  loadingRender?: (() => ReactNode) | null
  loadingNode?: ReactNode
  children?: ReactNode
  onError?:
    | ((
        result: LoadResult & { reload?: () => void }
      ) => Promise<LoadResult | undefined> | LoadResult | undefined | void)
    | null
  onSuccess?: ((result: { status: string; map: { reload: () => void } }) => void) | null
}

export interface MapLoaderRef {
  reload: () => void
}

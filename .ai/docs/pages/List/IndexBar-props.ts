/**
 * list-indexbar — IndexBar 字母索引列表
 * 模板：List/demos/IndexBar/
 */
import type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'
import type { ListCommonPageProps } from './Common-props'

export interface ListIndexBarPageProps extends Pick<ListCommonPageProps, 'output' | 'design' | 'api' | 'header' | 'main'> {
  templateId: 'list-indexbar'
  cacheName?: string
  /** → Main/onLoad 中 list[].anchor 字段名 */
  anchorField?: string
  /** → IndexBar anchors 生成逻辑说明 */
  indexBar?: {
    getScrollerElementNotes?: string
  }
}

export type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec }

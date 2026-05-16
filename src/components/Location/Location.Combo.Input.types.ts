import type { ComponentType } from 'react'

/** Combo 内使用的 Input 默认导出（含 Text 子组件） */
export type LocationComboInputWithText = typeof import('./../Input').default & {
  Text: ComponentType<Record<string, unknown>>
}

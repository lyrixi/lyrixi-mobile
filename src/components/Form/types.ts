/**
 * Form 类型聚合：分片为 Form.*.types.ts（见 ai/rules/lyrixi-develop-type-file.mdc）
 */
export type { EllipsisConfig, ItemsContextType, VirtualContext } from './Form.ItemsContext.types'

export type { FormComponentProps } from './Form.Form.types'
export type { FormItemProps } from './Form.Item.types'

export type { FormItemRef, FormLayoutItemProps, VirtualFormItemRef, VirtualFormItemProps } from './Form.components.Item.types'

export type * from './Form.components.Items.Form.types'
export type * from './Form.components.Items.types'
export type * from './Form.components.ItemLabel.types'
export type * from './Form.components.ItemMain.types'
export type * from './Form.useForm.types'

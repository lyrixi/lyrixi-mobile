import type { CascaderItem } from './Cascader.common.types'
import type { CascaderDistrictModalProps } from './Cascader.DistrictModal.types'
import type { InputSelectProps, InputSelectRef } from '../../Input/types'

export type CascaderDistrictComboRef = InputSelectRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type CascaderDistrictComboProps = Omit<InputSelectProps, 'min' | 'max' | 'value' | 'onChange'> &
  Pick<
    CascaderDistrictModalProps,
    | 'loadCountries'
    | 'loadCountryRegions'
    | 'loadStreets'
    | 'maskClosable'
    | 'listStyle'
    | 'listClassName'
    | 'itemStyle'
    | 'itemClassName'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'title'
    | 'okNode'
    | 'cancelNode'
    | 'cancelVisible'
    | 'searchVisible'
  > & {
    value?: CascaderItem[] | null
    onChange?: (value: CascaderItem[]) => void
    type?: string
    min?: string
    onBeforeOpen?: () => boolean | Promise<boolean>
  }

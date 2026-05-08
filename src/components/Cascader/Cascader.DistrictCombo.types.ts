import type { CascaderDistrictModalProps } from './Cascader.DistrictModal.types'
import type { InputSelectComboProps, InputSelectComboRef } from '../Input/types'

export type CascaderDistrictComboRef = InputSelectComboRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type CascaderDistrictComboProps = InputSelectComboProps &
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
    type?: string
    min?: string
    onBeforeOpen?: () => boolean | Promise<boolean>
  }

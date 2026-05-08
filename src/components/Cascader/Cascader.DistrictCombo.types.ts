import type { DistrictModalProps } from './Cascader.DistrictModal.types'
import type { InputSelectComboProps, InputSelectComboRef } from '../Input/types'

export type DistrictComboRef = InputSelectComboRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type DistrictComboProps = InputSelectComboProps &
  Pick<
    DistrictModalProps,
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

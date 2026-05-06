import type { DistrictModalProps } from './../DistrictModal/types'
import type { ComboProps, ComboRef } from './../../Input/Select/types'

export type DistrictComboRef = ComboRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type DistrictComboProps = ComboProps &
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

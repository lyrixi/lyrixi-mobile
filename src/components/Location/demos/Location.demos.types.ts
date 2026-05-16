import type { ComponentProps } from 'react'
import { Location } from 'lyrixi-mobile'

export type LocationDemoMainValue = ComponentProps<typeof Location.Main>['value']

export type LocationDemoComboValue = Exclude<ComponentProps<typeof Location.Combo>['value'], undefined>

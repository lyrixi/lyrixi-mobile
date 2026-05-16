import type { Context, ForwardRefExoticComponent, RefAttributes } from 'react'

import type { FlexCompactContextValue, FlexCompactProps, FlexCompactRef } from './Flex.Compact.types'

export type FlexCompactComponents = ForwardRefExoticComponent<
  FlexCompactProps & RefAttributes<FlexCompactRef>
> & {
  Context: Context<FlexCompactContextValue | null>
  useContext: () => FlexCompactContextValue | null
}

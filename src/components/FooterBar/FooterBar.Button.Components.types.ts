import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import type { FooterBarButtonProps, FooterBarButtonRef } from './types'

export type FooterBarButtonComponents = ForwardRefExoticComponent<
  FooterBarButtonProps & RefAttributes<FooterBarButtonRef>
> & { componentName: string }

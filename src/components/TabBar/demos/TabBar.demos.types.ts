import type { ComponentProps } from 'react'
import { TabBar } from 'lyrixi-mobile'

export type TabBarDemoTabsItemArg = Parameters<
  NonNullable<ComponentProps<typeof TabBar.Tabs>['onChange']>
>[0]

export type TabBarDemoMenusItemArg = Parameters<
  NonNullable<ComponentProps<typeof TabBar.Menus>['onChange']>
>[0]

export type TabBarDemoSlideItemArg = Parameters<
  NonNullable<ComponentProps<typeof TabBar.Slide>['onChange']>
>[0]

export type TabBarDemoGroupItemArg = Parameters<
  NonNullable<ComponentProps<typeof TabBar.Group>['onChange']>
>[0]

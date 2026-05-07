import React from 'react'

import type { SkeletonDetailProps } from './types'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'
import Tabs from './../components/Tabs'

const Detail = ({
  // Value & Display Value
  listLength = 2,
  itemLength = 10,

  // Status
  animated,
  safeArea,
  full = true,

  // Style
  className,
  style,
  divider,
  layout,
  animation
}: SkeletonDetailProps) => {
  return (
    <Page
      // Status
      safeArea={safeArea}
      full={full}
      // Style
      className={className}
      style={style}
      layout={layout}
      animation={animation}
    >
      <Page.Main className="lyrixi-overflow-hidden">
        <Paragraph
          divider={divider}
          titleStyle={{
            width: '100px'
          }}
          avatarClassName=""
        />
        <Tabs />
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph
            divider={divider}
            key={index}
            length={itemLength}
            animated={animated}
            oddStyle={{ width: '73px' }}
          />
        ))}
      </Page.Main>
    </Page>
  )
}

export default Detail

import React from 'react'

import Page from './../../Page'
import type { PageLayout } from './../../Page'
import Paragraph from './../components/Paragraph'

interface EditProps {
  listLength?: number
  paragraphLength?: number
  animated?: boolean
  safeArea?: boolean
  full?: boolean
  className?: string
  style?: React.CSSProperties
  divider?: string
  layout?: PageLayout
  animation?: string
}

const Edit = ({
  // Value & Display Value
  listLength = 8,
  paragraphLength = 6,

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
}: EditProps) => {
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
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph
            key={index}
            divider={divider}
            length={paragraphLength}
            animated={animated}
            titleStyle={{
              width: '75px'
            }}
            oddStyle={{ width: '106px', marginTop: '16px' }}
          />
        ))}
      </Page.Main>
    </Page>
  )
}

export default Edit

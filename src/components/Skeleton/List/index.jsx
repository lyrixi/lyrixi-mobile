import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'

const List = ({
  // Value & Display Value
  listLength = 8,
  paragraphLength = 2,

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
}) => {
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
          <Paragraph divider={divider} key={index} length={paragraphLength} animated={animated} />
        ))}
      </Page.Main>
    </Page>
  )
}

export default List

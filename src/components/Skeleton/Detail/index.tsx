import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'
import Tabs from './../components/Tabs'

const Detail = ({
  // Value & Display Value
  listLength = 2,
  paragraphLength = 10,

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
            length={paragraphLength}
            animated={animated}
            oddStyle={{ width: '73px' }}
          />
        ))}
      </Page.Main>
    </Page>
  )
}

export default Detail

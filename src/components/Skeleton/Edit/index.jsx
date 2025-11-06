import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'

const Edit = ({ animated, divider, listLength = 8, paragraphLength = 6, ...props }) => {
  return (
    <Page {...props}>
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

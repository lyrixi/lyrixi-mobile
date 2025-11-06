import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'

const List = ({ animated, divider, listLength = 8, paragraphLength = 2, ...props }) => {
  return (
    <Page {...props}>
      <Page.Main className="lyrixi-overflow-hidden">
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph divider={divider} key={index} length={paragraphLength} animated={animated} />
        ))}
      </Page.Main>
    </Page>
  )
}

export default List

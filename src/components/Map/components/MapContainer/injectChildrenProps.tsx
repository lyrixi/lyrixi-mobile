import React from 'react'
import type { MapContainerChildInjectProps } from '../../types'

const injectChildrenProps = (children: React.ReactNode, props: MapContainerChildInjectProps): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      return React.cloneElement(child, props)
    }
    return child
  })
}

export default injectChildrenProps

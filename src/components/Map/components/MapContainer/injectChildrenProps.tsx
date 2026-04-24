import React from 'react'

const injectChildrenProps = (children: React.ReactNode, props: Record<string, unknown>): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      return React.cloneElement(child, props)
    }
    return child
  })
}

export default injectChildrenProps

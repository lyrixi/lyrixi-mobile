import React, { Fragment, useContext } from 'react'

import { SpaceContext } from './context'

const Item = ({
  className,
  separatorClassName,
  index,
  children,
  separator,
  style,
  separatorStyle
}) => {
  const { latestIndex } = useContext(SpaceContext)

  if (children === null || children === undefined) {
    return null
  }

  const showSplit = separator && index < latestIndex

  return (
    <Fragment>
      <div className={className} style={style}>
        {children}
      </div>
      {showSplit && (
        <span className={separatorClassName} style={separatorStyle}>
          {separator}
        </span>
      )}
    </Fragment>
  )
}

export default Item

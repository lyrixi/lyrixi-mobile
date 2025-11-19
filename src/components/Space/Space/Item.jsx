import React, { Fragment, useContext } from 'react'

import { SpaceContext } from './context'

const Item = ({
  className,
  splitClassName,
  index,
  children,
  split,
  style,
  splitStyle
}) => {
  const { latestIndex } = useContext(SpaceContext)

  if (children === null || children === undefined) {
    return null
  }

  const showSplit = split && index < latestIndex

  return (
    <Fragment>
      <div className={className} style={style}>
        {children}
      </div>
      {showSplit && (
        <span className={splitClassName} style={splitStyle}>
          {split}
        </span>
      )}
    </Fragment>
  )
}

export default Item


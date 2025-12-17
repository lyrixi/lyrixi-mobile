import React, { Fragment } from 'react'

const Item = ({
  // Style
  style,
  className,
  separatorStyle,
  separatorClassName,
  // Status
  isLast,
  // Elements
  separator,
  children
}) => {
  if (children === null || children === undefined) {
    return null
  }

  return (
    <Fragment>
      <div className={className} style={style}>
        {children}
      </div>
      {separator && !isLast ? (
        <span className={separatorClassName} style={separatorStyle}>
          {separator}
        </span>
      ) : null}
    </Fragment>
  )
}

export default Item

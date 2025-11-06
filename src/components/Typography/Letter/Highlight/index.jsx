import React, { useImperativeHandle, forwardRef, useRef } from 'react'

const Highlight = forwardRef(({ highlight, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={`lyrixi-typography-highlight${props.className ? ' ' + props.className : ''}`}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

export default Highlight

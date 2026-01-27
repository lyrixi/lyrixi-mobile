import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import LocaleUtil from './../../../utils/LocaleUtil'

const TopContainer = forwardRef((props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return rootRef.current
  })
  return (
    <div ref={rootRef} className="lyrixi-page-main-pull-push">
      <div className="lyrixi-page-main-pull-push-wrapper">
        <div className="lyrixi-page-main-pull-push-icon"></div>
        <div className="lyrixi-page-main-pull-push-text">
          {LocaleUtil.locale('下拉可以刷新', 'noKey_76985db7270fb8bc2add09291b637964')}
        </div>
      </div>
    </div>
  )
})

export default TopContainer

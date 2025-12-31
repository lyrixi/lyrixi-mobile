import React, { forwardRef } from 'react'
import Choose from './../Choose'

// 查看
const Preview = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Status
      autoLocation,

      // Element
      config,
      getLocation,
      getAddress,
      loadingNode,
      loadingRender,

      // Events
      onChange,
      onSuccess,
      onError
    },
    ref
  ) => {
    return (
      <Choose
        ref={ref}
        // Value & Display Value
        value={value}
        // Status
        readOnly={true}
        autoLocation={autoLocation}
        // Element
        config={config}
        getLocation={getLocation}
        getAddress={getAddress}
        loadingNode={loadingNode}
        loadingRender={loadingRender}
        // Events
        onChange={onChange}
        onSuccess={onSuccess}
        onError={onError}
      />
    )
  }
)
export default Preview

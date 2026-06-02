import React, { forwardRef } from 'react'
import Choose from './../Choose'
import type { MapContainerAPI } from './../../../Map/types'
import type { LocationMainPreviewProps } from './../../types'

// 查看
const Preview = forwardRef<MapContainerAPI, LocationMainPreviewProps>(function LocationPreview(
  {
    // Value & Display Value
    value,
    autoLocation,
    mapConfig,
    getLocation,
    getAddress,
    // Elements
    loadingNode,
    loadingRender,
    // Events
    onChange,
    onSuccess,
    onError
  },
  ref
) {
  return (
    <Choose
      ref={ref}
      // Value & Display Value
      value={value}
      // Status
      readOnly={true}
      autoLocation={autoLocation}
      // Elements
      mapConfig={mapConfig}
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
})
export default Preview

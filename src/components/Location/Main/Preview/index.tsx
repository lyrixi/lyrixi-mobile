import React, { forwardRef } from 'react'
import Choose from './../Choose'
import type { MapContainerAPI } from './../../../Map/types'
import type { LocationChooseProps } from './../Choose'

type LocationPreviewProps = Omit<LocationChooseProps, 'readOnly'>

// 查看
const Preview = forwardRef<MapContainerAPI, LocationPreviewProps>(function LocationPreview(
  {
    value,
    autoLocation,
    mapConfig,
    getLocation,
    getAddress,
    loadingNode,
    loadingRender,
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
      // Element
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

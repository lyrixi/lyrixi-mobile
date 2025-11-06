import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import defaultMarkerIcons from './../../utils/markerIcons'
import createCenterMarkerIcon from './createCenterMarkerIcon'
import addCenterMarker from './addCenterMarker'
import clearCenterMarker from './clearCenterMarker'

// 中心点标注
const CenterMarker = forwardRef(
  (
    {
      map,
      value,
      // Options
      icon,
      onClick,
      onDragStart,
      onDragEnd,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Default Icon
    const markerIcons = window?.APILoaderConfig?.markerIcons || defaultMarkerIcons

    // Center Marker layer
    const centerMarkerLayerRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    useEffect(() => {
      // Center marker layer init
      centerMarkerLayerRef.current = window.L.layerGroup().addTo(map.leafletMap)

      return () => {
        clearCenterMarker(centerMarkerLayerRef.current)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (!value?.longitude || !value?.latitude || !value?.type) {
        return
      }
      // Destroy clear center marker
      clearCenterMarker(centerMarkerLayerRef.current)
      map.onDragStart = null
      map.onDragEnd = null

      // Add center marker and drag interaction
      addCenterMarker(
        {
          longitude: value.longitude,
          latitude: value.latitude,
          type: value.type,
          icon: value?.icon
        },
        {
          onClick: value?.onClick || onClick,
          icon: icon || createCenterMarkerIcon(markerIcons?.centerMarkerIcon)
        },
        centerMarkerLayerRef.current
      )

      map.onDragStart = (map) => {
        if (onDragEnd) {
          rootRef?.current?.classList?.remove?.('active')
        }
        onDragStart && onDragStart(map)
      }
      map.onDragEnd = (map) => {
        if (onDragEnd) {
          rootRef?.current?.classList?.add?.('active')
          onDragEnd(map)
        }
      }

      // eslint-disable-next-line
    }, [value])

    // 拖拽过程时显示的点, 拖拽结束隐藏
    return (
      <span
        {...props}
        className={`lyrixi-map-center-marker lyrixi-active${props?.className ? ' ' + props.className : ''}`}
        ref={rootRef}
      ></span>
    )
  }
)

export default CenterMarker

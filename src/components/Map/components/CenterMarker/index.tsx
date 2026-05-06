import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import type { L } from './../../leaflet.types'
import type { MapContainerAPI } from './../MapContainer'
import defaultMarkerIcons from './../../utils/markerIcons'
import createCenterMarkerIcon from './createCenterMarkerIcon'
import addCenterMarker from './addCenterMarker'
import clearCenterMarker from './clearCenterMarker'

import type { CenterMarkerProps, CenterMarkerRef } from './types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const CenterMarker = forwardRef<CenterMarkerRef, CenterMarkerProps>(
  (
    {
      value,
      style,
      className,
      map,
      icon,
      onClick,
      onDragStart,
      onDragEnd
    },
    ref
  ) => {
    const rootRef = useRef<HTMLSpanElement>(null)


    const markerIcons = window?.MapLoaderConfig?.markerIcons || defaultMarkerIcons


    const centerMarkerLayerRef = useRef<L.LayerGroup | null>(null)


    useEffect(() => {
      if (!map?.leafletMap) return
      centerMarkerLayerRef.current = window.L!.layerGroup().addTo(map.leafletMap)

      return () => {
        clearCenterMarker(centerMarkerLayerRef.current)
      }
      // eslint-disable-next-line
    }, [])


    useEffect(() => {
      if (!value?.longitude || !value?.latitude || !value?.type) {
        return
      }
      clearCenterMarker(centerMarkerLayerRef.current)
      if (map) {
        map.onDragStart = null
        map.onDragEnd = null
      }

      addCenterMarker(
        {
          longitude: value.longitude,
          latitude: value.latitude,
          type: value.type,
          icon: value?.icon
        },
        {
          onClick: value?.onClick || onClick,
          icon: icon || createCenterMarkerIcon((markerIcons as Record<string, unknown>)?.centerMarkerIcon as Parameters<typeof createCenterMarkerIcon>[0])
        },
        centerMarkerLayerRef.current
      )

      if (map) {
        map.onDragStart = (mapAPI: MapContainerAPI) => {
          if (onDragEnd) {
            rootRef?.current?.classList?.remove?.('lyrixi-active')
          }
          onDragStart?.(mapAPI)
        }
        map.onDragEnd = (mapAPI: MapContainerAPI) => {
          if (onDragEnd) {
            rootRef?.current?.classList?.add?.('lyrixi-active')
            onDragEnd(mapAPI)
          }
        }
      }

      // eslint-disable-next-line
    }, [value])


    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })


    return (
      <span
        ref={rootRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-map-center-marker lyrixi-active', className)}
      ></span>
    )
  }
)

export default CenterMarker

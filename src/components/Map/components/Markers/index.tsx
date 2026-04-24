import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import type * as L from 'leaflet'
import createMarkerIcon from './createMarkerIcon'
import defaultMarkerIcons from './../../utils/markerIcons'
import filterCoords from './../../utils/filterCoords'
import isSamePoint from './../../utils/isSamePoint'
import addMarkers, { type MapPoint } from './addMarkers'
import clearMarkers, { type CanvasMarkerLayer } from './clearMarkers'
import type { MapContainerAPI } from './../MapContainer'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

type MapCoord = ReturnType<typeof filterCoords>[number]

export interface MarkersProps {
  points?: unknown
  map?: MapContainerAPI
  icon?: unknown
  style?: React.CSSProperties
  className?: string
  onClick?: (payload: unknown) => void
}

export interface MarkersHandle {
  redraw: () => void
  focus: (point: MapCoord) => void
  blur: () => void
}

// 批量标注
const Markers = forwardRef<MarkersHandle, MarkersProps>(
  (
    {
      points: pointsProp,
      map,
      icon,
      style,
      className,
      onClick
    },
    ref
  ) => {
    void style
    void className
    let points = pointsProp as MapCoord[]

    const layersRef = useRef<{
      canvasLayer: CanvasMarkerLayer
      layer: L.LayerGroup
    } | null>(null)

    const focusedPointRef = useRef<MapCoord | null>(null)

    const markerIcons = window?.MapLoaderConfig?.markerIcons || defaultMarkerIcons

    points = filterCoords(points)

    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        },
        focus,
        blur
      }
    })

    useEffect(() => {
      const lf = map?.leafletMap
      if (!lf || !window.L?.canvasIconLayer) {
        return
      }
      const layerFactory = window.L.canvasIconLayer as
        | ((options?: Record<string, unknown>) => { addTo: (m: L.Map) => unknown })
        | undefined
      if (!layerFactory) return
      const canvasRaw = layerFactory({}).addTo(lf) as unknown as CanvasMarkerLayer
      const layerRaw = window.L.layerGroup().addTo(lf)
      layersRef.current = {
        canvasLayer: canvasRaw,
        layer: layerRaw
      }

      return () => {
        if (layersRef.current) {
          clearMarkers(layersRef.current)
        }
      }
    }, [map])

    useEffect(() => {
      if (ObjectUtil.isEmpty(points)) {
        if (layersRef.current) {
          clearMarkers(layersRef.current)
        }
        return
      }
      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function focus(point: MapCoord) {
      focusedPointRef.current = point
      draw()
    }

    function blur() {
      focusedPointRef.current = null
      draw()
    }

    function draw() {
      if (ObjectUtil.isEmpty(points)) {
        return
      }
      const layers = layersRef.current
      if (!layers) {
        return
      }
      clearMarkers(layers)

      let orderedPoints: MapCoord[]

      if (focusedPointRef.current) {
        const focusedPoint = focusedPointRef.current
        orderedPoints = points.filter((point) => !isSamePoint(point, focusedPoint))
        orderedPoints.push(focusedPoint)
      } else {
        orderedPoints = points
      }

      const resolvedIcon = createMarkerIcon(icon || markerIcons?.markerIcon)
      addMarkers(orderedPoints as MapPoint[], { onClick: onClick, icon: resolvedIcon }, layers)
    }

    return <></>
  }
)

export default Markers

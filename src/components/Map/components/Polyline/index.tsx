import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import type * as L from 'leaflet'
import filterCoords from './../../utils/filterCoords'
import addPolyline, { type LinePoint, type LineStyleOptions } from './addPolyline'
import clearPolyline from './clearPolyline'
import type { MapContainerAPI } from './../MapContainer'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

export interface PolylineProps {
  points?: unknown
  color?: string
  map?: MapContainerAPI
}

// 批量折线
const Polyline = forwardRef<{ redraw: () => void } | null, PolylineProps>(
  (
    {
      points: pointsProp,
      color,
      map
    },
    ref
  ) => {
    let points = pointsProp as unknown
    const polylineLayerRef = useRef<L.LayerGroup | null>(null)

    points = filterCoords(points)

    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        }
      }
    })

    useEffect(() => {
      const lf = map?.leafletMap
      if (!lf) {
        return
      }
      polylineLayerRef.current = window.L!.layerGroup().addTo(lf)

      return () => {
        clearPolyline(polylineLayerRef.current)
      }
    }, [map])

    useEffect(() => {
      if (!polylineLayerRef.current) return
      if (ObjectUtil.isEmpty(points)) {
        clearPolyline(polylineLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (ObjectUtil.isEmpty(points)) {
        return
      }
      clearPolyline(polylineLayerRef.current)
      if (!polylineLayerRef.current) return
      const style: LineStyleOptions = { color }
      addPolyline(points as LinePoint[], style, polylineLayerRef.current)
    }

    return <></>
  }
)

export default Polyline

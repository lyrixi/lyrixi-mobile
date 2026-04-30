import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import type * as L from 'leaflet'
import filterCoords from './../../utils/filterCoords'
import addPolygon, { type PolyPoint, type PolyStyleOptions } from './addPolygon'
import clearPolygon from './clearPolygon'
import type { MapContainerAPI } from './../MapContainer'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

export interface PolygonProps {
  points?: unknown
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  map?: MapContainerAPI
}

// 多边形
const Polygon = forwardRef<{ redraw: () => void } | null, PolygonProps>(
  (
    {
      points: pointsProp,
      color,
      fillColor,
      fillOpacity,
      weight,
      map
    },
    ref
  ) => {
    let points = pointsProp as unknown

    const polygonLayerRef = useRef<L.LayerGroup | null>(null)


    points = filterCoords(points)


    useEffect(() => {
      const lf = map?.leafletMap
      if (!lf) {
        return
      }
      polygonLayerRef.current = window.L!.layerGroup().addTo(lf)

      return () => {
        clearPolygon(polygonLayerRef.current)
      }
    }, [map])


    useEffect(() => {
      if (!polygonLayerRef.current) return
      const arr = points as PolyPoint[]
      if (ObjectUtil.isEmpty(arr) || arr.length < 3) {
        clearPolygon(polygonLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])


    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        }
      }
    })


    function draw() {
      const arr = points as PolyPoint[]
      if (ObjectUtil.isEmpty(arr) || arr.length < 3) {
        return
      }
      clearPolygon(polygonLayerRef.current)
      if (!polygonLayerRef.current) return
      const style: PolyStyleOptions = {
        color,
        fillColor,
        fillOpacity,
        weight
      }
      addPolygon(arr, style, polygonLayerRef.current)
    }


    return <></>
  }
)

export default Polygon

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import type { L } from '../../types'
import filterCoords from './../../utils/filterCoords'
import addPolyline, { type LinePoint, type LineStyleOptions } from './addPolyline'
import clearPolyline from './clearPolyline'

import type { MapPolylineProps, MapPolylineRef } from '../../types'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */


// 批量折线
const Polyline = forwardRef<MapPolylineRef | null, MapPolylineProps>(
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

    /* eslint-disable @typescript-eslint/no-use-before-define -- draw 声明在下方，与既有结构一致 */

    useEffect(() => {
      if (!polylineLayerRef.current) return
      if (ObjectUtil.isEmpty(points)) {
        clearPolyline(polylineLayerRef.current)
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
      if (ObjectUtil.isEmpty(points)) {
        return
      }
      clearPolyline(polylineLayerRef.current)
      if (!polylineLayerRef.current) return
      const style: LineStyleOptions = { color }
      addPolyline(points as LinePoint[], style, polylineLayerRef.current)
    }

    /* eslint-enable @typescript-eslint/no-use-before-define */

    return <></>
  }
)

export type { MapPolylineProps, MapPolylineRef } from '../../types'
export default Polyline

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import type { L } from './../../leaflet.types'
import filterCoords from './../../utils/filterCoords'
import addPolygon, { type PolyPoint, type PolyStyleOptions } from './addPolygon'
import clearPolygon from './clearPolygon'
import type { PolygonProps } from './types'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

export type { PolygonProps } from './types'

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

    /* eslint-disable @typescript-eslint/no-use-before-define -- draw 声明在下方，与既有结构一致 */

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

    /* eslint-enable @typescript-eslint/no-use-before-define */

    return <></>
  }
)

export default Polygon

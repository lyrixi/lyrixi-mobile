import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import type { L } from './../../leaflet/types'
import filterCoords from './../../utils/filterCoords'
import addCircles, { type CirclePoint } from './addCircles'
import clearCircles from './clearCircles'

import type { CirclesProps, CirclesRef } from './types'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */


// 批量圈
const Circles = forwardRef<CirclesRef | null, CirclesProps>(
  (
    {
      points: pointsProp,
      color,
      radius,
      map
    },
    ref
  ) => {
    let points = pointsProp as unknown

    const circlesLayerRef = useRef<L.LayerGroup | null>(null)


    points = filterCoords(points)


    useEffect(() => {
      const lf = map?.leafletMap
      if (!lf) {
        return
      }
      circlesLayerRef.current = window.L!.layerGroup().addTo(lf)

      return () => {
        clearCircles(circlesLayerRef.current)
      }
    }, [map])

    /* eslint-disable @typescript-eslint/no-use-before-define -- draw 声明在下方，与既有结构一致 */

    useEffect(() => {
      if (ObjectUtil.isEmpty(points)) {
        clearCircles(circlesLayerRef.current)
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
      clearCircles(circlesLayerRef.current)
      if (!circlesLayerRef.current) return
      addCircles(points as CirclePoint[], { color, radius }, circlesLayerRef.current)
    }

    /* eslint-enable @typescript-eslint/no-use-before-define */

    return <></>
  }
)

export type { CirclesProps, CirclesRef } from './types'
export default Circles

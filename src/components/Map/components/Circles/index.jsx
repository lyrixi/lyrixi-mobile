import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import filterCoords from './../../utils/filterCoords'
import addCircles from './addCircles'
import clearCircles from './clearCircles'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 批量圈
const Circles = forwardRef(
  (
    {
      // Value & Display Value
      points,

      // Style
      color,
      radius,

      // Element
      map
    },
    ref
  ) => {
    // Circle layer
    const circlesLayerRef = useRef(null)

    // 过滤错误的点位
    // eslint-disable-next-line
    points = filterCoords(points)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        }
      }
    })

    useEffect(() => {
      // Circle layer init
      circlesLayerRef.current = window.L.layerGroup().addTo(map.leafletMap)

      return () => {
        clearCircles(circlesLayerRef.current)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (ObjectUtil.isEmpty(points)) {
        clearCircles(circlesLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (ObjectUtil.isEmpty(points)) {
        return
      }
      clearCircles(circlesLayerRef.current)
      addCircles(points, { color, radius }, circlesLayerRef.current)
    }

    return <></>
  }
)

export default Circles

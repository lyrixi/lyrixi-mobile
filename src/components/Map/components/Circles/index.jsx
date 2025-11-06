import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import filterCoords from './../../utils/filterCoords'
import addCircles from './addCircles'
import clearCircles from './clearCircles'

// 批量圈
const Circles = forwardRef(
  (
    {
      map,
      points,
      // Options
      color,
      radius
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
      if (_.isEmpty(points)) {
        clearCircles(circlesLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (_.isEmpty(points)) {
        return
      }
      clearCircles(circlesLayerRef.current)
      addCircles(points, { color, radius }, circlesLayerRef.current)
    }

    return <></>
  }
)

export default Circles

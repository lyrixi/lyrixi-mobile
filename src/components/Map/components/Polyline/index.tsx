import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import filterCoords from './../../utils/filterCoords'
import addPolyline from './addPolyline'
import clearPolyline from './clearPolyline'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 批量折线
const Polyline = forwardRef(
  (
    {
      // Value & Display Value
      points,

      // Style
      color,

      // Element
      map
    },
    ref
  ) => {
    // Polyline layer
    const polylineLayerRef = useRef(null)

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
      // Polyline layer init
      polylineLayerRef.current = window.L.layerGroup().addTo(map.leafletMap)

      return () => {
        clearPolyline(polylineLayerRef.current)
      }
      // eslint-disable-next-line
    }, [])

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
      addPolyline(points, { color }, polylineLayerRef.current)
    }

    return <></>
  }
)

export default Polyline

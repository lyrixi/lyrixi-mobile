import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import filterCoords from './../../utils/filterCoords'
import addPolygon from './addPolygon'
import clearPolygon from './clearPolygon'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 多边形
const Polygon = forwardRef(
  (
    {
      // Value & Display Value
      points,

      // Style
      color,
      fillColor,
      fillOpacity,
      weight,

      // Element
      map
    },
    ref
  ) => {
    // Polygon layer
    const polygonLayerRef = useRef(null)

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
      // Polygon layer init
      polygonLayerRef.current = window.L.layerGroup().addTo(map.leafletMap)

      return () => {
        clearPolygon(polygonLayerRef.current)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (!polygonLayerRef.current) return
      if (ObjectUtil.isEmpty(points) || points.length < 3) {
        clearPolygon(polygonLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (ObjectUtil.isEmpty(points) || points.length < 3) {
        return
      }
      clearPolygon(polygonLayerRef.current)
      addPolygon(
        points,
        {
          color,
          fillColor,
          fillOpacity,
          weight
        },
        polygonLayerRef.current
      )
    }

    return <></>
  }
)

export default Polygon

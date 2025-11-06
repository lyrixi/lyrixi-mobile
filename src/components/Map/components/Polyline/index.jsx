import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import filterCoords from './../../utils/filterCoords'
import addPolyline from './addPolyline'
import clearPolyline from './clearPolyline'

// 批量折线
const Polyline = forwardRef(
  (
    {
      map,
      points,
      // Options
      color
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
      if (_.isEmpty(points)) {
        clearPolyline(polylineLayerRef.current)
        return
      }

      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (_.isEmpty(points)) {
        return
      }
      clearPolyline(polylineLayerRef.current)
      addPolyline(points, { color }, polylineLayerRef.current)
    }

    return <></>
  }
)

export default Polyline

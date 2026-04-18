import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import createMarkerIcon from './createMarkerIcon'
import defaultMarkerIcons from './../../utils/markerIcons'
import filterCoords from './../../utils/filterCoords'
import isSamePoint from './../../utils/isSamePoint'
import addMarkers from './addMarkers'
import clearMarkers from './clearMarkers'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 批量标注
const Markers = forwardRef(
  (
    {
      // Value & Display Value
      points,

      // Element
      map,
      icon,

      // Events
      onClick
    },
    ref
  ) => {
    // Marker layer
    const layersRef = useRef(null)

    // 当前聚焦的点(置顶显示)
    const focusedPointRef = useRef(null)

    // Default Icon
    const markerIcons = window?.MapLoaderConfig?.markerIcons || defaultMarkerIcons

    // 过滤错误的点位
    // eslint-disable-next-line
    points = filterCoords(points)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        },
        focus,
        blur
      }
    })

    useEffect(() => {
      // Marker common layer and canvas layer init
      layersRef.current = {
        canvasLayer: window.L.canvasIconLayer({}).addTo(map.leafletMap),
        layer: window.L.layerGroup().addTo(map.leafletMap)
      }

      return () => {
        clearMarkers(layersRef.current)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (ObjectUtil.isEmpty(points)) {
        clearMarkers(layersRef.current)
        return
      }
      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    // 聚焦指定点（置顶显示）
    function focus(point) {
      focusedPointRef.current = point
      draw()
    }

    // 取消聚焦（恢复正常显示）
    function blur() {
      focusedPointRef.current = null
      draw()
    }

    function draw() {
      if (ObjectUtil.isEmpty(points)) {
        return
      }
      clearMarkers(layersRef.current)

      // 构建有序的点数组(改变点的渲染顺序)
      let orderedPoints = null

      // 如果有聚焦点，调整渲染顺序
      if (focusedPointRef.current) {
        const focusedPoint = focusedPointRef.current

        // 过滤出非聚焦点
        orderedPoints = points.filter((point) => !isSamePoint(point, focusedPoint))

        // 将聚焦点添加到数组末尾（置顶显示）
        orderedPoints.push(focusedPoint)
      }
      // 如果没有聚焦点，直接渲染所有点
      else {
        orderedPoints = points
      }

      // 一次性绘制所有点
      addMarkers(
        orderedPoints,
        {
          onClick: onClick,
          icon: createMarkerIcon(icon || markerIcons?.markerIcon)
        },
        layersRef.current
      )
    }

    return <></>
  }
)

export default Markers

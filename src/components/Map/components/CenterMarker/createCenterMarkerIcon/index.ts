import type * as L from 'leaflet'
import defaultMarkerIcons from './../../../utils/markerIcons'

// 内库使用-start
import ObjectUtil from './../../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

interface IconOptions {
  html?: string
  className?: string
  iconUrl?: string
  iconRetinaUrl?: string
  shadowUrl?: string
  shadowRetinaUrl?: string
  shadowSize?: [number, number]
  iconSize?: [number, number]
  iconAnchor?: [number, number]
  shadowAnchor?: [number, number]
  popupAnchor?: [number, number]
  active?: boolean
  [key: string]: unknown
}

function createCenterMarkerIcon(icon?: IconOptions | null): L.Icon | L.DivIcon | null {
  if (!window.L?.Icon || !window.L?.divIcon) return null

  if (icon && (icon instanceof window.L.Icon || icon instanceof window.L.DivIcon)) {
    return icon as L.Icon | L.DivIcon
  }

  const {
    html,
    className,
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    shadowRetinaUrl,
    shadowSize,
    iconSize,
    iconAnchor,
    shadowAnchor,
    popupAnchor
  } = icon || {}

  if (html) {
    return window.L.divIcon(
      ObjectUtil.pickBy(
        {
          html,
          className,
          iconUrl,
          iconRetinaUrl,
          shadowUrl,
          shadowRetinaUrl,
          shadowSize,
          iconSize,
          iconAnchor,
          shadowAnchor,
          popupAnchor
        },
        (v: unknown) => v !== undefined && v !== null
      ) as L.DivIconOptions
    )
  }

  return window.L.icon(
    ObjectUtil.pickBy(
      {
        className: className || defaultMarkerIcons.centerMarkerIcon?.className,
        iconUrl: iconUrl || defaultMarkerIcons.centerMarkerIcon?.iconUrl,
        iconRetinaUrl: iconRetinaUrl || defaultMarkerIcons.centerMarkerIcon?.iconRetinaUrl,
        shadowUrl: shadowUrl || defaultMarkerIcons.centerMarkerIcon?.shadowUrl,
        shadowRetinaUrl: shadowRetinaUrl || defaultMarkerIcons.centerMarkerIcon?.shadowRetinaUrl,
        shadowSize: shadowSize || defaultMarkerIcons.centerMarkerIcon?.shadowSize,
        iconSize: iconSize || defaultMarkerIcons.centerMarkerIcon?.iconSize,
        iconAnchor: iconAnchor || defaultMarkerIcons.centerMarkerIcon?.iconAnchor,
        shadowAnchor: shadowAnchor || defaultMarkerIcons.centerMarkerIcon?.shadowAnchor,
        popupAnchor: popupAnchor || defaultMarkerIcons.centerMarkerIcon?.popupAnchor
      },
      (v: unknown) => v !== undefined && v !== null
    ) as L.IconOptions
  )
}

export default createCenterMarkerIcon

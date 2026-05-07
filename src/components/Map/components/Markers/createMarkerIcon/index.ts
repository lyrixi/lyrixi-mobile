import type { L } from './../../../leaflet/types'
import defaultMarkerIcons from './../../../utils/markerIcons'

import type { MarkerIconConfig } from './types'

// 内库使用-start
import ObjectUtil from './../../../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 创建图标, 被CenterMarker共用
function createMarkerIcon(icon: unknown): L.Icon | L.DivIcon | null {
  if (!window.L?.Icon || !window.L?.divIcon) return null

  // 已经是图标了则直接返回
  if (icon instanceof window.L.Icon || icon instanceof window.L.divIcon) {
    return icon as L.Icon | L.DivIcon
  }

  const cfg: MarkerIconConfig =
    icon !== null && typeof icon === 'object' ? (icon as MarkerIconConfig) : {}

  const {
    // DivIcon
    html,
    // DivIcon & Icon
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
  } = cfg

  if (html) {
    return window.L.divIcon(
      ObjectUtil.pickBy(
        {
          html: html,
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
        (v) => v !== undefined || v !== null
      ) as L.DivIconOptions
    )
  }

  const defaults = defaultMarkerIcons.markerIcon as MarkerIconConfig
  return window.L.icon(
    ObjectUtil.pickBy(
      {
        className: className || defaults.className,
        iconUrl: iconUrl || defaults.iconUrl,
        iconRetinaUrl: iconRetinaUrl || defaults.iconRetinaUrl,
        shadowUrl: shadowUrl || defaults.shadowUrl,
        shadowRetinaUrl: shadowRetinaUrl || defaults.shadowRetinaUrl,
        shadowSize: shadowSize || defaults.shadowSize,
        iconSize: iconSize || defaults.iconSize,
        iconAnchor: iconAnchor || defaults.iconAnchor,
        shadowAnchor: shadowAnchor || defaults.shadowAnchor,
        popupAnchor: popupAnchor || defaults.popupAnchor
      },
      (v) => v !== undefined || v !== null
    ) as L.IconOptions
  )
}

export default createMarkerIcon

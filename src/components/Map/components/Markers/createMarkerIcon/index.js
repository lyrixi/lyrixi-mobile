import _ from 'lodash'
import defaultMarkerIcons from './../../../utils/markerIcons'

// 创建图标, 被CenterMarker共用
function createMarkerIcon(icon) {
  if (!window.L?.Icon || !window.L?.divIcon) return null

  // 已经是图标了则直接返回
  if (icon instanceof window.L.Icon || icon instanceof window.L.divIcon) {
    return icon
  }

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
  } = icon || {}

  if (html) {
    return window.L.divIcon(
      _.pickBy(
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
      )
    )
  }

  return window.L.icon(
    _.pickBy(
      {
        className: className || defaultMarkerIcons.markerIcon?.className,
        iconUrl: iconUrl || defaultMarkerIcons.markerIcon?.iconUrl,
        iconRetinaUrl: iconRetinaUrl || defaultMarkerIcons.markerIcon?.iconRetinaUrl,
        shadowUrl: shadowUrl || defaultMarkerIcons.markerIcon?.shadowUrl,
        shadowRetinaUrl: shadowRetinaUrl || defaultMarkerIcons.markerIcon?.shadowRetinaUrl,
        shadowSize: shadowSize || defaultMarkerIcons.markerIcon?.shadowSize,
        iconSize: iconSize || defaultMarkerIcons.markerIcon?.iconSize,
        iconAnchor: iconAnchor || defaultMarkerIcons.markerIcon?.iconAnchor,
        shadowAnchor: shadowAnchor || defaultMarkerIcons.markerIcon?.shadowAnchor,
        popupAnchor: popupAnchor || defaultMarkerIcons.markerIcon?.popupAnchor
      },
      (v) => v !== undefined || v !== null
    )
  )
}

export default createMarkerIcon

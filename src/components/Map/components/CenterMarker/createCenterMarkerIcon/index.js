import _ from 'lodash'
import defaultMarkerIcons from './../../../utils/markerIcons'

// 创建图标
function createCenterMarkerIcon(icon) {
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
      )
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
      (v) => v !== undefined || v !== null
    )
  )
}

export default createCenterMarkerIcon

import type { NormalizeLocationInput } from '../../types'

/** 将 Bridge 定位成功结构 { status, code, message, data } 与顶层经纬度合并，兼容旧代码读取 result.longitude */
export default function normalizeLocationResult(r: NormalizeLocationInput): unknown {
  if (!r || typeof r !== 'object') return r
  if (
    r.status === 'success' &&
    r.data !== undefined &&
    r.data !== null &&
    typeof r.data === 'object'
  ) {
    return { ...r, ...(r.data as Record<string, unknown>) }
  }
  return r
}

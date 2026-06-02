/** 单点 [分量0, 分量1]，一般为经纬度之一对（顺序以具体方法为准，多为 [lng, lat]） */
export type Point = [number, number]

/** 多边形顶点序列 */
export type Polygon = Point[]

/** 线段平面四元组 [x1, y1, x2, y2]，与 `pointOnLine` 入参一致 */
export type Line = [number, number, number, number]

/** GeoUtil 实例类型（供内部自引用与导出） */
export interface GeoUtilType {
  polygonToLines: (polygon: Polygon, isRegular?: boolean) => [Point, Point][]
  pointInsidePolygon: (point: Point, polygon: Polygon) => boolean
  lineIntersectLine: (line0: [Point, Point], line1: [Point, Point]) => boolean
  polygonInsidePolygon: (py0: Polygon, py1: Polygon) => boolean
  isPoint: (point: Point) => boolean
  equalPoint: (p0: Point, p1: Point) => boolean
  getMiddlePoint: (p0: Point, p1: Point) => Point
  isPolygon: (polygon: Polygon) => boolean
  pointOnLine: (point: Point, line: Line) => boolean
  getDistance: (p0: Point, p1: Point) => number
  sortPoints: (points: Polygon) => Polygon
  coordtransform: (point: Point, from: string, to: string) => Point | null
  coordstransform: (
    points: Polygon | undefined,
    from?: string,
    to?: string
  ) => Polygon | Array<Point | null> | undefined
  isInChina: (point: Point) => boolean | null
}

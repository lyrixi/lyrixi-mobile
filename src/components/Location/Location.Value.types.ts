export interface LocationValue {
  latitude?: number | string
  longitude?: number | string
  type?: string
  address?: string
  value?: string
  nearbyVisible?: boolean
  [key: string]: unknown
}

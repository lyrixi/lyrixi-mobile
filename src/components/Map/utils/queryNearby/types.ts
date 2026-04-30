export interface QueryNearbyParams {
  map: { currentMap?: unknown; leafletMap?: unknown; [key: string]: unknown }
  keyword: string
  longitude: number | string
  latitude: number | string
  type: string
  radius?: number
}

export interface FitCoord {
  longitude?: number
  latitude?: number
  isInChina?: boolean
  [key: string]: unknown
}

export interface OverpassTag {
  name?: string
  'addr:city'?: string
  'addr:housename'?: string
  'addr:postcode'?: string
  'addr:street'?: string
  [k: string]: string | undefined
}

export interface OverpassNode {
  tags?: OverpassTag
  lat?: number
  lon?: number
}

/** google.maps.places 最小形态（googleQueryNearby 内使用） */
export type GooglePlacesApi = {
  Place: {
    searchNearby: (r: Record<string, unknown>) => Promise<{ places: unknown[] }>
    searchByText: (r: Record<string, unknown>) => Promise<{ places: unknown[] }>
  }
  SearchNearbyRankPreference: { DISTANCE: string }
}

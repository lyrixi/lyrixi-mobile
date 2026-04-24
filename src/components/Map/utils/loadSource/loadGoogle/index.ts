import loadGoogleMap from './loadGoogleMap'
import loadGoogleTileLayer from './loadGoogleTileLayer'

interface LoadStatus {
  status?: string
  [key: string]: unknown
}

async function loadGoogle(key: string | undefined): Promise<unknown> {
  const result: unknown = await loadGoogleMap(key)
  const r = result as LoadStatus
  if (r?.status === 'error') {
    return result
  }
  await loadGoogleTileLayer()
  return result
}

export default loadGoogle

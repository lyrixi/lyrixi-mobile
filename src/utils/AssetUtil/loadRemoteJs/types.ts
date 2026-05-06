export interface LoadRemoteJsOptions {
  async?: boolean
  charset?: string
  text?: string
  type?: string
  id?: string
  defer?: boolean
  crossorigin?: string
  integrity?: string
  referrerPolicy?: string
  onError?: (result: unknown) => void
  onSuccess?: (result: unknown) => void
}

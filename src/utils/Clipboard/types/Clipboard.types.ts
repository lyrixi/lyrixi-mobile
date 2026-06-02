export interface ClipboardCopyParams {
  onSuccess?: (payload: { status: string; message: unknown }) => void
  onError?: (payload: { status: string; message: unknown }) => void
  errorMsg?: string
}

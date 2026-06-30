export interface ClipboardCopyParams {
  onSuccess?: (options: { status: string; message: unknown }) => void
  onError?: (options: { status: string; message: unknown }) => void
  errorMsg?: string
}

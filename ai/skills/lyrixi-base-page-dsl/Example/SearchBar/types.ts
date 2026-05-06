export type SearchBarProps = {
  queryParams: Record<string, unknown> | null
  onQuery: (p: Record<string, unknown>) => void
}

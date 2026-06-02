export interface MapNearbyControlMainProps {
  // Value & Display Value
  result: Record<string, unknown> | null
  value?: unknown
  // Events
  onChange?: (item: Record<string, unknown>) => void
}

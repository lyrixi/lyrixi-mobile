export type HistoryUtilOnBack = (() => void) | null | undefined

export interface HistoryUtilNavigateOptions {
  onBack?: () => void
}

export interface HistoryUtilInstance {
  back: () => void
  onBack: HistoryUtilOnBack
  urlParameter?: string
  navigate: (urlParameter: string, opts: HistoryUtilNavigateOptions) => void
}

export type HistoryUtilOnBack = (() => void) | null | undefined

export interface HistoryUtilNavigateParams {
  onBack?: () => void
}

export interface HistoryUtilInstance {
  back: () => void
  onBack: HistoryUtilOnBack
  urlParameter?: string
  navigate: (urlParameter: string, params: HistoryUtilNavigateParams) => void
}

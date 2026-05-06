export type MemoRerenderRawItem = Record<string, unknown>

export interface MemoRerenderListProps {
  value?: MemoRerenderRawItem | MemoRerenderRawItem[] | null
  list?: MemoRerenderRawItem[]
}

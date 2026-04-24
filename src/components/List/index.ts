import InfiniteScroll from './InfiniteScroll'
import HeaderItem from './HeaderItem'
import Item from './Item'
import List from './List'

type ListWithParts = typeof List & {
  HeaderItem: typeof HeaderItem
  InfiniteScroll: typeof InfiniteScroll
  Item: typeof Item
}

;(List as ListWithParts).HeaderItem = HeaderItem
;(List as ListWithParts).InfiniteScroll = InfiniteScroll
;(List as ListWithParts).Item = Item

export default List as ListWithParts

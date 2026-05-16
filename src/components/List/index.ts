import InfiniteScroll from './InfiniteScroll'
import HeaderItem from './HeaderItem'
import Item from './Item'
import List from './List'

import type { ListComponents } from './List.Components.types'

;(List as ListComponents).HeaderItem = HeaderItem
;(List as ListComponents).InfiniteScroll = InfiniteScroll
;(List as ListComponents).Item = Item

export default List as ListComponents

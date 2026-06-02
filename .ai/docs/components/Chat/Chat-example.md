# Chat Example

以下示例位于本目录 `demos/`（由 `src/components/Chat/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Chat } from 'lyrixi-mobile'`

## demos/ChatList.tsx

```tsx
import { Page, Chat, type ChatRawItem } from 'lyrixi-mobile'

const ChatListDemo = () => {
  const list = [
    {
      id: '1',
      position: 'left',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      name: '用户A',
      content: '这是一条来自用户A的消息',
      time: new Date()
    },
    {
      id: '2',
      position: 'right',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      name: '我',
      content: '这是一条我发送的消息',
      time: new Date()
    }
  ]

  // 使用 formatViewItem 格式化单个项
  // 注意：formatViewItem 和 formatViewList 只需要使用其中一个
  function formatViewItem(item: ChatRawItem, { index }: { index: number }): ChatRawItem {
    return {
      ...item,
      authorNode: (typeof item.name === 'string' ? item.name : null) || `用户${index + 1}`
    }
  }

  // 或者使用 formatViewList 格式化整个列表
  // function formatViewList(list) {
  //   return list.map((item) => ({
  //     ...item,
  //     authorNode: item.name || '未知用户'
  //   }))
  // }

  return (
    <Page>
      <Page.Main>
        <Chat.List list={list} formatViewItem={formatViewItem} />
      </Page.Main>
    </Page>
  )
}

export default ChatListDemo
```

## demos/ChatItem.tsx

```tsx
import { Page, Chat } from 'lyrixi-mobile'

export default function ChatItemDemo() {
  return (
    <Page>
      <Page.Main>
        <Chat.Item
          avatarUrl="https://api.dicebear.com/7.x/miniavs/svg"
          authorNode="用户名"
          content="这是一条聊天消息内容"
          position="left"
        />
        <Chat.Item
          avatarUrl="https://api.dicebear.com/7.x/miniavs/svg"
          authorNode="用户名"
          content="这是一条聊天消息内容"
          position="right"
        />
      </Page.Main>
    </Page>
  )
}
```

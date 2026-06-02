# IndexBar Example

以下示例位于本目录 `demos/`（由 `src/components/IndexBar/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { IndexBar } from 'lyrixi-mobile'`

## demos/IndexBar.tsx

```tsx
import { Fragment, useEffect, useMemo, useState, useRef } from 'react'

import { Page, IndexBar } from 'lyrixi-mobile'

import type { IndexBarDemoRow } from './IndexBar.demos.types'

const LETTERS_AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function IndexBarDemo() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [list, setList] = useState<IndexBarDemoRow[]>([])

  const anchors = useMemo(() => {
    const fromData = Array.from(new Set(list.map((i) => i.letter))).filter(Boolean)
    return fromData.length > 0 ? fromData : ['A', 'B', 'C']
  }, [list])

  useEffect(() => {
    // Mock request list
    setTimeout(() => {
      let newList = queryList(['A', 'B', 'C'])
      setList(newList)
    }, 1000)

    // eslint-disable-next-line
  }, [])

  // 获取A-Z
  function queryList(letter: string[]): IndexBarDemoRow[] {
    const newList: IndexBarDemoRow[] = []
    for (let i = 0; i < letter.length; i++) {
      for (let j = 0; j < 15; j++) {
        newList.push({
          letter: letter[i],
          name: `${letter[i]}姓人名`
        })
      }
    }
    return newList
  }

  console.log('list:', list)

  // Render list
  function renderList() {
    const letter: Record<string, boolean> = {}
    return list.map((item, index) => {
      if (!letter[item.letter]) {
        letter[item.letter] = true
        return (
          <Fragment key={index}>
            <IndexBar.Anchor name={item.letter}>
              <li>{item.letter}</li>
            </IndexBar.Anchor>
            <li>{item.name}</li>
          </Fragment>
        )
      }
      return <li key={index}>{item.name}</li>
    })
  }
  return (
    <Page>
      <div ref={scrollerRef} style={{ height: '100%', overflow: 'auto' }}>
        <Page.Main
          onBottomRefresh={() => {
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                const newList = queryList(LETTERS_AZ)
                setList(newList)
                resolve()
              }, 2000)
            })
          }}
        >
          <ul>{renderList()}</ul>
        </Page.Main>
      </div>
      <IndexBar anchors={anchors} getScrollerElement={() => scrollerRef.current} />
    </Page>
  )
}
```

## demos/IndexBarAnchor.tsx

```tsx
import { Page, IndexBar } from 'lyrixi-mobile'

export default function IndexBarAnchorDemo() {
  return (
    <Page>
      <Page.Main>
        <IndexBar.Anchor>
          {/* IndexBar.Anchor 示例内容 */}
        </IndexBar.Anchor>
      </Page.Main>
    </Page>
  )
}
```

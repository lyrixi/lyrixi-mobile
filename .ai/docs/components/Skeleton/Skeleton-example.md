# Skeleton Example

以下示例位于本目录 `demos/`（由 `src/components/Skeleton/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Skeleton } from 'lyrixi-mobile'`

## demos/SkeletonList.tsx

```tsx
import { Skeleton } from 'lyrixi-mobile'

export default function SkeletonListDemo() {
  return <Skeleton.List divider="line" animated={false} />
}
```

## demos/SkeletonDetail.tsx

```tsx
import { Skeleton } from 'lyrixi-mobile'

export default function SkeletonDetailDemo() {
  return <Skeleton.Detail />
}
```

## demos/SkeletonEdit.tsx

```tsx
import { Skeleton } from 'lyrixi-mobile'

export default function SkeletonEditDemo() {
  return <Skeleton.Edit />
}
```

## demos/SkeletonAvatar.tsx

```tsx
import { Page, Skeleton } from 'lyrixi-mobile'

export default function SkeletonAvatarDemo() {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Avatar animated />
      </Page.Main>
    </Page>
  )
}
```

## demos/SkeletonTitle.tsx

```tsx
import { Page, Skeleton } from 'lyrixi-mobile'

export default function SkeletonTitleDemo() {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Title animated />
      </Page.Main>
    </Page>
  )
}
```

## demos/SkeletonItem.tsx

```tsx
import { Page, Skeleton } from 'lyrixi-mobile'

export default function SkeletonItemDemo() {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Item animated />
      </Page.Main>
    </Page>
  )
}
```

## demos/SkeletonParagraph.tsx

```tsx
import { Page, Skeleton } from 'lyrixi-mobile'

export default function SkeletonParagraphDemo() {
  return (
    <Page>
      <Page.Main>
        <Skeleton.Paragraph length={3} />
      </Page.Main>
    </Page>
  )
}
```

## demos/SkeletonTabs.tsx

```tsx
import { Page, Skeleton } from 'lyrixi-mobile'

export default function SkeletonTabsDemo() {
  return (
    <Page>
      <Page.Main>
        <Skeleton.Tabs />
      </Page.Main>
    </Page>
  )
}
```

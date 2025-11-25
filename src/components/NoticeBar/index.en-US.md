---
category: Components
group: Data Display
title: NoticeBar
---

# NoticeBar

Notice bar for displaying important notification messages.

## When to Use

- When you need to display notifications, tips, warnings, or other information to users
- When you need to display important information at the top of the page or within content areas
- When you need user attention but don't require forced interaction

## Examples

<code src="./demos/NoticeBar.jsx"></code>

## NoticeBar

### Props

| Property    | Description                      | Type                                        | Default |
| ----------- | -------------------------------- | ------------------------------------------- | ------- |
| type        | Notification type                | `success` \| `info` \| `warning` \| `error` | `info`  |
| title       | Notification title               | `ReactNode`                                 | -       |
| description | Notification description         | `ReactNode`                                 | -       |
| closable    | Whether the notice can be closed | `boolean`                                   | `false` |
| iconNode    | Custom icon node                 | `ReactNode`                                 | -       |
| iconRender  | Custom icon render function      | `() => ReactNode`                           | -       |
| style       | Custom style                     | `CSSProperties`                             | -       |
| className   | Custom class name                | `string`                                    | -       |

### Ref

| Property   | Description      | Type                   |
| ---------- | ---------------- | ---------------------- |
| rootDOM    | Root element     | `HTMLDivElement`       |
| getRootDOM | Get root element | `() => HTMLDivElement` |
| close      | Close notice bar | `() => void`           |
| open       | Open notice bar  | `() => void`           |

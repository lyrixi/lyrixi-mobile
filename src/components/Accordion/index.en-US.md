category: Components
group: Feedback
title: Accordion

---

# Accordion

Collapsible panel component for expanding and collapsing content.

## Examples

<code src="./demos/demo1.jsx"></code>

## Accordion.Group

### Props

| Prop     | Description     | Type                      | Default |
| -------- | --------------- | ------------------------- | ------- |
| value    | Active index    | `number`                  | -       |
| onChange | Change callback | `(index: number) => void` | -       |
| children | Content         | `ReactNode`               | -       |

### Ref

| Prop           | Description         | Type                      |
| -------------- | ------------------- | ------------------------- |
| rootDOM        | Root element        | `HtmlDivElement`          |
| getRootDOM     | Get root element    | `() => HtmlDivElement`    |
| getActiveIndex | Get active index    | `() => number`            |
| openIndex      | Open specific index | `(index: number) => void` |
| close          | Close all           | `() => void`              |

## Accordion.Item

### Props

| Prop           | Description                                        | Type                 | Default                      |
| -------------- | -------------------------------------------------- | -------------------- | ---------------------------- |
| open           | Whether the panel is expanded                      | `boolean`            | `true`                       |
| title          | Panel title                                        | `ReactNode`          | -                            |
| minHeight      | Minimum height (px) to keep visible when collapsed | `number`             | -                            |
| headerRender   | Custom header renderer                             | `(ctx) => ReactNode` | -                            |
| ellipsisRender | Custom lyrixi-accordion-item-ellipsis renderer     | `(ctx) => ReactNode` | -                            |
| arrowClassName | Arrow icon class name                              | `string`             | `'lyrixi-iconfont-arrow-up'` |
| arrowPosition  | Arrow position                                     | `'left' \| 'right'`  | `'right'`                    |
| arrowRender    | Custom arrow renderer                              | `(ctx) => ReactNode` | -                            |
| children       | Panel content                                      | `ReactNode`          | -                            |

### Events

| Event   | Description        | Type         |
| ------- | ------------------ | ------------ |
| onOpen  | Triggered on open  | `() => void` |
| onClose | Triggered on close | `() => void` |

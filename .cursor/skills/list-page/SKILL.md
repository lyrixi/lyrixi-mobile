---
name: list-page-full
description: >
  Generates complete List demo pages under src/pages/List/demos/Common in this project, including directory layout, request helpers, and full Page.Main contents. Use when creating or updating list pages that behave like a single reusable List control.
---

# List Page Full Implementation (src/pages/List/demos/Common)

## When to use this skill

- You are working under `src/pages/List/demos/Common` in this repository.
- You want to **create or modify a List demo page** as a complete, functional example.
- List pages in this project are treated as a **single composite control**, so this skill is allowed to generate full UI and logic.

This skill is **project-specific** and must only be used in this repo.

## Core rules

1. **Scope**

   - Operate only under `src/pages/List/demos/Common`.
   - Treat the List page as a **full-featured demo** of the list control (not just a skeleton).

2. **Directory & files**

   - You **may create**:
     - New list demo directories and entry files (e.g. `src/pages/List/demos/Common/index.jsx` or sub-demo files).
     - Helper modules for the List demo, such as:
       - `formatPayload.js`
       - `formatResult.js`
       - `formatViewItem.jsx`
       - `Main/index.jsx`
     - These helpers should mirror existing pattern(s) already present in `src/pages/List/demos/Common`.

3. **Full Page implementation**

   - You **must generate** a usable page with:
     - Proper imports from `lyrixi-mobile` (e.g. `Page`, `List`, `Form`, `Button`, `Card`, etc.) and from project utilities (`Request`, `DateUtil`, etc.), following AI and repo rules.
     - A default exported React component that returns a `<Page>` structure with:
       - `Page.Header` (if used in existing examples),
       - `Page.Main` containing the functional List demo,
       - `Page.Footer` if appropriate.
   - Inside `<Page.Main>`, you are allowed to:
     - Render `List` and its related components.
     - Wire up search/filter controls, toolbars, and pagination as shown in existing demos.
     - Use helper functions like `formatPayload`, `formatResult`, and `formatViewItem`.

4. **Requests and data wiring**

   - You **may and should generate**:
     - Request helper(s) that call the backend or mock API via `Request` utility (or equivalent used in existing list demos).
     - Wiring between UI events (e.g. search, filters, pagination) and those request helpers.
   - Respect the idea that the list demo is essentially a **configurable control**:
     - Keep logic modular and reusable where possible.
     - Avoid hard-coding domain-specific details that conflict with existing patterns.

5. **Follow existing patterns**

   - Before generating, inspect current List demos under:
     - `src/pages/List/demos/Common/`
     - including `Main/index.jsx`, `formatPayload.js`, `formatResult.js`, `formatViewItem.jsx`, and related files.
   - Mirror:
     - File naming and folder layout.
     - Prop naming for the List component(s).
     - How data is transformed in helpers (payload/result/view item).

6. **Project coding rules**
   - Respect `ai/README.md` and `.cursorrules`:
     - Use only whitelisted components (`Page`, `List`, `Form`, `ToolBar`, etc.).
     - Use existing utilities (`Request`, `DateUtil`, `DOMUtil`, etc.) instead of inventing new helpers.
     - Follow import style guidelines (barrel imports from `lyrixi-mobile` in demos).

## Step-by-step behavior

When this skill is active and the user asks to add or update a List demo under `src/pages/List/demos/Common`:

1. **Analyze existing List demo**

   - Read the current implementation in `src/pages/List/demos/Common`:
     - `index.jsx` (or entry file),
     - `Main/index.jsx`,
     - `formatPayload.js`,
     - `formatResult.js`,
     - `formatViewItem.jsx`.

2. **Plan the structure**

   - Decide whether to:
     - Extend the existing demo, or
     - Add a new variant file/folder (keeping consistency with current structure).

3. **Generate or update code**

   - Create/update the List demo so that:
     - It includes working request wiring.
     - It uses helper modules for transforming payloads/results/view-items.
     - `Page.Main` contains the actual list component and supporting controls.

4. **Ensure completeness**
   - The resulting page should be:
     - Importable and buildable without TypeScript/ESLint errors (within normal constraints).
     - Readable as a full demo of the list control.
     - Aligned with the project’s design system and utilities.

## Examples

### Example: new list demo variant

- **User request**: “在 `src/pages/List/demos/Common` 里再加一个带筛选的列表 demo。”
- **Behavior with this skill**:
  - Create a new variant file or folder as per existing conventions.
  - Add helpers for payload/result/view-item if needed.
  - Implement a full `<Page>` with `Page.Main` rendering a `List` plus filters, wired to request helpers.

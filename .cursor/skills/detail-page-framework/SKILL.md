---
name: detail-page-framework
description: >
  Sets up Detail page scaffolding under src/pages/Detail in this project. Use when creating or restructuring Detail pages so that only directory layout, request hooks, and high-level Page skeleton are generated, and no content is written inside Page.Main.
---

# Detail Page Framework (src/pages/Detail)

## When to use this skill

- You are working under `src/pages/Detail` in this repository.
- You want to **create or refactor a Detail page** structure (folders, files, basic React/Page skeleton).
- You **do NOT** want the agent to generate UI contents inside `Page.Main` (only the outer frame and data/request wiring).

This skill is **project-specific** and must only be used in this repo.

## Core rules

1. **Scope**

   - Operate only under `src/pages/Detail`.
   - Treat each Detail page as a page-level module (can have subfolders like `demos`, `Common`, `Main`, etc. if that matches existing patterns).

2. **Directory & files**

   - You **may create**:
     - Page entry files, e.g. `index.jsx` or similar pattern already present in `src/pages/Detail`.
     - Shared helpers (e.g. `formatPayload.js`, `formatResult.js`, `formatViewItem.jsx`) **only if** the existing pattern in this repo uses those for Detail pages.
   - Follow existing naming and placement conventions in `src/pages/Detail` (inspect current files first and mirror their structure).

3. **Page skeleton only (no inner UI)**

   - You **must generate** the outer page shell:
     - imports (`Page`, `Form`, `List`, `Request` or other components/utilities used by existing Detail pages),
     - the top-level React component (e.g. `export default () => { ... }`),
     - `return` statement with `<Page>`, `<Page.Header>`, `<Page.Main>`, `<Page.Footer>` as appropriate.
   - **Inside `<Page.Main>`:**
     - **Do NOT generate** actual UI contents such as form fields, lists, buttons, cards, etc.
     - Instead, leave it empty or with a very lightweight placeholder comment, e.g.:
       - `{/* TODO: Detail content */}`
   - Do not add complex JSX trees or business logic inside `Page.Main` in this skill.

4. **Requests and data wiring**

   - You **may generate**:
     - Request helpers or hooks for Detail pages (e.g. functions that call `Request` to load detail data, save updates, etc.).
     - Basic wiring code to fetch Detail data (e.g. `useEffect` that calls a request function, or a custom hook).
   - Keep these **framework-level** and generic:
     - No hardcoding of specific fields or business rules beyond what is already a clear pattern in the codebase.
     - Prefer placeholders (e.g. TODO comments) where domain-specific fields would go.

5. **Follow existing patterns**

   - Before generating anything, inspect existing files in `src/pages/Detail` and:
     - Reuse the same **imports from `lyrixi-mobile`** (e.g. `Page`, `Form`, `List`) and project utils (e.g. `Request`, `DateUtil`), according to AI.md and project rules.
     - Mirror the **folder structure** and **file naming** (e.g. if current Detail demos live in `src/pages/Detail/demos/Form`, follow that).
   - Do not introduce new architectural patterns; extend the established ones.

6. **Project coding rules**
   - Respect the rules from `AI.md` and `.cursorrules`:
     - Use only the allowed components (e.g. `Page`, `Card`, `Form`, `List`, etc.).
     - Use existing utils like `Request`, `DOMUtil`, `DateUtil` instead of inventing new helpers.
     - Follow the import rules (relative imports for `src/components` / `src/utils`, package imports for demos/business code if applicable).

## Step-by-step behavior

When this skill is active and the user asks to add or refactor a Detail page under `src/pages/Detail`:

1. **Analyze existing pattern**

   - Read nearby Detail samples, e.g. under `src/pages/Detail/demos/` (like `Form/index.jsx`) to understand how pages are structured.

2. **Plan directory structure**

   - Decide what directories/files to create (e.g. `demos/SomeDetail/index.jsx`, `Main/index.jsx`, helper files).
   - Ensure the plan matches existing naming and placement.

3. **Generate scaffolding**

   - Create or update files with:
     - Imports for `Page` and commonly used components.
     - A default exported React component with `<Page>` skeleton.
     - Optional data/request helpers.
   - **Leave `<Page.Main>` body empty or with a TODO comment only.**

4. **Do not implement UI**
   - Do not add lists, forms, buttons, layouts, or business components inside `Page.Main`.
   - Do not guess domain fields; only scaffold.

## Examples

### Example: new Detail demo page

- **User request**: “在 `src/pages/Detail/demos/Foo` 下加一个详情页 demo，帮我搭框架和请求。”
- **Behavior with this skill**:
  - Create `src/pages/Detail/demos/Foo/index.jsx` with:
    - `Page` skeleton,
    - placeholder request hook or function,
    - **empty `Page.Main` (with a comment)**.
  - Optionally create helper files if they match existing patterns.

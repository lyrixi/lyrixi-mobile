---
name: edit-page-framework
description: >
  Scaffolds Edit demo pages under src/pages/Edit/demos/Common in this project. Use when creating or restructuring Edit pages so that only directory layout, request helpers, and high-level Page skeleton are generated, and no content is written inside Page.Main.
---

# Edit Page Framework (src/pages/Edit/demos/Common)

## When to use this skill

- You are working under `src/pages/Edit/demos/Common` in this repository.
- You want to **create or refactor an Edit page demo** structure (folders, files, basic React/Page skeleton).
- You **do NOT** want the agent to generate UI contents inside `Page.Main` (only the outer frame and data/request wiring).

This skill is **project-specific** and must only be used in this repo.

## Core rules

1. **Scope**

   - Operate only under `src/pages/Edit/demos/Common`.
   - Treat each Edit demo as a page-level module, but this skill focuses on **framework-level scaffolding**, not final UI.

2. **Directory & files**

   - You **may create**:
     - Page entry files (e.g. `index.jsx`) under `src/pages/Edit/demos/Common/...`.
     - Shared helpers that match existing patterns (e.g. `formatPayload.js`, `formatResult.js`, `formatViewItem.jsx`, etc.), but only if similar files already exist in nearby Edit demos.
   - Always inspect and mirror the current structure/patterns in `src/pages/Edit/demos/Common`.

3. **Page skeleton only (no inner UI)**

   - You **must generate** the outer page shell:
     - imports from `lyrixi-mobile` (e.g. `Page`, `Form`, `Button`, etc.) as seen in existing Edit demos,
     - top-level React component(s) (e.g. `export default () => { ... }`),
     - `return` statement with `<Page>`, `<Page.Header>`, `<Page.Main>`, `<Page.Footer>` as appropriate.
   - **Inside `<Page.Main>`:**
     - **Do NOT generate** form fields, lists, toolbars, or any detailed layout.
     - Leave it empty or with a simple TODO comment, for example:
       - `{/* TODO: Edit page content */}`
   - The purpose is to provide the outer frame; actual inner content will be implemented outside of this skill.

4. **Requests and data wiring**

   - You **may generate**:
     - Request helpers / hooks used by Edit pages (e.g. load initial data, submit form, save entity).
     - Basic state and effect wiring (e.g. `useEffect` triggers to fetch initial data).
   - Keep these helpers **generic and framework-level**:
     - Do not guess specific field names or validation.
     - Use placeholders or TODO comments where domain-specific logic would go.

5. **Follow existing patterns**

   - Before generating anything, inspect existing files in `src/pages/Edit/demos/Common`, especially:
     - `index.jsx` in existing demos,
     - any `formatPayload.js`, `formatResult.js`, etc.
   - Mirror:
     - Import style and allowed components from `lyrixi-mobile`.
     - Use project utilities (`Request`, `DateUtil`, etc.) instead of creating new ones.
     - Follow the same way of organizing helpers and main components.

6. **Project coding rules**
   - Respect the rules from `AI.md` and `.cursorrules`:
     - Use only allowed UI components and utilities.
     - Use barrel imports from `lyrixi-mobile` for demos/business code.
     - Avoid inventing new tools/components when an existing one is available.

## Step-by-step behavior

When this skill is active and the user asks to add or refactor an Edit demo under `src/pages/Edit/demos/Common`:

1. **Analyze existing Edit demos**

   - Read current files (e.g. `src/pages/Edit/demos/Common/index.jsx`) to understand how Edit pages are structured.

2. **Plan the directory structure**

   - Decide which subfolder and file names to use, based on existing conventions.

3. **Generate scaffolding**

   - Create/update files with:
     - Imports for `Page`, `Form`, and any core components.
     - A default exported React component with `<Page>` skeleton.
     - Optional request helpers or hooks.
   - **Keep `<Page.Main>` empty or with a TODO comment only.**

4. **Do not implement form/UI details**
   - Do not add concrete field definitions, validation, or layout within `Page.Main`.
   - Leave space for later manual or other-skill-based implementation.

## Examples

### Example: new Edit demo page

- **User request**: “在 `src/pages/Edit/demos/Common` 下面加一个新的编辑页 demo，帮我搭框架和请求。”
- **Behavior with this skill**:
  - Create the new demo directory and `index.jsx`.
  - Add request helpers (e.g. load + submit functions) following existing conventions.
  - Export a component with `<Page>` skeleton and empty `Page.Main` body (with a TODO comment).

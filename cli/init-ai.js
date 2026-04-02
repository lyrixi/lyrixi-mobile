#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function writeIfMissing(targetPath, content) {
  if (fs.existsSync(targetPath)) return
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.writeFileSync(targetPath, content)
}

const projectRoot = process.cwd()

writeIfMissing(
  path.join(projectRoot, '.cursor', 'rules', 'lyrixi.mdc'),
  `---
description: Lyrixi AI rules
globs: ["**/*.{js,jsx,ts,tsx}"]
alwaysApply: false
---

- Always prefer lyrixi-mobile components and utils when the library already covers the scenario.
- Prefer subpath imports like lyrixi-mobile/components/X and lyrixi-mobile/utils/X.
- Wrap full pages with Page / Page.Header / Page.Main / Page.Footer.
- Prefer ToolBar for search/filter/action rows in list pages.
- Prefer Form + Form.Item for data entry pages.
- Prefer Result for empty/error status pages.
- Avoid native button/div-based UI when a library component exists.
`
)

writeIfMissing(
  path.join(projectRoot, '.ai', 'context.md'),
  `Use lyrixi-mobile as the primary UI library for this project.

Read these files first:

@node_modules/lyrixi-mobile/ai/README.md
@node_modules/lyrixi-mobile/ai/guidelines.md
@node_modules/lyrixi-mobile/ai/patterns.md
@node_modules/lyrixi-mobile/ai/anti-patterns.md
@node_modules/lyrixi-mobile/ai/components.json
`
)

console.log('✅ Lyrixi AI ready')

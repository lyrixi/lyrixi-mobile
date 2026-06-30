# 参考文档复制与改写

参考文档：`.ai/docs/components/{reference}/` 三件套 + `demos/`（catalog 中 `docs`）  
生成目标：新组件包目录（形态与文件布局见 [develop-component-structure.md](../../../rules/develop-component-structure.md)）

**禁止** Read `src/` 下参考组件或其它库内实现；示例写法只读 `.ai/docs/components/{reference}/demos/`。

生成时以 **component-spec.json / 问答结果** 为准，按形态 A/B/C 落目录，并同步 `.ai/docs` 与 `mapping.json`。

## 形态与目录映射

| 形态    | 参考                      | 生成时保留                                                                  | 改写                                                |
| ------- | ------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| C 单一  | Amount / Badge            | `index.tsx` 或 `{Name}.tsx` + `index.ts`、`{Name}.less`、`types/`、`demos/` | 替换组件名、Props、样式 class 前缀 `lyrixi-{kebab}` |
| B 父+子 | Button / Accordion / Flex | 父 `{Name}.tsx`、子文件或子目录、`*.modules.types.ts`                       | 按 spec 增删子组件挂载；内部模块不对外挂载          |
| A 纯子  | Input                     | 各子目录 `Sub/index.tsx`、`index.ts` 挂载                                   | 按 spec 建子目录；`const Foo = {} as FooComponents` |

包名 = 目录名 = 对外导出名，**PascalCase**。Less 类名与 CSS 变量前缀遵守 `.ai/rules`（`--lyrixi-*` / `@lyrixi-*`）。

## 实现改写清单

1. **类型** — `types/{Name}.types.ts`（+ 子组件类型、`.modules.types.ts`）；遵守 [develop-types-structure.md](../../../rules/develop-types-structure.md)、[develop-types-coding.md](../../../rules/develop-types-coding.md)。
2. **实现** — `forwardRef`（若 spec 需要 Ref）；内部顺序见 [develop-sequence-coding.md](../../../rules/develop-sequence-coding.md)；命名见 [develop-name.md](../../../rules/develop-name.md)；Props 分组注释见 [component-props-annotation.mdc](../../../rules/component-props-annotation.mdc)。
3. **样式** — `{Name}.less`；变量用 `@lyrixi-*` / `var(--lyrixi-*)`。
4. **入口** — `index.ts` 或 `index.tsx`；在库导出入口按字母序注册（**Modal 保持最先导出**）。
5. **国际化** — 若 `i18n.needed`：`LocaleUtil.locale('中文', 'lyrixi_xxx')`；遵守 [develop-locale.md](../../../rules/develop-locale.md)。
6. **依赖** — 业务与 demo 从 `lyrixi-mobile` barrel 引入；内库维护场景用相对路径 + 注释块（见 `.cursorrules`）。禁止自造已有组件/工具。

## 文档改写

### 组件包站点文档

- `index.zh-CN.md`、`index.en-US.md` — 结构见 [develop-doc-structure.md](../../../rules/develop-doc-structure.md)。

### .ai/docs 三件套（AI 主文档）

在 `.ai/docs/components/{Name}/` 创建：

| 文件                | 内容                                                  |
| ------------------- | ----------------------------------------------------- |
| `{Name}-props.ts`   | Props/Ref；JSDoc 与联合类型完整，与实现 `types/` 一致 |
| `{Name}-rules.md`   | 何时使用、子组件、必须用库组件、demo 索引             |
| `{Name}-example.md` | 运行脚本生成薄索引（见下）                            |
| `demos/*.tsx`       | 示例源码；demo 从 `lyrixi-mobile` 引入                |

更新 [`.ai/docs/mapping.json`](../../../docs/mapping.json) `components` 数组：新增 `name`、`keywords`（`|` 分隔）、`props` / `rule` / `example` 路径。

刷新 example 索引（仓库根目录）：

```bash
node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs {Name}
```

> 维护流程见 [sync-ai-docs](../../sync-ai-docs/SKILL.md)。`sync-ai-docs-demos.mjs` 从 `src` 同步 demo；**写代码时** demo 优先读 `.ai/docs/components/{Name}/demos/`，不通过脚本读 `src`。

## 不要复制

- 参考 demo 里与业务无关的硬编码数据（可保留最小演示数据）。
- 参考文档未涉及的子模块或多余类型文件。
- 违反形态规范的目录结构（如形态 C 建空 `*.modules.types.ts`）。

## 校验

```bash
npx tsc --noEmit
```

修复新增文件中的类型错误后再交付。

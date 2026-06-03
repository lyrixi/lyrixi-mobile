# 创建软链接共享配置

在本仓库开发时，可在项目根目录执行：

```bash
npm run create-ai
```

业务项目安装 `lyrixi-mobile` 后使用 `npx lyrixi-mobile-ai`（逻辑相同，模板来自 `node_modules`）。

## cursor

```bash
ln -sfn ../.ai/docs .cursor/docs
ln -sfn ../.ai/memory .cursor/memory
ln -sfn ../.ai/rules .cursor/rules
ln -sfn ../.ai/skills .cursor/skills
ln -sfn ../.ai/decisions .cursor/decisions
ln -sfn ../.ai/archive .cursor/archive
```

## claude

```bash
ln -sfn ../.ai/commands .claude/commands
ln -sfn ../.ai/docs .claude/docs
ln -sfn ../.ai/memory .claude/memory
ln -sfn ../.ai/decisions .claude/decisions
ln -sfn ../.ai/archive .claude/archive
ln -sfn ../.ai/rules .claude/rules
ln -sfn ../.ai/skills .claude/skills
ln -sfn ../.ai/CLAUDE.md .claude/CLAUDE.md
```

若曾链接 `knowledge`，请删除旧链接后改用 `docs`。

---
description: 将 decisions/ 中的当前决策归档到 archive/decisions/<标题>.md
---

# /save-decisions

把 `.ai/decisions/` 里**当前活跃**的决策材料归档到 `.ai/archive/decisions/`，并清空活跃区。

## 输入

- `/save-decisions` — 自动根据内容总结文件名（标题）
- `/save-decisions <标题>` — 使用指定标题（会 slug 化为安全文件名）

## 读取范围

扫描 `.ai/decisions/` 下所有 `*.md`，**排除** `README.md`。

若仅有空模板（无实质条目、无待办、无方案正文），提示「无可归档内容」并停止。

## 执行流程

1. **汇总正文**  
   按文件名排序拼接各 `*.md` 全文，保留原有标题层级。

2. **生成标题**  
   - 有参数：用用户给的标题  
   - 无参数：用 3–8 个词概括主题（中文或英文，与正文语言一致），避免「决策」「归档」等空泛词  
   - 文件名：仅保留字母数字、中文、连字符；空格→`-`；长度 ≤ 60；不加日期前缀（除非与已有文件重名，则前缀 `YYYY-MM-DD-`）

3. **确认**（无参数或标题含糊时）  
   用 `AskUserQuestion` 展示：建议文件名、正文前 20 行预览 → 确认 / 改标题 / 取消

4. **写入归档**  
   目标：`.ai/archive/decisions/<标题>.md`

   文件头部追加元数据：

   ```markdown
   ---
   archivedAt: <ISO8601>
   sources: [decisions/current.md, ...]
   ---

   # <标题>

   <汇总正文>
   ```

   若目标已存在：提示重名，请改标题或先处理旧归档。

5. **清空活跃区**  
   - `decisions/current.md` 恢复为 README 中的空模板说明  
   - 删除或清空其他已归档的 `decisions/*.md`（保留 `README.md`）

6. **输出摘要**  
   打印归档路径、标题、源文件列表。

## 与 save-memory 的分工

| 命令 | 目录 | 内容 |
|------|------|------|
| `/save-memory` | `memory/MEMORY.md` | 永久业务记忆 |
| `/save-decisions` | `decisions/` → `archive/decisions/` | 计划与待拍板问题 |

不要把组件 props 文档写入 `decisions/`（组件参考在 `docs/`）。

## 不允许

- 未确认标题就覆盖已有 `archive/decisions/<标题>.md`
- 归档时不保留源文结构（禁止只写一行摘要代替全文）
- 把 `archive/` 下的文件当作活跃决策继续编辑

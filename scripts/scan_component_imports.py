#!/usr/bin/env python3
"""
lyrixi-develop-sequence: import 分组走查（src/components 全量）。

在去掉 /* 测试使用 ... */ 块后检测:
  1) 任意 from 'react' 等不得出现在非 React 的 from 之后
  2) 组 1-4 行序不下降 (react, 外部, @别名, 相对)
  3) 若同时有外部包与相对路径: 第一行外部包须早于第一行相对路径
"""
import re
import sys
from pathlib import Path

FROM_RE = re.compile(r"\bfrom\s+['\"]([^'\"]+)['\"]")


def strip_test_blocks(s: str) -> str:
  i = 0
  parts: list[str] = []
  while True:
    j = s.find("/* 测试使用", i)
    if j == -1:
      parts.append(s[i:])
      break
    parts.append(s[i:j])
    k = s.find("*/", j)
    if k == -1:
      parts.append(s[j:])
      break
    i = k + 2
  return "".join(parts)


def is_react_mod(m: str) -> bool:
  return m in ("react", "react-dom") or m.startswith("react/")


def classify(m: str) -> int:
  if is_react_mod(m):
    return 1
  if m.startswith("./") or m.startswith("../") or (m and m[0] == "."):
    return 4
  if m.startswith("@/") or (m.startswith("@") and not m.startswith("@@")):
    return 3
  return 2


def extract(path: Path) -> list[tuple[int, str]]:
  text = strip_test_blocks(path.read_text(encoding="utf-8", errors="replace"))
  out: list[tuple[int, str]] = []
  for i, line in enumerate(text.splitlines(), 1):
    t = line.strip()
    if t.startswith("//") and "import" not in t:
      continue
    if not t.startswith("import") and not re.match(r"^\s*\}\s*from", t):
      continue
    m = FROM_RE.search(line)
    if m:
      out.append((i, m.group(1)))
  return out


def main() -> int:
  root = Path("src/components")
  react_after: list[str] = []
  g2_after_g4: list[str] = []
  non_mono: list[str] = []
  n = 0
  for p in sorted(list(root.rglob("*.ts")) + list(root.rglob("*.tsx"))):
    if p.name.endswith(".d.ts"):
      continue
    n += 1
    try:
      it = extract(p)
    except OSError:
      continue
    if not it:
      continue
    mods = [m for _, m in it]
    lns = [ln for ln, _ in it]
    for j in range(len(mods)):
      for i in range(0, j):
        if is_react_mod(mods[j]) and not is_react_mod(mods[i]):
          react_after.append(f"{p} line {lns[j]}: {mods[j]!r} after {mods[i]!r}")
    first_rel = next((lns[i] for i, m in enumerate(mods) if m.startswith((".",))), None)
    first_ext = next((lns[i] for i, m in enumerate(mods) if classify(m) == 2), None)
    if first_rel is not None and first_ext is not None and first_rel < first_ext:
      g2_after_g4.append(f"{p} first rel {first_rel} before first ext {first_ext}")
    g_prev = classify(mods[0])
    for i in range(1, len(mods)):
      g = classify(mods[i])
      if g < g_prev:
        non_mono.append(f"{p} line {lns[i]}: {mods[i]!r} (g{g}) after g{g_prev} ({mods[i-1]!r})")
        break
      g_prev = g
  ur = list(dict.fromkeys(react_after))
  print("==== import: react 在其它包之后 ====", len(ur))
  for x in ur:
    print(" ", x)
  ug4 = list(dict.fromkeys(g2_after_g4))
  print("==== import: 先相对、后外部包 ====", len(ug4))
  for x in ug4:
    print(" ", x)
  um = list(dict.fromkeys(non_mono))
  print("==== import: 分组 1-4 非单调 ====", len(um))
  for x in um:
    print(" ", x)
  print(f"==== 已扫描 {n} 个 ts/tsx 文件 (src/components) ====")
  bad = len(ur) + len(ug4) + len(um)
  print("import 类问题合计:", bad, file=sys.stderr)
  return 0 if not bad else 1


if __name__ == "__main__":
  raise SystemExit(main())

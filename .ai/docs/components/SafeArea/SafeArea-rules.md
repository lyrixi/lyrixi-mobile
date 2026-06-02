# SafeArea Rules

> 源文档：`src/components/SafeArea/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `SafeArea`，**禁止**自造同类 UI。
- 子组件写法：`SafeArea.Sub`（与库导出一致）。

## 何时使用
- 需要适配安全区域时
- 需要在有刘海屏的设备上显示内容时
- 需要避免内容被遮挡时

## Demo 索引（本目录 `demos/`）
- `demos/SafeArea.tsx`

## 查阅顺序
- Props：`SafeArea-props.json`
- 示例：`SafeArea-example.md`
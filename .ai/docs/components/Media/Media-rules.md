# Media Rules

> 源文档：`src/components/Media/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `Media`，**禁止**自造同类 UI。
- 子组件写法：`Media.Sub`（与库导出一致）。

## 何时使用
- 需要显示图片、视频时
- 需要上传图片、视频时
- 需要预览图片、视频时

## 子组件
- `Media.List`
- `Media.PreviewModal`
- `Media.PreviewMain`
- `Media.Mark`

## Demo 索引（本目录 `demos/`）
- `demos/Media.tsx`
- `demos/MediaList.tsx`
- `demos/MediaPreviewModal.tsx`
- `demos/MediaPreviewMain.tsx`
- `demos/MediaMark.tsx`

## 查阅顺序
- Props：`Media-props.json`
- 示例：`Media-example.md`
# DatePicker Rules

> 源文档：`src/components/DatePicker/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `DatePicker`，**禁止**自造同类 UI。
- 子组件写法：`DatePicker.Sub`（与库导出一致）。

## 何时使用
- 需要选择日期时
- 需要选择时间时
- 需要选择日期范围时

## 子组件
- `DatePicker.TypeSwitcher`
- `DatePicker.RangeSelector`

## Demo 索引（本目录 `demos/`）
- `demos/DatePickerCombo.tsx`
- `demos/DatePickerComboInput.tsx`
- `demos/DatePickerRangeCombo.tsx`
- `demos/DatePickerMultipleCombo.tsx`
- `demos/DatePickerWeekCombo.tsx`
- `demos/DatePickerTypeSwitcher.tsx`
- `demos/DatePickerRangeSelector.tsx`

## 查阅顺序
- Props：`DatePicker-props.ts`
- 示例：`DatePicker-example.md`
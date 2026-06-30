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
- `DatePicker.Combo`
- `DatePicker.Main`
- `DatePicker.Modal`
- `DatePicker.MultipleCombo`
- `DatePicker.MultipleMain`
- `DatePicker.MultipleModal`
- `DatePicker.RangeCombo`
- `DatePicker.RangeMain`
- `DatePicker.RangeModal`
- `DatePicker.RangeSelector`
- `DatePicker.TypeSwitcher`
- `DatePicker.WeekCombo`
- `DatePicker.WeekMain`
- `DatePicker.WeekModal`
- `DatePicker.getDefaultRanges`
- `DatePicker.getRangeId`
- `DatePicker.getTitle`

## 静态方法
- `DatePicker.getTitle`
- `DatePicker.getDefaultRanges`
- `DatePicker.getRangeId`

## Demo 索引（本目录 `demos/`）
- `demos/DatePickerCombo.tsx`
- `demos/DatePickerComboInput.tsx` — `DatePicker.Combo` 输入框形态
- `demos/DatePickerRangeCombo.tsx`
- `demos/DatePickerMultipleCombo.tsx`
- `demos/DatePickerWeekCombo.tsx`
- `demos/DatePickerTypeSwitcher.tsx`
- `demos/DatePickerRangeSelector.tsx`
- `demos/DatePickerRangeMain.tsx`
- `demos/DatePickerTypes.tsx`

## 查阅顺序
- Props：`DatePicker-props.ts`
- 示例：`DatePicker-example.md`
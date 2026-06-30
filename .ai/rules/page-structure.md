# 业务目录及文件结构命名规范

`src/examples/**` `src/pages/**` 与组件下的 `demos/**` 属于业务侧，此 rules 仅对业务侧生效

## 页面名称

总则: **参考主流前端习惯**, 使用**意义贴切、可读性好的英文**, 避免拼音与无意义缩写。

- 列表后缀：`List`
- 明细列表后缀(List 下钻仍然是列表时使用此命名)：`Record`
- 编辑后缀：`Edit`
- 详情后缀（只读展示）：`Detail`

## 注释与用途说明

业务页面须让阅读者（含 AI）能快速理解**每个页面、方法、变量的用途**。命名能自解释的仍建议保留简短注释，避免只堆代码无说明。

### 页面 / 模块

| 位置 | 要求 |
|------|------|
| `index.tsx` 入口 | 文件或页面组件上方说明页面职责（如「订单列表：筛选 + 分页 + 跳转详情」） |
| `Header` / `Main` / `Footer` | 组件上方说明渲染区域与对外暴露能力（如「筛选区，暴露 onSearch」） |
| `api/` | 每个请求/转换函数说明数据来源、调用时机、与 `serverXxx` / `localXxx` 的关系 |
| `utils/` | 每个工具函数说明解决什么页面级问题 |

### 变量

- **state / ref**：上一行 `//` 说明存什么、驱动什么 UI 或逻辑（如 `// 列表筛选条件，变更后 Main 重新 query`）。
- **派生值、临时变量**：名称不足以表达业务含义时必须注释（如 `// 提交前去掉空筛选项`）。
- **常量、枚举式对象**：说明业务含义或取值约定。

### 方法

- 每个函数（含 `loadData`、`handleSave`、`formatPayload`、`serverData` 等）在定义上方用 **`//` 一行**或 **`/** JSDoc */`** 说明：**做什么、何时调用、返回值用途**。
- 事件处理 `handleXxx` 与 props 回调 `onXxx` 对应时，注释可写明触发场景（如 `// 头部点击查询，合并筛选项并刷新列表`）。

### 复杂入参

下列情况须对**入参**单独说明（函数上方 JSDoc `@param`，或在 `types.ts` 里为参数对象字段写注释）：

- 参数个数 **> 3**，或含多个可选字段的对象
- 参数为 **回调**（说明何时调用、回调参数含义）
- 参数为 **联合类型 / 字符串字面量**（说明各取值业务含义）
- **api** 层 `queryXxx` / `saveXxx` 的 `payload`、`options` 等

简单入参（1～2 个且含义 obvious）可只在函数注释里概括，不必逐参数 `@param`。

```tsx
/** 将 Main 勾选行转为批量删除接口 payload */
function serverDeletePayload(rows: OrderRow[]): { ids: string[] } {
  return { ids: rows.map((row) => row.id) }
}

/**
 * 加载列表数据
 * @param queryParams 筛选 + 分页；变更 Header 筛选或 Main 翻页时传入
 * @param options.action 区分首屏 load / 下拉 refresh / 翻页 append
 */
async function loadData(
  queryParams: QueryParams,
  options?: { action?: 'load' | 'refresh' | 'append' }
) {
  // ...
}
```

## 页面结构

### api 文件夹

所有的数据封装与转换、数据请求、数据响应都在 api 里完成

1. 数据请求方法名:

- 增/改提交: `saveXxx`
- 删除: `deleteXxx`
- 查询: `queryXxx`

2. 数据封装与转换：

- 前端数据转成服务端所需数据: `serverXxx`，如 `serverData`、`serverPhoto`
- 服务端数据转成前端数据: `localXxx`，如 `localData`、`localPhoto`

### utils 工具文件夹

页面级的工具方法

### Header 组件文件夹

渲染头部内容(包含 Filter 筛选组件等), 暴露操作的方法, 例如: onSearch 等

### Footer 组件文件夹

渲染底部内容, 暴露操作的方法, 例如: onSave 等

### Main 组件文件夹

渲染中间主区域, 暴露操作的方法, 例如: onChange 等

### index 页面入口文件

- 查询参数: `[queryParams, setQueryParams] = useState(null)`
- 加载数据: 引入`api`, 定义`loadData`调用 api 的 queryData
- 渲染页面: 引入`Header`、`Main`、`Footer`

示例:

```jsx
/** 示例列表页：筛选条件 + 列表展示 + 底部保存入口 */
const Example = () => {
  // 列表筛选与分页参数，Header 修改后传给 Main 触发 query
  let [queryParams, setQueryParams] = useState({})

  // 提交当前表单/选中项，调用 api/saveData
  const handleSave = () => {
    // ...
  }

  return (
    <Page>
      {/* 头部：筛选与搜索 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          // 同步筛选项并驱动 Main 重新加载
          queryParams = newQueryParams
          setQueryParams(newQueryParams)
        }}
      />

      {/* 主体：列表与分页 */}
      <Main queryParams={queryParams} />

      {/* 底部：主操作 */}
      <Footer onSave={handleSave} />
    </Page>
  )
}
```

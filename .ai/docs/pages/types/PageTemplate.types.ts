/**
 * 页面模板公共类型（create-page 问答 → page-spec.json → 生成代码时替换模板动态内容）
 */

/** Q3：输出路径（必填） */
export interface PageOutputSpec {
  /** 相对仓库根，如 `src/pages/OrderList` */
  outputPath: string
  /** PascalCase 入口组件名，与目录一致 */
  pageName: string
}

/** Q2 / Q2b：设计说明 */
export interface PageDesignSpec {
  hasHiFi?: boolean
  /** 布局、Header/Main/Footer、字段增删说明 */
  designNotes?: string
}

/** Q8：后台 mock 数据（用于推导展示/表单/列表字段） */
export interface PageMockDataSpec {
  /** user=用户提供 sample；inferred=无 mock 时推测字段 */
  source: 'user' | 'inferred'
  /** 用户粘贴的成功响应示例（通常为 data，或含 code/data 的完整 response） */
  sample?: unknown
}

/** Q7：接口出参映射（填空，有默认值） */
export interface ApiResponseMapping {
  /** 成功判定表达式，默认 `result.code === '1'` */
  success?: string
  /** 失败判定表达式，默认 `result.code !== '1'` */
  error?: string
  /** 业务数据取值表达式，默认 `result.data` */
  data?: string
  /** 错误文案取值表达式，默认 `result.message` */
  message?: string
}

export const DEFAULT_API_RESPONSE_MAPPING: ApiResponseMapping = {
  success: "result.code === '1'",
  error: "result.code !== '1'",
  data: 'result.data',
  message: 'result.message'
}

/** Q5–Q8：单个接口端点 */
export interface ApiEndpointSpec {
  url: string
  method: 'GET' | 'POST'
  /** 入参：字段名、类型、来源（URL 参数 / queryParams / Device.getUrlParameter） */
  request?: string
  /** 出参映射（Q7 填空；缺省字段用 DEFAULT_API_RESPONSE_MAPPING） */
  response?: ApiResponseMapping
}

/** 表单/筛选项（Edit Form.Item、List Header/Filter） */
export interface DynamicFormField {
  /** Form.Item name / 查询参数字段名 */
  name: string
  /** 标签文案，生成时用 LocaleUtil.locale */
  label: string
  /** 控件：Input.Text | Select.Combo | DatePicker.Combo 等 */
  component?: string
  /** 校验 rules、initialValue 等补充说明 */
  extra?: string
}

/** 列表项展示映射 → Main/formatViewItem.tsx */
export interface ListItemViewMapping {
  idField?: string
  titleField?: string
  descriptionField?: string
  imageField?: string
  avatarField?: string
  noteField?: string
  contentField?: string
  actionNotes?: string
}

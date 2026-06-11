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

/** Q5–Q8：单个接口端点 */
export interface ApiEndpointSpec {
  url: string
  method: 'GET' | 'POST'
  /** 入参：字段名、类型、来源（URL 参数 / queryParams / Device.getUrlParameter） */
  request?: string
  /** 出参：成功码、data 路径、message 字段 */
  response?: string
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

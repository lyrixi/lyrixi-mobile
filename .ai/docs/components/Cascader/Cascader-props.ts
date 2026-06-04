/**
 * Cascader Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface CascaderComboProps {
  /** 选中的值 */
  value?: any | any[]
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: any | any[]) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean | string[]（Cascader.DistrictCombo 可传如 ['country','province','city','district','street'] 禁用层级）
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 左侧图标 */
  leftIconNode?: ReactNode
  /** 右侧图标 */
  rightIconNode?: ReactNode
  /** 清除按钮渲染 */
  clearRender?: (props: object) => ReactNode
  /** 级联数据 */
  list?: Array<{id: string, name: string, children?: Array}>
  /** 加载数据函数 */
  loadData?: (tabs: Array) => Promise<Array | null>
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 搜索可见 */
  searchVisible?: boolean
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean>
  /** 变化事件 */
  onChange?: (value: any | any[]) => void
}

export interface CascaderModalProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 级联数据 */
  list?: CascaderItem[]
  /** 加载数据 */
  loadData?: (tabs, ctx) => Promise<LoadDataResult>
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: CascaderItem[] | null | undefined) => boolean | Promise<unknown> | void
  /** 搜索事件 */
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => void
  /** 变化事件 */
  onChange?: (value: CascaderItem[], meta?: unknown) => void
}

export interface CascaderMainProps {
  /** 选中的值 */
  value?: CascaderItem[]
  /** 级联数据 */
  list?: CascaderItem[]
  /** 加载数据 */
  loadData?: (tabs, ctx) => Promise<LoadDataResult>
  /** 列表样式 */
  listStyle?: object
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标签栏渲染 */
  tabbarRender?: (params: { list; value; onChange }) => ReactNode
  /** 搜索事件 */
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => unknown
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderDistrictModalProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 地区类型 */
  type?: string
  /** 加载国家 */
  loadCountries?: () => Promise<DistrictResultState>
  /** 加载省市区 */
  loadCountryRegions?: (id?: string | number) => Promise<DistrictResultState>
  /** 加载街道 */
  loadStreets?: (id, ctx?) => Promise<DistrictResultState>
  /** 是否显示 */
  open?: boolean
  /** 最小层级 */
  min?: string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 列表样式 */
  listStyle?: object
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: CascaderItem[] | null | undefined) => boolean | Promise<unknown> | void
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderDistrictMainProps {
  /** 是否显示 */
  open?: boolean
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 地区类型 */
  type?: string
  /** 加载国家 */
  loadCountries?: () => Promise<DistrictResultState>
  /** 加载省市区 */
  loadCountryRegions?: (id?: string | number) => Promise<DistrictResultState>
  /** 加载街道 */
  loadStreets?: (id, ctx?) => Promise<DistrictResultState>
  /** 列表样式 */
  listStyle?: object
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: object
  /** 项类名 */
  itemClassName?: string
  /** 搜索可见 */
  searchVisible?: boolean
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderComboRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface CascaderMainRef {
  /** 主元素 */
  mainElement?: HTMLDivElement
  /** 获取主元素 */
  getMainElement?: () => HTMLDivElement
  /** 更新选中值 */
  update?: (value, opts?: { action?: string }) => void
}

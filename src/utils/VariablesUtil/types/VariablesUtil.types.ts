/** 单个设计变量：className 与 CSS 值一一对应 */
export type Variable = {
  className: string
  value: string
}

/** 按名称索引的变量表 */
export type VariableMap = Record<string, Variable>

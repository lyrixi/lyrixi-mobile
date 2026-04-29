/**
 * 格式化数据
 */
export default function toData(data: Record<string, unknown>): Record<string, unknown> {
  return {
    name: data?.名称,
    description: data.描述
  }
}

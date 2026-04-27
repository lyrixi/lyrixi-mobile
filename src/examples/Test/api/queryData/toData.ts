/** 单行 toData。introduce、createTime、updateTime 均 `->description`，非空项拼接为空格分隔文案。 */
export default function toData(data: Record<string, unknown>): Record<string, unknown> {
  const descParts = [data.introduce, data.createTime, data.updateTime].filter(
    (v) => v != null && v !== ''
  )
  return {
    id: data.idStr,
    name: data.nameStr,
    description: descParts.map(String).join(' ')
  }
}

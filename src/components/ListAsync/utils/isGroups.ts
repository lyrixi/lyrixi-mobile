function isGroups(list: Record<string, unknown>[] | undefined | null) {
  if (Array.isArray(list?.[0]?.children) && (list?.[0]?.children as unknown[]).length) return true
  return false
}

export default isGroups

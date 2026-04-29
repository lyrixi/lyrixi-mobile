/**
 * queryParams 转换为服务端参数
 */
function toServerParams(queryParams: Record<string, unknown>): Record<string, unknown> {
  return { keyword: queryParams?.keyword }
}

export default toServerParams

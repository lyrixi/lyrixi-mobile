/** 附件列表单项（宽松结构，含上传状态等） */
export interface AttachItem {
  // 必要属性
  fileName: string
  status: string
  filePath?: File
  fileUrl?: string
  // 其它属性
  className?: string
  fileSize?: number
  fileType?: string
  // 透传业务属性(勿删)
  [key: string]: unknown
}

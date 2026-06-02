/** fileChoose 在选中本地文件后传给 onFileChange 的载荷（与 input 的 change 二选一由业务处理） */
export interface AttachNativeFilePayload {
  fileName: string
  fileSize?: number
  fileType?: string
  filePath?: File
  fileUrl?: string
  status: string
}

/** 附件列表单项（宽松结构，含上传状态等） */
export interface AttachFileItem {
  className?: string
  status?: string
  fileUrl?: string
  fileName?: string
  [key: string]: unknown
}

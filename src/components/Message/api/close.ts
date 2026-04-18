import destroy from './destroy'

// Message.close() - 关闭当前打开的Message对话框
export default function close() {
  return destroy()
}
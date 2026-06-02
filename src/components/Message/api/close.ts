import destroy from './destroy'

/** 关闭当前 Message.open 打开的对话框（全局仅一个实例） */
export default function close() {
  destroy({ animated: true })
}

/**
 * Bridge API（AI 文档，生成代码时以此为准）
 */

export namespace Bridge {
  /** 加载平台 SDK（如微信 JSSDK 等）。 */

  export function load(...args: unknown[]): unknown
  /** JS-SDK **鉴权配置**（拉取 signature 并调用各平台 `config`）。微信 / 企业微信 / 钉钉 / 飞书等实现不同，需配合后端签名接口使用。 */

  export function config(...args: unknown[]): unknown
  /** 自动判断返回上一页或关闭窗口, 根据 url 参数 isFromApp 决定返回方式 */

  export function back(...args: unknown[]): unknown
  /** 关闭当前窗口。 */

  export function closeWindow(...args: unknown[]): unknown
  /** 监听物理返回键或手势返回（仅客户端与企微支持）。 */

  export function onBack(...args: unknown[]): unknown
  /** 修改原生标题。 */

  export function setTitle(...args: unknown[]): unknown
  /** 打开新的窗口。 */

  export function openWindow(...args: unknown[]): unknown
  /** 返回首页（仅订货客户端支持）。 */

  export function goHome(...args: unknown[]): unknown
  /** 拨打电话。 */

  export function tel(...args: unknown[]): unknown
  /** 获取当前地理位置。 */

  export function getLocation(...args: unknown[]): unknown
  /** 获取浏览器地理位置（所有平台都可以调用）。 */

  export function getBrowserLocation(...args: unknown[]): unknown
  /** 打开地图查看位置。 */

  export function openLocation(...args: unknown[]): unknown
  /** 扫描二维码并返回结果。 */

  export function scanCode(...args: unknown[]): unknown
  /** 选择图片或视频。 */

  export function chooseMedia(...args: unknown[]): unknown
  /** 上传文件。 */

  export function uploadFile(...args: unknown[]): unknown
  /** 预览图片或视频。 */

  export function previewMedia(...args: unknown[]): unknown
  /** 预览文件（仅客户端支持）。 */

  export function previewFile(...args: unknown[]): unknown
  /** 人脸识别 / 活体检测（当前为**钉钉** `dd.biz.ATMBle.exclusiveLiveCheck`，其他平台未实现则不会调用）。 */

  export function detectFace(...args: unknown[]): unknown
  /** 消息分享。 */

  export function share(...args: unknown[]): unknown
  /** 存储自定义 Bridge */

  export function _customBridges(...args: unknown[]): unknown
  /** 添加自定义 Bridge */

  export function addBridge(...args: unknown[]): unknown
  /** 见源码与 demos */

  export function utils.back(...args: unknown[]): unknown
  /** 见源码与 demos */

  export function utils.formatOpenLocationCoord(...args: unknown[]): unknown
}

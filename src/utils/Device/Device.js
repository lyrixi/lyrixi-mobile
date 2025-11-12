// 内库使用-start
import getKernel from './getKernel'
import getDevice from './getDevice'
import getOS from './getOS'
import getPlatform from './getPlatform'
import getUrlParameter from './getUrlParameter'
import { getScreenWidth, getScreenHeight } from './getScreenSize'
import getModel from './getModel'
import compareVersion from './compareVersion'
// 内库使用-end

/* 测试使用-start
import {
  getKernel,
  getDevice,
  getOS,
  getPlatform,
  getUrlParameter,
  getScreenWidth,
  getScreenHeight,
  getModel,
  compareVersion
} from 'lyrixi-mobile'
测试使用-end */

// Device
let Device = (function () {
  // 系统
  let { os, osVersion } = getOS()

  // 平台
  let { platform, platformVersion } = getPlatform()

  return {
    userAgent: navigator.userAgent,
    language: (window.navigator.browserLanguage || window.navigator.language).toLowerCase(),
    isOnLine: window.navigator.onLine || true,
    protocol: window.location.protocol,
    host: window.location.host,
    domain: window.location.protocol + '//' + window.location.host,
    // 获取url参数
    getUrlParameter: getUrlParameter,
    // 屏幕宽高
    screenWidth: getScreenWidth(),
    screenHeight: getScreenHeight(),
    // 内核
    kernel: getKernel(),
    // 设备
    device: getDevice(),
    // 系统
    os: os,
    osVersion: osVersion,
    // 型号
    model: getModel(),
    // 平台
    platform: platform,
    platformVersion: platformVersion,
    // 比较版本号, -1小于 0等于 1大于
    compareVersion: compareVersion
  }
})()

export default Device

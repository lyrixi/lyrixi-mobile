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
  let userAgent = navigator.userAgent
  let ua = userAgent.toLowerCase()

  // 内核
  let kernel = getKernel(ua)

  // 设备
  let device = getDevice(ua)

  // 系统
  let { os, osVersion } = getOS(ua)

  // 平台
  let { platform, platformVersion } = getPlatform(ua)

  return {
    // 应用程序判断
    language: (window.navigator.browserLanguage || window.navigator.language).toLowerCase(),
    protocol: window.location.protocol,
    host: window.location.host,
    domain: window.location.protocol + '//' + window.location.host,
    kernel: kernel,
    device: device,
    os: os,
    osVersion: osVersion,
    model: getModel(userAgent),
    platform: platform,
    platformVersion: platformVersion,
    isOnLine: window.navigator.onLine || true,
    userAgent: userAgent,
    getUrlParameter: getUrlParameter,
    screenWidth: getScreenWidth(),
    screenHeight: getScreenHeight(),
    // 比较版本号, -1小于 0等于 1大于
    compareVersion: compareVersion
  }
})()

export default Device

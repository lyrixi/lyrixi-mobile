"use strict";(self.webpackChunklyrixi_mobile=self.webpackChunklyrixi_mobile||[]).push([[1264],{37250:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { PageAsideProps, PageAsideRef } from '../types'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Aside = forwardRef<PageAsideRef, PageAsideProps>(function Aside(
  { safeArea, className, style, children },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <aside ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-aside', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </aside>
  )
})
export default Aside
`},1184:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { PageFooterProps, PageFooterRef } from '../types'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Footer = forwardRef<PageFooterRef, PageFooterProps>(function Footer(
  { safeArea, className, style, children },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <footer ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-footer', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </footer>
  )
})
export default Footer
`},14655:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { PageHeaderProps, PageHeaderRef } from '../types'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

const Header = forwardRef<PageHeaderRef, PageHeaderProps>(function Header(
  { safeArea, className, style, children },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <header ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-header', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </header>
  )
})
export default Header
`},38339:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import LocaleUtil from './../../../utils/LocaleUtil'

const TopContainer = forwardRef<HTMLDivElement>(function TopContainer(_props, ref) {
  return (
    <div ref={ref} className="lyrixi-page-main-pull-push">
      <div className="lyrixi-page-main-pull-push-wrapper">
        <div className="lyrixi-page-main-pull-push-icon"></div>
        <div className="lyrixi-page-main-pull-push-text">
          {LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi_76985db7270fb8bc2add09291b637964', undefined)}
        </div>
      </div>
    </div>
  )
})

export default TopContainer
`},80661:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import TopContainer from './TopContainer'
import isBottom from './utils/isBottom'
import topRefreshOk from './utils/topRefreshOk'

import type { PageMainProps, PageMainRef, PageMainTouchesState } from '../types'

// \u5185\u5E93\u4F7F\u7528-start
import Device from './../../../utils/Device'
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Device, DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

function touchClientY(e: React.TouchEvent<HTMLElement>): number {
  return e.touches[0]?.clientY ?? e.changedTouches[0]?.clientY ?? 0
}

const Main = forwardRef<PageMainRef, PageMainProps>(function Main(
  {
    // Value & Display Value
    threshold = 50,
    // Status
    safeArea,
    // Value & Display Value
    touchStopPropagation = true,
    // Style
    className,
    style,
    // Elements
    children,
    // Events
    onTopRefresh,
    onBottomRefresh,
    onScroll,
    onScrollEnd
  },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)
  const isLoadingRef = useRef(false)
  const topContainerRef = useRef<HTMLDivElement | null>(null)
  const scrollThrottleRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  const touchesRef = useRef<PageMainTouchesState>({
    isTop: true,
    startY: 0,
    currentY: 0,
    diffY: 0
  })

  function handleTouchStart(e: React.TouchEvent<HTMLElement>) {
    if (touchStopPropagation) e.stopPropagation()
    if (isLoadingRef.current) return
    const topEl = topContainerRef.current
    if (!topEl) return

    if (e.currentTarget.scrollTop <= 0) touchesRef.current.isTop = true
    else touchesRef.current.isTop = false

    topEl.style.webkitTransitionDuration = '0ms'

    touchesRef.current.startY = touchClientY(e)
    touchesRef.current.diffY = 0
  }

  function handleTouchMove(e: React.TouchEvent<HTMLElement>) {
    if (touchStopPropagation) e.stopPropagation()
    if (isLoadingRef.current) return
    if (!touchesRef.current.isTop) return
    const topEl = topContainerRef.current
    if (!topEl) return

    touchesRef.current.currentY = touchClientY(e)
    touchesRef.current.diffY = touchesRef.current.currentY - touchesRef.current.startY

    if (touchesRef.current.diffY < 20) {
      return
    }

    if (touchesRef.current.diffY > 100) touchesRef.current.diffY = 100
    topEl.style.height = touchesRef.current.diffY + 'px'
    const topIcon = topEl.querySelector?.('.lyrixi-page-main-pull-push-icon')
    const topText = topEl.querySelector?.('.lyrixi-page-main-pull-push-text')
    if (touchesRef.current.diffY >= threshold) {
      topIcon?.classList.add('lyrixi-page-main-pull-push-icon-down')
      if (topText)
        topText.innerHTML = LocaleUtil.locale('\u91CA\u653E\u7ACB\u5373\u5237\u65B0', 'lyrixi_bb045b7b0ce191f0568fb4d0a9858b8d', undefined) as string
    } else {
      topIcon?.classList.remove('lyrixi-page-main-pull-push-icon-down')
      if (topText)
        topText.innerHTML = LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi_76985db7270fb8bc2add09291b637964', undefined) as string
    }
  }

  async function handleTouchEnd(e: React.TouchEvent<HTMLElement>) {
    if (touchStopPropagation) e.stopPropagation()
    if (isLoadingRef.current) return
    if (!touchesRef.current.isTop) return
    const topEl = topContainerRef.current
    if (!topEl) return

    topEl.style.webkitTransitionDuration = '150ms'

    if (touchesRef.current.diffY <= threshold) {
      topEl.style.height = '0'
    } else {
      const topIcon = topEl.querySelector?.('.lyrixi-page-main-pull-push-icon')
      const topText = topEl.querySelector?.('.lyrixi-page-main-pull-push-text')
      topEl.style.height = threshold + 'px'
      topIcon?.classList.remove('lyrixi-page-main-pull-push-icon-down')
      topIcon?.classList.add('lyrixi-page-main-pull-push-icon-loading')
      if (topText)
        topText.innerHTML = \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'lyrixi_f013ea9dcba3f5ca1278aa850931fec8', undefined) as string}...\`

      if (onTopRefresh) {
        isLoadingRef.current = true
        const isOk = await onTopRefresh()
        await topRefreshOk(topEl, isOk)
        isLoadingRef.current = false
      }
    }
  }

  async function handleScroll(e: React.UIEvent<HTMLElement>) {
    if (onScroll) onScroll(e)

    document.documentElement.classList.add(\`lyrixi-\${Device.os}-scrolling\`)
    if (scrollThrottleRef.current) {
      window.clearTimeout(scrollThrottleRef.current)
    }
    scrollThrottleRef.current = setTimeout(() => {
      onScrollEnd?.(e)
      document.documentElement.classList.remove(\`lyrixi-\${Device.os}-scrolling\`)
    }, 500)

    if (!onBottomRefresh || isLoadingRef.current) return
    if (isBottom(rootRef.current)) {
      isLoadingRef.current = true
      await onBottomRefresh()
      isLoadingRef.current = false
    }
  }

  return (
    <main
      ref={rootRef}
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-main', className)}
      onTouchStart={onTopRefresh ? handleTouchStart : undefined}
      onTouchMove={onTopRefresh ? handleTouchMove : undefined}
      onTouchEnd={onTopRefresh ? handleTouchEnd : undefined}
      onScroll={onScroll || onBottomRefresh ? handleScroll : undefined}
    >
      <TopContainer ref={topContainerRef} />
      {children}
      {safeArea === true && <SafeArea />}
    </main>
  )
})
export default Main
`},99635:function(e,n){n.Z=`// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5728\u5E95\u90E8
function isBottom(container: HTMLElement | null): boolean {
  if (!container) return false

  const clientHeight = container.clientHeight
  const scrollHeight = container.scrollHeight
  const scrollTop = container === document.body ? document.documentElement.scrollTop : container.scrollTop
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    return true
  }
  return false
}
export default isBottom
`},2612:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5237\u65B0\u5B8C\u6210
function topRefreshOk(
  topContainer: HTMLDivElement | null,
  isOk: boolean | string | undefined
): Promise<boolean> {
  return new Promise((resolve) => {
    const topText = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-text')

    let finishMsg = ''
    if (isOk === false) {
      finishMsg = String(
        LocaleUtil.locale('\u5237\u65B0\u5931\u8D25', 'lyrixi_245c7a0541c033776b61a33bda10bd99', undefined)
      )
    } else if (typeof isOk === 'string') {
      finishMsg = isOk
    } else {
      finishMsg = String(
        LocaleUtil.locale('\u5237\u65B0\u6210\u529F', 'lyrixi_efa2ebd79d14fa135072faa401a3154d', undefined)
      )
    }
    if (topText) topText.innerHTML = finishMsg

    setTimeout(() => {
      const topIcon = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-icon')
      if (topIcon) {
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-loading')
      }
      if (topContainer) topContainer.style.height = '0'

      resolve(true)
    }, 1000)
  })
}

export default topRefreshOk
`},32670:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { PageProps, PageRef } from '../types'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Page = forwardRef<PageRef, PageProps>(function Page(
  { safeArea, full = true, layout, animation, style, className, children },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <section
      ref={rootRef}
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)(
        'lyrixi-page',
        full ? 'lyrixi-full' : '',
        layout ? \`lyrixi-flex-\${layout}\` : '',
        className
      )}
      data-animation={animation}
    >
      {children}
      {safeArea === true && <SafeArea />}
    </section>
  )
})
export default Page
`},40993:function(e,n){n.Z=`import _Page from './Page'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import type { PageComponents } from './types/Page.modules.types'

const Page: PageComponents = _Page as PageComponents

Page.Header = Header
Page.Aside = Aside
Page.Main = Main
Page.Footer = Footer

export default Page
`},28263:function(e,n){n.Z=`export function safeAreaDebug() {
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-bottom', '34px')
}
`},37749:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

import type { SafeAreaProps, SafeAreaRef } from './types'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const SafeArea = forwardRef<SafeAreaRef, SafeAreaProps>(function SafeArea(
  { type = 'height', placement = 'bottom', style, className },
  ref
) {
  const rootRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  const mergedClassName = (DOMUtil.classNames as (...args: unknown[]) => string)(
    'lyrixi-safe-area',
    \`lyrixi-\${type}-\${placement}\`,
    className
  )

  return <div ref={rootRef} style={style} className={mergedClassName} />
})

export default SafeArea
`},23429:function(e,n){n.Z=`import _SafeArea from './SafeArea'
import { safeAreaDebug } from './SafeArea.debug'

import type { SafeAreaComponents } from './types/SafeArea.modules.types'

const SafeArea = _SafeArea as SafeAreaComponents

SafeArea.debug = safeAreaDebug

export default SafeArea
`},59537:function(e,n){n.Z=`const hasOwn = {}.hasOwnProperty

function appendClass(value: string, newClass: string): string {
  if (!newClass) {
    return value
  }

  return value ? value + ' ' + newClass : newClass
}

function parseValue(arg: unknown): string {
  if (typeof arg === 'string') {
    return arg.trim()
  }

  if (typeof arg !== 'object') {
    return ''
  }

  if (Array.isArray(arg)) {
    return classNames(...arg)
  }

  if (arg === null) return ''

  if (
    (arg as object).toString !== Object.prototype.toString &&
    !(arg as object).toString.toString().includes('[native code]')
  ) {
    return (arg as object).toString()
  }

  let classes = ''

  for (const key in arg as object) {
    if (hasOwn.call(arg, key) && (arg as Record<string, unknown>)[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function classNames(...args: unknown[]): string {
  let classes = ''

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

export default classNames
`},61940:function(e,n){n.Z=`import type { TouchEvent, MouseEvent } from 'react'

/**
 * \u83B7\u53D6\u4E8B\u4EF6\u7684\u5750\u6807\u4F4D\u7F6E(\u517C\u5BB9touch\u548Cmouse\u4E8B\u4EF6)
 * @param {Event} e - \u4E8B\u4EF6\u5BF9\u8C61
 * @returns {{clientX: number, clientY: number}} \u5750\u6807\u5BF9\u8C61
 */
function getEventPosition(e: TouchEvent | MouseEvent) {
  // touchstart & touchmove & touchend
  if ('changedTouches' in e && e.changedTouches[0]) {
    return {
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY
    }
  }

  // \u517C\u5BB9touchmove
  if ('touches' in e && e.touches[0]) {
    return {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    }
  }

  const mouse = e as MouseEvent
  return {
    clientX: mouse.clientX,
    clientY: mouse.clientY
  }
}

export default getEventPosition
`},45055:function(e,n){n.Z=`import preventDefault from './preventDefault'
import getEventPosition from './getEventPosition'
import classNames from './classNames'

const DOMUtil = {
  preventDefault: preventDefault,
  getEventPosition: getEventPosition,
  classNames: classNames
}

export default DOMUtil
`},47364:function(e,n){n.Z=`function preventDefault(e: Event): void {
  e.preventDefault()
}

export default preventDefault
`},18031:function(e,n){n.Z=`import getKernel from './getKernel'
import getDevice from './getDevice'
import getOS from './getOS'
import defaultGetPlatform from './getPlatform'
import getUrlParameter from './getUrlParameter'
import { getScreenWidth, getScreenHeight } from './getScreenSize'
import getModel from './getModel'
import compareVersion from './compareVersion'

// Device
let Device = {
  // \u5B58\u50A8\u81EA\u5B9A\u4E49\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570
  _getCustomPlatforms: [] as Array<(ua: string) => { platform?: string; platformVersion?: string } | null | undefined>,
  /**
   * \u6DFB\u52A0\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570
   * @param {Function} getCustomPlatform - \u81EA\u5B9A\u4E49\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570\uFF0C\u8FD4\u56DE {platform: String, platformVersion: String} \u6216 null
   * @example
   * Device.addPlatform(() => {
   *   let ua = navigator.userAgent.toLowerCase()
   *   if (ua.indexOf('customapp') > -1) {
   *     const match = ua.match(/customapp\\/([\\w.]*)/)
   *     return {
   *       platform: 'customApp',
   *       platformVersion: match?.[1] || ''
   *     }
   *   }
   *   return null
   * })
   */
  addPlatform(getCustomPlatform: (ua: string) => { platform?: string; platformVersion?: string } | null | undefined): void {
    if (typeof getCustomPlatform === 'function') {
      this._getCustomPlatforms.push(getCustomPlatform)
    }
  },
  // \u5185\u90E8\u65B9\u6CD5\uFF1A\u68C0\u6D4B\u5E73\u53F0\uFF08\u6574\u5408\u81EA\u5B9A\u4E49\u68C0\u6D4B\u548C\u9ED8\u8BA4\u68C0\u6D4B\uFF09
  _getPlatform() {
    let ua = navigator.userAgent.toLowerCase()

    // \u5148\u6267\u884C\u81EA\u5B9A\u4E49\u68C0\u6D4B
    for (let getCustomPlatform of this._getCustomPlatforms) {
      const result = getCustomPlatform(ua)
      if (result && result.platform) {
        return {
          platform: result.platform,
          platformVersion: result.platformVersion || ''
        }
      }
    }

    // \u518D\u6267\u884C\u9ED8\u8BA4\u68C0\u6D4B
    return defaultGetPlatform()
  },
  get userAgent() {
    return navigator.userAgent
  },
  get language() {
    return window.navigator.browserLanguage || window.navigator.language
  },
  get isOnLine() {
    return window.navigator.onLine || true
  },
  get protocol() {
    return window.location.protocol
  },
  get host() {
    return window.location.host
  },
  get domain() {
    return window.location.protocol + '//' + window.location.host
  },
  // \u5185\u6838: 'trident' | 'presto' | 'webkit' | 'gecko' | ''
  get kernel() {
    return getKernel()
  },
  // \u8BBE\u5907: 'mobile' | 'pc'
  get device() {
    return getDevice()
  },
  // \u7CFB\u7EDF: 'android' | 'ios' | 'harmony'
  get os() {
    return getOS().os
  },
  get osVersion() {
    return getOS().osVersion
  },
  // \u578B\u53F7
  get model() {
    return getModel()
  },
  // \u5E73\u53F0
  get platform() {
    return this._getPlatform().platform
  },
  get platformVersion() {
    return this._getPlatform().platformVersion
  },
  // \u5C4F\u5E55\u5BBD\u9AD8
  get screenWidth() {
    return getScreenWidth()
  },
  get screenHeight() {
    return getScreenHeight()
  },

  // \u83B7\u53D6url\u53C2\u6570
  getUrlParameter: getUrlParameter,
  compareVersion: compareVersion
}

export default Device
`},74736:function(e,n){n.Z=`/**
 * \u6BD4\u8F83\u7248\u672C\u53F7
 * @param {String} v1 - \u7248\u672C\u53F71
 * @param {String} v2 - \u7248\u672C\u53F72
 * @param {String} separator - \u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A '.'
 * @returns {Number} -1: v1\u5C0F\u4E8Ev2, 0: v1\u7B49\u4E8Ev2, 1: v1\u5927\u4E8Ev2
 */
function compareVersion(v1: string, v2: string, separator = '.'): -1 | 0 | 1 {
  // Comaptiable with IOS version
  if (v1.indexOf(separator) === -1 && v1.indexOf('_') !== -1) {
    // eslint-disable-next-line
    v1 = v1.replace(/_/gim, separator)
  }
  if (v2.indexOf(separator) === -1 && v2.indexOf('_') !== -1) {
    // eslint-disable-next-line
    v2 = v2.replace(/_/gim, separator)
  }

  const v1Parts = v1.split(separator).map(Number)
  const v2Parts = v2.split(separator).map(Number)

  const length = Math.max(v1Parts.length, v2Parts.length)

  for (let i = 0; i < length; i++) {
    const part1 = v1Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0
    const part2 = v2Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0

    if (part1 < part2) return -1
    if (part1 > part2) return 1
  }

  return 0 // \u5982\u679C\u6240\u6709\u90E8\u5206\u90FD\u76F8\u7B49
}

export default compareVersion

`},23027:function(e,n){n.Z=`function getDevice() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/applewebkit.*mobile.*/)) {
    return 'mobile'
  }
  return 'pc'
}

export default getDevice

`},26782:function(e,n){n.Z=`function getKernel() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('trident') > -1) {
    return 'trident'
  } else if (ua.indexOf('presto') > -1) {
    return 'presto'
  } else if (ua.indexOf('applewebkit') > -1) {
    return 'webkit'
  } else if (ua.indexOf('gecko') > -1 && ua.indexOf('khtml') === -1) {
    return 'gecko'
  }
  return ''
}

export default getKernel

`},35585:function(e,n){n.Z=`function getModel() {
  let userAgent = navigator.userAgent
  let model = ''
  if (userAgent.toLowerCase().match(/android\\s*(\\d*\\.*\\d*)/)) {
    let infos = userAgent.split(';')
    for (let info of infos) {
      if (info.indexOf('Build') !== -1) {
        info = info.trim()
        model = info.substring(0, info.indexOf(' Build'))
        break
      }
    }
    if (!model) model = ''
  } else {
    let iosVersion = ''
    let iosExp = userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
    if (iosExp && iosExp[1]) {
      iosVersion = iosExp[1].replace(/_/gim, '.')
    }
    model = \`iPhone \${iosVersion}\`
  }
  return model
}

export default getModel

`},72544:function(e,n){n.Z=`/**
 * \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F
 * @returns {Object} {os: String, osVersion: String}
 */
function getOS() {
  let ua = navigator.userAgent.toLowerCase()
  let os = ''
  let osVersion = ''
  let androidExp = ua.match(/android\\s*(\\d*\\.*\\d*)/)
  let iosExp = ua.match(/cpu iphone os (.*?) like mac os/)
  let harmonyExp = ua.match(/openharmony\\s*(\\d*\\.*\\d*)/)
  
  if (androidExp) {
    os = 'android'
    osVersion = androidExp[1]
  } else if (iosExp) {
    os = 'ios'
    osVersion = iosExp[1]
  } else if (harmonyExp) {
    os = 'harmony'
    osVersion = harmonyExp[1]
  }
  
  return { os, osVersion }
}

export default getOS

`},39573:function(e,n){n.Z=`/**
 * \u83B7\u53D6\u5E73\u53F0\u4FE1\u606F
 * @returns {Object} {platform: String, platformVersion: String}
 */
function getPlatform() {
  let ua = navigator.userAgent.toLowerCase()
  let platform = ''
  let platformVersion = ''
  let platformMatch: RegExpMatchArray | null = null

  // \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F
  if (ua.indexOf('miniprogram') > -1 && ua.indexOf('micromessenger') > -1) {
    if (ua.indexOf('wxwork') > -1) {
      platform = 'wecomMiniProgram'
      platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
    } else if (ua.indexOf('micromessenger') > -1) {
      platform = 'wechatMiniProgram'
      platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
    }
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u4F01\u4E1A\u5FAE\u4FE1
  else if (ua.indexOf('wxwork') > -1) {
    platform = 'wecom'
    platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u5FAE\u4FE1
  else if (ua.indexOf('micromessenger') > -1) {
    platform = 'wechat'
    platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u652F\u4ED8\u5B9D
  else if (ua.indexOf('alipay') > -1) {
    platform = 'alipay'
    if (ua.indexOf('miniprogram') > -1) {
      platform = 'alipayMiniProgram'
    }
    platformMatch = ua.match(/alipayclient\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u9489\u9489
  else if (ua.indexOf('dingtalk') > -1) {
    platform = 'dingtalk'
    platformMatch = ua.match(/dingtalk\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u98DE\u4E66
  else if (ua.indexOf('lark') > -1) {
    platform = 'lark'
    platformMatch = ua.match(/lark\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // Lyrixi App
  else if (ua.indexOf('lyrixi') > -1) {
    platform = 'lyrixi'
    platformMatch = ua.match(/lyrixi\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // QQ
  else if (ua.indexOf('mqqbrowser') > -1) {
    platform = 'qq'
  }
  // UC
  else if (ua.indexOf('ucbrowser') > -1) {
    platform = 'uc'
  }
  // \u5176\u5B83\u6D4F\u89C8\u5668
  else {
    platform = 'browser'
    const platformMatch = ua.match(/version\\/([\\d.]+)/)
    platformVersion = platformMatch?.[1] || ''
  }

  return { platform, platformVersion }
}

export default getPlatform
`},60468:function(e,n){n.Z=`function getScreenWidth() {
  if (window.innerWidth) return window.innerWidth
  if (window.screen.width) return window.screen.width
  if (window.screen.availWidth) return window.screen.availWidth
}

/**
 * \u83B7\u53D6\u5C4F\u5E55\u9AD8\u5EA6
 * @returns {Number} \u5C4F\u5E55\u9AD8\u5EA6
 */
function getScreenHeight() {
  if (window.innerHeight) return window.innerHeight
  if (window.screen.height) return window.screen.height
  if (window.screen.availHeight) return window.screen.availHeight
}

export { getScreenWidth, getScreenHeight }

`},67473:function(e,n){n.Z=`function getUrlParameter(argName?: string, argSearch?: string) {
  let url = window.location.href
  if (argSearch) url = argSearch
  const params: Record<string, string> = {}
  // \u5982\u679Curl\u4E2D\u5305\u542B?\u8BF4\u660E\u6709\u53C2\u6570
  if (url?.indexOf?.('?') !== -1) {
    if (!argName) return '?' + url.split('?')[1]
    // \u83B7\u53D6\u6240\u6709\u53C2\u6570options: \u5982?a=1&b=2\u8F6C\u4E3A['a=1','b=2']
    let options = url.split('?')[1]?.split('&')
    if (options?.length) {
      for (let i = 0; i < options.length; i++) {
        // \u83B7\u53D6\u5355\u9879option: \u5982'a=1'\u8F6C\u4E3A['a', '1']
        let option = options[i].split('=')
        if (option.length === 2) {
          if (argName) {
            if (argName === option[0]) return option[1]
          } else {
            params[option[0]] = option[1]
          }
        }
      }
    }
  }
  if (Object.keys(params).length) return params
  return ''
}

export default getUrlParameter

`},14602:function(e,n){n.Z=`import Device from './Device'

export default Device
`},20917:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u524D\u8BED\u8A00
function getLanguage() {
  return (
    window.lyrixiLocaleLanguage ||
    navigator.userAgent.match(/lyrixiLanguage\\/([\\w.]*)/)?.[1] ||
    'zh_CN'
  )
}

export default getLanguage
`},43246:function(e,n){n.Z=`import languageMap from './languageMap'
import loadLocale from './loadLocale'
import setLocale from './setLocale'
import locale from './locale'
import defaultGetLanguage from './getLanguage'

// \u8BB0\u5F55\u8BED\u8A00: window.lyrixiLocaleLanguage, window.lyrixiLocaleData
const LocaleUtil = {
  // \u5B58\u50A8\u81EA\u5B9A\u4E49 getLanguage \u51FD\u6570
  _getCustomGetLanguages: [] as Array<() => string | null | undefined>,
  /**
   * \u6DFB\u52A0\u81EA\u5B9A\u4E49\u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u7684\u51FD\u6570
   * @param {Function} getCustomLanguage - \u81EA\u5B9A\u4E49\u51FD\u6570\uFF0C\u8FD4\u56DE\u5F53\u524D\u8BED\u8A00\u5B57\u7B26\u4E32\uFF08\u5982 'zh_CN'\uFF09\uFF0C\u82E5\u65E0\u6CD5\u8BC6\u522B\u53EF\u8FD4\u56DE null/undefined \u5219\u4F7F\u7528\u9ED8\u8BA4\u903B\u8F91
   * @example
   * LocaleUtil.addGetLanguage(() => {
   *   const lang = window.myAppLanguage
   *   return lang || null
   * })
   */
  addLanguage(getCustomLanguage: () => string | null | undefined): void {
    if (typeof getCustomLanguage === 'function') {
      this._getCustomGetLanguages.push(getCustomLanguage)
    }
  },
  getLanguage() {
    for (const getCustomGetLanguage of this._getCustomGetLanguages) {
      const result = getCustomGetLanguage()
      if (result !== null && result !== undefined && result !== '') {
        return result
      }
    }
    return defaultGetLanguage()
  },
  locale: locale,
  loadLocale: loadLocale,
  setLocale: setLocale,
  getLanguageMap: (language?: string) => {
    if (language) {
      return (languageMap as Record<string, unknown>)?.[language] || null
    }
    return languageMap
  }
}

export default LocaleUtil
`},20160:function(e,n){n.Z=`// United language list
// https://ant.design/docs/react/i18n-cn
// dayjs: https://github.com/iamkun/dayjs/tree/dev/src/locale
// browser \u5BF9\u5E94 window.navigator.language
const languageMap = {
  // \u963F\u62C9\u4F2F\u8BED
  ar_EG: { browser: 'ar-EG', dayjs: 'ar', translate: { google: 'ar', bing: 'ar' } },
  // \u963F\u585E\u62DC\u7586\u8BED
  az_AZ: { browser: 'az-AZ', dayjs: 'az', translate: { google: 'az', bing: 'az' } },
  // \u4FDD\u52A0\u5229\u4E9A\u8BED
  bg_BG: { browser: 'bg-BG', dayjs: 'bg', translate: { google: 'bg', bing: 'bg' } },
  // \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09
  bn_BD: { browser: 'bn-BD', dayjs: 'bn', translate: { google: 'bn', bing: 'bn' } },
  // \u767D\u4FC4\u7F57\u65AF\u8BED
  by_BY: { browser: 'by-BY', dayjs: 'by', translate: { google: 'by', bing: 'by' } },
  // \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED
  ca_ES: { browser: 'ca-ES', dayjs: 'ca', translate: { google: 'ca', bing: 'ca' } },
  // \u6377\u514B\u8BED
  cs_CZ: { browser: 'cs-CZ', dayjs: 'cs', translate: { google: 'cs', bing: 'cs' } },
  // \u4E39\u9EA6\u8BED
  da_DK: { browser: 'da-DK', dayjs: 'da', translate: { google: 'da', bing: 'da' } },
  // \u5FB7\u8BED
  de_DE: { browser: 'de-DE', dayjs: 'de', translate: { google: 'de', bing: 'de' } },
  // \u5E0C\u814A\u8BED
  el_GR: { browser: 'el-GR', dayjs: 'el', translate: { google: 'el', bing: 'el' } },
  // \u82F1\u8BED
  en_GB: { browser: 'en-GB', dayjs: 'en-gb', translate: { google: 'en', bing: 'en' } },
  // \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09
  en_US: { browser: 'en-US', dayjs: 'en', translate: { google: 'en', bing: 'en' } },
  // \u897F\u73ED\u7259\u8BED
  es_ES: { browser: 'es-ES', dayjs: 'es', translate: { google: 'es', bing: 'es' } },
  // \u5DF4\u65AF\u514B\u8BED
  eu_ES: { browser: 'eu-ES', dayjs: 'eu', translate: { google: 'eu', bing: 'eu' } },
  // \u7231\u6C99\u5C3C\u4E9A\u8BED
  et_EE: { browser: 'et-EE', dayjs: 'et', translate: { google: 'et', bing: 'et' } },
  // \u6CE2\u65AF\u8BED
  fa_IR: { browser: 'fa-IR', dayjs: 'fa', translate: { google: 'fa', bing: 'fa' } },
  // \u82AC\u5170\u8BED
  fi_FI: { browser: 'fi-FI', dayjs: 'fi', translate: { google: 'fi', bing: 'fi' } },
  // \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  fr_BE: { browser: 'fr-BE', dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09
  fr_CA: { browser: 'fr-CA', dayjs: 'fr-ca', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09
  fr_FR: { browser: 'fr-FR', dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u7231\u5C14\u5170\u8BED
  ga_IE: { browser: 'ga-IE', dayjs: 'ga', translate: { google: 'ga', bing: 'ga' } },
  // \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09
  gl_ES: { browser: 'gl-ES', dayjs: 'gl', translate: { google: 'gl', bing: 'gl' } },
  // \u5E0C\u4F2F\u6765\u8BED
  he_IL: { browser: 'he-IL', dayjs: 'he', translate: { google: 'he', bing: 'he' } },
  // \u5370\u5730\u8BED
  hi_IN: { browser: 'hi-IN', dayjs: 'hi', translate: { google: 'hi', bing: 'hi' } },
  // \u514B\u7F57\u5730\u4E9A\u8BED
  hr_HR: { browser: 'hr-HR', dayjs: 'hr', translate: { google: 'hr', bing: 'hr' } },
  // \u5308\u7259\u5229\u8BED
  hu_HU: { browser: 'hu-HU', dayjs: 'hu', translate: { google: 'hu', bing: 'hu' } },
  // \u4E9A\u7F8E\u5C3C\u4E9A
  hy_AM: { browser: 'hy-AM', dayjs: 'hy', translate: { google: 'hy', bing: 'hy' } },
  // \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED
  id_ID: { browser: 'id-ID', dayjs: 'id', translate: { google: 'id', bing: 'id' } },
  // \u610F\u5927\u5229\u8BED
  it_IT: { browser: 'it-IT', dayjs: 'it', translate: { google: 'it', bing: 'it' } },
  // \u51B0\u5C9B\u8BED
  is_IS: { browser: 'is-IS', dayjs: 'is', translate: { google: 'is', bing: 'is' } },
  // \u65E5\u8BED
  ja_JP: { browser: 'ja-JP', dayjs: 'ja', translate: { google: 'ja', bing: 'ja' } },
  // \u683C\u9C81\u5409\u4E9A\u8BED
  ka_GE: { browser: 'ka-GE', dayjs: 'ka', translate: { google: 'ka', bing: 'ka' } },
  // \u9AD8\u68C9\u8BED
  km_KH: { browser: 'km-KH', dayjs: 'km', translate: { google: 'km', bing: 'km' } },
  // \u5317\u5E93\u5C14\u5FB7\u8BED
  kmr_IQ: { browser: 'kmr-IQ', dayjs: 'kmr', translate: { google: 'kmr', bing: 'kmr' } },
  // \u5361\u7EB3\u8FBE\u8BED
  kn_IN: { browser: 'kn-IN', dayjs: 'kn', translate: { google: 'kn', bing: 'kn' } },
  // \u54C8\u8428\u514B\u8BED
  kk_KZ: { browser: 'kk-KZ', dayjs: 'kk', translate: { google: 'kk', bing: 'kk' } },
  // \u97E9\u8BED/\u671D\u9C9C\u8BED
  ko_KR: { browser: 'ko-KR', dayjs: 'ko', translate: { google: 'ko', bing: 'ko' } },
  // \u7ACB\u9676\u5B9B\u8BED
  lt_LT: { browser: 'lt-LT', dayjs: 'lt', translate: { google: 'lt', bing: 'lt' } },
  // \u62C9\u8131\u7EF4\u4E9A\u8BED
  lv_LV: { browser: 'lv-LV', dayjs: 'lv', translate: { google: 'lv', bing: 'lv' } },
  // \u9A6C\u5176\u987F\u8BED
  mk_MK: { browser: 'mk-MK', dayjs: 'mk', translate: { google: 'mk', bing: 'mk' } },
  // \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED
  ml_IN: { browser: 'ml-IN', dayjs: 'ml', translate: { google: 'ml', bing: 'ml' } },
  // \u8499\u53E4\u8BED
  mn_MN: { browser: 'mn-MN', dayjs: 'mn', translate: { google: 'mn', bing: 'mn' } },
  // \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)
  ms_MY: { browser: 'ms-MY', dayjs: 'ms', translate: { google: 'ms', bing: 'ms' } },
  // \u7F05\u7538\u8BED
  my_MM: { browser: 'my-MM', dayjs: 'my', translate: { google: 'my', bing: 'my' } },
  // \u632A\u5A01\u8BED
  nb_NO: { browser: 'nb-NO', dayjs: 'nb', translate: { google: 'nb', bing: 'nb' } },
  // \u5C3C\u6CCA\u5C14\u8BED
  ne_NP: { browser: 'ne-NP', dayjs: 'ne', translate: { google: 'ne', bing: 'ne' } },
  // \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  nl_BE: { browser: 'nl-BE', dayjs: 'nl-be', translate: { google: 'nl', bing: 'nl' } },
  // \u8377\u5170\u8BED
  nl_NL: { browser: 'nl-NL', dayjs: 'nl', translate: { google: 'nl', bing: 'nl' } },
  // \u6CE2\u5170\u8BED
  pl_PL: { browser: 'pl-PL', dayjs: 'pl', translate: { google: 'pl', bing: 'pl' } },
  // \u8461\u8404\u7259\u8BED(\u5DF4\u897F)
  pt_BR: { browser: 'pt-BR', dayjs: 'pt-br', translate: { google: 'pt', bing: 'pt' } },
  // \u8461\u8404\u7259\u8BED
  pt_PT: { browser: 'pt-PT', dayjs: 'pt', translate: { google: 'pt', bing: 'pt' } },
  // \u7F57\u9A6C\u5C3C\u4E9A\u8BED
  ro_RO: { browser: 'ro-RO', dayjs: 'ro', translate: { google: 'ro', bing: 'ro' } },
  // \u4FC4\u7F57\u65AF\u8BED
  ru_RU: { browser: 'ru-RU', dayjs: 'ru', translate: { google: 'ru', bing: 'ru' } },
  // \u50E7\u4F3D\u7F57\u8BED
  si_LK: { browser: 'si-LK', dayjs: 'si', translate: { google: 'si', bing: 'si' } },
  // \u65AF\u6D1B\u4F10\u514B\u8BED
  sk_SK: { browser: 'sk-SK', dayjs: 'sk', translate: { google: 'sk', bing: 'sk' } },
  // \u585E\u5C14\u7EF4\u4E9A\u8BED
  sr_RS: { browser: 'sr-RS', dayjs: 'sr', translate: { google: 'sr', bing: 'sr' } },
  // \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED
  sl_SI: { browser: 'sl-SI', dayjs: 'sl', translate: { google: 'sl', bing: 'sl' } },
  // \u745E\u5178\u8BED
  sv_SE: { browser: 'sv-SE', dayjs: 'sv', translate: { google: 'sv', bing: 'sv' } },
  // \u6CF0\u7C73\u5C14\u8BED
  ta_IN: { browser: 'ta-IN', dayjs: 'ta', translate: { google: 'ta', bing: 'ta' } },
  // \u6CF0\u8BED
  th_TH: { browser: 'th-TH', dayjs: 'th', translate: { google: 'th', bing: 'th' } },
  // \u571F\u8033\u5176\u8BED
  tr_TR: { browser: 'tr-TR', dayjs: 'tr', translate: { google: 'tr', bing: 'tr' } },
  // \u571F\u5E93\u66FC
  tk_TK: { browser: 'tk-TK', dayjs: 'tk', translate: { google: 'tk', bing: 'tk' } },
  // \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)
  ur_PK: { browser: 'ur-PK', dayjs: 'ur', translate: { google: 'ur', bing: 'ur' } },
  // \u4E4C\u514B\u5170\u8BED
  uk_UA: { browser: 'uk-UA', dayjs: 'uk', translate: { google: 'uk', bing: 'uk' } },
  // \u4E4C\u5179\u522B\u514B\u8BED\uFF08\u62C9\u4E01\u5B57\u6BCD\uFF09
  uz_UZ: { browser: 'uz-UZ', dayjs: 'uz', translate: { google: 'uz', bing: 'uz' } },
  // \u8D8A\u5357\u8BED
  vi_VN: { browser: 'vi-VN', dayjs: 'vi', translate: { google: 'vi', bing: 'vi' } },
  // \u7B80\u4F53\u4E2D\u6587
  zh_CN: { browser: 'zh-CN', dayjs: 'zh-cn', translate: { google: 'zh-CN', bing: 'zh-CN' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
  zh_HK: { browser: 'zh-HK', dayjs: 'zh-hk', translate: { google: 'zh-HK', bing: 'zh-HK' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
  zh_TW: { browser: 'zh-TW', dayjs: 'zh-tw', translate: { google: 'zh-TW', bing: 'zh-TW' } }
}

export default languageMap
`},59561:function(e,n){n.Z=`import type { LocaleUtilLoadLocaleResult } from './loadLocale.types'

import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'

// \u52A0\u8F7D\u56FD\u9645\u5316\u6587\u4EF6
async function loadLocale(language: string, { dayjs = true }: { dayjs?: boolean } = {}) {
  let result: LocaleUtilLoadLocaleResult = {
    status: 'error',
    message: 'language is null'
  }
  if (!language) {
    return result
  }

  // \u52A0\u8F7Ddayjs\u56FD\u9645\u5316\u8BED\u8A00\u6587\u4EF6
  if (dayjs) {
    result = (await loadDayjsLanguage(language)) as LocaleUtilLoadLocaleResult
    if (result.status === 'error') {
      return result
    }
  }

  // \u52A0\u8F7Dlyrixi\u56FD\u9645\u5316\u8BED\u8A00\u6587\u4EF6
  result = await loadLyrixiLanguage(language)
  return result
}

export default loadLocale
`},42159:function(e,n){n.Z=`import dayjs from 'dayjs'
import languageMap from '../languageMap'

// \u52A0\u8F7Ddayjs\u672C\u5730\u6587\u4EF6
async function loadDayjsLanguage(language: string) {
  return new Promise((resolve) => {
    let lang = languageMap?.[language as keyof typeof languageMap]
    // \u8BBE\u7F6Edayjs\u8BED\u8A00
    if (!lang?.dayjs) {
      resolve({
        status: 'error',
        message: 'Dayjs language not found'
      })
      return
    }

    // \u52A8\u6001\u5F15\u5165\u56FD\u9645\u5316\u6587\u4EF6
    import(\`dayjs/locale/\${lang.dayjs}.js\`)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((jsFile) => {
        let result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
        dayjs.locale(lang?.dayjs)
        resolve(result)
      })
      .catch(() => {
        let error = {
          status: 'error',
          message: 'Local js file loaded failed'
        }
        resolve(error)
      })
  })
}

export default loadDayjsLanguage
`},43465:function(e,n){n.Z=`import type { LocaleUtilLoadLyrixiLanguageResult } from './loadLocale.types'

// \u8BBE\u7F6Elyrixi\u8BED\u8A00
async function loadLyrixiLanguage(language: string) {
  return new Promise<LocaleUtilLoadLyrixiLanguageResult>((resolve) => {
    if (!language) {
      resolve({
        status: 'error',
        message: 'Local file loaded failed'
      })
      return
    }
    let result: LocaleUtilLoadLyrixiLanguageResult = {
      status: 'error',
      message: 'Local ts file loaded failed'
    }

    // \u52A8\u6001\u5F15\u5165\u5404\u8BED\u8A00\u6587\u6848\uFF08.ts \u4E0E src \u5185\u5176\u5B83\u6A21\u5757\u4E00\u6837\u7531 father/webpack \u53C2\u4E0E\u6253\u5305\uFF09
    import(\`./../../../assets/locale/\${language}.ts\`)
      .then((tsFile: { default?: Record<string, string> }) => {
        const data = tsFile.default
        if (data) {
          window.lyrixiLocaleLanguage = language
          window.lyrixiLocaleData = data
          result = {
            status: 'success',
            message: 'Local locale loaded',
            data: window.lyrixiLocaleData as Record<string, string> | undefined
          }
        }
        resolve(result)
      })
      .catch(() => {
        resolve(result)
      })
  })
}

export default loadLyrixiLanguage
`},94032:function(e,n){n.Z=`import { isValidElement } from 'react'

function hasNode(nodes: unknown): boolean {
  if (Array.isArray(nodes) && nodes.length) {
    for (let node of nodes) {
      if (isValidElement(node)) return true
    }
    return false
  }
  return isValidElement(nodes)
}

export default hasNode
`},3086:function(e,n){n.Z=`import React, { type ReactNode } from 'react'
import hasNode from './hasNode'
import splitValue from './splitValue'

// values ['text', 'variable:0'], variables [1000], replace variable to text1000
function valuesToText(values: string[], variables: unknown[]): (string | unknown)[] {
  return values.map((value) => {
    // Replace variable
    if (value.startsWith('variable:')) {
      let variableName = value.replace('variable:', '')
      let newValue = (variables as unknown as Record<string, unknown>)?.[variableName]
      if (typeof newValue === 'number' || typeof newValue === 'boolean') {
        newValue = String(newValue)
      }
      return newValue || ''
    }

    // \u5982\u679C\u4E0D\u662Fvariable, \u76F4\u63A5\u8FD4\u56DE
    return value
  })
}

/**
 * \u56FD\u9645\u5316\u51FD\u6570
 * @param {String} remark '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875'
 * @param {String} key resources\u4E2D\u7684key
 * @param {Array} variables {0: <div><div>}
 * @return {Node} \u8FD4\u56DEreact node
 */
function locale(remark: string | number | ReactNode, key?: string, variables?: unknown): string | ReactNode {
  if (typeof remark !== 'string') {
    return remark
  }
  // Get key's value
  let localeData = (window.lyrixiLocaleData || {}) as Record<string, string>
  let value = key && typeof key === 'string' ? localeData[key || ''] : ''
  if (!value && typeof remark === 'string') {
    value = remark
  }

  // If no key's value, return the original remark
  if (!value) {
    return remark
  }

  // Split value('text{0}') to ['text', 'variable:0']
  let values = splitValue(value)

  // No node, return string
  if (!hasNode(variables)) {
    return valuesToText(values, (variables ?? []) as unknown[]).join('')
  }

  // Has node, return node
  return <>{valuesToText(values, (variables ?? []) as unknown[])}</>
}

export default locale
`},11145:function(e,n){n.Z=`/**
 * Split value by variable: {0}{1}...
 */
function splitValue(value: string): string[] {
  return value.split(/{(\\d+)}/).map((part: string, index: number) => {
    if (index % 2 === 1) {
      return \`variable:\${part}\`
    }
    return part
  })
}

export default splitValue
`},84136:function(e,n){n.Z=`async function setLocale(
  language: string,
  data: unknown
): Promise<void> {
  window.lyrixiLocaleLanguage = language
  window.lyrixiLocaleData = data
}

export default setLocale
`}}]);

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { CanvasUtil } from './utils'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 手写签名
const Signature = (
  {
    // Value & Display Value
    suffix = 'png',
    quality = 0.92,

    // Style
    style, // 不能使用style制定宽高,canvas用style的width|height会导致绘图位置不正确
    color = '#000', // 绘画配置: 画笔颜色
    backgroundColor = '#fff', // 绘画配置: 背景颜色
    lineWidth = 3 // 绘画配置: 线条宽度
  },
  ref
) => {
  const rootRef = useRef(null)
  const canvasRef = useRef(null)
  const isDrewRef = useRef(false)
  // 标识是否正在绘制，用于解决鼠标移动时，没有开始绘制，则不处理
  const isDrawingRef = useRef(false)
  // canvas坐标信息
  let clientRectRef = useRef(null)
  // 触摸信息
  let touchesRef = useRef({
    beginX: 0,
    beginY: 0,
    endX: 0,
    endY: 0
  })

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      getBase64: async () => {
        if (CanvasUtil.isBlank(canvasRef.current)) {
          return null
        }
        let base64 = CanvasUtil.toBase64(canvasRef.current, { suffix, quality })

        // 旋转90度后返回
        base64 = await CanvasUtil.rotateBase64(base64, { backgroundColor })
        return base64
      },
      clear: () => {
        CanvasUtil.clear(canvasRef.current)
        isDrewRef.current = false
      }
    }
  })

  useEffect(() => {
    updateContainer()
    canvasRef.current.ctx = canvasRef.current.getContext('2d')
    // eslint-disable-next-line
  }, [])

  function updateContainer() {
    let width = rootRef.current.clientWidth
    let height = rootRef.current.clientHeight
    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {
      canvasRef.current.width = width
      canvasRef.current.height = height
    }
  }

  function handleStart(e) {
    e.stopPropagation()
    // 解决拖动时影响document弹性
    if (e.type === 'touchstart') {
      e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault, false)
    }

    // 鼠标开始绘制
    isDrawingRef.current = true

    // 防止尺寸变化
    updateContainer()

    // 防止下层还有焦点
    window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty()
    canvasRef.current.ctx.strokeStyle = color
    canvasRef.current.ctx.lineWidth = lineWidth
    clientRectRef.current = canvasRef.current.getBoundingClientRect()

    const pos = DOMUtil.getEventPosition(e)
    canvasRef.current.ctx.beginPath()
    canvasRef.current.ctx.moveTo(
      pos.clientX - clientRectRef.current.left,
      pos.clientY - clientRectRef.current.top
    )
    touchesRef.beginX = pos.clientX - clientRectRef.current.left
    touchesRef.beginY = pos.clientY - clientRectRef.current.top
  }

  function handleMove(e) {
    // 鼠标移动时，如果没有开始绘制，则不处理
    if (!isDrawingRef.current) {
      return
    }

    e.stopPropagation()
    const pos = DOMUtil.getEventPosition(e)
    canvasRef.current.ctx.lineTo(
      pos.clientX - clientRectRef.current.left,
      pos.clientY - clientRectRef.current.top
    )
    touchesRef.endX = pos.clientX - clientRectRef.current.left
    touchesRef.endY = pos.clientY - clientRectRef.current.top
    canvasRef.current.ctx.stroke()
    // 标识是否绘制过
    isDrewRef.current = true
  }

  function handleEnd(e) {
    // 鼠标结束绘制
    isDrawingRef.current = false

    // 解除对move时的弹性对当前div的锁定
    if (e.type === 'touchend') {
      e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault, false)
    }
  }

  // 不能使用style制定宽高,canvas用style的width|height会导致绘图位置不正确
  if (style) {
    delete style?.width
    delete style?.height
  }

  return (
    <div
      ref={rootRef}
      // Style
      style={style}
      className="lyrixi-signature-main-canvas"
    >
      {/* Element: Canvas */}
      <canvas
        ref={canvasRef}
        // Events
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
      >
        Canvas画板
      </canvas>
    </div>
  )
}

export default forwardRef(Signature)

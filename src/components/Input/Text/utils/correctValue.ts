import maxLengthFormatter from './maxLengthFormatter'
import minMaxFormatter from './minMaxFormatter'
import precisionFormatter from './precisionFormatter'

// 内库使用-start
import MathUtil from '../../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-mobile'
测试使用-end */

interface CorrectValueOptions {
  type?: string
  min?: number
  max?: number
  maxLength?: number
  trim?: boolean
  precision?: number
}

// 矫正最大长度和小数位截取
function correctValue(value: string | number, { type, min, max, maxLength, trim, precision }: CorrectValueOptions): string | number {
  let val: string | number = value
  if (val === undefined || val === '') return val
  if (typeof val !== 'string' && typeof val !== 'number') return ''

  // 最大最小值矫正
  val = minMaxFormatter(val, { min, max })

  // 小数位截取
  val = precisionFormatter(val, { precision, trim })

  // 最大长度载取
  val = maxLengthFormatter(val, { maxLength })

  if (type === 'number') {
    const extracted = MathUtil.extractNumber(val)
    val = (typeof extracted === 'string' || typeof extracted === 'number' ? extracted : String(extracted)) as string | number
  }

  return val
}

export default correctValue

import type { IconSVGElement } from '../../Icon/types'
import Icons from '../../../icons'
import AssetUtil from '../../../utils/AssetUtil'

export type AttachFileIconType =
  | 'video'
  | 'audio'
  | 'image'
  | 'pack'
  | 'word'
  | 'excel'
  | 'ppt'
  | 'pdf'
  | 'unknown'

export function getAttachFileIconType(src: string | undefined): AttachFileIconType {
  let suffix = typeof src === 'string' ? AssetUtil.getFileExtension(src) : null
  if (!suffix) return 'unknown'
  if (suffix.indexOf('?') !== -1) {
    suffix = suffix.substring(0, suffix.indexOf('?'))
  }
  if ('RM,RMVB,MP4,3GP,AVI,MKV,WMV,MPG,VOB,FLV'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'video'
  }
  if ('WAVE,MPEG,MP3,MPEG-4,MIDI,WMA,VQF,AMR,APE,FLAC,AAC'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'audio'
  }
  if ('JPG,JPEG,WEBP,GIF,PNG,TIF,BMP'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'image'
  }
  if ('RAR,ZIP'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'pack'
  }
  if ('DOC,DOCX'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'word'
  }
  if ('XSL,EXCEL'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'excel'
  }
  if ('PPT'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'ppt'
  }
  if ('PDF'.indexOf(suffix.toUpperCase()) !== -1) {
    return 'pdf'
  }
  return 'unknown'
}

export function getAttachFileIconSvg(type: AttachFileIconType): IconSVGElement {
  switch (type) {
    case 'video':
      return Icons.FileVideo
    case 'audio':
      return Icons.FileAudio
    case 'image':
      return Icons.FileImage
    case 'pack':
      return Icons.FilePack
    case 'word':
      return Icons.FileWord
    case 'excel':
      return Icons.FileExcel
    case 'ppt':
      return Icons.FilePpt
    case 'pdf':
      return Icons.FilePdf
    default:
      return Icons.FileUnknow
  }
}

export function getAttachFileIconColor(type: AttachFileIconType): string | undefined {
  if (type === 'word') return '#83a4eb'
  if (type === 'excel') return '#8ad4aa'
  if (type === 'ppt') return '#e7896d'
  if (type === 'unknown') return undefined
  return 'primary'
}

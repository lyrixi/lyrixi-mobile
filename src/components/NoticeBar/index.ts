import NoticeBar from './NoticeBar'

type NoticeBarWithName = typeof NoticeBar & { componentName: string }
;(NoticeBar as NoticeBarWithName).componentName = 'NoticeBar'

export default NoticeBar as NoticeBarWithName

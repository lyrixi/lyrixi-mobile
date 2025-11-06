import { useLocale } from 'dumi'
import './Homepage.less'

export default () => {
  const locale = useLocale()

  // 国际化
  function trans(en, zh) {
    return locale?.id === 'en-US' ? en : zh
  }

  return (
    <div className="homepage">
      {/* 内容部分 */}
      <div className="main">
        <h1 className="title" style={{ marginTop: 12 }}>
          Lyrixi Design Mobile
        </h1>
        <p className="description">
          {trans('The best React component library for mobile', '最好用的移动端React组件库')}
        </p>
        {/* <a
          className="button-start"
          href={trans('/en-US/', '/lyrixi-mobile/design/introduce')}
        >
          {trans('Get Started', '开始使用')}
        </a> */}
      </div>
      {/* 卡片 */}
      <div className="snippets">
        <div className="snippet">
          <div className="title">设计原则</div>
          <div className="description">极简Token, API统一, 简单易用</div>
        </div>
        <div className="snippet">
          <div className="title">组件</div>
          <div className="description">评星, 地区选择, 地图等组件</div>
        </div>
        <div className="snippet">
          <div className="title">模板</div>
          <div className="description">列表, 编辑, 详情</div>
        </div>
      </div>
    </div>
  )
}

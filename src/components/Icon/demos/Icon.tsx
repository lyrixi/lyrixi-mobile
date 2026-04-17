import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Row from 'lyrixi-mobile/components/Row'
import Icon from 'lyrixi-mobile/components/Icon'
import DOMUtil from 'lyrixi-mobile/utils/DOMUtil'

// 与 src/assets/global/icon.less 中的 .lyrixi-iconfont-* 一一对应
const iconList = [
  'circle-close',
  'video',
  'undo',
  'redo',
  'reload',
  'reloadtime',
  'circle-ok',
  'circle-info',
  'circle-warning',
  'circle-info-fill',
  'circle-warning-fill',
  'circle-minus-fill',
  'circle-ok-fill',
  'circle-plus-fill',
  'circle-question-fill',
  'circle-tel-fill',
  'three-dots',
  'circle-close-fill',
  'keyboard-delete',
  'pic-error',
  'minus',
  'close',
  'navigation',
  'video-fill',
  'trash',
  'file-audio',
  'file-text',
  'file-excel',
  'file-pack',
  'file-pdf',
  'file-video',
  'file-image',
  'file-word',
  'file-ppt',
  'file-unknow',
  'update',
  'location',
  'search',
  'filter-menu',
  'ok',
  'transfer-drop',
  'circle-minus',
  'circle-plus',
  'plus',
  'barcode',
  'signature',
  'circle-question',
  'arrow-right',
  'arrow-left',
  'arrow-down',
  'arrow-up',
  'adjuster',
  'star-fill',
  'config',
  'triangle-up-fill'
]

export default () => {
  return (
    <Page>
      <Page.Main className="lyrixi-padding-horizontal-m lyrixi-padding-vertical-m">
        <Row className={DOMUtil.classNames('lyrixi-flex', 'lyrixi-flex-wrap')}>
          {iconList.map((name) => (
            <Row.Col
              key={name}
              span={6}
              className={DOMUtil.classNames(
                'lyrixi-flex',
                'lyrixi-flex-vertical',
                'lyrixi-flex-middlecenter',
                'lyrixi-padding-vertical-s',
                'lyrixi-padding-horizontal-xs'
              )}
            >
              <Icon
                className={DOMUtil.classNames('lyrixi-iconfont', `lyrixi-iconfont-${name}`)}
                size="l"
              />
              <span className="lyrixi-font-size-xs lyrixi-color-auxiliary lyrixi-nowrap lyrixi-margin-vertical-xxxs">
                {name}
              </span>
            </Row.Col>
          ))}
        </Row>
      </Page.Main>
    </Page>
  )
}

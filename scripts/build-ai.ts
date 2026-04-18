// @ts-nocheck
#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const srcIndexPath = path.join(rootDir, 'src', 'index.ts')
const outputPath = path.join(rootDir, 'ai', 'usage.json')

const metadata = {
  Page: {
    kind: 'component',
    priority: 1,
    replace: ['page wrapper', 'screen container', 'layout root'],
    scenes: ['list page', 'detail page', 'edit page', 'full page'],
    anti: ['do not build a page without Page'],
    usage: '<Page><Page.Main>...</Page.Main></Page>'
  },
  Button: {
    kind: 'component',
    priority: 1,
    replace: ['button', 'div clickable'],
    scenes: ['submit', 'confirm', 'action'],
    anti: ['never use <button>', 'never use <div onClick> as button'],
    usage: '<Button color="primary">Submit</Button>'
  },
  Form: {
    kind: 'component',
    priority: 1,
    replace: ['custom form wrapper', 'manual field layout'],
    scenes: ['edit page', 'detail form', 'data entry'],
    anti: ['do not build complex forms with loose inputs only'],
    usage: '<Form><Form.Item label="标题"><Input.Text /></Form.Item></Form>'
  },
  Input: {
    kind: 'component',
    priority: 1,
    replace: ['input', 'textarea', 'search input'],
    scenes: ['text input', 'search', 'password', 'number'],
    anti: ['avoid native inputs when library input exists'],
    usage: '<Input.Text placeholder="请输入" />'
  },
  List: {
    kind: 'component',
    priority: 1,
    replace: ['ul', 'list container', 'row list'],
    scenes: ['list display', 'items display', 'simple list'],
    anti: ['do not rebuild list layout with repeated div rows'],
    usage: '<List.Item title="标题" description="描述" />'
  },
  ListPagination: {
    kind: 'component',
    priority: 1,
    replace: ['manual list with pager', 'paged data table on mobile'],
    scenes: ['paginated list', 'query result list'],
    anti: ['avoid manual pagination scaffolding when ListPagination fits'],
    usage: '<ListPagination />'
  },
  ToolBar: {
    kind: 'component',
    priority: 1,
    replace: ['filter header', 'search toolbar', 'actions row'],
    scenes: ['list header', 'search + filter', 'toolbar controls'],
    anti: ['avoid custom filter rows when ToolBar fits'],
    usage: '<ToolBar><ToolBar.Search /><ToolBar.Filter /></ToolBar>'
  },
  Card: {
    kind: 'component',
    priority: 2,
    replace: ['panel', 'section container'],
    scenes: ['content section', 'demo block', 'detail section'],
    anti: ['avoid ad-hoc bordered containers'],
    usage: '<Card><Card.Header>标题</Card.Header><Card.Main>内容</Card.Main></Card>'
  },
  Modal: {
    kind: 'component',
    priority: 2,
    replace: ['custom popup', 'dialog'],
    scenes: ['confirm dialog', 'content popup', 'overlay panel'],
    anti: ['avoid writing custom popup logic when Modal fits'],
    usage: '<Modal open={open}>...</Modal>'
  },
  ActionSheet: {
    kind: 'component',
    priority: 2,
    replace: ['mobile action menu', 'bottom actions popup'],
    scenes: ['picker-like actions', 'mobile action list'],
    anti: ['avoid custom mobile bottom sheet when ActionSheet fits'],
    usage: '<ActionSheet.Combo list={list} />'
  },
  DatePicker: {
    kind: 'component',
    priority: 2,
    replace: ['date input', 'date popup'],
    scenes: ['single date', 'date range', 'time selection'],
    anti: ['avoid native date input when library date picker is required'],
    usage: '<DatePicker.Combo type="date" />'
  },
  Select: {
    kind: 'component',
    priority: 2,
    replace: ['select', 'dropdown select'],
    scenes: ['single select', 'enum choice', 'status choice'],
    anti: ['avoid raw select if Select.Combo already solves it'],
    usage: '<Select.Combo list={list} />'
  },
  Result: {
    kind: 'component',
    priority: 2,
    replace: ['empty state', 'error page', 'status screen'],
    scenes: ['error', 'empty', 'success summary'],
    anti: ['avoid custom empty/error blocks when Result fits'],
    usage: '<Result status="empty" title="暂无数据" />'
  },
  FooterBar: {
    kind: 'component',
    priority: 2,
    replace: ['bottom action area', 'fixed footer buttons'],
    scenes: ['page footer actions', 'modal footer actions'],
    anti: ['avoid manual fixed button bars'],
    usage: '<FooterBar><FooterBar.Button>取消</FooterBar.Button></FooterBar>'
  },
  ArrayUtil: {
    kind: 'util',
    priority: 2,
    description:
      '树与列表数据的深度/扁平互转、树节点读写更新、数组对比（isEqual）等；适用于级联、树形选项与嵌套列表数据处理。',
    replace: ['手写树拍平', '递归改树'],
    scenes: ['树形数据', '级联选项', '嵌套列表'],
    anti: ['在已有 ArrayUtil 场景下重复实现树遍历与拍平'],
    usage: 'ArrayUtil.flattenTree(tree)'
  },
  AssetUtil: {
    kind: 'util',
    priority: 2,
    description:
      '静态资源相关：扩展名解析、远程 JS/JSON/图片加载、图片访问；减少手写动态脚本与资源加载样板。',
    replace: ['手写 script 注入', '裸 fetch 拉配置'],
    scenes: ['按需加载远程脚本', '加载配置 JSON', '图片加载与鉴权访问'],
    anti: ['散落实现远程资源加载逻辑'],
    usage: 'AssetUtil.loadRemoteJson(url)'
  },
  Bridge: {
    kind: 'util',
    priority: 1,
    description:
      '按运行容器（微信/企业微信/支付宝/钉钉/飞书/浏览器等）调用 JSBridge 与原生能力（打开链接、定位、扫码等）；支持 addBridge 扩展自定义容器。',
    replace: ['手写 wx.miniProgram', '散落 UA 判断调原生'],
    scenes: ['小程序/H5 互跳', '容器内扫码、支付、定位'],
    anti: ['在已集成 Bridge 的场景下直接拼各平台 SDK'],
    usage: 'Bridge.openLocation({ ... })'
  },
  Clipboard: {
    kind: 'util',
    priority: 2,
    description: '复制文本到系统剪贴板（口令、链接等），封装浏览器/容器兼容与降级。',
    replace: ['手写 document.execCommand', '复制降级分支'],
    scenes: ['一键复制', '分享前复制'],
    anti: ['各处复制粘贴兼容逻辑复制粘贴'],
    usage: 'Clipboard.copyText(text)'
  },
  DOMUtil: {
    kind: 'util',
    priority: 1,
    description: 'className 条件合并（classNames）、DOM 相关辅助；与样式与节点操作配套。',
    replace: ['classnames helper', 'manual dom utility'],
    scenes: ['merge class names', 'event helpers'],
    anti: ['avoid hand-written class name concatenation'],
    usage: "DOMUtil.classNames('foo', bar && 'bar')"
  },
  DateUtil: {
    kind: 'util',
    priority: 1,
    description: '日期时间格式化、解析、加减与区间计算；替代手写 Date 与字符串拆分。',
    replace: ['manual date format', 'manual date math'],
    scenes: ['format date', 'compare dates', 'date range logic'],
    anti: ['avoid custom date helpers when DateUtil exists'],
    usage: "DateUtil.format(new Date(), 'YYYY-MM-DD')"
  },
  Debugger: {
    kind: 'util',
    priority: 3,
    description: '开发调试：多次点击触发、sessionStorage 开关、按需拉起 vconsole 等调试面板能力。',
    replace: ['散落 console', '手写 vconsole 接入'],
    scenes: ['真机联调', '灰度打开调试'],
    anti: ['生产环境误留调试入口'],
    usage: 'Debugger.addTrigger()'
  },
  Device: {
    kind: 'util',
    priority: 1,
    description:
      '运行环境与设备信息：平台（含微信/支付宝等）、OS、机型、屏幕尺寸、URL 参数等；支持 addPlatform 自定义容器识别。',
    replace: ['手写 UA 解析', '散落 isWeChat'],
    scenes: ['按容器分支逻辑', '适配安全区与屏幕'],
    anti: ['业务里重复解析 navigator.userAgent'],
    usage: 'Device.platform'
  },
  EventUtil: {
    kind: 'util',
    priority: 2,
    description: '轻量发布订阅（on / emit / off / destroy），用于模块间解耦通信（非浏览器 DOM 事件）。',
    replace: ['手写 EventEmitter', '全局 bus'],
    scenes: ['跨组件非 React 流通信', '插件通知'],
    anti: ['与 DOM 事件混淆：页面点击请用 React 事件'],
    usage: "EventUtil.on('foo', handler)"
  },
  FullScreen: {
    kind: 'util',
    priority: 3,
    description: '进入/退出全屏及能力检测，封装各浏览器前缀与差异。',
    replace: ['手写 requestFullscreen', '前缀分支'],
    scenes: ['视频全屏', '沉浸式展示'],
    anti: ['忽略全屏 API 不可用时的降级'],
    usage: 'FullScreen.enter(element)'
  },
  GeoUtil: {
    kind: 'util',
    priority: 2,
    description:
      '地理几何工具：点与多边形（点在多边形内）、多边形与线、线段相交等；用于围栏、地图选区与坐标校验。',
    replace: ['手写射线法判断点是否在多边形内', '散落线段相交判断'],
    scenes: ['电子围栏', '地图选区', '坐标合法性'],
    anti: ['在已有 GeoUtil 时重复实现点线面几何算法'],
    usage: 'GeoUtil.pointInsidePolygon(point, polygon)'
  },
  HistoryUtil: {
    kind: 'util',
    priority: 2,
    description: '浏览器 history 封装：前进后退、popstate、带回调的导航与回退处理。',
    replace: ['散落 history.pushState', '手写返回栈'],
    scenes: ['H5 返回拦截', '单页与多页混排'],
    anti: ['与路由库混用时重复造轮子'],
    usage: 'HistoryUtil.back()'
  },
  LocaleUtil: {
    kind: 'util',
    priority: 2,
    description: '用户可见文案国际化与占位多语言；业务展示字符串优先通过 locale 出口，而非硬编码。',
    replace: ['hard-coded copy', 'manual locale helper'],
    scenes: ['user-facing text', 'button text', 'messages'],
    anti: ['avoid leaving visible text outside locale flow'],
    usage: "LocaleUtil.locale('确定', 'lyrixi.ok')"
  },
  Logger: {
    kind: 'util',
    priority: 3,
    description: '日志缓冲、查询、清空与上报；可配置覆盖 console，便于线上问题排查。',
    replace: ['散落 console.log', '自建上报队列'],
    scenes: ['错误上报', '操作轨迹'],
    anti: ['敏感信息打日志'],
    usage: 'Logger.setLogs(entry)'
  },
  MathUtil: {
    kind: 'util',
    priority: 1,
    description:
      '移动端布局与数值：variableSize 按设计稿换算、千分位与金额展示、数值校验与提取等。',
    replace: ['手写 rem 换算', '散落 toFixed'],
    scenes: ['响应式尺寸', '金额输入展示'],
    anti: ['各处复制一套 variableSize 逻辑'],
    usage: 'MathUtil.variableSize(12)'
  },
  ObjectUtil: {
    kind: 'util',
    priority: 2,
    description:
      '通用对象/函数工具：debounce、cloneDeep、isPlainObject、isEqual、pickBy、randomUUID 等。',
    replace: ['lodash 零散引入', '手写深拷贝'],
    scenes: ['防抖搜索', '对象对比与克隆'],
    anti: ['在已有 ObjectUtil 时再引第三方同类工具'],
    usage: 'ObjectUtil.debounce(fn, 300)'
  },
  Request: {
    kind: 'util',
    priority: 1,
    description: 'HTTP 请求封装，与业务接口约定对齐；列表分页、表单提交等统一走 Request，勿再包一层 fetch。',
    replace: ['custom fetch wrapper', 'ad-hoc request helper'],
    scenes: ['get data', 'post data', 'page query'],
    anti: ['avoid inventing another request abstraction'],
    usage: "Request.get('/api/list', payload)"
  },
  Storage: {
    kind: 'util',
    priority: 2,
    description: 'localStorage / sessionStorage 等封装，统一读写与 key 管理，避免业务散落直接访问 storage。',
    replace: ['localStorage wrapper', 'manual cache helper'],
    scenes: ['cache state', 'remember search params'],
    anti: ['avoid direct scattered localStorage usage'],
    usage: "Storage.setLocalStorage('key', value)"
  },
  Theme: {
    kind: 'util',
    priority: 3,
    description: '主题与排版辅助：如 hexToRgb、setFontSize 等与 token、字号相关的换算。',
    replace: ['手写颜色换算', '散落 font-size 计算'],
    scenes: ['暗色/主题切换', '动态字号'],
    anti: ['与 Design Token 冲突的硬编码颜色'],
    usage: 'Theme.hexToRgb("#336699")'
  }
}

function readExports() {
  const content = fs.readFileSync(srcIndexPath, 'utf8')
  const matches = [...content.matchAll(/export\s+\{\s+default\s+as\s+(\w+)\s+\}\s+from\s+'\.\/(components|utils)\//g)]

  return matches.map((match) => {
    const name = match[1]
    const type = metadata[name]?.kind || (match[2] === 'utils' ? 'util' : 'component')
    const entry = {
      name,
      kind: type,
      priority: metadata[name]?.priority || 3,
      replace: metadata[name]?.replace || [],
      scenes: metadata[name]?.scenes || [],
      anti: metadata[name]?.anti || [],
      usage: metadata[name]?.usage || ''
    }
    if (type === 'util' && metadata[name]?.description) {
      entry.description = metadata[name].description
    }
    return entry
  })
}

function main() {
  const data = {
    library: 'lyrixi-mobile',
    strategy: 'replace-native-and-compose-library-components',
    entry: 'ai/README.md',
    // 与 usage.mdc 互补：本 JSON 为结构化清单，原则性守则见 usage.mdc
    usageMdc: 'ai/usage.mdc',
    components: readExports()
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2) + '\n')
  console.log(`AI metadata generated: ${path.relative(rootDir, outputPath)}`)
}

main()

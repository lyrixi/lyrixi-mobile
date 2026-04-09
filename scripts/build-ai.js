#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const srcIndexPath = path.join(rootDir, 'src', 'index.js')
const outputPath = path.join(rootDir, 'ai', 'components.json')

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
  DOMUtil: {
    kind: 'util',
    priority: 1,
    replace: ['classnames helper', 'manual dom utility'],
    scenes: ['merge class names', 'event helpers'],
    anti: ['avoid hand-written class name concatenation'],
    usage: "DOMUtil.classNames('foo', bar && 'bar')"
  },
  DateUtil: {
    kind: 'util',
    priority: 1,
    replace: ['manual date format', 'manual date math'],
    scenes: ['format date', 'compare dates', 'date range logic'],
    anti: ['avoid custom date helpers when DateUtil exists'],
    usage: "DateUtil.format(new Date(), 'YYYY-MM-DD')"
  },
  Request: {
    kind: 'util',
    priority: 1,
    replace: ['custom fetch wrapper', 'ad-hoc request helper'],
    scenes: ['get data', 'post data', 'page query'],
    anti: ['avoid inventing another request abstraction'],
    usage: "Request.get('/api/list', payload)"
  },
  Storage: {
    kind: 'util',
    priority: 2,
    replace: ['localStorage wrapper', 'manual cache helper'],
    scenes: ['cache state', 'remember search params'],
    anti: ['avoid direct scattered localStorage usage'],
    usage: "Storage.setLocalStorage('key', value)"
  },
  LocaleUtil: {
    kind: 'util',
    priority: 2,
    replace: ['hard-coded copy', 'manual locale helper'],
    scenes: ['user-facing text', 'button text', 'messages'],
    anti: ['avoid leaving visible text outside locale flow'],
    usage: "LocaleUtil.locale('确定', 'lyrixi.ok')"
  }
}

function readExports() {
  const content = fs.readFileSync(srcIndexPath, 'utf8')
  const matches = [...content.matchAll(/export\s+\{\s+default\s+as\s+(\w+)\s+\}\s+from\s+'\.\/(components|utils)\//g)]

  return matches.map((match) => {
    const name = match[1]
    const type = metadata[name]?.kind || (match[2] === 'utils' ? 'util' : 'component')
    return {
      name,
      kind: type,
      priority: metadata[name]?.priority || 3,
      replace: metadata[name]?.replace || [],
      scenes: metadata[name]?.scenes || [],
      anti: metadata[name]?.anti || [],
      usage: metadata[name]?.usage || ''
    }
  })
}

function main() {
  const data = {
    library: 'lyrixi-mobile',
    strategy: 'replace-native-and-compose-library-components',
    entry: 'ai/README.mdc',
    components: readExports()
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2) + '\n')
  console.log(`AI metadata generated: ${path.relative(rootDir, outputPath)}`)
}

main()

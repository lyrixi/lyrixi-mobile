import path from 'path'

import type Config from '@umijs/bundler-webpack/compiled/webpack-5-chain'

/**
 * src 内 *.svg 以 React 组件作为 default 导出（供 Icon svg={Icons.*} 使用）。
 * Umi 内置 svgr 规则会叠加 url-loader，default 为 data URL，与 Icon 不兼容。
 */
export function configureSrcSvgWebpack(memo: Config, projectRoot: string = process.cwd()) {
  const srcDir = path.resolve(projectRoot, 'src')
  const svgrLoader = require.resolve('@umijs/bundler-webpack/dist/loader/svgr')

  if (memo.module.rules.has('svgr')) {
    memo.module.rule('svgr').exclude.add(srcDir)
  }
  if (memo.module.rules.has('svg')) {
    memo.module.rule('svg').exclude.add(srcDir)
  }

  memo.module
    .rule('src-svg-component')
    .before('svgr')
    .test(/\.svg$/)
    .include.add(srcDir)
    .end()
    .issuer(/\.[jt]sx?$/)
    .type('javascript/auto')
    .use('svgr-loader')
    .loader(svgrLoader)
    .options({
      exportType: 'default',
      svgo: false
    })
}

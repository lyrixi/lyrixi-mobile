import { defineConfig } from 'father'

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'esm' },
  extraBabelPlugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      }
    ]
  ],
  // cjs: { output: 'cjs' },
  // 因react-sortablejs 6.1.4 需要react18所以package.json里不能包含此库, 但umd打包需要先安装一下
  umd: {
    output: 'umd',
    name: 'Lyrixi',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'axios',
      dayjs: 'dayjs',
      vconsole: 'vconsole',
      lodash: 'lodash'
    }
  }
})

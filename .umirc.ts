import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base: string | undefined = '/atom';
let publicPath: string | undefined = '/react-ui-library-tutorial/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Atom UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  mfsu: {},
  resolve: {
    includes: ['docs', 'components']
  },
  base,
  publicPath,
  menus: {
    '/components': [
      {
        title: '数据录入',
        children: [
          'input'
        ]
      }
    ]
  }
});

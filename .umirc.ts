import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base: string | undefined = '/atom';
let publicPath: string | undefined = '/react-ui-library-tutorial/';
import path from 'path';
if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export function resolve(paths: string) {
  return path.resolve(__dirname, paths);
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
    includes: [resolve('docs'), resolve('components')]
  },
  locales: [['zh-CN', '中文']],
  base,
  publicPath,
});

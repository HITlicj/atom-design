## 介绍

组件库一直是前端开发不可或缺的一环，主要是为了开发提效，避免开发同学复制粘贴和重复造轮子。

对于 2C 移动端场景而言，不同业务线的设计规范大相径庭，过于定制化，所以内部其实一直没有一套基于 React 的移动端组件库。

而对于某一条特定的业务线来讲，设计语言是能够也必须要达到统一的。

于是在部门内搭了一个简单的组件库，组件不多，但在搭建过程中掌握了很多知识，再看 antd 等热门组件库，对其中的一些设计也有了更深的感悟，故记录下来，希望能帮助到其他的同学。

[comment]: <> ([🚀 在线预览]&#40;https://worldzhao.github.io/react-ui-library-tutorial&#41;)

🚆 本地预览

```bash
git clone git@github.com:HITlicj/atom.git
cd atom
yarn
yarn start
```

按顺序执行完命令后，即可在 localhost:8000 端口看到以下内容：

[comment]: <> (![preview]&#40;https://raw.githubusercontent.com/worldzhao/blog/master/images/rc-lib-v1-1.jpg&#41;)

## 概览

本系列文章主要包含以下内容：

- 项目初始化: 组件库前期开发准备工作。`eslint`/`commit lint`/`typescript`等等；
- 开发阶段: 使用 [dumi](https://d.umijs.org/zh-CN) 进行开发调试以及文档编写；
- 打包阶段: 输出~~`umd`~~/`cjs`/`esm`产物并支持按需加载；
- 组件测试: 使用`@testing-library/react`及其相关生态进行组件测试；
- 发布 npm: 编写脚本完成发布或直接使用 [np](https://www.npmjs.com/package/np) 发布；
- 部署文档站点: 使用 Github Pages 以及 Github Actions 完成文档站点自动部署。

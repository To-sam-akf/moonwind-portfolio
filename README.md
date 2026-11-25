# 月下风 · PEACE, PIXELS & ME — GitHub Pages 迁移版

这是从原站点源码准备的独立版本，使用 React 和 Vite 构建，包含首页、生活页、研究项目页和 GitHub 内容管理界面。GitHub Pages 托管静态内容，发布后任何人都可以访问；公开仓库的全部历史提交、文章、上传的图片与音乐也都可公开查看。请不要在此仓库保存私人草稿或密钥。

## 本地构建

需要 Node.js 22。

```sh
npm install
GITHUB_PAGES_BASE=/仓库名称/ npm run build
```

静态输出位于 `dist/`。GitHub Actions 工作流使用仓库名称自动设定路径。项目网站根目录须在 Pages 设置中选择 GitHub Actions。

## 内容管理

管理页面可以用限定到这个仓库的 GitHub 细粒度个人访问令牌连接 GitHub。令牌需要 Contents（内容）读写权限；不要授予其他仓库权限。令牌只保留在当前页面的内存里，不会写入源代码或本地存储。管理页面本身可被访问，但只有有写权限的令牌可以修改 GitHub。安全性由 GitHub 权限控制，避免在不可信设备或被注入脚本的环境中使用令牌；必要时可在 GitHub 撤销令牌。

保存文章和上传图片、音乐会写入公开仓库，触发 Actions 自动部署。图片上传之后就已公开，不需要等文章保存。每次部署可能需要等待；页面不会与原 ChatGPT Sites 自动同步。音乐目前未上传。

## 待确认事项

- 网站包含四篇生活文章和项目论文草稿 `public/paper.pdf`，请在发布之前逐项检查。
- 原站的数据库或资源如果后续有变化，不会自动进入本仓库；需重新核对并迁移。
- GitHub Pages 只提供静态托管，管理操作依赖 GitHub API。不同地区的 GitHub Pages 和 GitHub API 可用性不保证一致。
- GitHub Pages 网站和公开仓库可能被搜索引擎收录和复制。

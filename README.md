# ZZM API 文档站

这是部署到 Cloudflare Pages 的 ZZM API 使用文档，基于 VitePress 构建。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 生产构建

```bash
npm run docs:build
```

Cloudflare Pages 推荐配置：

- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`
- Node.js version: `20` 或更高
- Custom domain: `docs.zzmapi.zzmsgdsg.xyz`

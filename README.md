# ZZM API 文档站

ZZM API 用户文档，基于 VitePress 构建。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 生产构建

```bash
npm run docs:build
```

## Cloudflare Pages

推荐用 Pages 部署纯前端文档站：

- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`
- Node.js version: `20` 或更高
- Custom domain: `docs.zzmapi.zzmsgdsg.xyz`

## Cloudflare Workers

如果在 Cloudflare 里选择 Worker 并绑定 GitHub 仓库，仓库里已经带了 `wrangler.jsonc`。

- Build command: `npm run docs:build`
- Deploy command: `npx wrangler deploy`
- Static assets directory: `docs/.vitepress/dist`
- Node.js version: `20` 或更高

`wrangler.jsonc` 会把 Worker 静态资源目录指向 `./docs/.vitepress/dist`。

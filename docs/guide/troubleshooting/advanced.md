---
title: 进阶配置与效率优化
description: 更省事、更稳妥地使用 ZZM API 的一些进阶建议。
---

# 进阶配置与效率优化

这页先放高频建议，后面可以继续扩充。

## 一个工具一个 Key

最省事的做法：

- Claude Code 一个 Key
- Codex 一个 Key
- Gemini CLI 一个 Key

这样出了问题最好排查，也方便单独停用。

## 先在操练场测，再去改工具

先用 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 把模型测通，再去改本地工具配置。

这样能先排掉：

- 余额问题
- 分组问题
- 模型权限问题

## Codex 想稳一点

先检查这几项：

- `base_url` 带 `/v1`
- `wire_api = "responses"`
- `auth.json` 里是当前在用的 Key
- 改完后完全退出再重开 Codex

## Claude Code 想稳一点

先检查这几项：

- `ANTHROPIC_BASE_URL` 不带 `/v1`
- `ANTHROPIC_AUTH_TOKEN` 是当前 Key
- `ANTHROPIC_MODEL` 用控制台当前可用模型

## 文档和图片还会继续补

这版先把结构搭齐。

- 缺图先用占位
- 后面补图时优先替换占位段
- 有新工具或新报错，再继续往对应栏目里补

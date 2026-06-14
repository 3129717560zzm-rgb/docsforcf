---
title: 进阶配置与效率优化
description: 使用 ZZM API 时的进阶配置建议。
---

# 进阶配置与效率优化

## 一个工具一个 Key

Claude Code 和 Codex 分开建 Key：

- Claude Code 一个 Key
- Codex 一个 Key

后面查问题时更清楚，也方便单独停用。

## 先做控制台测试，再去改工具

先用 [控制台测试](https://zzmapi.zzmsgdsg.xyz/console/playground) 把模型测通，再去改本地工具配置。

这样能先排掉：

- 余额问题
- 分组问题
- 模型权限问题

## Codex 配置检查

先检查这几项：

- `base_url` 带 `/v1`
- `wire_api = "responses"`
- `auth.json` 里是当前在用的 Key
- 改完后完全退出再重开 Codex

## Claude Code 配置检查

先检查这几项：

- `ANTHROPIC_BASE_URL` 不带 `/v1`
- `ANTHROPIC_AUTH_TOKEN` 是当前 Key
- `ANTHROPIC_MODEL` 用控制台当前可用模型

## 排障前先检查什么

先检查这几项：

1. 当前工具用的是哪个 Key
2. 地址有没有带错或漏掉 `/v1`
3. 当前模型在这个分组里有没有权限
4. 控制台测试能不能先跑通
5. 本地工具是否缓存了上一次配置

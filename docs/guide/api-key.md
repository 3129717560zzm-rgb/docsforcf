---
title: 请求地址 / Key
description: 创建令牌、选分组、确认不同工具的请求地址。
---

# 请求地址 / Key

本页说明请求地址和 Key 创建方式。

## API / URL

| 工具 | Base URL |
| --- | --- |
| Codex CLI / Codex 插件 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| OpenAI SDK / OpenAI Compatible 客户端 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |

- `Codex` 带 `/v1`
- `Claude Code` 不带 `/v1`

控制台里的请求地址按上表填写。

## Key / 令牌

1. 打开 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token)
2. 点 `新建` 或 `添加令牌`
3. 给 Key 起名字
4. 选择分组
5. 点 `提交`
6. 创建后马上复制保存

![ZZM API 创建令牌页面](/screenshots/zzm-token-create.png)

## 选择分组

常用就看这三个：

| 用途 | 推荐分组 |
| --- | --- |
| Claude Code | `claude专用稳定` |
| Codex | `Codex混池` |

看不准时，先做一次控制台测试。

![ZZM API 创建令牌页分组下拉面板](/screenshots/zzm-token-create-group-panel.png)

选完分组后，直接点右下角 `提交`。

![ZZM API 创建令牌页提交按钮](/screenshots/zzm-token-create-submit.png)

## Key 只显示一次

- 创建后立刻复制
- 每个工具单独建一个 Key
- 群内沟通时只提供 Key 后几位或打码截图
- 确认不再使用后，可在令牌页删除

创建完成后，可以在令牌列表里复制密钥或复制连接信息。

![ZZM API 令牌页复制密钥与连接信息](/screenshots/zzm-token-copy-info.png)

## 创建后马上测试

去 [控制台测试](https://zzmapi.zzmsgdsg.xyz/console/playground) 发一句 `只回复 OK`。

- 能回：继续配工具
- 不能回：先查余额、分组、模型权限

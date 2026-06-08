---
title: 请求地址 / Key
description: 创建令牌、选分组、确认不同工具的请求地址。
---

# 请求地址 / Key

这页只看两件事：地址怎么填，Key 怎么建。

## 先看地址

| 工具 | Base URL |
| --- | --- |
| Codex CLI / Codex 插件 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Cherry Studio / OpenAI SDK / OpenAI Compatible 客户端 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |
| Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

记法很简单：

- `Codex` 带 `/v1`
- `Claude Code` 不带 `/v1`

## 创建 Key

1. 打开 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token)。
2. 点创建令牌。
3. 给 Key 起名字。
4. 选择分组。
5. 创建后马上复制保存。

![ZZM API 创建令牌页面](/screenshots/zzm-token-create.png)

## 分组怎么选

常用就看这三个：

| 用途 | 推荐分组 |
| --- | --- |
| Claude Code | `claude专用稳定` |
| Codex | `Codex混池` |
| Gemini CLI | `gemin-cli` |

看不准时，先去操练场测。

![ZZM API 创建令牌页的分组下拉框](/screenshots/zzm-token-create-group-dropdown.png)

## Key 只显示一次

- 创建后立刻复制
- 每个工具单独建一个 Key
- 不要把完整 Key 发群里
- 不用了直接删

![ZZM API 令牌管理页面](/screenshots/zzm-token-management.png)

## 创建后马上测试

去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 发一句 `只回复 OK`。

- 能回：继续配工具
- 不能回：先查余额、分组、模型权限

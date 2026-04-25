---
title: API 请求规范
description: ZZM API 的 OpenAI-compatible 请求地址、认证方式和常见参数。
---

# API 请求规范

写代码接入看这一页。普通 SDK、Codex、Cherry Studio 用 `/v1`；Claude Code 用根域名。

## 基础信息

| 项目 | 值 |
| --- | --- |
| OpenAI-compatible Base URL | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code Base URL | `https://zzmapi.zzmsgdsg.xyz` |
| 认证方式 | `Authorization: Bearer YOUR_ZZM_API_KEY` |
| 请求格式 | JSON |
| 常用接口 | `/chat/completions`、`/responses`、`/models`、`/images/generations` |

## 先拿 Key

先进入 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token) 创建 Key，再到 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测试模型。

## Chat Completions

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ZZM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [
      { "role": "user", "content": "写一个 3 行的产品简介。" }
    ],
    "temperature": 0.7
  }'
```

常用字段：

| 字段 | 说明 |
| --- | --- |
| `model` | 模型 ID，以控制台可用列表为准 |
| `messages` | 对话消息数组 |
| `temperature` | 随机性，越低越稳定 |
| `stream` | 是否使用流式输出 |
| `max_tokens` | 最大输出长度，受模型和账号策略影响 |

## 流式输出

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ZZM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "stream": true,
    "messages": [
      { "role": "user", "content": "分点解释流式输出的好处。" }
    ]
  }'
```

聊天界面和长文本建议开流式。

## 模型列表

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/models \
  -H "Authorization: Bearer YOUR_ZZM_API_KEY"
```

模型能不能用，看控制台、账号权限、余额和上游状态。

## Responses API

Codex 等工具会使用 Responses API，Base URL 仍然填写：

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

示例：

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/responses \
  -H "Authorization: Bearer YOUR_ZZM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "input": "只回复 OK"
  }'
```

## Images

图片生成模型使用 `/images/generations`：

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/images/generations \
  -H "Authorization: Bearer YOUR_IMAGE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "一个蓝绿色 Z 字母图标",
    "size": "1024x1024",
    "quality": "low",
    "n": 1
  }'
```

## 别这样踩坑

- 生产环境不要把 Key 写在浏览器前端。
- 每个项目单独创建 Key，方便后续停用和排查。
- 第一次接入先用小请求测试，再增加上下文、流式输出和复杂参数。
- 报错时记录请求时间、模型名、错误码和控制台日志，不要发送完整 Key。

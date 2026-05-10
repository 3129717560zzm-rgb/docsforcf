---
title: API 接口规范
description: ZZM API 的 OpenAI / Anthropic / Gemini 兼容接口规范。
---

# API 接口规范

ZZM API 同时支持三种协议：OpenAI、Anthropic、Gemini。不同工具用不同协议和地址。

## 地址与协议

| 协议 | Base URL | 适用工具 |
| --- | --- | --- |
| OpenAI 兼容 | `https://zzmapi.zzmsgdsg.xyz/v1` | Codex、Cherry Studio、OpenAI SDK |
| Anthropic 兼容 | `https://zzmapi.zzmsgdsg.xyz` | Claude Code |
| Gemini 兼容 | `https://zzmapi.zzmsgdsg.xyz` | Gemini CLI |

认证方式统一：`Authorization: Bearer YOUR_KEY`

## Chat Completions（OpenAI 协议）

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [{ "role": "user", "content": "你好" }],
    "temperature": 0.7
  }'
```

常用字段：

| 字段 | 说明 |
| --- | --- |
| `model` | 模型 ID，以控制台可用列表为准 |
| `messages` | 对话消息数组 |
| `temperature` | 随机性，越低越稳定 |
| `stream` | 流式输出，聊天场景建议开 |
| `max_tokens` | 最大输出长度 |

## 流式输出

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "stream": true,
    "messages": [{ "role": "user", "content": "分点说明流式输出的好处" }]
  }'
```

## 模型列表

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/models \
  -H "Authorization: Bearer YOUR_KEY"
```

返回当前 Key 可用的所有模型。

## Responses API（Codex 使用）

Codex 走 Responses API，地址同样带 `/v1`：

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/responses \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4",
    "input": "只回复 OK"
  }'
```

## Messages API（Anthropic 协议）

Claude Code 使用 Anthropic 原生 Messages API，地址不带 `/v1`：

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/messages \
  -H "x-api-key: YOUR_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 256,
    "messages": [{ "role": "user", "content": "你好" }]
  }'
```

## 图片生成

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/images/generations \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "一个蓝绿色 Z 字母图标",
    "size": "1024x1024",
    "quality": "low",
    "n": 1
  }'
```

## 注意事项

- Key 放后端，不要暴露在前端代码里。
- 每个项目单独建 Key，方便排查和停用。
- 报错时记录请求时间、模型名、错误码。不要发送完整 Key。

---
title: API 接口规范
description: ZZM API 的 OpenAI / Anthropic 兼容接口规范。
---

# API 接口规范

ZZMAPI 当前主要覆盖 OpenAI 兼容、Anthropic 兼容和生图中转场景。不同工具用不同协议和地址。

## 地址与协议

**配置工具时填的是 Base URL**，工具会自动拼接具体接口路径。直接 curl 时需要写完整 URL。

| 协议 | 工具配置 Base URL | 直接 curl 示例 |
| --- | --- | --- |
| OpenAI 兼容 | `https://zzmapi.zzmsgdsg.xyz/v1` | `https://zzmapi.zzmsgdsg.xyz/v1/chat/completions` |
| Anthropic 兼容 | `https://zzmapi.zzmsgdsg.xyz` | `https://zzmapi.zzmsgdsg.xyz/v1/messages` |
| 生图中转 | `https://imgapi.zzmsgdsg.xyz` | 按工具协议自动拼接 |

::: tip 为什么 Claude Code 的 Base URL 不写 `/v1`？
因为 Claude Code 会自动拼接接口路径。填根域名，工具自己拼出 `/v1/messages`。Codex 不同，它的 Base URL 必须带 `/v1`。
:::

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

如果是画图创作页面或生图工具，优先使用生图域名读取：

```bash
curl https://imgapi.zzmsgdsg.xyz/v1/models \
  -H "Authorization: Bearer YOUR_KEY"
```

模型列表以当前 Key 的分组权限为准。

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

ZZM API 的 Anthropic 协议端点为 `/v1/messages`。但 Claude Code 配置里填 **根域名**，因为 Claude Code 会自动拼接路径。

| 场景 | 填什么 |
| --- | --- |
| Claude Code 配置 `ANTHROPIC_BASE_URL` | `https://zzmapi.zzmsgdsg.xyz`（工具自己拼 `/v1/messages`） |
| 直接 curl 调用 API | `https://zzmapi.zzmsgdsg.xyz/v1/messages` |

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

OpenAI 兼容生图可以走主域 `/v1/images/generations`：

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

画图创作站默认使用：

```text
https://imgapi.zzmsgdsg.xyz
```

不要把官方地址填进画图站。你的 Key 来自 ZZMAPI，模型也从中转站读取。

## 注意事项

- Key 放后端，前端代码不写明文 Key。
- 每个项目单独建 Key，方便排查和停用。
- 画图、Codex、Claude Code 建议分别建 Key。
- 报错时记录请求时间、模型名、错误码，截图里的完整 Key 需要打码。

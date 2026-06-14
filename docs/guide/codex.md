---
title: Codex 配置教程
description: Codex CLI 和 VS Code 插件接入 ZZM API。
---

# Codex 配置教程

这页只做 Codex。

## 安装 Codex CLI

### 地址先填对

Codex 用这个地址：

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

这里必须带 `/v1`。

### 方式一：CC-Switch

- [CC-Switch 配置教程](/guide/cc-switch)

### 方式二：手动安装

```bash
npm install -g @openai/codex
codex --version
```

![终端 codex --version 输出](/screenshots/terminal-codex-version.png)

### 常见问题

- 地址没带 `/v1`
- `wire_api` 不是 `responses`
- `auth.json` 没写 Key
- Provider 名和 `model_provider` 对不上

## 配置 API

### 创建 Key

去 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token) 新建一个 Key。

推荐分组：`Codex混池`

### 改配置文件

编辑 `~/.codex/config.toml`：

```toml
model = "gpt-5.4"
model_provider = "zzmapi"
model_context_window = 950000
model_auto_compact_token_limit = 900000

[model_providers.zzmapi]
name = "ZZM API"
base_url = "https://zzmapi.zzmsgdsg.xyz/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
requires_openai_auth = true
```

![Codex config.toml 配置截图](/screenshots/zzm-codex-config-toml.png)

再编辑 `~/.codex/auth.json`：

```json
{
  "OPENAI_API_KEY": "你的令牌Key"
}
```

### 配置参数参考

| 参数 | 说明 | 建议值 |
| --- | --- | --- |
| `model_provider` | 使用的 Provider 名 | `zzmapi` |
| `base_url` | 请求地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| `wire_api` | 协议类型 | `responses` |
| `env_key` | 读取的 Key 名 | `OPENAI_API_KEY` |
| `model_context_window` | 上下文窗口 | `950000` |
| `model_auto_compact_token_limit` | 自动压缩阈值 | `900000` |

## 开始使用

```bash
export OPENAI_API_KEY="你的令牌Key"
codex
```

发一句 `只回复 OK`。

## VS Code 插件

1. 扩展市场搜索 `Codex`
2. 安装 OpenAI 官方插件
3. 插件会读取本地 Codex 配置

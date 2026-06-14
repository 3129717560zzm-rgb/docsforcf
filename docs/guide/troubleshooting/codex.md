---
title: Codex CLI 专项问题
description: Codex 不读配置、地址不匹配、auth.json 无效这类问题。
---

# Codex CLI 专项问题

Codex 先查本地配置文件和环境变量。

## 先看这三个文件

- `~/.codex/config.toml`
- `~/.codex/auth.json`
- 终端里的环境变量

## Base URL

`config.toml` 里必须是：

```toml
base_url = "https://zzmapi.zzmsgdsg.xyz/v1"
```

这里需要带 `/v1`。

## `wire_api` 要写对

应该是：

```toml
wire_api = "responses"
```

不是这个值，很多请求会直接失败。

## `auth.json` 写了还是不生效

先查：

1. Key 名是不是 `OPENAI_API_KEY`
2. `env_key` 是不是也写成 `OPENAI_API_KEY`
3. 终端环境变量有没有覆盖配置文件

## VS Code 插件正常，CLI 不正常

按这个顺序查：

- 关掉终端重开
- 再执行 `codex`
- 或先导出一遍环境变量再试

```bash
export OPENAI_API_KEY="你的令牌Key"
codex
```

## CLI 正常，插件不正常

按这个顺序查：

1. 关闭 VS Code
2. 重新打开
3. 执行 `Developer: Reload Window`

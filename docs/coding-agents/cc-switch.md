---
title: CC Switch
description: 用 CC Switch 配置编码智能体 Codex 和编码智能体 Claude Code。
---

# CC Switch

CC Switch 是配置器。它给 Codex 和 Claude Code 切 API 供应商。

它配置的是：

- Codex CLI
- Codex VS Code 插件
- Claude Code CLI
- Claude Code VS Code 插件

<div class="zzm-note-line">
别把 CC Switch 当聊天软件。配完以后，还是打开 Codex 或 Claude Code 干活。
</div>

## 官方链接

<div class="zzm-official-links">
  <a href="https://github.com/farion1231/cc-switch">CC Switch GitHub</a>
  <a href="https://github.com/farion1231/cc-switch/releases">CC Switch Releases 下载</a>
</div>

## 下载

- Windows：去 Releases 下 `.msi` 或 portable 压缩包。
- macOS：去 Releases 下 macOS 包。
- Linux：去 Releases 下 `.deb`、`.rpm` 或 AppImage。

装好后打开 CC Switch，找到 Provider 或供应商配置。

## 配 Codex

给 Codex CLI / Codex 插件用。照着填：

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Codex` |
| API Key | `YOUR_ZZM_API_KEY` |
| API 请求地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型名称 | `gpt-5.4` |
| 上下文窗口 | `950000` |
| 压缩阈值 | `900000` |

`auth.json`：

```json
{
  "OPENAI_API_KEY": "YOUR_ZZM_API_KEY"
}
```

`config.toml`：

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

Codex 走 Responses API。这里必须带 `/v1`。

## 配 Claude Code

给 Claude Code CLI / Claude Code 插件用。照着填：

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Claude Code` |
| API Key | `YOUR_ZZM_API_KEY` |
| 请求地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型名称 | `gpt-5.4` |
| 上下文窗口 | `950000` |

配置 JSON：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "YOUR_ZZM_API_KEY",
    "ANTHROPIC_BASE_URL": "https://zzmapi.zzmsgdsg.xyz",
    "ANTHROPIC_MODEL": "gpt-5.4",
    "CLAUDE_CODE_MAX_CONTEXT_TOKENS": "950000",
    "DISABLE_COMPACT": "1"
  },
  "includeCoAuthoredBy": false
}
```

这里不要加 `/v1`。填错了就会连不上。普通使用也可以先不填最后两项上下文字段。

## 配完怎么测

1. 在 CC Switch 启用对应 Provider。
2. 重启 Codex、Claude Code 或 VS Code。
3. 发一句短问题。
4. 不通就先去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型。

## 插件用户

- Codex 插件：启用 Codex Provider，再打开 Codex 插件。
- Claude Code 插件：启用 Claude Code Provider，再打开 Claude Code 插件。
- 插件不生效：重启 VS Code，或从终端用 `code .` 打开项目。

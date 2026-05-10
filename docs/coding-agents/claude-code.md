---
title: Claude Code 配置
description: Claude Code CLI 和 VS Code 插件接入 ZZM API，含 CC Switch 和手动配置两种方式。
---

# Claude Code 配置

Claude Code 支持 CLI 和 VS Code 插件。两种配置方式：**CC Switch（推荐）** 或 **手动改 settings.json**。

地址填根域名：

<div class="zzm-url-badge">https://zzmapi.zzmsgdsg.xyz</div>

<div class="zzm-tip">
  <strong>不要加 /v1</strong>。加了 /v1 会连不上。
</div>

## 方式一：CC Switch（推荐）

打开 CC Switch → 新增 Claude Code Provider → 填表 → 启用。详细步骤见 [CC Switch 配置](/coding-agents/cc-switch#配-claude-code)。

<div class="zzm-img-placeholder">📷 CC Switch Claude Code 配置完成效果</div>

## 方式二：手动配置

### 安装 CLI

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# Homebrew
brew install --cask claude-code

# WinGet
winget install Anthropic.ClaudeCode
```

验证：

```bash
claude --version
```

<div class="zzm-img-placeholder">📷 终端 claude --version 输出</div>

### 创建令牌

去 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，分组选 **claude专用稳定**。

### 编辑配置文件

打开 `~/.claude/settings.json`，写入：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的令牌Key",
    "ANTHROPIC_BASE_URL": "https://zzmapi.zzmsgdsg.xyz",
    "ANTHROPIC_MODEL": "claude-sonnet-4-6",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  },
  "includeCoAuthoredBy": false
}
```

<div class="zzm-config-table">

| 字段 | 说明 |
| --- | --- |
| `ANTHROPIC_AUTH_TOKEN` | 你的 ZZM API 令牌 Key |
| `ANTHROPIC_BASE_URL` | 填 `https://zzmapi.zzmsgdsg.xyz` |
| `ANTHROPIC_MODEL` | 控制台可用的 Claude 模型，如 `claude-sonnet-4-6` |
| `CLAUDE_CODE_ATTRIBUTION_HEADER` | 固定填 `"0"`，避免缓存失效 |

</div>

::: tip 模型怎么选
Claude 模型选项：`claude-opus-4-7`、`claude-sonnet-4-6`、`claude-haiku-4-5-20251001`。具体以控制台可用列表为准。
:::

<div class="zzm-img-placeholder">📷 settings.json 文件编辑器截图</div>

保存后运行：

```bash
claude
```

发一句「只回复 OK」测试。不通就查地址是不是没加 `/v1`、Key 对不对、操练场能不能回。

## 安装 VS Code 插件

1. VS Code 版本需 1.98.0+。
2. 扩展市场搜索 `Claude Code` 安装。
3. 插件自动读取 `~/.claude/settings.json`。
4. 没生效就重启 VS Code，或从终端 `code .` 打开项目。

<div class="zzm-img-placeholder">📷 VS Code Claude Code 插件侧边栏</div>

## 常见坑

| 现象 | 处理 |
| --- | --- |
| 连不上 | 地址是不是写了 `/v1`？删掉 |
| 401 | Key 错了或过期，[重建令牌](https://zzmapi.zzmsgdsg.xyz/console/token) |
| 模型不可用 | 去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型 |
| 插件不显示 | 重启 VS Code，运行 `Developer: Reload Window` |

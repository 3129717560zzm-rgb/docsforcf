---
title: Claude Code
description: 配置 Claude Code CLI 和 Claude Code VS Code 插件使用 ZZM API。
---

# Claude Code

Claude Code 有 CLI 和 VS Code 插件。地址填根域名，不加 `/v1`。

## 官方链接

<div class="zzm-official-links">
  <a href="https://code.claude.com/docs/en/setup">Claude Code 安装文档</a>
  <a href="https://code.claude.com/docs/en/vs-code">Claude Code VS Code 插件</a>
  <a href="https://code.claude.com/docs/en/env-vars">Claude Code 环境变量</a>
</div>

## 地址

```text
https://zzmapi.zzmsgdsg.xyz
```

不要填 `https://zzmapi.zzmsgdsg.xyz/v1`。

## 安装 CLI

选一种安装方式：

| 系统 | 命令 |
| --- | --- |
| macOS / Linux / WSL | `curl -fsSL https://claude.ai/install.sh \| bash` |
| Windows PowerShell | `irm https://claude.ai/install.ps1 \| iex` |
| Windows CMD | `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd` |
| macOS Homebrew | `brew install --cask claude-code` |
| Windows WinGet | `winget install Anthropic.ClaudeCode` |

macOS / Linux / WSL：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

Windows 原生环境建议先装 Git for Windows。WSL 用户请在 WSL 内安装和运行。

检查：

```bash
claude --version
claude doctor
```

## 安装 VS Code 插件

1. VS Code 需要 1.98.0 或更高。
2. 打开扩展市场。
3. 搜索 `Claude Code` 并安装。
4. 打开命令面板搜索 `Claude Code`，或点击侧边栏图标。

Claude Code 插件和 CLI 共用 `~/.claude/settings.json`。插件没读到配置时，从终端运行 `code .` 打开项目。

## 用 CC Switch 配置

在 CC Switch 添加 Claude Code Provider，照着填：

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Claude Code` |
| API Key | `YOUR_ZZM_API_KEY` |
| 请求地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型名称 | `gpt-5.4` |

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

只想普通使用，可以先不填 `CLAUDE_CODE_MAX_CONTEXT_TOKENS` 和 `DISABLE_COMPACT`。要让 Claude Code 按 950000 上下文估算，再加这两项。

## 常见错误

- 地址写成 `/v1`：删掉 `/v1`。
- Key 填错：去 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token) 重新建。
- 模型没权限：去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型。
- 插件没生效：重启 VS Code，或从终端运行 `code .`。

还不行，就带截图和控制台日志时间进群问。

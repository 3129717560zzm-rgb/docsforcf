---
title: VS Code 插件
description: 在 VS Code、Cursor、Windsurf 里使用 Codex 和 Claude Code 插件。
---

# VS Code 插件

插件不是另一套 API。Codex 插件读 Codex 配置，Claude Code 插件读 Claude Code 配置。

## 先看这个表

| 插件 | 配置来源 | ZZM API 地址 |
| --- | --- | --- |
| Codex VS Code 插件 | Codex CLI / `~/.codex/config.toml` | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code VS Code 插件 | Claude Code CLI / `~/.claude/settings.json` | `https://zzmapi.zzmsgdsg.xyz` |

<div class="zzm-note-line">
先用 CC Switch 配供应商。配完重启 VS Code。插件不生效，先看它有没有读到本机配置。
</div>

## Codex 插件

官方文档：[Codex IDE extension](https://developers.openai.com/codex/ide)

安装：

1. 打开 VS Code 扩展市场。
2. 搜索 `Codex`。
3. 安装 OpenAI 官方 Codex 插件。
4. 重启 VS Code。没出现 Codex 图标，就运行 `Developer: Reload Window`。

配置：

1. 先按 [CC Switch 配置器](/coding-agents/cc-switch) 添加 Codex Provider。
2. 地址填 `https://zzmapi.zzmsgdsg.xyz/v1`。
3. 模型填 `gpt-5.4`。
4. 打开 Codex 侧边栏，发一句短问题测试。

Codex 的模型、审批、沙盒在 `~/.codex/config.toml` 里。

## Claude Code 插件

官方文档：[Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code)

安装：

1. VS Code 版本需要 1.98.0 或更高。
2. 打开扩展市场：macOS 按 `Cmd+Shift+X`，Windows/Linux 按 `Ctrl+Shift+X`。
3. 搜索 `Claude Code` 并安装。
4. 没出现图标，就运行 `Developer: Reload Window`。

配置：

1. 先按 [CC Switch 配置器](/coding-agents/cc-switch) 添加 Claude Code Provider。
2. 地址填 `https://zzmapi.zzmsgdsg.xyz`。
3. 模型填 `gpt-5.4`。
4. 打开 Claude Code 面板测试。

Claude Code 插件和 CLI 共用 `~/.claude/settings.json`。读不到环境变量时，从终端运行 `code .` 打开项目。

## 插件不生效

| 现象 | 处理 |
| --- | --- |
| Codex 插件没走 ZZM API | 检查 CC Switch 是否启用了 Codex Provider，再重启 VS Code |
| Claude Code 插件仍要求登录 | 检查 `ANTHROPIC_API_KEY` 和 `ANTHROPIC_BASE_URL` 是否写入 |
| 插件图标不出现 | 重启 VS Code 或运行 `Developer: Reload Window` |
| 插件没响应 | 先在终端运行对应 CLI，看具体错误 |
| 模型不可用 | 先去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型 |

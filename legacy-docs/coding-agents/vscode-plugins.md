---
title: VS Code 插件
description: Codex 插件、Claude Code 插件、Cline、Roo Code 接入 ZZM API。
---

# VS Code 插件

插件不是独立的一套配置——**Codex 插件读 Codex 的配置，Claude Code 插件读 Claude Code 的配置**。先把对应的 CLI 或 CC Switch 配好，插件自然生效。

## 先配好底层配置

| 插件 | 读取谁的配置 | 推荐方式 |
| --- | --- | --- |
| Codex VS Code 插件 | `~/.codex/config.toml` | [CC Switch 配 Codex](/coding-agents/cc-switch#配-codex) |
| Claude Code VS Code 插件 | `~/.claude/settings.json` | [CC Switch 配 Claude Code](/coding-agents/cc-switch#配-claude-code) |
| Cline | VS Code 设置 | 下方独立说明 |
| Roo Code | VS Code 设置 | 下方独立说明 |

## 通用排查

插件不生效，按顺序试：

1. 重启 VS Code，运行 `Developer: Reload Window`。
2. 从终端 `code .` 打开项目（让 VS Code 继承环境变量）。
3. 确认底层 CLI 能正常跑通。
4. 去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 确认 Key 和模型都没问题。

![VS Code 扩展面板，Codex 和 Claude Code 插件已安装](/screenshots/vscode-extensions-codex-claude.png)

## Codex 插件

1. VS Code 扩展市场搜索 `Codex`，安装 OpenAI 官方版本。
2. 确保 CC Switch 的 Codex Provider 已启用，或 `~/.codex/config.toml` 已配好。
3. 点击侧边栏 Codex 图标，发消息测试。

地址：`https://zzmapi.zzmsgdsg.xyz/v1`

![Codex 插件侧边栏运行效果](/screenshots/vscode-codex-sidebar.png)

## Claude Code 插件

1. VS Code 需 1.98.0 或更高。扩展市场搜索 `Claude Code` 安装。
2. 确保 CC Switch 的 Claude Code Provider 已启用，或 `~/.claude/settings.json` 已配好。
3. 打开命令面板搜索 `Claude Code`，或点击侧边栏图标。

地址：`https://zzmapi.zzmsgdsg.xyz`

![Claude Code 插件侧边栏运行效果](/screenshots/vscode-claude-sidebar.png)

## Cline / Roo Code

这两个插件使用 OpenAI 兼容模式，配置方式和 Cherry Studio 类似：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| API Provider | OpenAI Compatible |
| Base URL | `https://zzmapi.zzmsgdsg.xyz/v1` |
| API Key | 你的令牌 Key |
| Model | 控制台可用模型 ID |

</div>

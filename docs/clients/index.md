---
title: 地址速查
description: 聊天客户端、编码智能体和生图软件的 ZZM API 地址速查。
---

# 地址速查

不同软件叫法不一样，本质就是填 Base URL 和 Key。

## 地址速查

| 软件/场景 | 地址 |
| --- | --- |
| Cherry Studio 聊天 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Cherry Studio 生图 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Codex CLI / VS Code 插件 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code CLI / VS Code 插件 | `https://zzmapi.zzmsgdsg.xyz` |
| Python / Node SDK | `https://zzmapi.zzmsgdsg.xyz/v1` |

<div class="zzm-note-line">
软件报错，先去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型。操练场正常，问题就在软件配置。
</div>

## 看对应教程

<div class="zzm-link-list">
  <a href="/clients/cherry-studio">Cherry Studio 配置</a>
  <a href="/image-generation">gpt-image-2 生图</a>
  <a href="/coding-agents/vscode-plugins">VS Code 插件</a>
  <a href="/coding-agents/codex">Codex 配置</a>
  <a href="/coding-agents/claude-code">Claude Code 配置</a>
  <a href="/coding-agents/cc-switch">CC Switch 配置</a>
</div>

## 通用 OpenAI-compatible 配置

软件让你手动填 OpenAI-compatible，就这样写：

| 字段 | 填写 |
| --- | --- |
| Provider | OpenAI / OpenAI Compatible / Custom OpenAI |
| API Key | `YOUR_ZZM_API_KEY` |
| Base URL | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Model | 控制台可用模型 ID |

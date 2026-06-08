---
title: 编码工具
description: Claude Code、Codex、Gemini CLI、VS Code 插件的地址速查和配置入口。
---

# 编码工具

配编码工具分两步：**先选分组，再填地址**。所有工具都支持两种配置方式——CC Switch 一键配，或者手动改配置文件。

## 先看地址

| 工具 | Base URL | 备注 |
| --- | --- | --- |
| Codex CLI & 插件 | `https://zzmapi.zzmsgdsg.xyz/v1` | 带 `/v1`，走 Responses API |
| Claude Code CLI & 插件 | `https://zzmapi.zzmsgdsg.xyz` | 不带 `/v1`，走 Anthropic 协议 |
| Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` | 不带 `/v1`，走 Gemini 协议 |
| Cline / Roo Code | `https://zzmapi.zzmsgdsg.xyz/v1` | OpenAI 兼容模式 |

## 再看分组

| 工具 | 推荐分组 |
| --- | --- |
| Claude Code | **claude专用稳定**（0.6x，默认） |
| Codex | **Codex混池**（0.3x，性价比最高） |
| Gemini CLI | **gemin-cli**（0.8x） |

分组详情见 [令牌分组](/groups)。

## 选配置方式

两种方式选一种：

<div class="zzm-tool-pick">
  <a href="/coding-agents/cc-switch">
    <strong>CC Switch（推荐）</strong>
    <span>图形界面操作，下载软件、填表、启用，不用手写代码。支持 Claude Code、Codex、Gemini CLI 统一管理。</span>
  </a>
  <a href="/coding-agents/claude-code">
    <strong>手动配置</strong>
    <span>直接编辑 settings.json、config.toml、.env。适合熟悉命令行的用户，或没有桌面环境的服务器。</span>
  </a>
</div>

## 各工具配置

<div class="zzm-tool-pick">
  <a href="/coding-agents/cc-switch">
    <strong>CC Switch</strong>
    <span>统一的供应商管理器，下载安装 → 添加 Provider → 启用。</span>
  </a>
  <a href="/coding-agents/claude-code">
    <strong>Claude Code</strong>
    <span>CLI 和 VS Code 插件配置。地址填根域名。</span>
  </a>
  <a href="/coding-agents/codex">
    <strong>Codex</strong>
    <span>CLI 和 VS Code 插件配置。地址必须带 /v1。</span>
  </a>
  <a href="/coding-agents/gemini-cli">
    <strong>Gemini CLI</strong>
    <span>Google Gemini CLI 配置。地址填根域名。</span>
  </a>
  <a href="/coding-agents/vscode-plugins">
    <strong>VS Code 插件 & Cline</strong>
    <span>Codex 插件、Claude Code 插件、Cline、Roo Code 配置。</span>
  </a>
</div>

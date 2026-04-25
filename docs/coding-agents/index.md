---
title: 编码智能体
description: Codex、Claude Code、VS Code 插件和 CC Switch 的关系。
---

# 编码智能体

先看关系。别把工具弄混。

| 名称 | 是什么 | 你该看哪页 |
| --- | --- | --- |
| Codex | 编码智能体 | [Codex](/coding-agents/codex) |
| Claude Code | 编码智能体 | [Claude Code](/coding-agents/claude-code) |
| VS Code 插件 | 在编辑器里打开智能体 | [VS Code 插件](/coding-agents/vscode-plugins) |
| CC Switch | 给 Codex / Claude Code 切 API 供应商 | [CC Switch](/coding-agents/cc-switch) |

<div class="zzm-note-line">
CC Switch 不是聊天软件。它就是用来配置编码智能体 Codex 和编码智能体 Claude Code 的。
</div>

## 直接选

<div class="zzm-tool-map">
  <a class="zzm-tool-row" href="/coding-agents/vscode-plugins">
    <strong>我用 VS Code 插件</strong>
    <span>插件先看这里，再去配对应智能体。</span>
    <code>插件入口</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/cc-switch">
    <strong>我要用 CC Switch</strong>
    <span>添加 ZZM API，再切给 Codex 或 Claude Code。</span>
    <code>配置器</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/codex">
    <strong>我用 Codex</strong>
    <span>CLI 和插件都填带 /v1 的地址。</span>
    <code>/v1</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/claude-code">
    <strong>我用 Claude Code</strong>
    <span>CLI 和 VS Code 插件都填根地址。</span>
    <code>不要 /v1</code>
  </a>
</div>

## 两个地址别混

<div class="zzm-key-strip">
  <div>
    <strong>Codex</strong>
    <code>https://zzmapi.zzmsgdsg.xyz/v1</code>
  </div>
  <div>
    <strong>Claude Code</strong>
    <code>https://zzmapi.zzmsgdsg.xyz</code>
  </div>
  <div>
    <strong>先验证</strong>
    <a href="https://zzmapi.zzmsgdsg.xyz/console/playground">打开操练场</a>
  </div>
</div>

最后实测：2026-04-25。

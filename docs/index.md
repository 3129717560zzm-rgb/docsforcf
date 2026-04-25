---
title: ZZM API 文档
description: 先创建令牌，再跑操练场，最后配置 Codex、Claude Code、Cherry Studio 和 VS Code 插件。
aside: false
sidebar: false
---

<section class="zzm-hero">
  <div>
    <p class="zzm-kicker">ZZM API</p>
    <h1>先跑 Key，再配软件</h1>
    <p class="zzm-hero-lead">
      令牌页拿 Key，操练场确认模型能回，再按下面的地址填进软件。
    </p>
    <div class="zzm-actions">
      <a class="zzm-button" href="https://zzmapi.zzmsgdsg.xyz/console/token">创建令牌</a>
      <a class="zzm-button primary" href="https://zzmapi.zzmsgdsg.xyz/console/playground">打开操练场</a>
      <a class="zzm-button" href="/quick-start">5 分钟跑通</a>
    </div>
  </div>
  <div class="zzm-endpoint-panel">
    <div>
      <p class="zzm-endpoint-label">Codex / OpenAI / Cherry Studio</p>
      <code class="zzm-endpoint">https://zzmapi.zzmsgdsg.xyz/v1</code>
    </div>
    <div>
      <p class="zzm-endpoint-label">Claude Code</p>
      <code class="zzm-endpoint">https://zzmapi.zzmsgdsg.xyz</code>
    </div>
  </div>
</section>

<div class="zzm-path">
  <div class="zzm-path-item">
    <strong>01</strong>
    <p>创建令牌。Key 只复制给自己。</p>
  </div>
  <div class="zzm-path-item">
    <strong>02</strong>
    <p>操练场选模型，发一句短话。</p>
  </div>
  <div class="zzm-path-item">
    <strong>03</strong>
    <p>软件里按表填 Base URL。</p>
  </div>
  <div class="zzm-path-item">
    <strong>04</strong>
    <p>报错先看日志表，截图再问。</p>
  </div>
</div>

## 你现在要配什么

<div class="zzm-tool-map">
  <a class="zzm-tool-row" href="/coding-agents/vscode-plugins">
    <strong>VS Code 插件</strong>
    <span>Codex 插件、Claude Code 插件都看这里。</span>
    <code>先看</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/cc-switch">
    <strong>CC Switch 配置器</strong>
    <span>给 Codex 和 Claude Code 切 API 供应商。</span>
    <code>配置</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/codex">
    <strong>Codex</strong>
    <span>CLI 和插件都带 /v1。</span>
    <code>/v1</code>
  </a>
  <a class="zzm-tool-row" href="/coding-agents/claude-code">
    <strong>Claude Code</strong>
    <span>CLI 和插件都不要 /v1。</span>
    <code>根地址</code>
  </a>
  <a class="zzm-tool-row" href="/clients/cherry-studio">
    <strong>Cherry Studio</strong>
    <span>聊天模型和 gpt-image-2 生图。</span>
    <code>聊天/生图</code>
  </a>
</div>

## 地址别填反

<div class="zzm-address-table">

| 用在哪里 | 填什么地址 | 记住 |
| --- | --- | --- |
| Codex / Codex 插件 / OpenAI SDK | `https://zzmapi.zzmsgdsg.xyz/v1` | 带 `/v1` |
| Claude Code / Claude Code 插件 | `https://zzmapi.zzmsgdsg.xyz` | 不带 `/v1` |
| Cherry Studio 聊天 | `https://zzmapi.zzmsgdsg.xyz/v1` | OpenAI 兼容 |
| Cherry Studio 生图 | `https://zzmapi.zzmsgdsg.xyz/v1` | 模型填 `gpt-image-2` |

</div>

## 常用入口

<div class="zzm-link-list">
  <a href="https://zzmapi.zzmsgdsg.xyz">控制台首页</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/token">创建令牌</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/playground">操练场</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/topup">充值与余额</a>
  <a href="https://qm.qq.com/q/wKACZYaaTS">zzmapi 付费群</a>
</div>

<div class="zzm-qr-wrap">
  <div>
    <h2>微信社群</h2>
    <p>问问题带截图：软件、模型名、报错、控制台日志时间。完整 Key 不要发。</p>
  </div>
  <img class="zzm-qr" src="/wechat-group.png" alt="zzmapi 微信群二维码" />
</div>

## 找教程

| 你要做什么 | 阅读 |
| --- | --- |
| 第一次使用 | [先跑 Key](/quick-start) |
| 在 VS Code 里用插件 | [VS Code 插件](/coding-agents/vscode-plugins) |
| 配置 Codex 或 Claude Code 供应商 | [CC Switch 配置器](/coding-agents/cc-switch) |
| 配 Codex | [Codex](/coding-agents/codex) |
| 配 Claude Code | [Claude Code](/coding-agents/claude-code) |
| 配 Cherry Studio | [Cherry Studio](/clients/cherry-studio) |
| 用 gpt-image-2 生图 | [gpt-image-2 生图](/image-generation) |
| 遇到错误日志 | [错误快速筛查](/errors) |

最后实测：2026-04-25。

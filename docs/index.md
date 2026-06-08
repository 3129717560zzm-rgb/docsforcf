---
layout: home
title: ZZM API 配置指南
titleTemplate: false
hero:
  name: ZZM API
  text: 配置指南
  tagline: 从注册到上手，按教程顺序完成 Key 创建、地址填写、工具接入和常见报错排查。
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/register
    - theme: alt
      text: 疑难解答
      link: /guide/troubleshooting/
features:
  - icon: 📝
    title: 注册与充值
    details: 账号注册、请求地址、令牌创建、充值续费和操练场测试，都从入门教程开始。
    link: /guide/register
  - icon: ⚙️
    title: 工具配置
    details: Node.js 与 Git、CC-Switch、Claude Code、Codex、Gemini CLI 全部按工具分开写。
    link: /guide/nodejs-git
  - icon: 🛠️
    title: 疑难解答
    details: 401、403、429、地址填错、分组不匹配、Codex 不读配置，先到这里查。
    link: /guide/troubleshooting/
---

<div class="zzm-home-sections">

## 地址速查

| 工具 | Base URL |
| --- | --- |
| Codex / OpenAI SDK / Cherry Studio | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code / Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

## 教程入口

<div class="zzm-home-links">
  <a href="/guide/register">
    <strong>注册账号</strong>
    <span>先登录控制台，再确认令牌页、充值页和操练场入口都能打开。</span>
  </a>
  <a href="/guide/api-key">
    <strong>请求地址 / Key</strong>
    <span>这里集中讲地址怎么填、Key 怎么建、分组怎么选、哪些地方最容易填错。</span>
  </a>
  <a href="/guide/nodejs-git">
    <strong>工具配置</strong>
    <span>按顺序接入 Node.js、CC-Switch、Claude Code、Codex、Gemini CLI。</span>
  </a>
  <a href="/guide/troubleshooting/">
    <strong>疑难解答</strong>
    <span>遇到 401、403、429、地址填错、模型找不到时先查这里。</span>
  </a>
</div>

## 常用链接

- [控制台首页](https://zzmapi.zzmsgdsg.xyz)
- [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)
- [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)
- [模型与分组](https://zzmapi.zzmsgdsg.xyz/pricing)
- [充值页](https://zzmapi.zzmsgdsg.xyz/console/topup)

## 资料说明

- 当前先按教程站骨架重排，图片会逐页补。
- 没补到的图片先用文字占位，不会杜撰截图文件。
- 控制台、余额、模型和分组信息以 [ZZM API 控制台](https://zzmapi.zzmsgdsg.xyz) 实时显示为准。

<div class="zzm-home-placeholder">[待补截图：首页总览图 / 控制台概览图 / 教程封面图]</div>

</div>

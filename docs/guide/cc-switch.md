---
title: CC-Switch 配置教程
description: 用 CC-Switch 统一管理 Claude Code、Codex、Gemini CLI 的供应商配置。
---

# CC-Switch 配置教程

如果你不想手改配置文件，这页优先看。

![CC Switch 主界面概览](/screenshots/cc-switch-overview.png)

## 先下载

下载地址：[CC Switch Releases](https://github.com/farion1231/cc-switch/releases)

常见安装方式：

- Windows：`.msi` 或便携版
- macOS：`.dmg`
- Linux：`.AppImage` / `.deb`

![CC Switch 下载页面](/screenshots/cc-switch-downloads.png)

## 先记住地址差别

| 工具 | 地址 |
| --- | --- |
| Codex | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |
| Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

## 配 Codex

新增 Provider 时这样填：

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Codex` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型 | 例如 `gpt-5.4` |
| 上下文窗口 | `950000` |
| 压缩阈值 | `900000` |

![CC Switch Codex 配置界面](/screenshots/cc-switch-codex-provider.png)

## 配 Claude Code

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Claude Code` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型 | 例如 `claude-sonnet-4-6` |
| 上下文窗口 | `950000` |

这里不要加 `/v1`。

![CC Switch Claude Code 配置界面](/screenshots/cc-switch-claude-provider.png)

## 配 Gemini CLI

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Gemini` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型 | 例如 `gemini-2.5-pro` |

![CC Switch Gemini CLI 配置界面](/screenshots/cc-switch-gemini-provider.png)

## 启用和测试

1. 打开目标 Provider
2. 设为启用
3. 重启对应工具
4. 发一句 `只回复 OK`

![CC Switch 启用状态](/screenshots/cc-switch-provider-enabled.png)

如果还不通，先去操练场测同一个模型。

## 上一页 / 下一页

- 上一页：[Node.js 与 Git 环境配置](/guide/nodejs-git)
- 下一页：[Claude Code 配置教程](/guide/claude-code)

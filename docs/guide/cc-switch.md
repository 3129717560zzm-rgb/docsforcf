---
title: CC-Switch 配置教程
description: 用 CC-Switch 统一管理 Claude Code、Codex、Gemini CLI 的供应商配置。
---

# CC-Switch 配置教程

如果你不想手改配置文件，这页优先看。

![CC Switch 主界面概览](/screenshots/cc-switch-overview.png)

## 下载与安装

下载地址：[CC Switch Releases](https://github.com/farion1231/cc-switch/releases)

### Windows

- 下载 `.msi` 或便携版
- 双击安装
- 安装完成后直接打开

### macOS

- 下载 `.dmg`
- 拖入 `Applications`
- 首次打不开时，到系统安全设置里点“仍要打开”

### Linux

- 常见是 `.AppImage` 或 `.deb`
- 先给执行权限，再运行

![CC Switch 下载页面](/screenshots/cc-switch-downloads.png)

## 添加渠道

先从控制台拿到 `API Key` 和 `请求地址`。

## 配置前先记住地址差别

| 工具 | 地址 |
| --- | --- |
| Codex | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |
| Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

## 渠道示例

### Codex

新增 Codex Provider 时这样填：

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Codex` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型 | 例如 `gpt-5.4` |
| 上下文窗口 | `950000` |
| 压缩阈值 | `900000` |

![CC Switch Codex 配置界面](/screenshots/cc-switch-codex-provider.png)

### Claude Code

新增 Claude Code Provider 时这样填：

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Claude Code` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型 | 例如 `claude-sonnet-4-6` |
| 上下文窗口 | `950000` |

这里不要加 `/v1`。

![CC Switch Claude Code 配置界面](/screenshots/cc-switch-claude-provider.png)

### Gemini CLI

新增 Gemini CLI Provider 时这样填：

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Gemini` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型 | 例如 `gemini-2.5-pro` |

![CC Switch Gemini CLI 配置界面](/screenshots/cc-switch-gemini-provider.png)

## 附加设置

建议至少确认两件事：

- 当前启用的是你刚加的那个 Provider
- 切换后会应用到目标工具，不要只改界面不重启工具

## 开始使用

1. 打开目标 Provider
2. 设为启用
3. 重启对应工具
4. 发一句 `只回复 OK`

![CC Switch 启用状态](/screenshots/cc-switch-provider-enabled.png)

如果还不通，先去操练场测同一个模型。

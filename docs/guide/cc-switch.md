---
title: CC-Switch 配置教程
description: 用 CC-Switch 统一管理 Claude Code、Codex 的供应商配置。
---

# CC-Switch 配置教程

CC Switch 用来切换 API Key 和请求地址。

每个工具单独建一个 Provider。

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

## 添加渠道

先从控制台拿到 `API Key`，再回到 CC Switch 添加 Provider。

![CC Switch 添加 Provider 入口](/screenshots/zzm-cc-switch-provider-list.png)

新增或编辑 Provider 时，重点看这几项：

- Provider 名称写清工具用途
- 官网链接可以留空
- API Key 填当前工具要用的 Key
- 请求地址按工具填写

![CC Switch Provider 表单字段](/screenshots/zzm-cc-switch-fields.png)

## 地址差别

| 工具 | 地址 |
| --- | --- |
| Codex | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |

Codex 带 `/v1`，Claude Code 不带 `/v1`。

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

### Claude Code

新增 Claude Code Provider 时这样填：

| 字段 | 填写 |
| --- | --- |
| Provider 名称 | `ZZM API Claude Code` |
| API Key | 你的 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型 | 例如 `claude-sonnet-4-6` |
| 上下文窗口 | `950000` |

## 附加设置

保存前再确认两件事：

- Provider 类型对应目标工具
- 请求地址没有多写或漏写 `/v1`

## 开始使用

1. 启用目标 Provider
2. 重启对应工具
3. 回到 CC Switch 确认启用状态
4. 发一句 `只回复 OK`

如果还不通，先做一次控制台测试。

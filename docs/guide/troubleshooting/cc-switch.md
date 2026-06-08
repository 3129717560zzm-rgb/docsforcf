---
title: CC Switch 与配置管理
description: CC Switch 改了不生效、多个 Provider 混乱时的排查方式。
---

# CC Switch 与配置管理

CC Switch 的问题，大多不是软件坏了，是 Provider 没切对。

## 先看是不是启用了正确的 Provider

- Claude Code 看 Claude Provider
- Codex 看 Codex Provider
- Gemini CLI 看 Gemini Provider

![CC Switch 启用状态](/screenshots/cc-switch-provider-enabled.png)

## 常见错法

- 新建了 Provider，但没启用
- 启用了旧 Provider
- Codex Provider 填成根域名
- Claude Provider 错填成带 `/v1`

## 多个 Provider 时怎么查

1. 只保留当前要测的一个 Provider 为启用
2. 重启目标工具
3. 发一句 `只回复 OK`

## 改完没生效

先试：

- 彻底退出工具再打开
- 回到 CC Switch 再确认状态
- 去操练场测同一个模型

![CC Switch 主界面概览](/screenshots/cc-switch-overview.png)

## 上一页 / 下一页

- 上一页：[Codex CLI 专项问题](/guide/troubleshooting/codex)
- 下一页：[余额与计费类问题](/guide/troubleshooting/cache-billing)

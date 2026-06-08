---
title: CC Switch 与配置管理
description: CC Switch 改了不生效、多个 Provider 混乱时的排查方式。
---

# CC Switch 与配置管理

CC Switch 的问题，大多不是软件坏了，是 Provider 没切对。

### CC Switch 切换后不生效

先查最常见的几个点：

- Claude Code 看 Claude Provider
- Codex 看 Codex Provider
- Gemini CLI 看 Gemini Provider

![CC Switch 启用状态](/screenshots/cc-switch-provider-enabled.png)

## 常见错法

- 新建了 Provider，但没启用
- 启用了旧 Provider
- Codex Provider 填成根域名
- Claude Provider 错填成带 `/v1`

### 多个 Provider 时怎么查

1. 只保留当前要测的一个 Provider 为启用
2. 重启目标工具
3. 发一句 `只回复 OK`

### 改完没生效

先试：

- 彻底退出工具再打开
- 回到 CC Switch 再确认状态
- 去操练场测同一个模型

![CC Switch 主界面概览](/screenshots/cc-switch-overview.png)

### 想切回官方或重新配一遍

如果你怀疑当前配置已经乱了，最省事的方式通常是：

1. 新建一个全新的 Provider
2. 只启用这一份
3. 彻底退出目标工具
4. 重开后再测

如果你只是想确认是不是中转配置本身的问题，也可以临时切回官方或空白配置做对照，再切回来。

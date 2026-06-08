---
title: 权限与分组类问题
description: 模型能不能用、该选哪个分组、为什么同一个模型别人能用你不能用。
---

# 权限与分组类问题

很多“模型不能用”其实不是模型坏了，是 Key 分组没选对。

## 先看分组

常用推荐：

| 工具 | 推荐分组 |
| --- | --- |
| Claude Code | `claude专用稳定` |
| Codex | `Codex混池` |
| Gemini CLI | `gemin-cli` |

![创建令牌页面中的分组下拉框](/screenshots/zzm-token-create-group-dropdown.png)

## 模型和分组不是全通

不同分组能用的模型不一样。

最稳妥的查法：

1. 打开 [模型与分组页面](https://zzmapi.zzmsgdsg.xyz/pricing)
2. 看当前模型在哪些分组可用
3. 不行就新建一个对应分组的 Key

![模型与定价页面](/screenshots/zzm-pricing-model-groups.png)

## 同一个账号，为什么一个工具能用一个不能用

一般是：

- 两个工具用的不是同一个 Key
- 两个 Key 选的分组不同
- 一个地址带 `/v1`，一个没带

## 处理最快的方法

直接重新建一个专用 Key：

- Claude 专用 Key
- Codex 专用 Key
- Gemini 专用 Key

这样最好排查。

## 上一页 / 下一页

- 上一页：[请求错误类问题](/guide/troubleshooting/request-error)
- 下一页：[外接与兼容类问题](/guide/troubleshooting/integration)

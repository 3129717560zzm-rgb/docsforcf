---
title: 错误速查
description: 按错误码快速判断问题原因和处理方式。
---

# 错误速查

报错先看控制台调用日志。找到错误码或关键词，按表处理。

## 错误码速查

| 错误 | 原因 | 处理 |
| --- | --- | --- |
| `401` / `Invalid token` | Key 错、被删、格式不对 | [重建令牌](https://zzmapi.zzmsgdsg.xyz/console/token) |
| `403` / 通道禁用 | 通道关闭或无权限 | 换模型，持续出现带截图进群 |
| `429` | 频率或并发限制 | 降低并发，增加重试间隔 |
| `502` | 上游网关异常 | 稍后重试或换模型 |
| `504` | 上游超时 | 减少上下文、换模型、开流式 |
| `524` | Cloudflare 或上游等太久 | 减少输入长度、降低生图质量 |
| `model not found` | 模型名拼错或没权限 | 复制控制台模型名，去操练场测试 |
| 余额不足 | 额度不够 | [查看余额](https://zzmapi.zzmsgdsg.xyz/console/topup) |

## 工具特有错误

| 工具 | 现象 | 处理 |
| --- | --- | --- |
| Claude Code | 连不上 | 地址是不是加了 `/v1`？删掉 |
| Codex | 不工作 | 地址有没有带 `/v1`？加上 |
| VS Code 插件 | 不生效 | 重启 VS Code，`Developer: Reload Window` |
| Cherry Studio | 模型不显示 | 手动添加模型，检查地址 |

## 排查顺序

1. 打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型。
2. 确认 [令牌](https://zzmapi.zzmsgdsg.xyz/console/token) 没有被删除。
3. 确认 [余额](https://zzmapi.zzmsgdsg.xyz/console/topup) 可用。
4. 对照地址表检查软件里的 URL。
5. 仍然失败 → 带截图和控制台日志时间进 QQ 群提问。**不要发完整 Key。**

进群提问请带：软件名、模型名、报错截图、控制台调用日志时间。

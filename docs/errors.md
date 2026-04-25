---
title: 错误快速筛查
description: 按错误日志关键词快速判断 ZZM API、Codex、Claude Code 和 Cherry Studio 常见问题。
---

# 错误快速筛查

先看控制台调用日志。找到关键词，再按表处理。进群提问带截图和日志时间，完整 Key 不要发。

| 关键词 | 一般原因 | 先做什么 |
| --- | --- | --- |
| `status_code=504` / `bad response status code 504` | 上游超时、模型慢、上下文太长 | 减少上下文，换模型，开流式，稍后重试 |
| `status_code=502` | 上游网关异常，通道短暂不可用 | 稍后重试，或换模型 |
| `status_code=524` | Cloudflare 或网关等上游超时 | 减少输入，降低图片质量或输出长度 |
| `status_code=403` / `This channel has been disabled` | 通道禁用或无权限 | 换模型；持续出现就带截图进群 |
| `401` / `Invalid token` | Key 错、Key 被删、认证格式错 | 去创建令牌页重新生成 |
| `model not found` | 模型名拼错或账号无权限 | 复制控制台模型名，到操练场测试 |
| `429` | RPM、TPM 或并发限制 | 降低并发，拉长重试间隔 |
| `insufficient quota` / 余额不足 | 余额不够 | 去充值页看余额 |
| Claude Code 连不上 | 地址写成 `/v1` 或认证字段错 | 地址填 `https://zzmapi.zzmsgdsg.xyz` |
| Codex 不工作 | 没走 Responses 或 Provider 配错 | 用 CC Switch 重配 Codex Provider |
| VS Code 插件不生效 | 插件没读到 CLI 配置或环境变量 | 重启 VS Code，运行 `Developer: Reload Window`，或用 `code .` 打开项目 |
| Cherry Studio 模型不显示 | 模型没添加或 API 地址拼错 | 手动加模型，检查地址 |

## 排查顺序

1. 打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)，测试同一个模型。
2. 打开 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，确认 Key 没有被删除。
3. 打开 [充值页面](https://zzmapi.zzmsgdsg.xyz/console/topup)，确认余额可用。
4. 对照软件教程检查地址：
   - Codex：`https://zzmapi.zzmsgdsg.xyz/v1`
   - Claude Code：`https://zzmapi.zzmsgdsg.xyz`
   - Cherry Studio：OpenAI Base URL 默认是 `https://zzmapi.zzmsgdsg.xyz/v1`
5. VS Code 插件不生效时，先重启 VS Code；Claude Code 插件可以从终端用 `code .` 打开项目，让 VS Code 继承环境变量。
6. 仍然失败时，带截图到 [zzmapi 付费群](https://qm.qq.com/q/wKACZYaaTS) 或微信群提问。

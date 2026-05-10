---
title: FAQ
description: ZZM API 使用常见问题。
---

# FAQ

## 先去哪里验证模型能不能用

打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)。操练场能回，再去配软件。

## Key 在哪里创建

[创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)。选择分组、起名、创建。Key 只显示一次，复制保存好。

## Codex 填哪个地址

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

带 `/v1`。Codex CLI 和 Codex 插件都用这个地址。

## Claude Code 填哪个地址

```text
https://zzmapi.zzmsgdsg.xyz
```

不要加 `/v1`。加了就连不上。

## Gemini CLI 填哪个地址

```text
https://zzmapi.zzmsgdsg.xyz
```

和 Claude Code 一样，填根域名。

## Cherry Studio 填哪个地址

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

如果你的 Cherry Studio 版本提示"会自动拼接 /v1"，就填根域名。

## CC Switch 是什么

图形化的供应商管理器。给 Claude Code、Codex、Gemini CLI 统一配置 API 地址和 Key。去 [CC Switch 配置](/coding-agents/cc-switch) 看详情。

## 401 Invalid token 怎么处理

- Key 复制错了 → 重建令牌
- Key 被删了 → 去令牌页确认
- Key 填错字段了 → 确认填在 API Key / Bearer Token 字段
- 格式不对 → 大多数客户端只需要填 Key 本身，不要加 `Bearer` 前缀

## 403 无权限

先看控制台有没有这个模型，再看余额。还不行就带截图进群。

## 429 请求过多

降低并发、增加重试间隔、避免多个客户端共用一个 Key 高并发。

## model not found

模型名拼错了、账号没权限、客户端缓存了旧模型名。去控制台复制模型 ID，不要凭记忆手打。

## 请求超时

输入太长、输出太长、上游繁忙、代理异常。先用短问题测试，短请求正常再加长。

## 能在网页前端直接调用吗

不建议。浏览器会暴露 Key。正式项目把 Key 放后端，前端调自己后端。

## 怎么联系群主

QQ 群 **1098412601**。提问带截图和控制台日志时间，完整 Key 不要发。

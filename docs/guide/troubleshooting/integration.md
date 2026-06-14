---
title: 外接与兼容类问题
description: 第三方客户端、插件、OpenAI 兼容工具接入时的常见错误。
---

# 外接与兼容类问题

第三方工具报错时，重点看“协议”和“地址”。

## OpenAI Compatible 工具

这类工具一般都填：

```text
Base URL: https://zzmapi.zzmsgdsg.xyz/v1
```

常见于：

- OpenAI SDK
- OpenAI Compatible 客户端
- Cline
- Roo Code

## Anthropic 协议工具

Claude Code 填：

```text
https://zzmapi.zzmsgdsg.xyz
```

保持根域名即可，工具会自动拼出 `/v1/messages`。

## 常见配置问题

- 把 Claude Code 当成 OpenAI Compatible 去填
- 把 Codex 当成 Claude 那样只填根域名
- 客户端自动补 `/v1`，你又手动补了一次

## 排查顺序

1. 先看工具协议类型
2. 再看 Base URL
3. 再看 Key 字段
4. 最后看模型名

## 还是不通

先用控制台测试确认模型能回，再回到工具里核对配置。

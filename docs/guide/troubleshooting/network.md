---
title: 网络与连接类问题
description: 地址填错、连接失败、超时、代理冲突时怎么查。
---

# 网络与连接类问题

连不上时，先查地址，再查网络。

## 地址最容易填错

| 工具 | 正确地址 |
| --- | --- |
| Codex | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |
| Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

## 常见现象

- Claude Code 连不上：多数是误加了 `/v1`
- Codex 连不上：多数是漏了 `/v1`
- 某些客户端报 `ECONNREFUSED`、`ENOTFOUND`、超时：多数是本地网络或代理问题

## 先做一个最短测试

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/models \
  -H "Authorization: Bearer YOUR_KEY"
```

能返回内容，说明域名本身能连。

## `502`、`504`、`524`

这几类不一定是你本地断网，常见处理是：

- 减少上下文
- 改短一点的问题先测
- 换模型
- 稍后重试

## 开了代理也可能出问题

如果你本地挂了代理：

- 先不改 Key
- 先短暂关闭代理试一次
- 再看是代理问题还是地址问题

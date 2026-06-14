---
title: 疑难解答
description: 按问题类型拆分的排查入口。
---

# 疑难解答

先做控制台测试，再查本地配置。

## 先做这三步

1. 去 [控制台测试](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型
2. 去 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token) 看 Key 还在不在
3. 去 [充值页](https://zzmapi.zzmsgdsg.xyz/console/topup) 看余额够不够

## 按问题找页面

- [安装与启动类问题](/guide/troubleshooting/install) - 安装失败、命令找不到、CLI 或插件启动异常
- [认证与 API Key 类问题](/guide/troubleshooting/auth) - 401、Invalid token、Key 状态和字段对应关系
- [网络与连接类问题](/guide/troubleshooting/network) - 连不上、超时、代理冲突、地址多写或少写 `/v1`
- [请求错误类问题](/guide/troubleshooting/request-error) - 403、429、model not found、上游超时
- [权限类问题](/guide/troubleshooting/permission) - 分组不匹配、模型无权限、不同工具表现不一致
- [缓存与计费类问题](/guide/troubleshooting/cache-billing) - 余额不足、续费后仍报错、配置读取不一致
- [claude-mem 插件问题](/guide/troubleshooting/claude-mem) - 本体正常但插件层有问题时先看这里
- [外接与兼容类问题](/guide/troubleshooting/integration) - 第三方客户端、兼容层、协议类型不一致
- [Codex CLI 专项问题](/guide/troubleshooting/codex) - `config.toml`、`auth.json`、`responses` 协议问题
- [OpenClaw 专项问题](/guide/troubleshooting/openclaw) - OpenClaw 或类似外接工具的单独排查入口
- [CC Switch 与配置管理](/guide/troubleshooting/cc-switch) - Provider 切换不生效、启用配置不一致
- [进阶配置与效率优化](/guide/troubleshooting/advanced) - 一工具一 Key、先控制台测试后本地、减少配置交叉

## 最常见的三个原因

1. 地址和工具协议不一致
2. Key 不可用
3. 选了不匹配的分组或模型

## 地址速查

| 工具 | 地址 |
| --- | --- |
| Codex | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code | `https://zzmapi.zzmsgdsg.xyz` |

## 还不行时

带这些去群里问：

- 软件名和版本
- 模型名
- 报错截图
- 调用时间

QQ群：`1098412601`

::: tip 提示
有问题先看控制台测试结果。控制台正常时，再查本地配置、地址、分组和 Key。
:::

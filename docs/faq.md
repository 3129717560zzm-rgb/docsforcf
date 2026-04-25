---
title: FAQ
description: ZZM API、Codex、Claude Code、Cherry Studio 和生图常见问题。
---

# FAQ

## 先去哪里验证模型能不能用

先打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)。操练场能回，再去配软件。

## API Key 在哪里创建

进 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)。完整 Key 不要发给别人，提问只给前后几位。

## 401 Invalid token

常见原因：

- API Key 复制错了。
- Key 已删除、禁用或过期。
- Authorization 格式不对。
- 客户端把 Key 填到了错误字段。

正确格式：

```text
Authorization: Bearer YOUR_ZZM_API_KEY
```

大多数客户端只需要填 Key 本身，不要手动加 `Bearer`。

## Codex 应该填哪个地址

Codex CLI、Codex VS Code 插件、OpenAI SDK 都填：

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

用 [CC Switch](/coding-agents/cc-switch) 配最省事。

## Claude Code 应该填哪个地址

Claude Code CLI 和 Claude Code VS Code 插件都填根域名：

```text
https://zzmapi.zzmsgdsg.xyz
```

不要加 `/v1`。

## VS Code 插件怎么配置

先看 [VS Code 插件](/coding-agents/vscode-plugins)。记住：

- Codex 插件读取 Codex 配置，地址填 `https://zzmapi.zzmsgdsg.xyz/v1`。
- Claude Code 插件共享 Claude Code 配置，地址填 `https://zzmapi.zzmsgdsg.xyz`。
- 插件没生效时重启 VS Code，或运行 `Developer: Reload Window`。

## Cherry Studio 应该填哪个地址

OpenAI Base URL 默认填：

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

如果当前版本提示它会自动拼接 `/v1`，则填写根域名 `https://zzmapi.zzmsgdsg.xyz`。

## 403 无权限

先看控制台有没有这个模型，再看余额。还不行就带截图进群。

## 429 请求过多

说明触发频率或并发限制。处理方式：

- 降低并发。
- 增加重试间隔。
- 批量任务做队列。
- 避免多个客户端共用同一个 Key 高并发请求。

## 余额不足

进 [充值页面](https://zzmapi.zzmsgdsg.xyz/console/topup) 看余额。充值后仍报错，就看订单和调用日志。

## model not found

常见原因：

- 模型 ID 拼写错误。
- 当前账号没有该模型权限。
- 客户端保存了旧模型名。
- 该模型临时下架或维护。

复制控制台里的模型 ID，不要凭记忆手打。

## 请求超时

先看这几个点：

- 输入上下文太长。
- 输出太长。
- 上游模型繁忙。
- 本地网络或客户端代理异常。

先用短问题测试。短请求正常，再增加上下文和输出长度。

## 客户端连不上

检查顺序：

1. Base URL 是否为 `https://zzmapi.zzmsgdsg.xyz/v1`。
2. API Key 是否填在正确字段。
3. 模型名是否与控制台一致。
4. 客户端是否支持自定义 OpenAI-compatible 地址。
5. curl 是否能成功请求同一个 Key 和模型。

## 可以在网页前端直接调用吗

不建议。浏览器会暴露 API Key。正式项目把 Key 放后端，前端请求自己的后端接口。

## 怎么联系售后

QQ群入口：[zzmapi 付费群](https://qm.qq.com/q/wKACZYaaTS)

<div class="zzm-qr-wrap">
  <div>
    <h2>微信群二维码</h2>
    <p>扫码加入微信群。提问时请带软件名称、模型名、报错截图和控制台日志时间，不要发送完整 API Key。</p>
  </div>
  <img class="zzm-qr" src="/wechat-group.png" alt="zzmapi 微信群二维码" />
</div>

提问带截图和控制台日志时间。完整 API Key 不要发。

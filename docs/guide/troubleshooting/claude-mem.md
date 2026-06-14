---
title: claude-mem 插件问题
description: 使用 claude-mem 一类插件时的排查入口。
---

# claude-mem 插件问题

如果你在 Claude Code 外面又接了 `claude-mem` 这类插件，先分清问题是在插件层，还是在 ZZM API 这一层。

### 先做最小化测试

先临时去掉插件，只保留 Claude Code 本体：

1. 直接启动 Claude Code
2. 发一句 `只回复 OK`
3. 再做一次控制台测试

如果本体正常、插件异常，优先查插件自己。

### 常见原因

- 插件自己的配置没同步
- 插件读取的不是当前 Key
- Claude Code 能用，但插件拼接了错误地址
- 插件内部缓存了上一次的模型名

### 单独确认 Claude Code 本体

先确认 Claude Code 本体单独运行是不是正常。

如果本体不正常，先处理 Claude Code 本体配置。

### 地址再确认一次

Claude Code 一类工具用的是根域名：

```text
https://zzmapi.zzmsgdsg.xyz
```

这里保持根域名，不带 `/v1`。

### 还不行时

带这些一起排查：

- Claude Code 本体是否正常
- 插件名和版本
- 插件自己的配置截图
- 控制台测试结果

---
title: 认证与 API Key 类问题
description: 401、Invalid token、Key 无效这类问题的排查方式。
---

# 认证与 API Key 类问题

先确认 Key 是否完整，再看工具读取的是哪份配置。

### 401 Invalid token / Unauthorized

出现 `401`、`Invalid token`、`unauthorized`，先查这几个点：

1. Key 有没有复制完整
2. 粘贴时前后有没有空格
3. 字段是否对应当前工具
4. Key 有没有被删除

### 正确入口

- 创建 Key：<https://zzmapi.zzmsgdsg.xyz/console/token>
- 管理 Key：<https://zzmapi.zzmsgdsg.xyz/console/token>

### 常见配置问题

- Key 字段只填 Key，不额外加 `Bearer `
- Codex 使用了 Claude Code 的根域名
- Claude Code 使用了 Codex 的 `/v1` 地址

### 401 但控制台里 Key 正常

如果控制台能看到 Key，控制台测试也能回，但本地工具还是 401，重点查：

- 当前工具里的字段和配置不对应
- 本地插件缓存了上一次配置
- 同一个系统里还有别的环境变量覆盖

### 切换服务后仍然 401

如果你之前填过别的服务，常见情况是：

- 工具里填的不是当前要用的 Key
- 终端环境变量覆盖了配置文件
- 配置文件已经改了，但插件还没刷新

按这个顺序处理：

1. 先确认工具实际读取的字段
2. 再确认终端环境变量
3. 最后完全退出工具后重开

### 需要单独配置工具时

在令牌页创建专用 Key，名字写清工具和用途。

创建后只复制到对应工具，不和其他配置混用。

![ZZM API 创建令牌页面](/screenshots/zzm-token-create.png)

### 控制台测试能测通，工具还 401

继续按本地配置查：

- 工具里的地址
- 工具里的 Key 字段
- 工具缓存的配置
- 是否有环境变量覆盖

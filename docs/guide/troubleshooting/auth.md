---
title: 认证与 API Key 类问题
description: 401、Invalid token、Key 无效这类问题的排查方式。
---

# 认证与 API Key 类问题

这类问题最常见。

### 401 Invalid token / Unauthorized

出现 `401`、`Invalid token`、`unauthorized`，先查这几个点：

1. Key 有没有复制完整
2. 粘贴时前后有没有空格
3. 是不是填错了字段
4. Key 有没有被删除

### 正确入口

- 创建 Key：<https://zzmapi.zzmsgdsg.xyz/console/token>
- 管理 Key：<https://zzmapi.zzmsgdsg.xyz/console/token>

![ZZM API 令牌管理页面](/screenshots/zzm-token-management.png)

### 常见填错方式

- 只支持填 Key，本身不要再手动加 `Bearer `
- 把 Claude 的地址填进 Codex
- 把 Codex 的地址填进 Claude

### 401 但控制台里 Key 明明没问题

如果控制台能看到 Key，操练场也能回，但本地工具还是 401，常见原因就不是账号本身，而是：

- 当前工具里填错了字段
- 本地插件缓存了旧配置
- 同一个系统里还有别的环境变量覆盖

### 切换服务后仍然 401

如果你之前填过别的 Key 或别的中转服务，常见情况是：

- 工具里还留着旧 Key
- 终端环境里还留着旧环境变量
- 配置文件已经改了，但插件还没刷新

这种情况最省事的处理方式通常是：

1. 重新建一个新 Key
2. 只保留这一份 Key
3. 完全退出工具后重开

### 重新建一个 Key 最快

如果你怀疑当前 Key 有问题，直接新建一个专用 Key，再去操练场测试。

![ZZM API 创建令牌页面](/screenshots/zzm-token-create.png)

### 操练场能测通，工具还 401

那就基本不是账号问题，重点查：

- 工具里的地址
- 工具里的 Key 字段
- 工具缓存的旧配置
- 是否还留着旧环境变量

---
title: Gemini CLI 配置教程
description: Gemini CLI 接入 ZZM API。
---

# Gemini CLI 配置教程

这页只做 Gemini CLI。

## 安装 Gemini CLI

### 地址先填对

Gemini CLI 用这个地址：

```text
https://zzmapi.zzmsgdsg.xyz
```

这里不要加 `/v1`。

### 方式一：CC-Switch

- [CC-Switch 配置教程](/guide/cc-switch)

### 方式二：手动配置

如果你不用 CC-Switch，就直接改本地环境变量。

### 常见情况

- 工具能启动，但一发请求就报错
- 地址填成了带 `/v1` 的形式
- 分组选错了，模型本身没权限
- 同一个终端里还留着旧 Key

### 常见问题

- 地址多写了 `/v1`
- 分组选错了
- 工具里还挂着旧 Key
- 模型名不是控制台当前可用值

## 配置 API Key

### 创建 Key

去 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token) 新建一个 Key。

推荐分组：`gemin-cli`

### 改环境变量

创建或编辑 `~/.gemini/.env`：

```bash
GOOGLE_GEMINI_BASE_URL=https://zzmapi.zzmsgdsg.xyz
GEMINI_API_KEY=你的令牌Key
GEMINI_MODEL=gemini-2.5-pro
```

![Gemini CLI .env 配置截图](/screenshots/gemini-env-editor.png)

如果你有多个环境文件，先确认 Gemini CLI 读取的是这一份，不要一边改一边仍在用旧配置。

## 开始使用

保存后重新打开 Gemini CLI，发一句 `只回复 OK`。

[待补截图：Gemini CLI 成功调用截图]

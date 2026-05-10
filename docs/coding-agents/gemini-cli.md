---
title: Gemini CLI 配置
description: Google Gemini CLI 接入 ZZM API，含 CC Switch 和手动配置两种方式。
---

# Gemini CLI 配置

Gemini CLI 是 Google 官方的命令行编码工具。两种配置方式：**CC Switch（推荐）** 或 **手动改 .env**。

地址填根域名：

<div class="zzm-url-badge">https://zzmapi.zzmsgdsg.xyz</div>

<div class="zzm-tip">
  <strong>不要加 /v1</strong>。Gemini CLI 用原生 Gemini 协议，和 Claude Code 一样填根域名。
</div>

## 方式一：CC Switch（推荐）

打开 CC Switch → 新增 Gemini CLI Provider → 填表 → 启用。详细步骤见 [CC Switch 配置](/coding-agents/cc-switch#配-gemini-cli)。

![CC Switch Gemini CLI 配置完成效果](/screenshots/cc-switch-gemini-provider.png)

## 方式二：手动配置

### 创建令牌

去 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，分组选 **gemin-cli**。

### 编辑 .env

创建或编辑 `~/.gemini/.env`：

```bash
GOOGLE_GEMINI_BASE_URL=https://zzmapi.zzmsgdsg.xyz
GEMINI_API_KEY=你的令牌Key
GEMINI_MODEL=gemini-2.5-pro
```

<div class="zzm-config-table">

| 字段 | 说明 |
| --- | --- |
| `GOOGLE_GEMINI_BASE_URL` | 填 `https://zzmapi.zzmsgdsg.xyz` |
| `GEMINI_API_KEY` | 你的 ZZM API 令牌 Key |
| `GEMINI_MODEL` | 控制台可用 Gemini 模型，如 `gemini-2.5-pro` |

</div>

::: tip 模型怎么选
Gemini 模型选项：`gemini-3.1-pro-preview`、`gemini-3-pro-preview`、`gemini-3-flash-preview`、`gemini-2.5-pro`、`gemini-2.5-flash`、`gemini-2.5-flash-nothinking`。具体以控制台可用列表为准。
:::

![.env 文件编辑器截图](/screenshots/gemini-env-editor.png)

保存后运行 Gemini CLI，发一句「只回复 OK」测试。

## 常见坑

| 现象 | 处理 |
| --- | --- |
| 连不上 | 检查地址没加 `/v1` |
| 401 | Key 错了或者没选 gemin-cli 分组 |
| 模型不可用 | 去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型 |

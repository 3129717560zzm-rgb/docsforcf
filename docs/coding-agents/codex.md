---
title: Codex
description: 配置 Codex CLI 和 Codex VS Code 插件使用 ZZM API。
---

# Codex

Codex 有 CLI 和 VS Code 插件。两边都用同一个配置。地址必须带 `/v1`。

## 官方链接

<div class="zzm-official-links">
  <a href="https://github.com/openai/codex">Codex GitHub</a>
  <a href="https://developers.openai.com/codex/ide">Codex IDE 插件文档</a>
  <a href="https://developers.openai.com/codex/config-reference">Codex 配置参考</a>
</div>

## 地址

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

Codex 走 Responses API，必须带 `/v1`。

## 安装 CLI

三种装法，选一种：

| 系统 | 安装方式 |
| --- | --- |
| Windows / macOS / Linux | `npm install -g @openai/codex` |
| macOS | `brew install --cask codex` |
| 不想装 npm / brew | 去 [Codex Releases](https://github.com/openai/codex/releases) 下载对应平台包 |

已经装了 Node.js，就直接用 npm：

```bash
npm install -g @openai/codex
```

检查：

```bash
codex --version
```

Windows、macOS、Linux 的其他安装方式，以 [Codex GitHub](https://github.com/openai/codex) 为准。

## 安装 VS Code 插件

1. 打开 VS Code 扩展市场。
2. 搜索 `Codex`。
3. 安装 OpenAI 官方 Codex 扩展。
4. 重启 VS Code。

Codex 插件会用 Codex CLI 的配置。先把 CLI 配好，再打开插件。

## 用 CC Switch 配置

打开 CC Switch，添加 Codex Provider，照着填：

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Codex` |
| API Key | `YOUR_ZZM_API_KEY` |
| API 请求地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型名称 | `gpt-5.4` |

上下文按这个填：

- 上下文窗口：`950000`
- 压缩阈值：`900000`

## 手动配置

看不懂就别手改，直接用 CC Switch。

```toml
model = "gpt-5.4"
model_provider = "zzmapi"
model_context_window = 950000
model_auto_compact_token_limit = 900000

[model_providers.zzmapi]
name = "ZZM API"
base_url = "https://zzmapi.zzmsgdsg.xyz/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
requires_openai_auth = true
```

环境变量：

```bash
export OPENAI_API_KEY="YOUR_ZZM_API_KEY"
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY="YOUR_ZZM_API_KEY"
```

## 测试

启动 Codex CLI 或 Codex 插件后，先问一句：

```text
只回复 OK
```

不通就先去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型，再看 [错误快速筛查](/errors)。

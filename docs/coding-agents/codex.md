---
title: Codex 配置
description: Codex CLI 和 VS Code 插件接入 ZZM API，含 CC Switch 和手动配置两种方式。
---

# Codex 配置

Codex 支持 CLI 和 VS Code 插件。两种配置方式：**CC Switch（推荐）** 或 **手动改 config.toml**。

地址必须带 `/v1`：

<div class="zzm-url-badge">https://zzmapi.zzmsgdsg.xyz/v1</div>

<div class="zzm-tip">
  <strong>不要填根域名</strong>。Codex 走 Responses API，地址必须带 <code>/v1</code>。
</div>

## 方式一：CC Switch（推荐）

打开 CC Switch → 新增 Codex Provider → 填表 → 启用。详细步骤见 [CC Switch 配置](/coding-agents/cc-switch#配-codex)。

<!-- SCREENSHOT: CC Switch Codex 配置完成效果 -->

## 方式二：手动配置

### 安装 CLI

```bash
npm install -g @openai/codex
```

验证：

```bash
codex --version
```

<!-- SCREENSHOT: 终端 codex --version 输出 -->

### 创建令牌

去 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，分组选 **Codex混池**。

### 编辑配置文件

**`~/.codex/config.toml`**：

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

**`~/.codex/auth.json`**：

```json
{
  "OPENAI_API_KEY": "你的令牌Key"
}
```

<div class="zzm-config-table">

| 字段 | 说明 |
| --- | --- |
| `base_url` | 必须填 `https://zzmapi.zzmsgdsg.xyz/v1`（带 /v1） |
| `wire_api` | 固定填 `"responses"` |
| `env_key` | 固定填 `"OPENAI_API_KEY"` |
| `model` | 控制台可用模型，如 `gpt-5.4` |
| `model_context_window` | 最大上下文，建议 950000 |

</div>

<!-- SCREENSHOT: config.toml 和 auth.json 编辑器截图 -->

保存后运行：

```bash
export OPENAI_API_KEY="你的令牌Key"
codex
```

发一句「只回复 OK」测试。

## 安装 VS Code 插件

1. VS Code 扩展市场搜索 `Codex`，安装 OpenAI 官方插件。
2. 插件自动读取 `~/.codex/config.toml`。
3. 先配好 CLI，再打开插件。

<!-- SCREENSHOT: VS Code Codex 插件侧边栏 -->

## 常见坑

| 现象 | 处理 |
| --- | --- |
| 连不上 | 地址有没有带 `/v1`？没带就加 |
| 模型不可用 | 去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型 |
| 报 401 | 检查 `auth.json` 里的 Key，或重建令牌 |
| 上下文爆了 | 调低 `model_context_window` |

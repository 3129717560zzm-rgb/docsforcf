---
title: CC Switch 配置
description: 用 CC Switch 统一管理 Claude Code、Codex、Gemini CLI 的 API 供应商。
---

# CC Switch 配置

CC Switch 是图形化的供应商管理器，可以给 Claude Code、Codex、Gemini CLI 统一配置 API 地址和 Key。不用手动改文件，填表就能配。

![CC Switch 主界面概览](/screenshots/cc-switch-overview.png)

## 下载安装

去 [CC Switch GitHub Releases](https://github.com/farion1231/cc-switch/releases) 下载最新版：

| 系统 | 下载 |
| --- | --- |
| Windows | `.msi` 安装包 或 `-Portable.zip` 便携版 |
| macOS | `.dmg` 安装包，或 `brew install --cask cc-switch` |
| Linux | `.deb` / `.rpm` / `.AppImage` |

![CC Switch 下载页面](/screenshots/cc-switch-downloads.png)

## 添加 ZZM API 供应商

打开 CC Switch，找到 Provider 或供应商管理。

### 配 Codex

新增 Provider，照着填：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Codex` |
| API Key | 你的令牌 Key |
| API 请求地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型名称 | 控制台可用模型，如 `gpt-5.4` |
| 上下文窗口 | `950000` |
| 压缩阈值 | `900000` |

</div>

![CC Switch Codex 配置界面](/screenshots/cc-switch-codex-provider.png)

### 配 Claude Code

新增 Provider，照着填：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Claude Code` |
| API Key | 你的令牌 Key |
| 请求地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型名称 | 控制台可用模型，如 `claude-sonnet-4-6` |
| 上下文窗口 | `950000` |

</div>

<div class="zzm-tip">
  <strong>注意</strong>：Claude Code 地址不要加 <code>/v1</code>。Codex 必须加 <code>/v1</code>。两个地址不一样。
</div>

![CC Switch Claude Code 配置界面](/screenshots/cc-switch-claude-provider.png)

### 配 Gemini CLI

新增 Provider，照着填：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| 供应商名称 | `ZZM API Gemini` |
| API Key | 你的令牌 Key |
| 请求地址 | `https://zzmapi.zzmsgdsg.xyz` |
| 模型名称 | 控制台可用模型，如 `gemini-2.5-pro` |

</div>

![CC Switch Gemini CLI 配置界面](/screenshots/cc-switch-gemini-provider.png)

## 启用 & 测试

1. 在 CC Switch 主界面，把对应的 Provider 设为启用。
2. 重启 Claude Code、Codex 或 VS Code。
3. 发一句短问题测试，比如「只回复 OK」。

![CC Switch 启用 Provider 的状态](/screenshots/cc-switch-provider-enabled.png)

不通就去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型。

## CC Switch CLI（命令行版）

除了桌面版，还有一个命令行版本，适合服务器或无 GUI 环境：[CC Switch CLI](https://github.com/SaladDay/cc-switch-cli/releases)

```bash
curl -fsSL https://github.com/SaladDay/cc-switch-cli/releases/latest/download/install.sh | bash
```

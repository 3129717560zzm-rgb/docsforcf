---
title: Claude Code 配置教程
description: Claude Code CLI 和 VS Code 插件接入 ZZM API。
---

# Claude Code 配置教程

这页只做 Claude Code。

## 安装 Claude Code

### 地址先填对

Claude Code 用这个地址：

```text
https://zzmapi.zzmsgdsg.xyz
```

这里保持根域名，不带 `/v1`。

### 方式一：CC-Switch

- [CC-Switch 配置教程](/guide/cc-switch)

### 方式二：手动安装

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

![终端 claude --version 输出](/screenshots/terminal-claude-version.png)

### 常见问题

- 地址多写了 `/v1`
- Key 复制错了
- 模型名和控制台不一致
- 终端装好了但 VS Code 还没刷新

## 配置 API Key

### 创建 Key

去 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token) 新建一个 Key。

推荐分组：`claude专用稳定`

### 改配置文件

编辑 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的令牌Key",
    "ANTHROPIC_BASE_URL": "https://zzmapi.zzmsgdsg.xyz",
    "ANTHROPIC_MODEL": "claude-sonnet-4-6",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  },
  "includeCoAuthoredBy": false
}
```

![Claude Code settings.json 配置截图](/screenshots/zzm-claude-settings-json.png)

## 开始使用

保存后执行：

```bash
claude
```

发一句 `只回复 OK`。

如果你在 VS Code 里用插件，它也会读取同一份配置。

## VS Code 插件

1. 扩展市场搜索 `Claude Code`
2. 安装后重启 VS Code
3. 插件会读取 `~/.claude/settings.json`

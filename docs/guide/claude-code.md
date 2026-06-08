---
title: Claude Code 配置教程
description: Claude Code CLI 和 VS Code 插件接入 ZZM API。
---

# Claude Code 配置教程

这页只做 Claude Code。

## 地址先填对

Claude Code 用这个地址：

```text
https://zzmapi.zzmsgdsg.xyz
```

不要加 `/v1`。

## 方式一：CC-Switch

想省事，直接看：

- [CC-Switch 配置教程](/guide/cc-switch)

## 方式二：手动配置

### 安装

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

![终端 claude --version 输出](/screenshots/terminal-claude-version.png)

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

![Claude Code settings.json 配置截图](/screenshots/claude-settings-editor.png)

### 测试

保存后执行：

```bash
claude
```

发一句 `只回复 OK`。

## VS Code 插件

1. 扩展市场搜索 `Claude Code`
2. 安装后重启 VS Code
3. 插件会读取 `~/.claude/settings.json`

![VS Code Claude Code 插件侧边栏](/screenshots/vscode-claude-sidebar.png)

## 最常见的错

- 地址多写了 `/v1`
- Key 复制错了
- 模型名手打错了
- 操练场本身就调不通

## 上一页 / 下一页

- 上一页：[CC-Switch 配置教程](/guide/cc-switch)
- 下一页：[Codex 配置教程](/guide/codex)

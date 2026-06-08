---
title: 安装与启动类问题
description: 工具装不上、命令不存在、插件不显示时怎么查。
---

# 安装与启动类问题

这类问题先别怀疑 Key，先看本地环境。

### `command not found`

先查基础环境：

```bash
node -v
npm -v
git --version
```

其中一个没有输出版本号，就先回去看 [Node.js 与 Git 环境配置](/guide/nodejs-git)。

### `codex --version` 或 `claude --version` 没反应

- 确认工具装完了
- 关闭终端后重开
- 再执行版本命令

如果是 Windows，很多时候只是旧终端没刷新环境变量。

### 装完了，但还是进不了交互界面

这时优先区分两种情况：

- 连命令都运行不了：本地安装或 PATH 问题
- 命令能启动，但进交互时报错：地址、Key、网络或配置问题

先把这两个问题分开，再往下查。

### VS Code 插件不显示

按这个顺序试：

1. 重启 VS Code
2. 执行 `Developer: Reload Window`
3. 从终端用 `code .` 打开项目
4. 先确认 CLI 本身可用

### CC-Switch 改了但工具没生效

- 确认 Provider 已启用
- 关掉工具再重开
- 有多个 Provider 时，确认启用的是当前要用的那个

### 还是打不开

先看：

- [CC-Switch 配置教程](/guide/cc-switch)
- [Claude Code 配置教程](/guide/claude-code)
- [Codex 配置教程](/guide/codex)
- [Gemini CLI 配置教程](/guide/gemini-cli)

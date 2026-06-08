---
title: Node.js 与 Git 环境配置
description: 配命令行工具前先装 Node.js 和 Git。
---

# Node.js 与 Git 环境配置

后面的 Claude Code、Codex、CC-Switch CLI 都会用到这些基础环境。

## 先装 Node.js

推荐装 LTS 版。

- 官网：<https://nodejs.org/>
- 装完后执行：

```bash
node -v
npm -v
```

能看到版本号就行。

[待补截图：终端执行 node -v 和 npm -v]

## 再装 Git

- 官网：<https://git-scm.com/downloads>
- 装完后执行：

```bash
git --version
```

## Windows 用户

- 安装 Node.js 时用默认选项即可
- Git 安装时保持默认配置即可
- 装完后重新打开终端，再执行版本命令

## macOS 用户

如果你已经有 Homebrew，也可以直接装：

```bash
brew install node
brew install git
```

## 装完后再继续

基础环境没问题，再去配具体工具：

- 图形化管理： [CC-Switch 配置教程](/guide/cc-switch)
- Claude： [Claude Code 配置教程](/guide/claude-code)
- Codex： [Codex 配置教程](/guide/codex)
- Gemini： [Gemini CLI 配置教程](/guide/gemini-cli)

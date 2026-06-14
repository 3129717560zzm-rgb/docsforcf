---
title: Node.js 与 Git 环境配置教程
description: 配命令行工具前先装 Node.js 和 Git。
---

# Node.js 与 Git 环境配置教程

后面的 Claude Code、Codex、CC-Switch CLI 都会用到这些基础环境。

## 安装方法

### Windows

- Node.js：去 <https://nodejs.org/> 下载 LTS 版安装包
- Git：去 <https://git-scm.com/downloads> 下载 Windows 安装包
- 两个安装器都按默认选项走就行

装完后重新打开终端，再继续下一步。

### macOS

- 可以直接用 Homebrew：

```bash
brew install node
brew install git
```

如果你不用 Homebrew，也可以去官网单独安装：

- Node.js：<https://nodejs.org/>
- Git：<https://git-scm.com/downloads>

### Linux

Node.js 推荐先装 LTS 版，Git 用系统包管理器即可。

Ubuntu / Debian：

```bash
sudo apt update
sudo apt install -y nodejs npm git
```

CentOS / RHEL / Fedora：

```bash
sudo dnf install -y nodejs npm git
```

Arch Linux：

```bash
sudo pacman -S nodejs npm git
```

## 验证安装

三系统统一执行：

```bash
node -v
npm -v
git --version
```

三条命令都能正常输出版本号，就说明基础环境没问题。

![终端执行 node -v、npm -v、git --version](/screenshots/zzm-terminal-versions.png)

## 装完后继续

基础环境没问题，再去配具体工具：

- 图形化管理： [CC-Switch 配置教程](/guide/cc-switch)
- Claude： [Claude Code 配置教程](/guide/claude-code)
- Codex： [Codex 配置教程](/guide/codex)

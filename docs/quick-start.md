---
title: 先跑 Key
description: 创建令牌，去操练场试模型，再配置软件。
---

# 先跑 Key

先别急着开 Codex、Claude Code 或 Cherry Studio。Key 没跑通，软件里怎么改都白搭。

## 1. 登录

打开 [ZZM API 控制台](https://zzmapi.zzmsgdsg.xyz)。有账号就登录，没有就注册。

登录后看三件事：

- 余额是否可用。
- 能不能打开创建令牌页面。
- 能不能打开操练场。

## 2. 创建令牌

进入 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，新建一个令牌。

<div class="zzm-note-line">
Key 只给自己用。不要发群里，不要放进公开截图，不要写进公开仓库。
</div>

一个软件用一个令牌。Codex 一个，Claude Code 一个，Cherry Studio 一个。以后不用哪个，就删哪个。

## 3. 操练场测试

打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)，选择模型，发一句短问题。

这里能回，账号、余额、模型权限基本就没问题。软件还报错，就查软件配置。

## 4. 地址照表填

| 软件 | 地址 |
| --- | --- |
| Codex / Codex 插件 / OpenAI SDK | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code / Claude Code 插件 | `https://zzmapi.zzmsgdsg.xyz` |
| Cherry Studio 聊天 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| gpt-image-2 生图 | `https://zzmapi.zzmsgdsg.xyz/v1` |

记住这句：Codex 加 `/v1`，Claude Code 不加 `/v1`。

## 5. 命令行测试

会用命令行就跑这个。不会用可以跳过。

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_ZZM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [
      { "role": "user", "content": "只回复 OK" }
    ]
  }'
```

能返回 JSON 就通了。

## 接着看

- VS Code 插件：[插件配置](/coding-agents/vscode-plugins)
- Codex：[Codex](/coding-agents/codex)
- Claude Code：[Claude Code](/coding-agents/claude-code)
- Cherry Studio：[Cherry Studio](/clients/cherry-studio)
- 图片生成：[gpt-image-2](/image-generation)
- 报错：[错误快速筛查](/errors)

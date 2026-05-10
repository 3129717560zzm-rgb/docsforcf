---
title: 快速开始
description: 注册账号、充值、创建令牌、操练场测试，五分钟跑通。
---

# 快速开始

软件还没配好之前，先在控制台确认三件事：**账号能用、令牌有效、模型能回**。

## 1. 注册账号

打开 [ZZM API 控制台](https://zzmapi.zzmsgdsg.xyz)，用户名注册登录。邮箱注册后续开放。

<!-- SCREENSHOT: 注册/登录页面 -->

## 2. 充值

支持两种方式：

- **支付宝**：控制台内直接充值。
- **群主转账**：联系群主转账，免手续费。加 QQ 群 **1098412601**，进群答案写"找群主充值"或填写订单号。

充完去"钱包管理"确认余额到账。

<div class="zzm-tip">
  <strong>提示</strong>：建议先小额充值测试，确认模型可用再追加。充值过程中遇到问题直接在群里问，带支付截图。
</div>

## 3. 创建令牌

进入 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)：

1. 给令牌起个名字，方便区分（比如 "Claude Code 专用"、"Codex 专用"）。
2. 选择一个分组。不知道怎么选 → 看 [令牌分组](/groups)。
3. 复制 Key 并保存好。**Key 只显示一次。**

<div class="zzm-tip">
  <strong>安全提醒</strong>：Key 只给自己用。不要发群里、不要截图发出去、不要写进公开仓库。一个工具一个 Key，不用了就删。
</div>

<!-- SCREENSHOT: 创建令牌页面，标注分组下拉框和复制按钮 -->

## 4. 操练场测试

打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)，选择你打算用的模型，发一句短问题，比如「只回复 OK」。

能正常返回，说明令牌没问题。接下来配软件。

<!-- SCREENSHOT: 操练场测试成功 -->

## 5. 填地址

不同工具地址不一样：

| 工具 | 地址 |
| --- | --- |
| Codex / Cherry Studio / OpenAI SDK | `https://zzmapi.zzmsgdsg.xyz/v1` |
| Claude Code / Gemini CLI | `https://zzmapi.zzmsgdsg.xyz` |

## 命令行快速验证

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [{ "role": "user", "content": "只回复 OK" }]
  }'
```

返回 JSON 就通了。

## 下一步

- 了解你的工具适合哪个分组 → [令牌分组](/groups)
- 配 Claude Code / Codex / Gemini → [编码工具](/coding-agents/)
- 配 Cherry Studio 聊天 → [Cherry Studio](/clients/cherry-studio)
- 配生图 → [gpt-image-2 生图](/image-generation)

---
title: 操练场测试
description: 在配置第三方软件前，先用 ZZM API 操练场确认模型可用。
---

# 操练场测试

配软件前，先打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 做一次真实调用。

## 什么时候用

- 刚创建令牌，想确认 Key 是否可用。
- 刚充值，想确认余额是否正常。
- 不确定某个模型自己能不能调用。
- Codex、Claude Code 或 Cherry Studio 报错，但不知道是软件问题还是账号问题。

## 怎么测

1. 登录控制台。
2. 打开 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，确认有可用 Key。
3. 打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)。
4. 选择你准备在软件里使用的模型，例如 `gpt-5.4`、`gpt-5.4-mini` 或 `gpt-image-2`。
5. 用一句短问题测试，不要一开始就塞长上下文。

<div class="zzm-note-line">
操练场能回，软件不能回，优先查地址、模型名、Key 字段、兼容模式。
</div>

## 常用入口

<div class="zzm-link-list">
  <a href="https://zzmapi.zzmsgdsg.xyz/console/token">创建令牌</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/playground">打开操练场</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/topup">查看余额与充值</a>
  <a href="/errors">查看错误快速筛查</a>
</div>

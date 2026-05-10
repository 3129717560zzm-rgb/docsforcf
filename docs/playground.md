---
title: 操练场
description: 在配置软件之前，先用操练场确认令牌和模型可用。
---

# 操练场

配任何软件之前，先打开操练场做一次真实调用。操练场能回，说明账号、余额、令牌、模型都没问题。

## 什么时候用

- 刚创建令牌，想确认 Key 可用
- 刚充值，想确认余额正常
- 不确定某个模型自己能不能调用
- 软件报错，想确认是账号问题还是软件配置问题

## 怎么测

1. 打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)。
2. 选择你准备在软件里用的模型。
3. 发一句短问题，比如「只回复 OK」。
4. 能回 → 令牌没问题，去查软件配置。不能回 → 查令牌、余额、模型权限。

<div class="zzm-img-placeholder">📷 操练场测试成功页面</div>

<div class="zzm-tip">
  <strong>操练场能回，软件不能回</strong>：优先查地址、模型名、Key 字段、兼容模式。
</div>

## 常用入口

- [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)
- [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)
- [查看余额](https://zzmapi.zzmsgdsg.xyz/console/topup)
- [错误速查](/errors)

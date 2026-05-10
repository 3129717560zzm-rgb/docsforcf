---
title: 通用 OpenAI 客户端
description: Lobe Chat、ChatBox、AionUI 等兼容 OpenAI 格式的客户端通用配置。
---

# 通用 OpenAI 客户端

任何支持 OpenAI Compatible 的客户端都可以接入 ZZM API。填三个东西：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| Provider / 类型 | OpenAI / OpenAI Compatible / Custom |
| API Key | 你的令牌 Key |
| Base URL | `https://zzmapi.zzmsgdsg.xyz/v1` |

</div>

## 已验证可用的客户端

- **Cherry Studio** — [详细配置](/clients/cherry-studio)
- **Lobe Chat** — 设置 → OpenAI → 填 Key 和自定义地址
- **ChatBox** — 设置 → 模型提供者 → OpenAI Compatible
- **AionUI** — 设置 → 新增 OpenAI 兼容供应商
- **AMA 问天** — 设置 → 自定义 API 地址
- **OpenCat** — 设置 → 自定义域名
- **流畅阅读** — 插件设置 → 自定义 API

## 能跑就行的配置

如果你用的客户端上面没列，只要它有"OpenAI 兼容"或"自定义 API"选项，就可以填：

```text
Base URL: https://zzmapi.zzmsgdsg.xyz/v1
Key: 你的令牌 Key
Model: 控制台可用模型 ID
```

去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 先测通，再填进客户端。

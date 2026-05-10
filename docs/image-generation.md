---
title: gpt-image-2 生图
description: 使用 ZZM API 的 gpt-image-2 模型生图，可通过生图网站或 API 调用。
---

# gpt-image-2 生图

ZZM API 支持 gpt-image-2 生图模型。有现成的生图网站，也可以写代码调用 API。

## 方式一：生图网站（推荐）

直接打开 [image.zzmsgdsg.xyz](https://image.zzmsgdsg.xyz)，在网页上输入提示词即可生图。

<!-- SCREENSHOT: image.zzmsgdsg.xyz 生图网站首页 -->

<div class="zzm-tip">
  生图网站已经内置了 API 配置，<strong>不需要额外填 Key 和地址</strong>。打开就能用。
</div>

## 方式二：Cherry Studio 生图

见 [Cherry Studio 配置 - 配生图模型](/clients/cherry-studio#配生图模型)。

## 方式三：API 调用

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/images/generations \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "一个蓝绿色 Z 字母图标，白色背景",
    "size": "1024x1024",
    "quality": "low",
    "n": 1
  }'
```

### 参数说明

| 参数 | 说明 |
| --- | --- |
| `model` | 固定 `gpt-image-2` |
| `prompt` | 图片描述，支持中文 |
| `size` | `1024x1024`、`1024x1536`、`1536x1024` 等 |
| `quality` | `low` / `standard` / `high`，质量越高耗时越长 |
| `n` | 生成张数，1-10 |

## 使用建议

- 第一次先 low quality 测试，确认能出图再提质量。
- 生图比文字慢，等几十秒正常。
- 生图失败就降 quality 或减 size，再重试。

## 常见问题

| 现象 | 处理 |
| --- | --- |
| 找不到模型 | 确认令牌有图片模型权限，手动添加 `gpt-image-2` |
| 生成很慢 | 正常，等一两分钟；仍失败就降 quality |
| 报 524 / 504 | 上游超时，降低 quality 或稍后重试 |
| 报 401 | Key 错或过期，重新创建令牌 |

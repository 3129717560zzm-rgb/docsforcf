---
title: gpt-image-2 生图
description: 在 Cherry Studio 或代码里使用 ZZM API 的 gpt-image-2。
---

# gpt-image-2 生图

大多数人直接在 Cherry Studio 里用。会写代码的再看接口。

## Cherry Studio

1. 去 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，准备图片模型可用的 Key。
2. 去 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)，确认 `gpt-image-2` 能调用。
3. Cherry Studio 新建 OpenAI-compatible 服务商。
4. API Key 填 `YOUR_IMAGE_API_KEY`。
5. API 地址填 `https://zzmapi.zzmsgdsg.xyz/v1`。
6. 添加模型 `gpt-image-2`。
7. 进绘图入口，选择 `gpt-image-2`。

## 先这样用

- 第一次测试用短提示词，例如“白色背景上的蓝色应用图标”。
- 图片比文字慢。等几十秒正常。
- 失败就降低质量或尺寸，再重试。
- 图片模型余额消耗以控制台显示为准。

## 接口示例

```bash
curl https://zzmapi.zzmsgdsg.xyz/v1/images/generations \
  -H "Authorization: Bearer YOUR_IMAGE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "一个干净的蓝绿色 Z 字母应用图标，白色背景",
    "size": "1024x1024",
    "quality": "low",
    "n": 1
  }'
```

## 常见问题

| 问题 | 处理 |
| --- | --- |
| 找不到 `gpt-image-2` | 确认 Key 有图片模型权限，并手动添加模型 |
| 生成很慢 | 正常，先等；仍失败再降低质量 |
| 报 401 | Key 错，重新创建令牌 |
| 报 403 | 账号或通道无权限，带截图进群问 |
| 报 524 / 504 | 上游超时，降低质量或稍后重试 |

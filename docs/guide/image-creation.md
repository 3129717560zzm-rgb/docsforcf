---
title: 画图创作
description: ZZMAPI 画图创作入口、默认请求地址、API Key 和模型选择说明。
---

# 画图创作

画图创作用于调用中转站里的生图模型。它不是独立账号体系，仍然使用 ZZMAPI 的令牌和余额。

## 入口

- 画图创作：<https://zzmapi.zzmsgdsg.xyz/canvas>
- 旧入口兼容：<https://zzmapi.zzmsgdsg.xyz/console/canvas>

如果页面要求填写 API Key，请去 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token) 创建或复制令牌。

## 默认请求地址

画图创作的默认请求地址应使用：

```text
https://imgapi.zzmsgdsg.xyz
```

这个域名面向生图场景。你的中转站会按模型协议转发请求，所以不要把官方域名填进去。

## API Key 从哪里拿

1. 打开 [令牌页](https://zzmapi.zzmsgdsg.xyz/console/token)
2. 新建一个用于画图的 Key
3. 选择支持生图模型的分组
4. 创建后复制 Key
5. 回到画图创作页面填入

建议画图单独建 Key，后续排查更清楚。

## 模型怎么选

如果画图创作页面支持从 `/v1/models` 获取模型，请先填好：

- 请求地址：`https://imgapi.zzmsgdsg.xyz`
- API Key：你的 ZZMAPI 令牌

然后点击获取模型或打开下拉列表。模型列表应以你的 Key 当前可用模型为准。

## 常见问题

### 为什么生成成功但图片没有显示

先检查：

- 返回内容里是否真的有图片 URL 或 base64
- 模型是否支持当前请求格式
- 请求地址是否填成 `https://imgapi.zzmsgdsg.xyz`
- Key 所在分组是否支持该生图模型

### 可以用 Google 或其他协议的生图模型吗

可以。关键是你的中转站支持模型对应协议。画图页面只需要填你的中转站地址和 Key，再按模型要求选择对应模型。

### 余额怎么扣

按 ZZMAPI 中转站的模型计费规则扣除。生成图片前建议先小尺寸、小质量测试一次。


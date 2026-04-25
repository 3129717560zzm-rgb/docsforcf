---
title: Cherry Studio 配置
description: 在 Cherry Studio 里配置 ZZM API 聊天模型和 gpt-image-2 生图模型。
---

# Cherry Studio 配置

Cherry Studio 里最容易填错的是地址。ZZM API 默认填带 `/v1` 的地址。

## 官方链接

<div class="zzm-official-links">
  <a href="https://docs.cherry-ai.com/docs/en-us/pre-basic/settings/providers">Cherry Studio 服务商设置</a>
  <a href="https://docs.cherry-ai.com/docs/en-us/pre-basic/providers/zi-ding-yi-fu-wu-shang">Cherry Studio 自定义服务商</a>
</div>

## 聊天模型

聊天模型用这个地址：

```text
https://zzmapi.zzmsgdsg.xyz/v1
```

1. 打开 Cherry Studio 设置。
2. 进入模型服务商或 Providers。
3. 新增自定义服务商。
4. 类型选 OpenAI 或 OpenAI Compatible。
5. API Key 填 `YOUR_ZZM_API_KEY`。
6. API 地址填 `https://zzmapi.zzmsgdsg.xyz/v1`。
7. 手动添加模型，例如 `gpt-5.4`、`gpt-5.4-mini`、`gpt-5.3-codex`。
8. 保存。
9. 发一句短消息测试。

<div class="zzm-note-line">
如果你的 Cherry Studio 版本明确写着“会自动拼接 `/v1`”，就填 `https://zzmapi.zzmsgdsg.xyz`。否则填 `https://zzmapi.zzmsgdsg.xyz/v1`。
</div>

## 生图模型

单独建一个服务商，名字叫 `ZZM Image`。别和聊天模型混在一起。

| 字段 | 填写 |
| --- | --- |
| 服务商类型 | OpenAI / OpenAI Compatible |
| API Key | `YOUR_IMAGE_API_KEY` |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型 | `gpt-image-2` |

保存后进绘图入口，选择 `gpt-image-2`。第一次别写复杂提示词，先确认能出图。

## 先去操练场

打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground)，选择同一个模型测试：

- 聊天：`gpt-5.4` 或 `gpt-5.4-mini`
- 代码：`gpt-5.3-codex`
- 生图：`gpt-image-2`

操练场能回，Cherry Studio 不能回，就查地址、模型名、服务商类型。

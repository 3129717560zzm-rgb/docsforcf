---
title: Cherry Studio 配置
description: Cherry Studio 聊天客户端接入 ZZM API，支持对话模型和 gpt-image-2 生图。
---

# Cherry Studio 配置

Cherry Studio 是桌面端 AI 聊天客户端。支持对话和生图，两个功能分开配置。

<!-- SCREENSHOT: Cherry Studio 主界面 -->

## 下载安装

| 系统 | 方式 |
| --- | --- |
| Windows | [官网下载](https://cherry-ai.com/download) `.exe`，或 `winget install kangfenmao.CherryStudio` |
| macOS | [官网下载](https://cherry-ai.com/download) `.dmg`，或 `brew install --cask cherry-studio` |
| Linux | `.AppImage` 或 `.deb` |

## 配对话模型

1. 打开 Cherry Studio 设置 → 模型服务商。
2. 新增一个服务商，类型选 **OpenAI / OpenAI Compatible**。
3. 照着填：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| 服务商名称 | `ZZM API` |
| API Key | 你的令牌 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型 | 手动添加，如 `gpt-5.4`、`gpt-5.4-mini` |

</div>

<!-- SCREENSHOT: Cherry Studio 新增服务商配置页面 -->

<div class="zzm-tip">
  <strong>地址注意</strong>：大部分 Cherry Studio 版本填 <code>https://zzmapi.zzmsgdsg.xyz/v1</code>。如果你的版本提示"会自动拼接 /v1"，就改为只填根域名 <code>https://zzmapi.zzmsgdsg.xyz</code>。
</div>

4. 保存，新增一个对话，选择刚添加的模型，发消息测试。

<!-- SCREENSHOT: Cherry Studio 对话成功效果 -->

## 配生图模型

生图单独建一个服务商，不和聊天混用：

<div class="zzm-config-table">

| 字段 | 填写 |
| --- | --- |
| 服务商名称 | `ZZM Image` |
| API Key | 你的令牌 Key |
| API 地址 | `https://zzmapi.zzmsgdsg.xyz/v1` |
| 模型 | 手动添加 `gpt-image-2` |

</div>

保存后进 Cherry Studio 绘图入口，选 `gpt-image-2`，第一次用短提示词测试。

::: tip 生图网站
ZZM API 还有一个独立的生图网站：[image.zzmsgdsg.xyz](https://image.zzmsgdsg.xyz)，可以直接在网页上生图，不用配客户端。
:::

## 先测再配

打开 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测同一个模型——操练场能回、Cherry Studio 不能回，查地址和模型名。

## 常见坑

| 现象 | 处理 |
| --- | --- |
| 模型列表为空 | 手动添加模型，Cherry Studio 不会自动拉取 |
| 401 | Key 填错或粘贴时多了空格 |
| 地址不通 | 确认选了 OpenAI Compatible 类型，地址带了 `/v1` |
| 生图不显示 | 检查是否单独建了 Image 服务商，模型名是否拼成 `gpt-image-2` |

---
title: CC Switch 与配置管理
description: CC Switch 改了不生效、多个 Provider 配置不一致时的排查方式。
---

# CC Switch 与配置管理

CC Switch 只负责切换 Provider。排查时先确认当前工具读到的是哪一组 Key 和请求地址。

![CC Switch 添加 Provider 入口](/screenshots/zzm-cc-switch-provider-list.png)

### CC Switch 切换后不生效

先查这几个点：

- Claude Code 看 Claude Provider
- Codex 看 Codex Provider
- 当前 Provider 是否已启用

## 常见配置问题

- 新建了 Provider，但没启用
- 启用的不是当前要测的 Provider
- Codex Provider 使用了根域名
- Claude Provider 使用了带 `/v1` 的地址

### 多个 Provider 时怎么查

1. 只保留当前要测的一个 Provider 为启用
2. 重启目标工具
3. 发一句 `只回复 OK`

### 改完没生效

先试：

- 彻底退出工具再打开
- 回到 CC Switch 再确认状态
- 去控制台测试同一个模型

### 想重新核对配置

先只核对这几项：

1. 当前启用的是哪一个 Provider
2. Provider 类型是不是对应目标工具
3. Base URL 是否按工具要求填写
4. 目标工具是否已经彻底退出后重开

确认当前 Provider 后再保存，避免影响正在使用的配置。

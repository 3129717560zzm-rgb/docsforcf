---
title: 令牌分组
description: ZZM API 九种令牌分组详解，不同工具选不同分组。
---

# 令牌分组

ZZM API 有多个令牌分组，每个分组对应不同的上游号池和倍率。**不同工具推荐用不同分组**——选对分组，同样的用量花更少额度。

创建令牌时，在分组下拉框里选择对应分组。默认分组为 **claude专用稳定**。

<div class="zzm-img-placeholder">📷 创建令牌页面，标注分组下拉框位置</div>

## 分组速查

### Claude Code 用这些

<div class="zzm-group-grid">
  <div class="zzm-group-card recommended">
    <h4>claude专用稳定 ⭐ 推荐</h4>
    <div class="meta">倍率 0.6x · 默认分组</div>
    <div class="desc">awsQ / 反重力 / kiro / windsurf 等多渠道路由，带高缓存。Claude Code 用户首选。支持 Anthropic 和 OpenAI 协议。</div>
  </div>
  <div class="zzm-group-card">
    <h4>cc-max</h4>
    <div class="meta">倍率 1.7x</div>
    <div class="desc">纯血号池，仅限 Claude Code 客户端使用。禁止外接任何第三方客户端。</div>
  </div>
</div>

### Codex 用这些

<div class="zzm-group-grid">
  <div class="zzm-group-card recommended">
    <h4>Codex混池 ⭐ 推荐</h4>
    <div class="meta">倍率 0.3x</div>
    <div class="desc">plus + pro 混合号池，plus 为主 pro 兜底，高缓存。Codex 用户首选，性价比最高。</div>
  </div>
  <div class="zzm-group-card">
    <h4>gpt福利分组</h4>
    <div class="meta">倍率 0.1x</div>
    <div class="desc">日抛甚至小时抛号池。极致低价，但可能不稳定。不稳定时系统会自动补号。适合轻度使用。</div>
  </div>
  <div class="zzm-group-card">
    <h4>gpt-plus</h4>
    <div class="meta">倍率 0.2x</div>
    <div class="desc">满 plus 号池，高缓存。性价比之选。</div>
  </div>
  <div class="zzm-group-card">
    <h4>gpt-pro</h4>
    <div class="meta">倍率 0.55x</div>
    <div class="desc">满 pro 号池，高缓存。追求速度和效率用这个。</div>
  </div>
</div>

### Gemini CLI 用这个

<div class="zzm-group-grid">
  <div class="zzm-group-card recommended">
    <h4>gemin-cli ⭐ 推荐</h4>
    <div class="meta">倍率 0.8x</div>
    <div class="desc">Google pro 号池，稳定性尚可。支持 Gemini 原生协议和 OpenAI 兼容协议。</div>
  </div>
</div>

### Grok 用这个

<div class="zzm-group-grid">
  <div class="zzm-group-card">
    <h4>grok逆向</h4>
    <div class="meta">倍率 0.5x</div>
    <div class="desc">逆向渠道，不支持外部工具调用。仅用于对话。</div>
  </div>
</div>

### 通用 / 其他

<div class="zzm-group-grid">
  <div class="zzm-group-card">
    <h4>default</h4>
    <div class="meta">倍率 1x</div>
    <div class="desc">用户专用。Cherry Studio、Lobe Chat 等聊天客户端可选用。</div>
  </div>
</div>

## 怎么选

| 你要用什么 | 选这个分组 |
| --- | --- |
| Claude Code | **claude专用稳定**（默认） |
| Codex | **Codex混池** |
| Gemini CLI | **gemin-cli** |
| Cherry Studio 聊天 | default 或 Codex混池 |
| 生图 gpt-image-2 | default |
| 预算极低、能接受不稳定 | gpt福利分组（0.1x） |

不确定就去操练场测一下，能回就行。

## 模型能用在哪些分组

分组和模型有对应关系，不是所有模型都能在所有分组用。具体以控制台 [模型与定价](https://zzmapi.zzmsgdsg.xyz/pricing) 页面实时显示为准。

<div class="zzm-img-placeholder">📷 控制台 pricing 页面，展示模型-分组对应关系</div>

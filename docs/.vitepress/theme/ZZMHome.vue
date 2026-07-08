<script setup lang="ts">
const quickPaths = [
  {
    label: '新用户上手',
    title: '注册、充值、创建 Key',
    text: '按顺序完成账号、余额和令牌配置，先在控制台测试通过，再接入本地工具。',
    href: '/guide/register'
  },
  {
    label: '工具接入',
    title: 'Codex、Claude Code、CC Switch',
    text: '不同工具的 Base URL 不一样，文档里按协议拆开写，避免把 /v1 填错。',
    href: '/guide/'
  },
  {
    label: 'API 调用',
    title: 'OpenAI / Anthropic 兼容接口',
    text: '聊天、流式输出、模型列表、图片生成都按中转站实际路径整理。',
    href: '/api/'
  }
]

const services = [
  {
    title: '账号商城',
    text: '展示 ChatGPT、Claude 等账号商品。站内看商品，购买和交付跳转链动小铺完成。',
    href: '/guide/account-store',
    meta: '公开可看'
  },
  {
    title: '画图创作',
    text: '内置生图站，默认面向 imgapi.zzmsgdsg.xyz，用中转站 Key 获取可用模型。',
    href: '/guide/image-creation',
    meta: '登录使用'
  },
  {
    title: '拉新有礼',
    text: '好友充值后产生奖励，满足规则后可领取到余额。同 IP 等异常情况会进入人工确认。',
    href: '/guide/invite',
    meta: '余额奖励'
  },
  {
    title: '工单 / 发票',
    text: '充值后可提交发票或售后工单。普票、专票和电子发票交付流程单独说明。',
    href: '/guide/tickets-invoice',
    meta: '服务处理'
  }
]

const routes = [
  ['控制台首页', 'https://zzmapi.zzmsgdsg.xyz'],
  ['充值页面', 'https://zzmapi.zzmsgdsg.xyz/console/topup'],
  ['令牌页面', 'https://zzmapi.zzmsgdsg.xyz/console/token'],
  ['模型广场', 'https://zzmapi.zzmsgdsg.xyz/pricing'],
  ['账号商城', 'https://zzmapi.zzmsgdsg.xyz/account-store'],
  ['画图创作', 'https://zzmapi.zzmsgdsg.xyz/canvas']
]
</script>

<template>
  <main class="zzm-home">
    <section class="zzm-hero">
      <div class="zzm-hero__copy">
        <div class="zzm-eyebrow">
          <span class="zzm-eyebrow__dot"></span>
          ZZMAPI 使用中心
        </div>
        <h1>
          <span>API、画图、账号，</span>
          <span>一站配好。</span>
        </h1>
        <p>
          从注册、充值、拿 Key，到 Codex、Claude Code、OpenAI SDK、画图创作和账号商城，这里只保留你实际会用到的步骤。
        </p>
        <div class="zzm-actions">
          <a class="zzm-btn zzm-btn--primary" href="/guide/register">开始配置</a>
          <a class="zzm-btn zzm-btn--secondary" href="/guide/recharge">充值说明</a>
        </div>
      </div>

      <div class="zzm-hero-panel" aria-label="ZZMAPI quick facts">
        <div class="zzm-panel-row">
          <span>OpenAI 兼容</span>
          <code>https://zzmapi.zzmsgdsg.xyz/v1</code>
        </div>
        <div class="zzm-panel-row">
          <span>Claude Code</span>
          <code>https://zzmapi.zzmsgdsg.xyz</code>
        </div>
        <div class="zzm-panel-row">
          <span>生图中转</span>
          <code>https://imgapi.zzmsgdsg.xyz</code>
        </div>
        <div class="zzm-panel-note">
          先在控制台测试模型，再复制到本地工具。遇到报错时，优先核对 Key、分组、余额和 Base URL。
        </div>
      </div>
    </section>

    <section class="zzm-section">
      <div class="zzm-section-head">
        <p>上手路径</p>
        <h2>按用户真实顺序来，不绕路。</h2>
      </div>
      <div class="zzm-path-grid">
        <a v-for="item in quickPaths" :key="item.title" class="zzm-card" :href="item.href">
          <span class="zzm-card__label">{{ item.label }}</span>
          <strong>{{ item.title }}</strong>
          <span>{{ item.text }}</span>
        </a>
      </div>
    </section>

    <section class="zzm-section">
      <div class="zzm-section-head">
        <p>站内服务</p>
        <h2>新版 NewAPI 里已经接入的功能。</h2>
      </div>
      <div class="zzm-service-grid">
        <a v-for="item in services" :key="item.title" class="zzm-service" :href="item.href">
          <span>{{ item.meta }}</span>
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
        </a>
      </div>
    </section>

    <section class="zzm-section zzm-routes">
      <div>
        <p class="zzm-routes__kicker">常用入口</p>
        <h2>找不到页面时，先从这里进。</h2>
      </div>
      <div class="zzm-routes__list">
        <a v-for="[label, href] in routes" :key="label" :href="href" target="_blank" rel="noreferrer">
          <span>{{ label }}</span>
          <code>{{ href.replace('https://zzmapi.zzmsgdsg.xyz', '') || '/' }}</code>
        </a>
      </div>
    </section>
  </main>
</template>

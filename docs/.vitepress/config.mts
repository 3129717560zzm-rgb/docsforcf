import { defineConfig } from 'vitepress'

const apiOrigin = 'https://zzmapi.zzmsgdsg.xyz'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ZZM API 文档',
  description: 'ZZM API — 统一模型网关，支持 Claude Code、Codex、Gemini CLI、Cherry Studio 等工具接入',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#00d4ff' }],
    ['meta', { property: 'og:title', content: 'ZZM API 使用文档' }],
    ['meta', { property: 'og:description', content: 'OpenAI / Anthropic / Gemini 兼容 API 网关配置指南' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ZZM API',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '令牌分组', link: '/groups' },
      { text: '编码工具', link: '/coding-agents/' },
      { text: '控制台', link: apiOrigin }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/quick-start' },
          { text: '令牌分组', link: '/groups' },
          { text: '操练场', link: '/playground' }
        ]
      },
      {
        text: '编码工具',
        items: [
          { text: '总览与地址速查', link: '/coding-agents/' },
          { text: 'CC Switch 配置', link: '/coding-agents/cc-switch' },
          { text: 'Claude Code', link: '/coding-agents/claude-code' },
          { text: 'Codex', link: '/coding-agents/codex' },
          { text: 'Gemini CLI', link: '/coding-agents/gemini-cli' },
          { text: 'VS Code 插件', link: '/coding-agents/vscode-plugins' }
        ]
      },
      {
        text: '聊天与生图',
        items: [
          { text: 'Cherry Studio', link: '/clients/cherry-studio' },
          { text: '通用 OpenAI 客户端', link: '/clients/' },
          { text: 'gpt-image-2 生图', link: '/image-generation' }
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '接口规范', link: '/api/' },
          { text: 'SDK 示例', link: '/api/sdk' }
        ]
      },
      {
        text: '支持',
        items: [
          { text: '错误速查', link: '/errors' },
          { text: 'FAQ', link: '/faq' },
          { text: '账号与社群', link: '/account/' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '切换深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    footer: {
      message: '模型、分组倍率、余额以控制台实时显示为准。',
      copyright: 'Copyright © 2026 ZZM API'
    }
  }
})

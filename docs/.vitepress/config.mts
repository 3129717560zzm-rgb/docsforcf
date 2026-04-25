import { defineConfig } from 'vitepress'

const apiOrigin = 'https://zzmapi.zzmsgdsg.xyz'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ZZM API 文档',
  description: 'ZZM API 地址、令牌、Codex、Claude Code、Cherry Studio 和生图配置',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#00d4ff' }],
    ['meta', { property: 'og:title', content: 'ZZM API 使用文档' }],
    ['meta', { property: 'og:description', content: 'OpenAI-compatible API relay usage guide for ZZM API.' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ZZM API',
    nav: [
      { text: '首页', link: '/' },
      { text: '先跑 Key', link: '/quick-start' },
      { text: '插件', link: '/coding-agents/vscode-plugins' },
      { text: 'Codex', link: '/coding-agents/codex' },
      { text: 'Claude Code', link: '/coding-agents/claude-code' },
      { text: '控制台', link: apiOrigin }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '首页', link: '/' },
          { text: '先跑 Key', link: '/quick-start' },
          { text: '操练场', link: '/playground' },
          { text: '模型与计费', link: '/models-billing' }
        ]
      },
      {
        text: '编码智能体',
        items: [
          { text: '先看这张表', link: '/coding-agents/' },
          { text: 'VS Code 插件', link: '/coding-agents/vscode-plugins' },
          { text: 'CC Switch 配置器', link: '/coding-agents/cc-switch' },
          { text: 'Codex CLI / 插件', link: '/coding-agents/codex' },
          { text: 'Claude Code CLI / 插件', link: '/coding-agents/claude-code' }
        ]
      },
      {
        text: '聊天与生图',
        items: [
          { text: '地址速查', link: '/clients/' },
          { text: 'Cherry Studio', link: '/clients/cherry-studio' },
          { text: 'gpt-image-2 生图', link: '/image-generation' }
        ]
      },
      {
        text: '开发者补充',
        items: [
          { text: 'API 请求规范', link: '/api/' },
          { text: 'SDK 示例', link: '/api/sdk' }
        ]
      },
      {
        text: '支持',
        items: [
          { text: '账号与社群', link: '/account/' },
          { text: '错误快速筛查', link: '/errors' },
          { text: 'FAQ', link: '/faq' }
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
    editLink: {
      pattern: '',
      text: ''
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
      message: '示例只写占位 Key。模型、倍率、余额和可用状态看控制台。',
      copyright: 'Copyright © 2026 ZZM API'
    }
  }
})

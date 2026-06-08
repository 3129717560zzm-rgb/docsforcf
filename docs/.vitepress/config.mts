import { defineConfig } from 'vitepress'

const apiOrigin = 'https://zzmapi.zzmsgdsg.xyz'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ZZM API 文档',
  description: 'ZZM API 教程文档，覆盖注册、Key、工具接入、常见问题与 API 调用说明。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#1677ff' }],
    ['meta', { property: 'og:title', content: 'ZZM API 文档' }],
    ['meta', { property: 'og:description', content: 'ZZM API 配置指南与 API 文档' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ZZM API',
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/quick-start' },
      { text: '疑难解答', link: '/errors' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '接口说明', link: '/api/' },
            { text: 'SDK 示例', link: '/api/sdk' }
          ]
        }
      ],
      '/': [
        {
          text: '入门',
          items: [
            { text: '注册与充值', link: '/quick-start' },
            { text: '请求地址 / Key', link: '/account/' },
            { text: '模型与分组', link: '/groups' },
            { text: '操练场测试', link: '/playground' }
          ]
        },
        {
          text: '工具配置',
          items: [
            { text: '总览与地址速查', link: '/coding-agents/' },
            { text: 'CC-Switch 配置教程', link: '/coding-agents/cc-switch' },
            { text: 'Claude Code 配置教程', link: '/coding-agents/claude-code' },
            { text: 'Codex 配置教程', link: '/coding-agents/codex' },
            { text: 'Gemini CLI 配置教程', link: '/coding-agents/gemini-cli' },
            { text: 'VS Code 插件配置', link: '/coding-agents/vscode-plugins' },
            { text: 'Cherry Studio 配置教程', link: '/clients/cherry-studio' }
          ]
        },
        {
          text: '疑难解答',
          items: [
            { text: '总览', link: '/errors' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ]
    },
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
        timeStyle: 'short'
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
      message: `控制台入口：${apiOrigin}`,
      copyright: 'Copyright © 2026 ZZM API'
    }
  }
})

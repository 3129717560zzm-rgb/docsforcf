import { defineConfig } from 'vitepress'

const apiOrigin = 'https://zzmapi.zzmsgdsg.xyz'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ZZM API 文档',
  description: 'ZZM API 教程文档，覆盖注册、Key、工具接入、常见问题与 API 调用说明。',
  cleanUrls: false,
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
      { text: '教程', link: '/guide/register' },
      { text: '疑难解答', link: '/guide/troubleshooting/' },
      { text: 'API', link: apiOrigin }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/3129717560zzm-rgb/docsforcf' }
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
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '注册账号', link: '/guide/register' },
            { text: '请求地址 / Key', link: '/guide/api-key' },
            { text: '充值 / 续费', link: '/guide/recharge' },
            { text: '售后群', link: '/guide/after-sales' },
            { text: '商务合作', link: '/guide/business' }
          ]
        },
        {
          text: '工具配置',
          items: [
            { text: 'Node.js 与 Git 环境配置', link: '/guide/nodejs-git' },
            { text: 'CC-Switch 配置教程', link: '/guide/cc-switch' },
            { text: 'Claude Code 配置教程', link: '/guide/claude-code' },
            { text: 'Codex 配置教程', link: '/guide/codex' },
            { text: 'Gemini CLI 配置教程', link: '/guide/gemini-cli' }
          ]
        },
        {
          text: '疑难解答',
          collapsed: false,
          items: [
            { text: '总览', link: '/guide/troubleshooting/' },
            { text: '安装与启动类问题', link: '/guide/troubleshooting/install' },
            { text: '认证与 API Key 类问题', link: '/guide/troubleshooting/auth' },
            { text: '网络与连接类问题', link: '/guide/troubleshooting/network' },
            { text: '请求错误类问题', link: '/guide/troubleshooting/request-error' },
            { text: '权限与分组类问题', link: '/guide/troubleshooting/permission' },
            { text: '缓存与计费类问题', link: '/guide/troubleshooting/cache-billing' },
            { text: 'claude-mem 插件问题', link: '/guide/troubleshooting/claude-mem' },
            { text: '外接与兼容类问题', link: '/guide/troubleshooting/integration' },
            { text: 'Codex CLI 专项问题', link: '/guide/troubleshooting/codex' },
            { text: 'OpenClaw 专项问题', link: '/guide/troubleshooting/openclaw' },
            { text: 'CC Switch 与配置管理', link: '/guide/troubleshooting/cc-switch' },
            { text: '进阶配置与效率优化', link: '/guide/troubleshooting/advanced' }
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
      message: '模型、分组、余额以控制台实时显示为准。',
      copyright: 'Copyright © 2026 ZZM API'
    }
  }
})
